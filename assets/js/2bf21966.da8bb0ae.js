"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[169],{7079:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=a(4848),r=a(8453);const o={sidebar_position:3,title:"Kitchen Sink"},i="Example Config using all Possible Features",s={id:"configuration/kitchensink",title:"Kitchen Sink",description:"Scenario:",source:"@site/docs/configuration/kitchensink.md",sourceDirName:"configuration",slug:"/configuration/kitchensink",permalink:"/multi-scrobbler/docs/configuration/kitchensink",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configuration/kitchensink.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Kitchen Sink"},sidebar:"tutorialSidebar",previous:{title:"Plex/Tautulli",permalink:"/multi-scrobbler/docs/configuration/plex"},next:{title:"Scrobble Modification",permalink:"/multi-scrobbler/docs/configuration/transforms"}},l={},c=[{value:"All-in-one Config",id:"all-in-one-config",level:3},{value:"Separate JSON files",id:"separate-json-files",level:3}];function p(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"example-config-using-all-possible-features",children:"Example Config using all Possible Features"}),"\n",(0,t.jsx)(n.p,{children:"Scenario:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You want to scrobble plays for yourself (Foxx), Fred, and Mary"}),"\n",(0,t.jsx)(n.li,{children:"Each person has their own Maloja server"}),"\n",(0,t.jsx)(n.li,{children:"Each person has their own Spotify account"}),"\n",(0,t.jsx)(n.li,{children:"You have your own Airsonic (subsonic) server you to scrobble from"}),"\n",(0,t.jsx)(n.li,{children:"You have your own Youtube Music account you want to scrobble from"}),"\n",(0,t.jsx)(n.li,{children:"Mary has her own Last.fm account she also wants to scrobble to"}),"\n",(0,t.jsx)(n.li,{children:"Fred has his own Spotify application and provides you with just his access and refresh token because he doesn't trust you (wtf Fred)"}),"\n",(0,t.jsx)(n.li,{children:"Fred has a Plex server and wants to scrobble everything he plays"}),"\n",(0,t.jsxs)(n.li,{children:["Mary uses Fred's Plex server but only wants to scrobble her plays from the ",(0,t.jsx)(n.code,{children:"podcast"})," library"]}),"\n",(0,t.jsxs)(n.li,{children:["The three of you have a shared library on Plex called ",(0,t.jsx)(n.code,{children:"party"})," that you only play when you are hanging out. You want plays from that library to be scrobbled to everyone's servers."]}),"\n",(0,t.jsx)(n.li,{children:"Fred also has his own Jellyfin server and wants to scrobble everything he plays"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"all-in-one-config",children:"All-in-one Config"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json5",metastring:'title="CONFIG_DIR/config.json"',children:'{\n  "sourceDefaults": {\n    "maxPollRetries": 0,          // optional, default # of automatic polling restarts on error. can be overridden by property in individual config\n    "maxRequestRetries": 1,       // optional, default # of http request retries a source can make before error is thrown. can be overridden by property in individual config\n    "retryMultiplier": 1.5,       // optional, default retry delay multiplier (retry attempt * multiplier = # of seconds to wait before retrying). can be overridden by property in individual config\n  },\n  "clientDefaults": {\n    "maxRequestRetries": 1,       // optional, default # of http request retries a client can make before error is thrown. can be overridden by property in individual config\n    "retryMultiplier": 1.5,       // optional, default retry delay multiplier (retry attempt * multiplier = # of seconds to wait before retrying). can be overridden by property in individual config\n  },\n  "sources": [\n    {\n      "type": "spotify",\n      "name": "foxxSpot",\n      "clients": ["foxxMaloja"],\n      "data": {\n        "clientId": "foxxSpotifyAppId", \n        "clientSecret": "foxxSpotifyAppSecret",\n      },\n      "options": {\n        "maxRequestRetries": 2,  // override default max retries because spotify can...spotty\n      }\n    },\n    {\n      "type": "spotify",\n      "name": "marySpot",\n      "clients": ["maryMaloja"],\n      "data": {\n        "clientId": "foxxSpotifyAppId", // only need one application, it can be used by all users of this multi-scrobbler instance \n        "clientSecret": "foxxSpotifyAppSecret",\n      }\n    },\n    {\n      "type": "spotify",\n      "name": "fredSpot",\n      "clients": ["fredMaloja"],\n      "data": {\n        "accessToken": "fredsToken",\n        "refreshToken": "fredsRefreshToken",\n        "interval": 120, // he also wants a slower check interval because his application already has heavy api usage\n      }\n    },\n    {\n      "type": "plex",\n      "name": "fredPlex",\n      "clients": ["fredMaloja"],\n      "data": {\n        "user": ["fred@email.com"]\n      }\n    },\n    {\n      "type": "plex",\n      "name": "maryPlex",\n      "clients": ["maryMaloja"],\n      "data": {\n        "user": ["mary@email.com"], // still need to specify mary as user so not all users who play from \'podcasts\' get scrobbled\n        "libraries": ["podcasts"]\n      }\n    },\n    {\n      "type": "plex",\n      "name": "partyPlex",\n      // omitting clients (or making it empty) will make this Source scrobble to all Clients\n      "data": {\n        "libraries": ["party"],\n      }\n    },\n    {\n      "type": "jellyfin",\n      "name": "FredJelly",\n      // omitting clients (or making it empty) will make this Source scrobble to all Clients\n      "data": {\n        "user": ["fred@email.com"]\n      }\n    },\n    {\n      "type": "subsonic",\n      "name": "foxxAirsonic",\n      "clients": ["foxxMaloja"],\n      "data": {\n        "user": "foxx",\n        "password": "foxxPassword",\n        "url": "https://airsonic.foxx.example"\n      }\n    },\n    {\n      "type": "ytmusic",\n      "name": "foxxYoutube",\n      "clients": ["foxxMaloja"],\n      "data": {\n        "cookie": "__Secure-3PAPISID=3AxsXpy0MKGu75Qb/AkISXGqOnSDn1jEKn; DEVICE_INFO=ChxOekU0Tmpjek5EWTBPRGd3TlRBMk16QXpNdz09EJbS8Z0GGJbS8Z0G; ...",\n        "authUser": 1\n      }\n    },\n  ],\n  "clients": [\n    {\n      "type": "maloja",\n      "name": "foxxMaloja",\n      "data": {\n        "url": "https://maloja.foxx.example",\n        "apiKey": "foxxApiKey"\n      }\n    },\n    {\n      "type": "maloja",\n      "name": "fredMaloja",\n      "data": {\n        "url": "https://maloja.fred.example",\n        "apiKey": "fredApiKey"\n      }\n    },\n    {\n      "type": "maloja",\n      "name": "maryMaloja",\n      "data": {\n        "url": "https://maloja.mary.example",\n        "apiKey": "maryApiKey"\n      }\n    },\n    {\n      "type": "lastfm",\n      "name": "maryLFM",\n      "data": {\n        "apiKey": "maryApiKey",\n        "secret": "marySecret",\n        "redirectUri": "http://localhost:9078/lastfm/callback"\n      }\n    }\n  ]\n}\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"separate-json-files",children:"Separate JSON files"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json5",metastring:'title="CONFIG_DIR/spotify.json"',children:'[\n  {\n    // may omit \'type\' property since app knows this is file is for spotify configs\n    "name": "foxxSpot",\n    "clients": ["foxxMaloja"],\n    "data": {\n      "clientId": "foxxSpotifyAppId",\n      "clientSecret": "foxxSpotifyAppSecret"\n    }\n  },\n  {\n    "name": "marySpot",\n    "clients": ["maryMaloja"],\n    "data": {\n      "clientId": "foxxSpotifyAppId",\n      "clientSecret": "foxxSpotifyAppSecret"\n    }\n  },\n  {\n    "name": "fredSpot",\n    "clients": ["fredMaloja"],\n    "data": {\n      "accessToken": "fredsToken",\n      "refreshToken": "fredsRefreshToken",\n      "interval": 120\n    }\n  },\n]\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json5",metastring:'title="CONFIG_DIR/plex.json"',children:'[\n  {\n    "name": "fredPlex",\n    "clients": ["fredMaloja"],\n    "data": {\n      "user": ["fred@email.com"]\n    }\n  },\n  {\n    "name": "maryPlex",\n    "clients": ["maryMaloja"],\n    "data": {\n      "user": ["mary@email.com"],\n      "libraries": ["podcasts"]\n    }\n  },\n  {\n    "name": "partyPlex",\n    "data": {\n      "libraries": ["party"]\n    }\n  }\n]\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json5",metastring:'title="CONFIG_DIR/jellyfin.json"',children:'[\n  {\n    "name": "FredJelly",\n    "data": {\n      "user": ["fred@email.com"]\n    }\n  }\n]\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json5",metastring:'title="CONFIG_DIR/ytmusic.json"',children:'[\n  {\n    "type": "ytmusic",\n    "name": "foxxYoutube",\n    "clients": ["foxxMaloja"],\n    "data": {\n      "cookie": "__Secure-3PAPISID=3AxsXpy0MKGu75Qb/AkISXGqOnSDn1jEKn; DEVICE_INFO=ChxOekU0Tmpjek5EWTBPRGd3TlRBMk16QXpNdz09EJbS8Z0GGJbS8Z0G; ...",\n      "authUser": 1\n    }\n  }\n]\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json5",metastring:'title="CONFIG_DIR/maloja.json"',children:'[\n  {\n    "name": "foxxMaloja",\n    "data": {\n      "url": "https://maloja.foxx.example",\n      "apiKey": "foxxApiKey"\n    }\n  },\n  {\n    "name": "fredMaloja",\n    "data": {\n      "url": "https://maloja.fred.example",\n      "apiKey": "fredApiKey"\n    }\n  },\n  {\n    "name": "maryMaloja",\n    "data": {\n      "url": "https://maloja.mary.example",\n      "apiKey": "maryApiKey"\n    }\n  }\n]\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json5",metastring:'title="CONFIG_DIR/lastfm.json"',children:'[\n  {\n    "name": "maryLFM",\n    "data": {\n      "apiKey": "maryApiKey",\n      "secret": "marySecret",\n      "redirectUri": "http://localhost:9078/lastfm/callback"\n    }\n  }\n]\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>s});var t=a(6540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);