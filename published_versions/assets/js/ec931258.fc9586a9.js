"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=i,h=s["".concat(p,".").concat(c)]||s[c]||u[c]||a;return n?r.createElement(h,l(l({ref:t},m),{},{components:n})):r.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={id:"graphite",title:"Graphite Emitter"},p=void 0,d={unversionedId:"development/extensions-contrib/graphite",id:"development/extensions-contrib/graphite",title:"Graphite Emitter",description:"\x3c!--",source:"@site/docs/29.0.0/development/extensions-contrib/graphite.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/graphite",permalink:"/docs/29.0.0/development/extensions-contrib/graphite",draft:!1,tags:[],version:"current",frontMatter:{id:"graphite",title:"Graphite Emitter"}},m={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Supported event types",id:"supported-event-types",level:3},{value:"Druid to Graphite Event Converter",id:"druid-to-graphite-event-converter",level:3},{value:"Send-All converter",id:"send-all-converter",level:4},{value:"White-list based converter",id:"white-list-based-converter",level:4}],u={toc:s},c="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To use this Apache Druid extension, ",(0,a.kt)("a",{parentName:"p",href:"/docs/29.0.0/configuration/extensions#loading-extensions"},"include")," ",(0,a.kt)("inlineCode",{parentName:"p"},"graphite-emitter")," in the extensions load list."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This extension emits druid metrics to a graphite carbon server.\nMetrics can be sent by using ",(0,a.kt)("a",{parentName:"p",href:"http://graphite.readthedocs.io/en/latest/feeding-carbon.html#the-plaintext-protocol"},"plaintext")," or ",(0,a.kt)("a",{parentName:"p",href:"http://graphite.readthedocs.io/en/latest/feeding-carbon.html#the-pickle-protocol"},"pickle")," protocol.\nThe pickle protocol is more efficient and supports sending batches of metrics (plaintext protocol send only one metric) in one request; batch size is configurable."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"All the configuration parameters for graphite emitter are under ",(0,a.kt)("inlineCode",{parentName:"p"},"druid.emitter.graphite"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"property"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"required?"),(0,a.kt)("th",{parentName:"tr",align:null},"default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.graphite.hostname")),(0,a.kt)("td",{parentName:"tr",align:null},"The hostname of the graphite server."),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.graphite.port")),(0,a.kt)("td",{parentName:"tr",align:null},"The port of the graphite server."),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.graphite.batchSize")),(0,a.kt)("td",{parentName:"tr",align:null},"Number of events to send as one batch (only for pickle protocol)"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"100")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.graphite.protocol")),(0,a.kt)("td",{parentName:"tr",align:null},"Graphite protocol; available protocols: pickle, plaintext."),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"pickle")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.graphite.eventConverter")),(0,a.kt)("td",{parentName:"tr",align:null},"Filter and converter of druid events to graphite event (please see next section)."),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.graphite.flushPeriod")),(0,a.kt)("td",{parentName:"tr",align:null},"Queue flushing period in milliseconds."),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"1 minute")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.graphite.maxQueueSize")),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum size of the queue used to buffer events."),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"MAX_INT"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.graphite.alertEmitters")),(0,a.kt)("td",{parentName:"tr",align:null},"List of emitters where alerts will be forwarded to. This is a JSON list of emitter names, e.g. ",(0,a.kt)("inlineCode",{parentName:"td"},'["logging", "http"]')),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"empty list (no forwarding)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.graphite.requestLogEmitters")),(0,a.kt)("td",{parentName:"tr",align:null},"List of emitters where request logs (i.e., query logging events sent to emitters when ",(0,a.kt)("inlineCode",{parentName:"td"},"druid.request.logging.type")," is set to ",(0,a.kt)("inlineCode",{parentName:"td"},"emitter"),") will be forwarded to. This is a JSON list of emitter names, e.g. ",(0,a.kt)("inlineCode",{parentName:"td"},'["logging", "http"]')),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"empty list (no forwarding)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.graphite.emitWaitTime")),(0,a.kt)("td",{parentName:"tr",align:null},"wait time in milliseconds to try to send the event otherwise emitter will throwing event."),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.emitter.graphite.waitForEventTime")),(0,a.kt)("td",{parentName:"tr",align:null},"waiting time in milliseconds if necessary for an event to become available."),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"1000 (1 sec)")))),(0,a.kt)("h3",{id:"supported-event-types"},"Supported event types"),(0,a.kt)("p",null,"The graphite emitter only emits service metric events to graphite (See ",(0,a.kt)("a",{parentName:"p",href:"/docs/29.0.0/operations/metrics"},"Druid Metrics")," for a list of metrics)."),(0,a.kt)("p",null,"Alerts and request logs are not sent to graphite. These event types are not well represented in Graphite, which is more suited for timeseries views on numeric metrics, vs. storing non-numeric log events."),(0,a.kt)("p",null,"Instead, alerts and request logs are optionally forwarded to other emitter implementations, specified by ",(0,a.kt)("inlineCode",{parentName:"p"},"druid.emitter.graphite.alertEmitters")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"druid.emitter.graphite.requestLogEmitters")," respectively."),(0,a.kt)("h3",{id:"druid-to-graphite-event-converter"},"Druid to Graphite Event Converter"),(0,a.kt)("p",null,"Graphite Event Converter defines a mapping between druid metrics name plus dimensions to a Graphite metric path.\nGraphite metric path is organized using the following schema:\n",(0,a.kt)("inlineCode",{parentName:"p"},"<namespacePrefix>.[<druid service name>].[<druid hostname>].<druid metrics dimensions>.<druid metrics name>"),"\nProperly naming the metrics is critical to avoid conflicts, confusing data and potentially wrong interpretation later on."),(0,a.kt)("p",null,"Example ",(0,a.kt)("inlineCode",{parentName:"p"},"druid.historical.hist-host1_yahoo_com:8080.MyDataSourceName.GroupBy.query/time"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"druid")," -> namespace prefix"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"historical")," -> service name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hist-host1.yahoo.com:8080")," -> druid hostname"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MyDataSourceName")," -> dimension value"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GroupBy")," -> dimension value"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"query/time")," -> metric name")),(0,a.kt)("p",null,"We have two different implementation of event converter:"),(0,a.kt)("h4",{id:"send-all-converter"},"Send-All converter"),(0,a.kt)("p",null,"The first implementation called ",(0,a.kt)("inlineCode",{parentName:"p"},"all"),", will send all the druid service metrics events.\nThe path will be in the form ",(0,a.kt)("inlineCode",{parentName:"p"},"<namespacePrefix>.[<druid service name>].[<druid hostname>].<dimensions values ordered by dimension's name>.<metric>"),"\nUser has control of ",(0,a.kt)("inlineCode",{parentName:"p"},"<namespacePrefix>.[<druid service name>].[<druid hostname>].")),(0,a.kt)("p",null,"You can omit the hostname by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreHostname=true"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"druid.SERVICE_NAME.dataSourceName.queryType.query/time")),(0,a.kt)("p",null,"You can omit the service name by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreServiceName=true"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"druid.HOSTNAME.dataSourceName.queryType.query/time")),(0,a.kt)("p",null,'Elements in metric name by default are separated by "/", so graphite will create all metrics on one level. If you want to have metrics in the tree structure, you have to set ',(0,a.kt)("inlineCode",{parentName:"p"},"replaceSlashWithDot=true"),"\nOriginal: ",(0,a.kt)("inlineCode",{parentName:"p"},"druid.HOSTNAME.dataSourceName.queryType.query/time"),"\nChanged: ",(0,a.kt)("inlineCode",{parentName:"p"},"druid.HOSTNAME.dataSourceName.queryType.query.time")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'\ndruid.emitter.graphite.eventConverter={"type":"all", "namespacePrefix": "druid.test", "ignoreHostname":true, "ignoreServiceName":true}\n\n')),(0,a.kt)("h4",{id:"white-list-based-converter"},"White-list based converter"),(0,a.kt)("p",null,"The second implementation called ",(0,a.kt)("inlineCode",{parentName:"p"},"whiteList"),", will send only the white listed metrics and dimensions.\nSame as for the ",(0,a.kt)("inlineCode",{parentName:"p"},"all")," converter user has control of ",(0,a.kt)("inlineCode",{parentName:"p"},"<namespacePrefix>.[<druid service name>].[<druid hostname>]."),"\nWhite-list based converter comes with the following  default white list map located under resources in ",(0,a.kt)("inlineCode",{parentName:"p"},"./src/main/resources/defaultWhiteListMap.json")),(0,a.kt)("p",null,"Although user can override the default white list map by supplying a property called ",(0,a.kt)("inlineCode",{parentName:"p"},"mapPath"),".\nThis property is a String containing the path for the file containing ",(0,a.kt)("strong",{parentName:"p"},"white list map JSON object"),".\nFor example the following converter will read the map from the file ",(0,a.kt)("inlineCode",{parentName:"p"},"/pathPrefix/fileName.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'\ndruid.emitter.graphite.eventConverter={"type":"whiteList", "namespacePrefix": "druid.test", "ignoreHostname":true, "ignoreServiceName":true, "mapPath":"/pathPrefix/fileName.json"}\n\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Druid emits a huge number of metrics we highly recommend to use the ",(0,a.kt)("inlineCode",{parentName:"strong"},"whiteList")," converter")))}h.isMDXComponent=!0}}]);