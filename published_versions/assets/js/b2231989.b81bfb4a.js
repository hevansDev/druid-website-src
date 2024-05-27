"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4221],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,r=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(87462),n=r(67294),l=r(86010),o=r(12466),i=r(16550),u=r(91980),s=r(67392),p=r(50012);function d(e){return function(e){var t,r;return null!=(t=null==(r=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:d(r);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,l=(0,i.k6)(),o=function(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:a});return[(0,u._X)(o),(0,n.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function k(e){var t,r,a,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,d=c(e),k=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:d})})),v=k[0],h=k[1],y=f({queryString:u,groupId:s}),T=y[0],b=y[1],g=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,p.Nk)(t),a=r[0],l=r[1],[a,(0,n.useCallback)((function(e){t&&l.set(e)}),[t,l])]),N=g[0],R=g[1],I=function(){var e=null!=T?T:N;return m({value:e,tabValues:d})?e:null}();return(0,n.useLayoutEffect)((function(){I&&h(I)}),[I]),{selectedValue:v,selectValue:(0,n.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);h(e),b(e),R(e)}),[b,R,d]),tabValues:d}}var v=r(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){var t=e.className,r=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,p=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,r=p.indexOf(t),a=s[r].value;a!==i&&(d(t),u(a))},m=function(e){var t,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,n=p.indexOf(e.currentTarget)+1;r=null!=(a=p[n])?a:p[0];break;case"ArrowLeft":var l,o=p.indexOf(e.currentTarget)-1;r=null!=(l=p[o])?l:p[p.length-1]}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:c},o,{className:(0,l.Z)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function T(e){var t=e.lazy,r=e.children,a=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===a}));return o?(0,n.cloneElement)(o,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function b(e){var t=k(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(T,(0,a.Z)({},e,t)))}function g(e){var t=(0,v.Z)();return n.createElement(b,(0,a.Z)({key:String(t)},e))}},38708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>v,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=r(74866),i=r(85162),u=["components"],s={id:"retention-rules-api",title:"Retention rules API",sidebar_label:"Retention rules"},p=void 0,d={unversionedId:"api-reference/retention-rules-api",id:"api-reference/retention-rules-api",title:"Retention rules API",description:"\x3c!--",source:"@site/docs/29.0.0/api-reference/retention-rules-api.md",sourceDirName:"api-reference",slug:"/api-reference/retention-rules-api",permalink:"/docs/29.0.0/api-reference/retention-rules-api",draft:!1,tags:[],version:"current",frontMatter:{id:"retention-rules-api",title:"Retention rules API",sidebar_label:"Retention rules"},sidebar:"docs",previous:{title:"Supervisors",permalink:"/docs/29.0.0/api-reference/supervisor-api"},next:{title:"Data management",permalink:"/docs/29.0.0/api-reference/data-management-api"}},c={},m=[{value:"Update retention rules for a datasource",id:"update-retention-rules-for-a-datasource",level:2},{value:"URL",id:"url",level:3},{value:"Header parameters",id:"header-parameters",level:3},{value:"Responses",id:"responses",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Update default retention rules for all datasources",id:"update-default-retention-rules-for-all-datasources",level:2},{value:"URL",id:"url-1",level:3},{value:"Header parameters",id:"header-parameters-1",level:3},{value:"Responses",id:"responses-1",level:3},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"Get an array of all retention rules",id:"get-an-array-of-all-retention-rules",level:2},{value:"URL",id:"url-2",level:3},{value:"Responses",id:"responses-2",level:3},{value:"Sample request",id:"sample-request-2",level:3},{value:"Sample response",id:"sample-response-2",level:3},{value:"Get an array of retention rules for a datasource",id:"get-an-array-of-retention-rules-for-a-datasource",level:2},{value:"URL",id:"url-3",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Responses",id:"responses-3",level:3},{value:"Sample request",id:"sample-request-3",level:3},{value:"Sample response",id:"sample-response-3",level:3},{value:"Get audit history for all datasources",id:"get-audit-history-for-all-datasources",level:2},{value:"URL",id:"url-4",level:3},{value:"Query parameters",id:"query-parameters-1",level:3},{value:"Responses",id:"responses-4",level:3},{value:"Sample request",id:"sample-request-4",level:3},{value:"Sample response",id:"sample-response-4",level:3}],f={toc:m},k="wrapper";function v(e){var t=e.components,r=(0,n.Z)(e,u);return(0,l.kt)(k,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This topic describes the API endpoints for managing retention rules in Apache Druid. You can configure retention rules in the Druid web console or API."),(0,l.kt)("p",null,"Druid uses retention rules to determine what data is retained in the cluster. Druid supports load, drop, and broadcast rules. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/29.0.0/operations/rule-configuration"},"Using rules to drop and retain data"),"."),(0,l.kt)("p",null,"In this topic, ",(0,l.kt)("inlineCode",{parentName:"p"},"http://ROUTER_IP:ROUTER_PORT")," is a placeholder for your Router service address and port. Replace it with the information for your deployment. For example, use ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8888")," for quickstart deployments."),(0,l.kt)("h2",{id:"update-retention-rules-for-a-datasource"},"Update retention rules for a datasource"),(0,l.kt)("p",null,"Updates one or more retention rules for a datasource. The request body takes an array of retention rule objects. For details on defining retention rules, see the following sources:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/29.0.0/operations/rule-configuration#load-rules"},"Load rules")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/29.0.0/operations/rule-configuration#drop-rules"},"Drop rules")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/29.0.0/operations/rule-configuration#broadcast-rules"},"Broadcast rules"))),(0,l.kt)("p",null,"This request overwrites any existing rules for the datasource.\nDruid reads rules in the order in which they appear; for more information, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/29.0.0/operations/rule-configuration"},"rule structure"),"."),(0,l.kt)("p",null,"Note that this endpoint returns an HTTP ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")," even if the datasource does not exist."),(0,l.kt)("h3",{id:"url"},"URL"),(0,l.kt)("code",{class:"postAPI"},"POST")," ",(0,l.kt)("code",null,"/druid/coordinator/v1/rules/:dataSource"),(0,l.kt)("h3",{id:"header-parameters"},"Header parameters"),(0,l.kt)("p",null,"The endpoint supports a set of optional header parameters to populate the ",(0,l.kt)("inlineCode",{parentName:"p"},"author")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"comment")," fields in the ",(0,l.kt)("inlineCode",{parentName:"p"},"auditInfo")," property for audit history."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X-Druid-Author")," (optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: String"),(0,l.kt)("li",{parentName:"ul"},"A string representing the author making the configuration change."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X-Druid-Comment")," (optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: String"),(0,l.kt)("li",{parentName:"ul"},"A string describing the update.")))),(0,l.kt)("h3",{id:"responses"},"Responses"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"1",label:"200 SUCCESS",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Successfully updated retention rules for specified datasource")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sample-request"},"Sample request"),(0,l.kt)("p",null,"The following example sets a set of broadcast, load, and drop retention rules for the ",(0,l.kt)("inlineCode",{parentName:"p"},"kttm1")," datasource."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"2",label:"cURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://ROUTER_IP:ROUTER_PORT/druid/coordinator/v1/rules/kttm1" \\\n--header \'X-Druid-Author: doc intern\' \\\n--header \'X-Druid-Comment: submitted via api\' \\\n--header \'Content-Type: application/json\' \\\n--data \'[\n    {\n        "type": "broadcastForever"\n    },\n    {\n        "type": "loadForever",\n        "tieredReplicants": {\n            "_default_tier": 2\n        },\n        "useDefaultTierForNull": true\n    },\n    {\n        "type": "dropByPeriod",\n        "period": "P1M"\n    }\n]\'\n'))),(0,l.kt)(i.Z,{value:"3",label:"HTTP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-HTTP"},'POST /druid/coordinator/v1/rules/kttm1 HTTP/1.1\nHost: http://ROUTER_IP:ROUTER_PORT\nX-Druid-Author: doc intern\nX-Druid-Comment: submitted via api\nContent-Type: application/json\nContent-Length: 273\n\n[\n    {\n        "type": "broadcastForever"\n    },\n    {\n        "type": "loadForever",\n        "tieredReplicants": {\n            "_default_tier": 1\n        },\n        "useDefaultTierForNull": true\n    },\n    {\n        "type": "dropByPeriod",\n        "period": "P1M"\n    }\n]\n')))),(0,l.kt)("h3",{id:"sample-response"},"Sample response"),(0,l.kt)("p",null,"A successful request returns an HTTP ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")," message code and an empty response body."),(0,l.kt)("h2",{id:"update-default-retention-rules-for-all-datasources"},"Update default retention rules for all datasources"),(0,l.kt)("p",null,"Updates one or more default retention rules for all datasources. Submit retention rules as an array of objects in the request body. For details on defining retention rules, see the following sources:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/29.0.0/operations/rule-configuration#load-rules"},"Load rules")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/29.0.0/operations/rule-configuration#drop-rules"},"Drop rules")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/29.0.0/operations/rule-configuration#broadcast-rules"},"Broadcast rules"))),(0,l.kt)("p",null,"This request overwrites any existing rules for all datasources. To remove default retention rules for all datasources, submit an empty rule array in the request body. Rules are read in the order in which they appear; for more information, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/29.0.0/operations/rule-configuration"},"rule structure"),"."),(0,l.kt)("h3",{id:"url-1"},"URL"),(0,l.kt)("code",{class:"postAPI"},"POST")," ",(0,l.kt)("code",null,"/druid/coordinator/v1/rules/_default"),(0,l.kt)("h3",{id:"header-parameters-1"},"Header parameters"),(0,l.kt)("p",null,"The endpoint supports a set of optional header parameters to populate the ",(0,l.kt)("inlineCode",{parentName:"p"},"author")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"comment")," fields in the ",(0,l.kt)("inlineCode",{parentName:"p"},"auditInfo")," property for audit history."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X-Druid-Author")," (optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: String"),(0,l.kt)("li",{parentName:"ul"},"A string representing the author making the configuration change."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X-Druid-Comment")," (optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: String"),(0,l.kt)("li",{parentName:"ul"},"A string describing the update.")))),(0,l.kt)("h3",{id:"responses-1"},"Responses"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"4",label:"200 SUCCESS",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Successfully updated default retention rules"))),(0,l.kt)(i.Z,{value:"5",label:"500 SERVER ERROR",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Error with request body")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sample-request-1"},"Sample request"),(0,l.kt)("p",null,"The following example updates the default retention rule for all datasources with a ",(0,l.kt)("inlineCode",{parentName:"p"},"loadByInterval")," rule."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"6",label:"cURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://ROUTER_IP:ROUTER_PORT/druid/coordinator/v1/rules/_default" \\\n--header \'Content-Type: application/json\' \\\n--data \'[\n    {\n        "type": "loadByInterval",\n        "tieredReplicants": {},\n        "useDefaultTierForNull": false,\n        "interval": "2010-01-01/2020-01-01"\n    }\n]\'\n'))),(0,l.kt)(i.Z,{value:"7",label:"HTTP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-HTTP"},'POST /druid/coordinator/v1/rules/_default HTTP/1.1\nHost: http://ROUTER_IP:ROUTER_PORT\nContent-Type: application/json\nContent-Length: 205\n\n[\n    {\n        "type": "loadByInterval",\n        "tieredReplicants": {},\n        "useDefaultTierForNull": false,\n        "interval": "2010-01-01/2020-01-01"\n    }\n]\n')))),(0,l.kt)("h3",{id:"sample-response-1"},"Sample response"),(0,l.kt)("p",null,"A successful request returns an HTTP ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")," message code and an empty response body."),(0,l.kt)("h2",{id:"get-an-array-of-all-retention-rules"},"Get an array of all retention rules"),(0,l.kt)("p",null,"Retrieves all current retention rules in the cluster including the default retention rule. Returns an array of objects for each datasource and their associated retention rules."),(0,l.kt)("h3",{id:"url-2"},"URL"),(0,l.kt)("code",{class:"getAPI"},"GET")," ",(0,l.kt)("code",null,"/druid/coordinator/v1/rules"),(0,l.kt)("h3",{id:"responses-2"},"Responses"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"8",label:"200 SUCCESS",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Successfully retrieved retention rules")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sample-request-2"},"Sample request"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"9",label:"cURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://ROUTER_IP:ROUTER_PORT/druid/coordinator/v1/rules"\n'))),(0,l.kt)(i.Z,{value:"10",label:"HTTP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /druid/coordinator/v1/rules HTTP/1.1\nHost: http://ROUTER_IP:ROUTER_PORT\n")))),(0,l.kt)("h3",{id:"sample-response-2"},"Sample response"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show sample response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_default": [\n      {\n          "tieredReplicants": {\n              "_default_tier": 2\n          },\n          "type": "loadForever"\n      }\n  ],\n  "social_media": [\n      {\n          "interval": "2023-01-01T00:00:00.000Z/2023-02-01T00:00:00.000Z",\n          "type": "dropByInterval"\n      }\n  ],\n  "wikipedia_api": [],\n}\n'))),(0,l.kt)("h2",{id:"get-an-array-of-retention-rules-for-a-datasource"},"Get an array of retention rules for a datasource"),(0,l.kt)("p",null,"Retrieves an array of rule objects for a single datasource. Returns an empty array if there are no retention rules."),(0,l.kt)("p",null,"Note that this endpoint returns an HTTP ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")," message code even if the datasource does not exist."),(0,l.kt)("h3",{id:"url-3"},"URL"),(0,l.kt)("code",{class:"getAPI"},"GET")," ",(0,l.kt)("code",null,"/druid/coordinator/v1/rules/:dataSource"),(0,l.kt)("h3",{id:"query-parameters"},"Query parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"full")," (optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Includes the default retention rule for the datasource in the response.")))),(0,l.kt)("h3",{id:"responses-3"},"Responses"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"11",label:"200 SUCCESS",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Successfully retrieved retention rules")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sample-request-3"},"Sample request"),(0,l.kt)("p",null,"The following example retrieves the custom retention rules and default retention rules for datasource with the name ",(0,l.kt)("inlineCode",{parentName:"p"},"social_media"),"."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"12",label:"cURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://ROUTER_IP:ROUTER_PORT/druid/coordinator/v1/rules/social_media?full=null"\n'))),(0,l.kt)(i.Z,{value:"13",label:"HTTP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /druid/coordinator/v1/rules/social_media?full=null HTTP/1.1\nHost: http://ROUTER_IP:ROUTER_PORT\n")))),(0,l.kt)("h3",{id:"sample-response-3"},"Sample response"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show sample response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n      "interval": "2020-01-01T00:00:00.000Z/2022-02-01T00:00:00.000Z",\n      "type": "dropByInterval"\n  },\n  {\n      "interval": "2010-01-01T00:00:00.000Z/2020-01-01T00:00:00.000Z",\n      "tieredReplicants": {\n          "_default_tier": 2\n      },\n      "type": "loadByInterval"\n  },\n  {\n      "tieredReplicants": {\n          "_default_tier": 2\n      },\n      "type": "loadForever"\n  }\n]\n'))),(0,l.kt)("h2",{id:"get-audit-history-for-all-datasources"},"Get audit history for all datasources"),(0,l.kt)("p",null,"Retrieves the audit history of rules for all datasources over an interval of time. The default interval is 1 week. You can change this period by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"druid.audit.manager.auditHistoryMillis")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"runtime.properties")," file for the Coordinator."),(0,l.kt)("h3",{id:"url-4"},"URL"),(0,l.kt)("code",{class:"getAPI"},"GET")," ",(0,l.kt)("code",null,"/druid/coordinator/v1/rules/history"),(0,l.kt)("h3",{id:"query-parameters-1"},"Query parameters"),(0,l.kt)("p",null,"Note that the following query parameters cannot be chained."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"interval")," (optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: ISO 8601."),(0,l.kt)("li",{parentName:"ul"},"Limits the number of results to the specified time interval. Delimit with ",(0,l.kt)("inlineCode",{parentName:"li"},"/"),". For example, ",(0,l.kt)("inlineCode",{parentName:"li"},"2023-07-13/2023-07-19"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"count")," (optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: Int"),(0,l.kt)("li",{parentName:"ul"},"Limits the number of results to the last ",(0,l.kt)("inlineCode",{parentName:"li"},"n")," entries.")))),(0,l.kt)("h3",{id:"responses-4"},"Responses"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"14",label:"200 SUCCESS",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Successfully retrieved audit history"))),(0,l.kt)(i.Z,{value:"15",label:"400 BAD REQUEST",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Request in the incorrect format"))),(0,l.kt)(i.Z,{value:"16",label:"404 NOT FOUND",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"em"},"count")," query parameter too large")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sample-request-4"},"Sample request"),(0,l.kt)("p",null,"The following example retrieves the audit history for all datasources from ",(0,l.kt)("inlineCode",{parentName:"p"},"2023-07-13")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"2023-07-19"),"."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"17",label:"cURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://ROUTER_IP:ROUTER_PORT/druid/coordinator/v1/rules/history?interval=2023-07-13%2F2023-07-19"\n'))),(0,l.kt)(i.Z,{value:"18",label:"HTTP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /druid/coordinator/v1/rules/history?interval=2023-07-13/2023-07-19 HTTP/1.1\nHost: http://ROUTER_IP:ROUTER_PORT\n")))),(0,l.kt)("h3",{id:"sample-response-4"},"Sample response"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show sample response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n      "key": "social_media",\n      "type": "rules",\n      "auditInfo": {\n          "author": "console",\n          "comment": "test",\n          "ip": "127.0.0.1"\n      },\n      "payload": "[{\\"interval\\":\\"2023-01-01T00:00:00.000Z/2023-02-01T00:00:00.000Z\\",\\"type\\":\\"dropByInterval\\"}]",\n      "auditTime": "2023-07-13T18:05:33.066Z"\n  },\n  {\n      "key": "social_media",\n      "type": "rules",\n      "auditInfo": {\n          "author": "console",\n          "comment": "test",\n          "ip": "127.0.0.1"\n      },\n      "payload": "[]",\n      "auditTime": "2023-07-18T18:10:21.203Z"\n  },\n  {\n      "key": "wikipedia_api",\n      "type": "rules",\n      "auditInfo": {\n          "author": "console",\n          "comment": "test",\n          "ip": "127.0.0.1"\n      },\n      "payload": "[{\\"tieredReplicants\\":{\\"_default_tier\\":2},\\"type\\":\\"loadForever\\"}]",\n      "auditTime": "2023-07-18T18:10:44.519Z"\n  },\n  {\n      "key": "wikipedia_api",\n      "type": "rules",\n      "auditInfo": {\n          "author": "console",\n          "comment": "test",\n          "ip": "127.0.0.1"\n      },\n      "payload": "[]",\n      "auditTime": "2023-07-18T18:11:02.110Z"\n  },\n  {\n      "key": "social_media",\n      "type": "rules",\n      "auditInfo": {\n          "author": "console",\n          "comment": "test",\n          "ip": "127.0.0.1"\n      },\n      "payload": "[{\\"interval\\":\\"2023-07-03T18:49:54.848Z/2023-07-03T18:49:55.861Z\\",\\"type\\":\\"dropByInterval\\"}]",\n      "auditTime": "2023-07-18T18:32:50.060Z"\n  },\n  {\n      "key": "social_media",\n      "type": "rules",\n      "auditInfo": {\n          "author": "console",\n          "comment": "test",\n          "ip": "127.0.0.1"\n      },\n      "payload": "[{\\"interval\\":\\"2020-01-01T00:00:00.000Z/2022-02-01T00:00:00.000Z\\",\\"type\\":\\"dropByInterval\\"}]",\n      "auditTime": "2023-07-18T18:34:09.657Z"\n  },\n  {\n      "key": "social_media",\n      "type": "rules",\n      "auditInfo": {\n          "author": "console",\n          "comment": "test",\n          "ip": "127.0.0.1"\n      },\n      "payload": "[{\\"interval\\":\\"2020-01-01T00:00:00.000Z/2022-02-01T00:00:00.000Z\\",\\"type\\":\\"dropByInterval\\"},{\\"tieredReplicants\\":{\\"_default_tier\\":2},\\"type\\":\\"loadForever\\"}]",\n      "auditTime": "2023-07-18T18:38:37.223Z"\n  },\n  {\n      "key": "social_media",\n      "type": "rules",\n      "auditInfo": {\n          "author": "console",\n          "comment": "test",\n          "ip": "127.0.0.1"\n      },\n      "payload": "[{\\"interval\\":\\"2020-01-01T00:00:00.000Z/2022-02-01T00:00:00.000Z\\",\\"type\\":\\"dropByInterval\\"},{\\"interval\\":\\"2010-01-01T00:00:00.000Z/2020-01-01T00:00:00.000Z\\",\\"tieredReplicants\\":{\\"_default_tier\\":2},\\"type\\":\\"loadByInterval\\"}]",\n      "auditTime": "2023-07-18T18:49:43.964Z"\n  }\n]\n'))))}v.isMDXComponent=!0}}]);