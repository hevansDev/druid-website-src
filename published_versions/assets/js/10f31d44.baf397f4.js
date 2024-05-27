"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1391],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(o),k=r,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||a;return o?n.createElement(m,l(l({ref:t},u),{},{components:o})):n.createElement(m,l({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},64742:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),l=["components"],i={id:"lookups-api",title:"Lookups API",sidebar_label:"Lookups"},p=void 0,s={unversionedId:"api-reference/lookups-api",id:"api-reference/lookups-api",title:"Lookups API",description:"\x3c!--",source:"@site/docs/29.0.0/api-reference/lookups-api.md",sourceDirName:"api-reference",slug:"/api-reference/lookups-api",permalink:"/docs/29.0.0/api-reference/lookups-api",draft:!1,tags:[],version:"current",frontMatter:{id:"lookups-api",title:"Lookups API",sidebar_label:"Lookups"},sidebar:"docs",previous:{title:"Automatic compaction",permalink:"/docs/29.0.0/api-reference/automatic-compaction-api"},next:{title:"Service status",permalink:"/docs/29.0.0/api-reference/service-status-api"}},u={},d=[{value:"Configure lookups",id:"configure-lookups",level:2},{value:"Bulk update",id:"bulk-update",level:3},{value:"Update lookup",id:"update-lookup",level:3},{value:"Get all lookups",id:"get-all-lookups",level:3},{value:"Get lookup",id:"get-lookup",level:3},{value:"Delete lookup",id:"delete-lookup",level:3},{value:"Delete tier",id:"delete-tier",level:3},{value:"List tier names",id:"list-tier-names",level:3},{value:"List lookup names",id:"list-lookup-names",level:3},{value:"Lookup status",id:"lookup-status",level:2},{value:"List load status of all lookups",id:"list-load-status-of-all-lookups",level:3},{value:"List load status of lookups in a tier",id:"list-load-status-of-lookups-in-a-tier",level:3},{value:"List load status of single lookup",id:"list-load-status-of-single-lookup",level:3},{value:"List lookup state of all processes",id:"list-lookup-state-of-all-processes",level:3},{value:"List lookup state of processes in a tier",id:"list-lookup-state-of-processes-in-a-tier",level:3},{value:"List lookup state of single process",id:"list-lookup-state-of-single-process",level:3},{value:"Internal API",id:"internal-api",level:2},{value:"Get lookups",id:"get-lookups",level:3},{value:"Get lookup",id:"get-lookup-1",level:3}],c={toc:d},k="wrapper";function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)(k,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes the API endpoints to configure, update, retrieve, and manage lookups for Apache Druid."),(0,a.kt)("h2",{id:"configure-lookups"},"Configure lookups"),(0,a.kt)("h3",{id:"bulk-update"},"Bulk update"),(0,a.kt)("p",null,"Lookups can be updated in bulk by posting a JSON object to ",(0,a.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config"),". The format of the json object is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "<tierName>": {\n        "<lookupName>": {\n          "version": "<version>",\n          "lookupExtractorFactory": {\n            "type": "<someExtractorFactoryType>",\n            "<someExtractorField>": "<someExtractorValue>"\n          }\n        }\n    }\n}\n')),(0,a.kt)("p",null,'Note that "version" is an arbitrary string assigned by the user, when making updates to existing lookup then user would need to specify a lexicographically higher version.'),(0,a.kt)("p",null,"For example, a config might look something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "__default": {\n    "country_code": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "map",\n        "map": {\n          "77483": "United States"\n        }\n      }\n    },\n    "site_id": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "cachedNamespace",\n        "extractionNamespace": {\n          "type": "jdbc",\n          "connectorConfig": {\n            "createTables": true,\n            "connectURI": "jdbc:mysql:\\/\\/localhost:3306\\/druid",\n            "user": "druid",\n            "password": "diurd"\n          },\n          "table": "lookupTable",\n          "keyColumn": "country_id",\n          "valueColumn": "country_name",\n          "tsColumn": "timeColumn"\n        },\n        "firstCacheTimeout": 120000,\n        "injective": true\n      }\n    },\n    "site_id_customer1": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "map",\n        "map": {\n          "847632": "Internal Use Only"\n        }\n      }\n    },\n    "site_id_customer2": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "map",\n        "map": {\n          "AHF77": "Home"\n        }\n      }\n    }\n  },\n  "realtime_customer1": {\n    "country_code": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "map",\n        "map": {\n          "77483": "United States"\n        }\n      }\n    },\n    "site_id_customer1": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "map",\n        "map": {\n          "847632": "Internal Use Only"\n        }\n      }\n    }\n  },\n  "realtime_customer2": {\n    "country_code": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "map",\n        "map": {\n          "77483": "United States"\n        }\n      }\n    },\n    "site_id_customer2": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "map",\n        "map": {\n          "AHF77": "Home"\n        }\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"All entries in the map will UPDATE existing entries. No entries will be deleted."),(0,a.kt)("h3",{id:"update-lookup"},"Update lookup"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," to a particular lookup extractor factory via ",(0,a.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/{tier}/{id}")," creates or updates that specific extractor factory."),(0,a.kt)("p",null,"For example, a post to ",(0,a.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/realtime_customer1/site_id_customer1")," might contain the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "v1",\n  "lookupExtractorFactory": {\n    "type": "map",\n    "map": {\n      "847632": "Internal Use Only"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"This will replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"site_id_customer1")," lookup in the ",(0,a.kt)("inlineCode",{parentName:"p"},"realtime_customer1")," with the definition above."),(0,a.kt)("p",null,"Assign a unique version identifier each time you update a lookup extractor factory. Otherwise the call will fail."),(0,a.kt)("h3",{id:"get-all-lookups"},"Get all lookups"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/all")," will return all known lookup specs for all tiers."),(0,a.kt)("h3",{id:"get-lookup"},"Get lookup"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," to a particular lookup extractor factory is accomplished via ",(0,a.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/{tier}/{id}")),(0,a.kt)("p",null,"Using the prior example, a ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/realtime_customer2/site_id_customer2")," should return"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "v1",\n  "lookupExtractorFactory": {\n    "type": "map",\n    "map": {\n      "AHF77": "Home"\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"delete-lookup"},"Delete lookup"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/{tier}/{id}")," will remove that lookup from the cluster. If it was last lookup in the tier, then tier is deleted as well."),(0,a.kt)("h3",{id:"delete-tier"},"Delete tier"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/{tier}")," will remove that tier from the cluster."),(0,a.kt)("h3",{id:"list-tier-names"},"List tier names"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config")," will return a list of known tier names in the dynamic configuration.\nTo discover a list of tiers currently active in the cluster in addition to ones known in the dynamic configuration, the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"discover=true")," can be added as per ",(0,a.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config?discover=true"),"."),(0,a.kt)("h3",{id:"list-lookup-names"},"List lookup names"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/{tier}")," will return a list of known lookup names for that tier."),(0,a.kt)("p",null,"These end points can be used to get the propagation status of configured lookups to processes using lookups such as Historicals."),(0,a.kt)("h2",{id:"lookup-status"},"Lookup status"),(0,a.kt)("h3",{id:"list-load-status-of-all-lookups"},"List load status of all lookups"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /druid/coordinator/v1/lookups/status")," with optional query parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"detailed"),"."),(0,a.kt)("h3",{id:"list-load-status-of-lookups-in-a-tier"},"List load status of lookups in a tier"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /druid/coordinator/v1/lookups/status/{tier}")," with optional query parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"detailed"),"."),(0,a.kt)("h3",{id:"list-load-status-of-single-lookup"},"List load status of single lookup"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /druid/coordinator/v1/lookups/status/{tier}/{lookup}")," with optional query parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"detailed"),"."),(0,a.kt)("h3",{id:"list-lookup-state-of-all-processes"},"List lookup state of all processes"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /druid/coordinator/v1/lookups/nodeStatus")," with optional query parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"discover")," to discover tiers advertised by other Druid nodes, or by default, returning all configured lookup tiers. The default response will also include the lookups which are loaded, being loaded, or being dropped on each node, for each tier, including the complete lookup spec. Add the optional query parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"detailed=false")," to only include the 'version' of the lookup instead of the complete spec."),(0,a.kt)("h3",{id:"list-lookup-state-of-processes-in-a-tier"},"List lookup state of processes in a tier"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /druid/coordinator/v1/lookups/nodeStatus/{tier}")),(0,a.kt)("h3",{id:"list-lookup-state-of-single-process"},"List lookup state of single process"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /druid/coordinator/v1/lookups/nodeStatus/{tier}/{host:port}")),(0,a.kt)("h2",{id:"internal-api"},"Internal API"),(0,a.kt)("p",null,"The Peon, Router, Broker, and Historical processes all have the ability to consume lookup configuration.\nThere is an internal API these processes use to list/load/drop their lookups starting at ",(0,a.kt)("inlineCode",{parentName:"p"},"/druid/listen/v1/lookups"),".\nThese follow the same convention for return values as the cluster wide dynamic configuration. Following endpoints\ncan be used for debugging purposes but not otherwise."),(0,a.kt)("h3",{id:"get-lookups"},"Get lookups"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," to the process at ",(0,a.kt)("inlineCode",{parentName:"p"},"/druid/listen/v1/lookups")," will return a json map of all the lookups currently active on the process.\nThe return value will be a json map of the lookups to their extractor factories."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "site_id_customer2": {\n    "version": "v1",\n    "lookupExtractorFactory": {\n      "type": "map",\n      "map": {\n        "AHF77": "Home"\n      }\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"get-lookup-1"},"Get lookup"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," to the process at ",(0,a.kt)("inlineCode",{parentName:"p"},"/druid/listen/v1/lookups/some_lookup_name")," will return the LookupExtractorFactory for the lookup identified by ",(0,a.kt)("inlineCode",{parentName:"p"},"some_lookup_name"),".\nThe return value will be the json representation of the factory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "v1",\n  "lookupExtractorFactory": {\n    "type": "map",\n    "map": {\n      "AHF77": "Home"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);