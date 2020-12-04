import dayjs from "dayjs";
import {createLabelledLogger, isValidConfigStructure, readJson, returnDuplicateStrings} from "../utils.js";
import MalojaScrobbler from "./MalojaScrobbler.js";

export default class ScrobbleClients {

    clients = [];
    logger;

    clientTypes = ['maloja'];

    constructor() {
        this.logger = createLabelledLogger('name', 'Scrobblers');
    }

    buildClientsFromConfig = async (configDir = undefined) => {
        let configs = [];

        let configFile;
        try {
            configFile = await readJson(`${configDir}/config.json`, {throwOnNotFound: false});
        } catch (e) {
            throw new Error('config.json could not be parsed');
        }
        if (configFile !== undefined) {
            const {clients: mainConfigClientConfigs = []} = configFile;
            if (!mainConfigClientConfigs.every(x => x !== null && typeof x === 'object')) {
                throw new Error('All clients from config.json must be objects');
            }
            for (const c of mainConfigClientConfigs) {
                const {name = 'unnamed'} = c;
                configs.push({...c, name, source: 'config.json'});
            }
        }

        for (const clientType of this.clientTypes) {
            switch (clientType) {
                case 'maloja':
                    // env builder for single user mode
                    const url = process.env.MALOJA_URL;
                    const apiKey = process.env.MALOJA_API_KEY;
                    if (url !== undefined || apiKey !== undefined) {
                        configs.push({
                            type: 'maloja',
                            name: 'unnamed',
                            source: 'ENV',
                            mode: 'single',
                            data: {
                                url,
                                apiKey
                            }
                        })
                    }
                    break;
                default:
                    break;
            }
            let rawClientConfigs;
            try {
                rawClientConfigs = await readJson(`${configDir}/${clientType}.json`, {throwOnNotFound: false});
            } catch (e) {
                throw new Error(`${clientType}.json config file could not be parsed`);
            }
            if (rawClientConfigs !== undefined) {
                let clientConfigs = [];
                if (Array.isArray(rawClientConfigs)) {
                    clientConfigs = rawClientConfigs;
                } else if (rawClientConfigs === null || typeof rawClientConfigs === 'object') {
                    // backwards compatibility, assuming its single-user mode
                    if (rawClientConfigs.data === undefined) {
                        clientConfigs = [{data: rawClientConfigs, mode: 'single', name: 'unnamed'}];
                    } else {
                        clientConfigs = [rawClientConfigs];
                    }
                } else {
                    throw new Error(`All top level data from ${clientType}.json must be an object or array of objects`);
                }
                for (const m of clientConfigs) {
                    if (m === null || typeof m !== 'object') {
                        throw new Error(`All top-level data from ${clientType}.json must be an object or array of objects`);
                    }
                    m.source = `${clientType}.json`;
                    m.type = clientType;
                    configs.push(m);
                }
            }
        }

        // we have all possible client configurations so we'll check they are minimally valid
        const configErrors = configs.reduce((acc, c) => {
            const isValid = isValidConfigStructure(c, {type: true, data: true});
            if (isValid !== true) {
                const msg = `Client config from ${c.source} with name [${c.name || 'unnamed'}] of type [${c.type || 'unknown'}] has errors: ${isValid.join(' | ')}`;
                return acc.concat(msg);
            }
            return acc;
        }, []);
        if (configErrors.length > 0) {
            for (const m of configErrors) {
                this.logger.error(m);
            }
            throw new Error('Could not build clients due to above errors');
        }

        // all client configs are minimally valid
        // now check that names are unique
        const nameGroupedConfigs = configs.reduce((acc, curr) => {
            const {name = 'unnamed'} = curr;
            const {[name]: n = []} = acc;
            return {...acc, [name]: [...n, curr]};
        }, {});
        let nameErrors = false;
        for (const [name, configs] of Object.entries(nameGroupedConfigs)) {
            if (configs.length > 1) {
                const sources = configs.map(c => `Config object from ${c.source} of type [${c.type}]`);
                this.logger.error(`Client config naming conflicts -- the following configs have the same name "${name}": 
${sources.join('\n')}`);
                nameErrors = true;
                if (name === 'unnamed') {
                    this.logger.info('HINT: "unnamed" configs occur when using ENVs, if a multi-user mode config does not have a "name" property, or if a config is built in single-user mode');
                }
            }
        }
        if (nameErrors) {
            throw new Error('Could not build clients due to naming conflicts');
        }

        // finally! all configs are valid, structurally, and can now be passed to addClient
        // just need to re-map unnnamed to default
        const finalConfigs = configs.map(({name = 'unnamed', ...x}) => ({
            ...x,
            name: name === 'unnamed' ? 'default' : name
        }));
        for (const c of finalConfigs) {
            await this.addClient(c);
        }
    }

    addClient = async (clientConfig) => {
        const isValidConfig = isValidConfigStructure(clientConfig, {name: true, data: true, type: true});
        if (isValidConfig !== true) {
            throw new Error(`Config object from ${clientConfig.source || 'unknown'} with name [${clientConfig.name || 'unnamed'}] of type [${clientConfig.type || 'unknown'}] has errors: ${isValidConfig.join(' | ')}`)
        }
        const {type, name, data = {}} = clientConfig;
        switch (type) {
            case 'maloja':
                const {url, apiKey} = data;
                this.logger.debug('Attempting Maloja initialization...');
                if (apiKey === undefined) {
                    this.logger.warn(`[Config ${name}] Maloja 'apiKey' not found in config! Client will most likely fail when trying to scrobble`);
                }
                if (url === undefined) {
                    throw new Error(`[Config ${name}] Missing 'url' for Maloja config`);
                }
                const mj = new MalojaScrobbler(name, data);
                const testSuccess = await mj.testConnection();
                if (testSuccess === false) {
                    throw new Error('Maloja client not initialized due to failure during connection testing');
                } else {
                    this.logger.info('Maloja client initialized');
                    this.clients.push(mj)
                }
                break;
            default:
                break;
        }
    }

    scrobble = async (data, options = {}) => {
        const playObjs = Array.isArray(data) ? data : [data];
        const {
            forceRefresh = false,
            checkTime = dayjs(),
        } = options;

        const tracksScrobbled = [];

        if (this.clients.length === 0) {
            this.logger.warn('Cannot scrobble! No clients are configured.');
        }

        for (const client of this.clients) {
            try {
                if (forceRefresh || client.scrobblesLastCheckedAt().unix() < checkTime.unix()) {
                    await client.refreshScrobbles();
                }
                for (const playObj of playObjs) {
                    const {
                        meta: {
                            newFromSource = false,
                        } = {}
                    } = playObj;
                    if (client.timeFrameIsValid(playObj, newFromSource) && !client.alreadyScrobbled(playObj, newFromSource)) {
                        tracksScrobbled.push(playObj);
                        await client.scrobble(playObj);
                    }
                }
            } catch (e) {
                this.logger.error(`Encountered error while in scrobble loop for ${client.name}`);
                this.logger.error(e);
            }
        }
        return tracksScrobbled;
    }
}
