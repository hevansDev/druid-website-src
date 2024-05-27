"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[548],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=a,y=d["".concat(u,".").concat(c)]||d[c]||s[c]||i;return r?n.createElement(y,o(o({ref:t},m),{},{components:r})):n.createElement(y,o({ref:t},m))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},27054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"timeboundaryquery",title:"TimeBoundary queries",sidebar_label:"TimeBoundary"},u=void 0,p={unversionedId:"querying/timeboundaryquery",id:"querying/timeboundaryquery",title:"TimeBoundary queries",description:"\x3c!--",source:"@site/docs/29.0.0/querying/timeboundaryquery.md",sourceDirName:"querying",slug:"/querying/timeboundaryquery",permalink:"/docs/29.0.0/querying/timeboundaryquery",draft:!1,tags:[],version:"current",frontMatter:{id:"timeboundaryquery",title:"TimeBoundary queries",sidebar_label:"TimeBoundary"},sidebar:"docs",previous:{title:"Search",permalink:"/docs/29.0.0/querying/searchquery"},next:{title:"SegmentMetadata",permalink:"/docs/29.0.0/querying/segmentmetadataquery"}},m={},d=[],s={toc:d},c="wrapper";function y(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Apache Druid supports two query languages: ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/sql"},"Druid SQL")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/"},"native queries"),".\nThis document describes a query\ntype that is only available in the native language.")),(0,i.kt)("p",null,"Time boundary queries return the earliest and latest data points of a data set. The grammar is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "queryType" : "timeBoundary",\n    "dataSource": "sample_datasource",\n    "bound"     : < "maxTime" | "minTime" > # optional, defaults to returning both timestamps if not set\n    "filter"    : { "type": "and", "fields": [<filter>, <filter>, ...] } # optional\n}\n')),(0,i.kt)("p",null,"There are 3 main parts to a time boundary query:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryType"),(0,i.kt)("td",{parentName:"tr",align:null},'This String should always be "timeBoundary"; this is the first thing Apache Druid looks at to figure out how to interpret the query'),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,i.kt)("td",{parentName:"tr",align:null},"A String or Object defining the data source to query, very similar to a table in a relational database. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/29.0.0/querying/datasource"},"DataSource")," for more information."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bound"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional, set to ",(0,i.kt)("inlineCode",{parentName:"td"},"maxTime")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"minTime")," to return only the latest or earliest timestamp. Default to returning both if not set"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filter"),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"/docs/29.0.0/querying/filters"},"Filters")),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"/docs/29.0.0/querying/query-context"},"Context")),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("p",null,"The format of the result is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[ {\n  "timestamp" : "2013-05-09T18:24:00.000Z",\n  "result" : {\n    "minTime" : "2013-05-09T18:24:00.000Z",\n    "maxTime" : "2013-05-09T18:37:00.000Z"\n  }\n} ]\n')))}y.isMDXComponent=!0}}]);