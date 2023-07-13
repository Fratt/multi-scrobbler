"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[976],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4791:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(7462),r=(t(7294),t(4137));const o={sidebar_position:3,title:"Kitchen Sink"},l="Example Config using all Possible Features",i={unversionedId:"configuration/kitchensink",id:"configuration/kitchensink",title:"Kitchen Sink",description:"Scenario:",source:"@site/docs/configuration/kitchensink.md",sourceDirName:"configuration",slug:"/configuration/kitchensink",permalink:"/multi-scrobbler/docs/configuration/kitchensink",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configuration/kitchensink.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Kitchen Sink"},sidebar:"tutorialSidebar",previous:{title:"Plex/Tautulli",permalink:"/multi-scrobbler/docs/configuration/plex"},next:{title:"FAQ",permalink:"/multi-scrobbler/docs/FAQ"}},s={},p=[{value:"All-in-one Config",id:"all-in-one-config",level:3},{value:"Separate JSON files",id:"separate-json-files",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"example-config-using-all-possible-features"},"Example Config using all Possible Features"),(0,r.kt)("p",null,"Scenario: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to scrobble plays for yourself (Foxx), Fred, and Mary"),(0,r.kt)("li",{parentName:"ul"},"Each person has their own Maloja server"),(0,r.kt)("li",{parentName:"ul"},"Each person has their own Spotify account"),(0,r.kt)("li",{parentName:"ul"},"You have your own Airsonic (subsonic) server you to scrobble from"),(0,r.kt)("li",{parentName:"ul"},"You have your own Youtube Music account you want to scrobble from"),(0,r.kt)("li",{parentName:"ul"},"Mary has her own Last.fm account she also wants to scrobble to"),(0,r.kt)("li",{parentName:"ul"},"Fred has his own Spotify application and provides you with just his access and refresh token because he doesn't trust you (wtf Fred)"),(0,r.kt)("li",{parentName:"ul"},"Fred has a Plex server and wants to scrobble everything he plays"),(0,r.kt)("li",{parentName:"ul"},"Mary uses Fred's Plex server but only wants to scrobble her plays from the ",(0,r.kt)("inlineCode",{parentName:"li"},"podcast")," library"),(0,r.kt)("li",{parentName:"ul"},"The three of you have a shared library on Plex called ",(0,r.kt)("inlineCode",{parentName:"li"},"party")," that you only play when you are hanging out. You want plays from that library to be scrobbled to everyone's servers."),(0,r.kt)("li",{parentName:"ul"},"Fred also has his own Jellyfin server and wants to scrobble everything he plays")),(0,r.kt)("h3",{id:"all-in-one-config"},"All-in-one Config"),(0,r.kt)("p",null,"Using just one config file located at ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_DIR/config.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "sourceDefaults": {\n    "maxPollRetries": 0,          // optional, default # of automatic polling restarts on error. can be overridden by property in individual config\n    "maxRequestRetries": 1,       // optional, default # of http request retries a source can make before error is thrown. can be overridden by property in individual config\n    "retryMultiplier": 1.5,       // optional, default retry delay multiplier (retry attempt * multiplier = # of seconds to wait before retrying). can be overridden by property in individual config\n  },\n  "clientDefaults": {\n    "maxRequestRetries": 1,       // optional, default # of http request retries a client can make before error is thrown. can be overridden by property in individual config\n    "retryMultiplier": 1.5,       // optional, default retry delay multiplier (retry attempt * multiplier = # of seconds to wait before retrying). can be overridden by property in individual config\n  },\n  "sources": [\n    {\n      "type": "spotify",\n      "name": "foxxSpot",\n      "clients": ["foxxMaloja"],\n      "data": {\n        "clientId": "foxxSpotifyAppId", \n        "clientSecret": "foxxSpotifyAppSecret",\n        "maxRequestRetries": 2,  // override default max retries because spotify can...spotty\n      }\n    },\n    {\n      "type": "spotify",\n      "name": "marySpot",\n      "clients": ["maryMaloja"],\n      "data": {\n        "clientId": "foxxSpotifyAppId", // only need one application, it can be used by all users of this multi-scrobbler instance \n        "clientSecret": "foxxSpotifyAppSecret",\n      }\n    },\n    {\n      "type": "spotify",\n      "name": "fredSpot",\n      "clients": ["fredMaloja"],\n      "data": {\n        "accessToken": "fredsToken",\n        "refreshToken": "fredsRefreshToken",\n        "interval": 120, // he also wants a slower check interval because his application already has heavy api usage\n      }\n    },\n    {\n      "type": "plex",\n      "name": "fredPlex",\n      "clients": ["fredMaloja"],\n      "data": {\n        "user": ["fred@email.com"]\n      }\n    },\n    {\n      "type": "plex",\n      "name": "maryPlex",\n      "clients": ["maryMaloja"],\n      "data": {\n        "user": ["mary@email.com"], // still need to specify mary as user so not all users who play from \'podcasts\' get scrobbled\n        "libraries": ["podcasts"]\n      }\n    },\n    {\n      "type": "plex",\n      "name": "partyPlex",\n      // omitting clients (or making it empty) will make this Source scrobble to all Clients\n      "data": {\n        "libraries": ["party"],\n      }\n    },\n    {\n      "type": "jellyfin",\n      "name": "FredJelly",\n      // omitting clients (or making it empty) will make this Source scrobble to all Clients\n      "data": {\n        "user": ["fred@email.com"]\n      }\n    },\n    {\n      "type": "subsonic",\n      "name": "foxxAirsonic",\n      "clients": ["foxxMaloja"],\n      "data": {\n        "user": "foxx",\n        "password": "foxxPassword",\n        "url": "https://airsonic.foxx.example"\n      }\n    },\n    {\n      "type": "ytmusic",\n      "name": "foxxYoutube",\n      "clients": ["foxxMaloja"],\n      "data": {\n        "cookie": "__Secure-3PAPISID=3AxsXpy0MKGu75Qb/AkISXGqOnSDn1jEKn; DEVICE_INFO=ChxOekU0Tmpjek5EWTBPRGd3TlRBMk16QXpNdz09EJbS8Z0GGJbS8Z0G; ...",\n        "authUser": 1\n      }\n    },\n  ],\n  "clients": [\n    {\n      "type": "maloja",\n      "name": "foxxMaloja",\n      "data": {\n        "url": "https://maloja.foxx.example",\n        "apiKey": "foxxApiKey"\n      }\n    },\n    {\n      "type": "maloja",\n      "name": "fredMaloja",\n      "data": {\n        "url": "https://maloja.fred.example",\n        "apiKey": "fredApiKey"\n      }\n    },\n    {\n      "type": "maloja",\n      "name": "maryMaloja",\n      "data": {\n        "url": "https://maloja.mary.example",\n        "apiKey": "maryApiKey"\n      }\n    },\n    {\n      "type": "lastfm",\n      "name": "maryLFM",\n      "data": {\n        "apiKey": "maryApiKey",\n        "secret": "marySecret",\n        "redirectUri": "http://localhost:9078/lastfm/callback"\n      }\n    }\n  ]\n}\n\n')),(0,r.kt)("h3",{id:"separate-json-files"},"Separate JSON files"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_DIR/spotify.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'[\n  {\n    // may omit \'type\' property since app knows this is file is for spotify configs\n    "name": "foxxSpot",\n    "clients": ["foxxMaloja"],\n    "data": {\n      "clientId": "foxxSpotifyAppId",\n      "clientSecret": "foxxSpotifyAppSecret"\n    }\n  },\n  {\n    "name": "marySpot",\n    "clients": ["maryMaloja"],\n    "data": {\n      "clientId": "foxxSpotifyAppId",\n      "clientSecret": "foxxSpotifyAppSecret"\n    }\n  },\n  {\n    "name": "fredSpot",\n    "clients": ["fredMaloja"],\n    "data": {\n      "accessToken": "fredsToken",\n      "refreshToken": "fredsRefreshToken",\n      "interval": 120\n    }\n  },\n]\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_DIR/plex.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'[\n  {\n    "name": "fredPlex",\n    "clients": ["fredMaloja"],\n    "data": {\n      "user": ["fred@email.com"]\n    }\n  },\n  {\n    "name": "maryPlex",\n    "clients": ["maryMaloja"],\n    "data": {\n      "user": ["mary@email.com"],\n      "libraries": ["podcasts"]\n    }\n  },\n  {\n    "name": "partyPlex",\n    "data": {\n      "libraries": ["party"]\n    }\n  }\n]\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_DIR/jellyfin.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'[\n  {\n    "name": "FredJelly",\n    "data": {\n      "user": ["fred@email.com"]\n    }\n  }\n]\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_DIR/ytmusic.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'[\n  {\n    "type": "ytmusic",\n    "name": "foxxYoutube",\n    "clients": ["foxxMaloja"],\n    "data": {\n      "cookie": "__Secure-3PAPISID=3AxsXpy0MKGu75Qb/AkISXGqOnSDn1jEKn; DEVICE_INFO=ChxOekU0Tmpjek5EWTBPRGd3TlRBMk16QXpNdz09EJbS8Z0GGJbS8Z0G; ...",\n      "authUser": 1\n    }\n  }\n]\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_DIR/maloja.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'[\n  {\n    "name": "foxxMaloja",\n    "data": {\n      "url": "https://maloja.foxx.example",\n      "apiKey": "foxxApiKey"\n    }\n  },\n  {\n    "name": "fredMaloja",\n    "data": {\n      "url": "https://maloja.fred.example",\n      "apiKey": "fredApiKey"\n    }\n  },\n  {\n    "name": "maryMaloja",\n    "data": {\n      "url": "https://maloja.mary.example",\n      "apiKey": "maryApiKey"\n    }\n  }\n]\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_DIR/lastfm.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'[\n  {\n    "name": "maryLFM",\n    "data": {\n      "apiKey": "maryApiKey",\n      "secret": "marySecret",\n      "redirectUri": "http://localhost:9078/lastfm/callback"\n    }\n  }\n]\n')))}m.isMDXComponent=!0}}]);