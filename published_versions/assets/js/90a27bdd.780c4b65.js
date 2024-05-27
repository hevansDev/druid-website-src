"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[144],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=i,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73067:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],l={id:"tutorial-update-data",title:"Update existing data",sidebar_label:"Update existing data"},s=void 0,d={unversionedId:"tutorials/tutorial-update-data",id:"tutorials/tutorial-update-data",title:"Update existing data",description:"\x3c!--",source:"@site/docs/29.0.0/tutorials/tutorial-update-data.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-update-data",permalink:"/docs/29.0.0/tutorials/tutorial-update-data",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-update-data",title:"Update existing data",sidebar_label:"Update existing data"},sidebar:"docs",previous:{title:"Configure data retention",permalink:"/docs/29.0.0/tutorials/tutorial-retention"},next:{title:"Compact segments",permalink:"/docs/29.0.0/tutorials/tutorial-compaction"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Load initial data",id:"load-initial-data",level:2},{value:"Overwrite data",id:"overwrite-data",level:2},{value:"Combine existing data with new data and overwrite",id:"combine-existing-data-with-new-data-and-overwrite",level:2},{value:"Append data",id:"append-data",level:2}],c={toc:p},m="wrapper";function k(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial shows you how to update data in a datasource by overwriting existing data and adding new data to the datasource."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before starting this tutorial, download and run Apache Druid on your local machine as described in\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/29.0.0/tutorials/"},"single-machine quickstart"),"."),(0,r.kt)("p",null,"You should also be familiar with the material in the following tutorials:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/29.0.0/tutorials/tutorial-batch"},"Load a file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/29.0.0/tutorials/tutorial-query"},"Query data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/29.0.0/tutorials/tutorial-rollup"},"Rollup"))),(0,r.kt)("h2",{id:"load-initial-data"},"Load initial data"),(0,r.kt)("p",null,"Load an initial data set to which you will overwrite and append data."),(0,r.kt)("p",null,"The ingestion spec is located at ",(0,r.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/updates-init-index.json"),". This spec creates a datasource called ",(0,r.kt)("inlineCode",{parentName:"p"},"updates-tutorial")," and ingests data from ",(0,r.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/updates-data.json"),"."),(0,r.kt)("p",null,"Submit the ingestion task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/post-index-task --file quickstart/tutorial/updates-init-index.json --url http://localhost:8081\n")),(0,r.kt)("p",null,"Start the SQL command-line client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/dsql\n")),(0,r.kt)("p",null,"Run the following SQL query to retrieve data from ",(0,r.kt)("inlineCode",{parentName:"p"},"updates-tutorial"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'dsql> SELECT * FROM "updates-tutorial";\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 __time                   \u2502 animal   \u2502 count \u2502 number \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2018-01-01T01:01:00.000Z \u2502 tiger    \u2502     1 \u2502    100 \u2502\n\u2502 2018-01-01T03:01:00.000Z \u2502 aardvark \u2502     1 \u2502     42 \u2502\n\u2502 2018-01-01T03:01:00.000Z \u2502 giraffe  \u2502     1 \u2502  14124 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nRetrieved 3 rows in 1.42s.\n')),(0,r.kt)("p",null,"The datasource contains three rows of data with an ",(0,r.kt)("inlineCode",{parentName:"p"},"animal")," dimension and a ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," metric."),(0,r.kt)("h2",{id:"overwrite-data"},"Overwrite data"),(0,r.kt)("p",null,"To overwrite the data, submit another task for the same interval but with different input data."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/updates-overwrite-index.json")," spec performs an overwrite on the ",(0,r.kt)("inlineCode",{parentName:"p"},"updates-tutorial")," datasource."),(0,r.kt)("p",null,"In the overwrite ingestion spec, notice the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"intervals")," field remains the same: ",(0,r.kt)("inlineCode",{parentName:"li"},'"intervals" : ["2018-01-01/2018-01-03"]')),(0,r.kt)("li",{parentName:"ul"},"New data is loaded from the local file, ",(0,r.kt)("inlineCode",{parentName:"li"},"quickstart/tutorial/updates-data2.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"appendToExisting")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", indicating an overwrite task")),(0,r.kt)("p",null,"Submit the ingestion task to overwrite the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/post-index-task --file quickstart/tutorial/updates-overwrite-index.json --url http://localhost:8081\n")),(0,r.kt)("p",null,"When Druid finishes loading the new segment from this overwrite task, run the SELECT query again.\nIn the new results, the ",(0,r.kt)("inlineCode",{parentName:"p"},"tiger")," row now has the value ",(0,r.kt)("inlineCode",{parentName:"p"},"lion"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"aardvark")," row has a different number, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"giraffe")," row has been replaced with a ",(0,r.kt)("inlineCode",{parentName:"p"},"bear")," row."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'dsql> SELECT * FROM "updates-tutorial";\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 __time                   \u2502 animal   \u2502 count \u2502 number \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2018-01-01T01:01:00.000Z \u2502 lion     \u2502     1 \u2502    100 \u2502\n\u2502 2018-01-01T03:01:00.000Z \u2502 aardvark \u2502     1 \u2502   9999 \u2502\n\u2502 2018-01-01T04:01:00.000Z \u2502 bear     \u2502     1 \u2502    111 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nRetrieved 3 rows in 0.02s.\n')),(0,r.kt)("h2",{id:"combine-existing-data-with-new-data-and-overwrite"},"Combine existing data with new data and overwrite"),(0,r.kt)("p",null,"Now append new data to the ",(0,r.kt)("inlineCode",{parentName:"p"},"updates-tutorial")," datasource from ",(0,r.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/updates-data3.json")," using the ingestion spec ",(0,r.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/updates-append-index.json"),"."),(0,r.kt)("p",null,"The spec directs Druid to read from the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"updates-tutorial")," datasource as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/updates-data3.json")," file. The task combines data from the two input sources, then overwrites the original data with the new combined data."),(0,r.kt)("p",null,"Submit that task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/post-index-task --file quickstart/tutorial/updates-append-index.json --url http://localhost:8081\n")),(0,r.kt)("p",null,"When Druid finishes loading the new segment from this overwrite task, it adds the new rows to the datasource.\nRun the SELECT query again. Druid automatically rolls up the data at ingestion time, aggregating the data in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lion")," row:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'dsql> SELECT * FROM "updates-tutorial";\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 __time                   \u2502 animal   \u2502 count \u2502 number \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2018-01-01T01:01:00.000Z \u2502 lion     \u2502     2 \u2502    400 \u2502\n\u2502 2018-01-01T03:01:00.000Z \u2502 aardvark \u2502     1 \u2502   9999 \u2502\n\u2502 2018-01-01T04:01:00.000Z \u2502 bear     \u2502     1 \u2502    111 \u2502\n\u2502 2018-01-01T05:01:00.000Z \u2502 mongoose \u2502     1 \u2502    737 \u2502\n\u2502 2018-01-01T06:01:00.000Z \u2502 snake    \u2502     1 \u2502   1234 \u2502\n\u2502 2018-01-01T07:01:00.000Z \u2502 octopus  \u2502     1 \u2502    115 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nRetrieved 6 rows in 0.02s.\n')),(0,r.kt)("h2",{id:"append-data"},"Append data"),(0,r.kt)("p",null,"Now you append data to the datasource without changing the existing data.\nUse the ingestion spec located at ",(0,r.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/updates-append-index2.json"),"."),(0,r.kt)("p",null,"The spec directs Druid to ingest data from ",(0,r.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/updates-data4.json")," and append it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"updates-tutorial")," datasource. The property ",(0,r.kt)("inlineCode",{parentName:"p"},"appendToExisting")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in this spec."),(0,r.kt)("p",null,"Submit the task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/post-index-task --file quickstart/tutorial/updates-append-index2.json --url http://localhost:8081\n")),(0,r.kt)("p",null,"Druid adds two additional rows after ",(0,r.kt)("inlineCode",{parentName:"p"},"octopus"),". When the task completes, query the data again to see them.\nDruid doesn't roll up the new ",(0,r.kt)("inlineCode",{parentName:"p"},"bear")," row with the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"bear")," row because it stored the new data in a separate segment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'dsql> SELECT * FROM "updates-tutorial";\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 __time                   \u2502 animal   \u2502 count \u2502 number \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2018-01-01T01:01:00.000Z \u2502 lion     \u2502     2 \u2502    400 \u2502\n\u2502 2018-01-01T03:01:00.000Z \u2502 aardvark \u2502     1 \u2502   9999 \u2502\n\u2502 2018-01-01T04:01:00.000Z \u2502 bear     \u2502     1 \u2502    111 \u2502\n\u2502 2018-01-01T05:01:00.000Z \u2502 mongoose \u2502     1 \u2502    737 \u2502\n\u2502 2018-01-01T06:01:00.000Z \u2502 snake    \u2502     1 \u2502   1234 \u2502\n\u2502 2018-01-01T07:01:00.000Z \u2502 octopus  \u2502     1 \u2502    115 \u2502\n\u2502 2018-01-01T04:01:00.000Z \u2502 bear     \u2502     1 \u2502    222 \u2502\n\u2502 2018-01-01T09:01:00.000Z \u2502 falcon   \u2502     1 \u2502   1241 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nRetrieved 8 rows in 0.02s.\n')),(0,r.kt)("p",null,"Run the following groupBy query to see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"bear")," rows group together at query time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'dsql> SELECT __time, animal, SUM("count"), SUM("number") FROM "updates-tutorial" GROUP BY __time, animal;\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 __time                   \u2502 animal   \u2502 EXPR$2 \u2502 EXPR$3 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2018-01-01T01:01:00.000Z \u2502 lion     \u2502      2 \u2502    400 \u2502\n\u2502 2018-01-01T03:01:00.000Z \u2502 aardvark \u2502      1 \u2502   9999 \u2502\n\u2502 2018-01-01T04:01:00.000Z \u2502 bear     \u2502      2 \u2502    333 \u2502\n\u2502 2018-01-01T05:01:00.000Z \u2502 mongoose \u2502      1 \u2502    737 \u2502\n\u2502 2018-01-01T06:01:00.000Z \u2502 snake    \u2502      1 \u2502   1234 \u2502\n\u2502 2018-01-01T07:01:00.000Z \u2502 octopus  \u2502      1 \u2502    115 \u2502\n\u2502 2018-01-01T09:01:00.000Z \u2502 falcon   \u2502      1 \u2502   1241 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nRetrieved 7 rows in 0.23s.\n')))}k.isMDXComponent=!0}}]);