"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,v=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"overview",title:"Developing on Apache Druid",sidebar_label:"Developing on Druid"},s=void 0,d={unversionedId:"development/overview",id:"development/overview",title:"Developing on Apache Druid",description:"\x3c!--",source:"@site/docs/29.0.1/development/overview.md",sourceDirName:"development",slug:"/development/overview",permalink:"/docs/29.0.1/development/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Developing on Apache Druid",sidebar_label:"Developing on Druid"},sidebar:"docs",previous:{title:"Content for build.sbt",permalink:"/docs/29.0.1/operations/use_sbt_to_build_fat_jar"},next:{title:"Creating extensions",permalink:"/docs/29.0.1/development/modules"}},u={},p=[{value:"Storage format",id:"storage-format",level:2},{value:"Segment creation",id:"segment-creation",level:2},{value:"Storage engine",id:"storage-engine",level:2},{value:"Query engine",id:"query-engine",level:2},{value:"Coordination",id:"coordination",level:2},{value:"Real-time Ingestion",id:"real-time-ingestion",level:2},{value:"Hadoop-based Batch Ingestion",id:"hadoop-based-batch-ingestion",level:2},{value:"Internal UIs",id:"internal-uis",level:2},{value:"Client libraries",id:"client-libraries",level:2}],c={toc:p},m="wrapper";function v(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Druid's codebase consists of several major components. For developers interested in learning the code, this document provides\na high level overview of the main components that make up Druid and the relevant classes to start from to learn the code."),(0,i.kt)("h2",{id:"storage-format"},"Storage format"),(0,i.kt)("p",null,"Data in Druid is stored in a custom column format known as a ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/design/segments"},"segment"),". Segments are composed of\ndifferent types of columns. ",(0,i.kt)("inlineCode",{parentName:"p"},"Column.java")," and the classes that extend it is a great place to looking into the storage format."),(0,i.kt)("h2",{id:"segment-creation"},"Segment creation"),(0,i.kt)("p",null,"Raw data is ingested in ",(0,i.kt)("inlineCode",{parentName:"p"},"IncrementalIndex.java"),", and segments are created in ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexMerger.java"),"."),(0,i.kt)("h2",{id:"storage-engine"},"Storage engine"),(0,i.kt)("p",null,"Druid segments are memory mapped in ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexIO.java")," to be exposed for querying."),(0,i.kt)("h2",{id:"query-engine"},"Query engine"),(0,i.kt)("p",null,"Most of the logic related to Druid queries can be found in the Query* classes. Druid leverages query runners to run queries.\nQuery runners often embed other query runners and each query runner adds on a layer of logic. A good starting point to trace\nthe query logic is to start from ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryResource.java"),"."),(0,i.kt)("h2",{id:"coordination"},"Coordination"),(0,i.kt)("p",null,"Most of the coordination logic for Historical processes is on the Druid Coordinator. The starting point here is ",(0,i.kt)("inlineCode",{parentName:"p"},"DruidCoordinator.java"),".\nMost of the coordination logic for (real-time) ingestion is in the Druid indexing service. The starting point here is ",(0,i.kt)("inlineCode",{parentName:"p"},"OverlordResource.java"),"."),(0,i.kt)("h2",{id:"real-time-ingestion"},"Real-time Ingestion"),(0,i.kt)("p",null,"Druid loads data through ",(0,i.kt)("inlineCode",{parentName:"p"},"FirehoseFactory.java")," classes. Firehoses often wrap other firehoses, where, similar to the design of the\nquery runners, each firehose adds a layer of logic, and the persist and hand-off logic is in ",(0,i.kt)("inlineCode",{parentName:"p"},"RealtimePlumber.java"),"."),(0,i.kt)("h2",{id:"hadoop-based-batch-ingestion"},"Hadoop-based Batch Ingestion"),(0,i.kt)("p",null,"The two main Hadoop indexing classes are ",(0,i.kt)("inlineCode",{parentName:"p"},"HadoopDruidDetermineConfigurationJob.java")," for the job to determine how many Druid\nsegments to create, and ",(0,i.kt)("inlineCode",{parentName:"p"},"HadoopDruidIndexerJob.java"),", which creates Druid segments."),(0,i.kt)("p",null,"At some point in the future, we may move the Hadoop ingestion code out of core Druid."),(0,i.kt)("h2",{id:"internal-uis"},"Internal UIs"),(0,i.kt)("p",null,"Druid currently has two internal UIs. One is for the Coordinator and one is for the Overlord."),(0,i.kt)("p",null,"At some point in the future, we will likely move the internal UI code out of core Druid."),(0,i.kt)("h2",{id:"client-libraries"},"Client libraries"),(0,i.kt)("p",null,"We welcome contributions for new client libraries to interact with Druid. See the\n",(0,i.kt)("a",{parentName:"p",href:"https://druid.apache.org/libraries.html"},"Community and third-party libraries")," page for links to existing client\nlibraries."))}v.isMDXComponent=!0}}]);