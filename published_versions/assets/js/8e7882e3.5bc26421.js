"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7008],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29634:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],p={id:"http-compression",title:"HTTP compression"},l=void 0,s={unversionedId:"operations/http-compression",id:"operations/http-compression",title:"HTTP compression",description:"\x3c!--",source:"@site/docs/29.0.0/operations/http-compression.md",sourceDirName:"operations",slug:"/operations/http-compression",permalink:"/docs/29.0.0/operations/http-compression",draft:!1,tags:[],version:"current",frontMatter:{id:"http-compression",title:"HTTP compression"},sidebar:"docs",previous:{title:"Mixed workloads",permalink:"/docs/29.0.0/operations/mixed-workloads"},next:{title:"Automated metadata cleanup",permalink:"/docs/29.0.0/operations/clean-metadata-store"}},c={},u=[],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache Druid supports http request decompression and response compression, to use this, http request header ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Encoding:gzip")," and  ",(0,a.kt)("inlineCode",{parentName:"p"},"Accept-Encoding:gzip")," is needed to be set."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.server.http.compressionLevel")),(0,a.kt)("td",{parentName:"tr",align:null},"The compression level. Value should be between ","[-1,9]",", -1 for default level, 0 for no compression."),(0,a.kt)("td",{parentName:"tr",align:null},"-1 (default compression level)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"druid.server.http.inflateBufferSize")),(0,a.kt)("td",{parentName:"tr",align:null},"The buffer size used by gzip decoder. Set to 0 to disable request decompression."),(0,a.kt)("td",{parentName:"tr",align:null},"4096")))))}f.isMDXComponent=!0}}]);