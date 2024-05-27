"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,d=p["".concat(l,".").concat(g)]||p[g]||h[g]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},62461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"using-caching",title:"Using query caching"},l=void 0,u={unversionedId:"querying/using-caching",id:"querying/using-caching",title:"Using query caching",description:"\x3c!--",source:"@site/docs/29.0.0/querying/using-caching.md",sourceDirName:"querying",slug:"/querying/using-caching",permalink:"/docs/29.0.0/querying/using-caching",draft:!1,tags:[],version:"current",frontMatter:{id:"using-caching",title:"Using query caching"},sidebar:"docs",previous:{title:"Query caching",permalink:"/docs/29.0.0/querying/caching"},next:{title:"Query context",permalink:"/docs/29.0.0/querying/query-context"}},s={},p=[{value:"Enabling query caching on Historicals",id:"enabling-query-caching-on-historicals",level:2},{value:"Enabling query caching on task executor services",id:"enabling-query-caching-on-task-executor-services",level:2},{value:"Enabling query caching on Brokers",id:"enabling-query-caching-on-brokers",level:2},{value:"Enabling caching in the query context",id:"enabling-caching-in-the-query-context",level:2},{value:"Learn more",id:"learn-more",level:2}],h={toc:p},g="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(g,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This topic covers how to configure services to populate and use the Druid query caches. For a conceptual overview and use cases, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/caching"},"Query caching"),". For information on how to configure the caching mechanism, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/29.0.0/configuration/#cache-configuration"},"Cache configuration"),"."),(0,o.kt)("p",null,"All query caches have a pair of parameters that control the way individual queries interact with the cache:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useCache")," to instruct queries to use the cache for results."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"populateCache")," to instruct a query to cache its results.")),(0,o.kt)("p",null,"The separation of concerns, usage and population, lets you include cached results for queries on uncommon data without polluting the cache with results that are unlikely to be reused by other queries, for example, large reports or queries on very old data."),(0,o.kt)("p",null,"To use caching, it must be enabled in the settings for the service to perform caching in the service's runtime properties. By default, per-segment cache is enabled on Historicals. For individual queries, you can control cache usage and population within the query context."),(0,o.kt)("h2",{id:"enabling-query-caching-on-historicals"},"Enabling query caching on Historicals"),(0,o.kt)("p",null,"Historicals only support ",(0,o.kt)("strong",{parentName:"p"},"segment-level")," caching, which is enabled by default. To control caching on the Historical, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCache")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"populateCache")," runtime properties. For example, to set the Historical to both use and populate the segment cache for queries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"druid.historical.cache.useCache=true\ndruid.historical.cache.populateCache=true\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/29.0.0/configuration/#historical-caching"},"Historical caching")," for a description of all available Historical cache configurations."),(0,o.kt)("h2",{id:"enabling-query-caching-on-task-executor-services"},"Enabling query caching on task executor services"),(0,o.kt)("p",null,"Task executor services, the Peon or the Indexer, only support ",(0,o.kt)("strong",{parentName:"p"},"segment-level")," caching. To control caching on a task executor service, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCache")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"populateCache")," runtime properties. For example, to set the Peon to both use and populate the segment cache for queries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"druid.realtime.cache.useCache=true\ndruid.realtime.cache.populateCache=true\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/29.0.0/configuration/#peon-caching"},"Peon caching")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/29.0.0/configuration/#indexer-caching"},"Indexer caching")," for a description of all available task executor service caching options."),(0,o.kt)("h2",{id:"enabling-query-caching-on-brokers"},"Enabling query caching on Brokers"),(0,o.kt)("p",null,"Brokers support both segment-level and whole-query result level caching."),(0,o.kt)("p",null,"To control ",(0,o.kt)("strong",{parentName:"p"},"segment caching")," on the Broker, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCache")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"populateCache"),"runtime properties. For example, to set the Broker to use and populate the segment cache for queries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"druid.broker.cache.useCache=true\ndruid.broker.cache.populateCache=true\n")),(0,o.kt)("p",null,"To control ",(0,o.kt)("strong",{parentName:"p"},"whole-query caching")," on the Broker, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"useResultLevelCache")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"populateResultLevelCache")," runtime properties. For example, to set the Broker to use and populate the whole-query cache for queries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"druid.broker.cache.useResultLevelCache=true\ndruid.broker.cache.populateResultLevelCache=true\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/29.0.0/configuration/#broker-caching"},"Broker caching")," for a description of all available Broker cache configurations."),(0,o.kt)("h2",{id:"enabling-caching-in-the-query-context"},"Enabling caching in the query context"),(0,o.kt)("p",null,"As long as the service is set to populate the cache, you can set cache options for individual queries in the query ",(0,o.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/query-context"},"context"),". For example, you can ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," a Druid SQL request to the HTTP POST API and include the context as a JSON object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "query" : "SELECT COUNT(*) FROM data_source WHERE foo = \'bar\' AND __time > TIMESTAMP \'2020-01-01 00:00:00\'",\n  "context" : {\n    "useCache" : "true",\n    "populateCache" : "false"\n  }\n}\n')),(0,o.kt)("p",null,"In this example the user has set ",(0,o.kt)("inlineCode",{parentName:"p"},"populateCache")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," to avoid filling the result cache with results for segments that are over a year old. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/29.0.0/api-reference/sql-api"},"Druid SQL client APIs"),"."),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("p",null,"See the following topics for more information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/29.0.0/querying/caching"},"Query caching")," for an overview of caching."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/29.0.0/querying/query-context"},"Query context")," for more details and usage for the query context."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/29.0.0/configuration/#cache-configuration"},"Cache configuration")," for information about different cache types and additional configuration options.")))}d.isMDXComponent=!0}}]);