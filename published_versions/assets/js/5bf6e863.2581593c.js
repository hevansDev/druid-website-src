"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,h=p["".concat(o,".").concat(c)]||p[c]||m[c]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},57588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={id:"sql-data-types",title:"SQL data types",sidebar_label:"SQL data types"},o=void 0,u={unversionedId:"querying/sql-data-types",id:"querying/sql-data-types",title:"SQL data types",description:"\x3c!--",source:"@site/docs/29.0.0/querying/sql-data-types.md",sourceDirName:"querying",slug:"/querying/sql-data-types",permalink:"/docs/29.0.0/querying/sql-data-types",draft:!1,tags:[],version:"current",frontMatter:{id:"sql-data-types",title:"SQL data types",sidebar_label:"SQL data types"},sidebar:"docs",previous:{title:"Query from deep storage",permalink:"/docs/29.0.0/querying/query-deep-storage"},next:{title:"Operators",permalink:"/docs/29.0.0/querying/sql-operators"}},d={},p=[{value:"Standard types",id:"standard-types",level:2},{value:"Arrays",id:"arrays",level:2},{value:"Multi-value strings",id:"multi-value-strings",level:2},{value:"Multi-value strings behavior",id:"multi-value-strings-behavior",level:2},{value:"NULL values",id:"null-values",level:2},{value:"Boolean logic",id:"boolean-logic",level:2},{value:"Nested columns",id:"nested-columns",level:2}],m={toc:p},c="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Apache Druid supports two query languages: Druid SQL and ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/"},"native queries"),".\nThis document describes the SQL language.")),(0,i.kt)("p",null,"Druid associates each column with a specific data type. This topic describes supported data types in ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/sql"},"Druid SQL"),"."),(0,i.kt)("h2",{id:"standard-types"},"Standard types"),(0,i.kt)("p",null,"Druid natively supports the following basic column types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LONG: 64-bit signed int"),(0,i.kt)("li",{parentName:"ul"},"FLOAT: 32-bit float"),(0,i.kt)("li",{parentName:"ul"},"DOUBLE: 64-bit float"),(0,i.kt)("li",{parentName:"ul"},"STRING: UTF-8 encoded strings and string arrays"),(0,i.kt)("li",{parentName:"ul"},"COMPLEX: non-standard data types, such as nested JSON, hyperUnique and approxHistogram, and DataSketches"),(0,i.kt)("li",{parentName:"ul"},"ARRAY: arrays composed of any of these types")),(0,i.kt)("p",null,"Druid treats timestamps (including the ",(0,i.kt)("inlineCode",{parentName:"p"},"__time")," column) as LONG, with the value being the number of\nmilliseconds since 1970-01-01 00:00:00 UTC, not counting leap seconds. Therefore, timestamps in Druid do not carry any\ntimezone information. They only carry information about the exact moment in time they represent. See\n",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/sql-scalar#date-and-time-functions"},"Time functions")," for more information about timestamp handling."),(0,i.kt)("p",null,"The following table describes how Druid maps SQL types onto native types when running queries:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"SQL type"),(0,i.kt)("th",{parentName:"tr",align:null},"Druid runtime type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value",(0,i.kt)("sup",null,"*")),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"''")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"''")),(0,i.kt)("td",{parentName:"tr",align:null},"Druid STRING columns are reported as VARCHAR. Can include ",(0,i.kt)("a",{parentName:"td",href:"#multi-value-strings"},"multi-value strings")," as well.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,i.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.0")),(0,i.kt)("td",{parentName:"tr",align:null},"DECIMAL uses floating point, not fixed point math")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,i.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.0")),(0,i.kt)("td",{parentName:"tr",align:null},"Druid FLOAT columns are reported as FLOAT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"REAL"),(0,i.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.0")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,i.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.0")),(0,i.kt)("td",{parentName:"tr",align:null},"Druid DOUBLE columns are reported as DOUBLE")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,i.kt)("td",{parentName:"tr",align:null},"LONG"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,i.kt)("td",{parentName:"tr",align:null},"LONG"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,i.kt)("td",{parentName:"tr",align:null},"LONG"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,i.kt)("td",{parentName:"tr",align:null},"LONG"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,i.kt)("td",{parentName:"tr",align:null},"LONG"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:null},"Druid LONG columns (except ",(0,i.kt)("inlineCode",{parentName:"td"},"__time"),") are reported as BIGINT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,i.kt)("td",{parentName:"tr",align:null},"LONG"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0"),", meaning 1970-01-01 00:00:00 UTC"),(0,i.kt)("td",{parentName:"tr",align:null},"Druid's ",(0,i.kt)("inlineCode",{parentName:"td"},"__time")," column is reported as TIMESTAMP. Casts between string and timestamp types assume standard SQL formatting, such as ",(0,i.kt)("inlineCode",{parentName:"td"},"2000-01-02 03:04:05"),", not ISO 8601 formatting. For handling other formats, use one of the ",(0,i.kt)("a",{parentName:"td",href:"/docs/29.0.0/querying/sql-scalar#date-and-time-functions"},"time functions"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DATE"),(0,i.kt)("td",{parentName:"tr",align:null},"LONG"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0"),", meaning 1970-01-01"),(0,i.kt)("td",{parentName:"tr",align:null},"Casting TIMESTAMP to DATE rounds down the timestamp to the nearest day. Casts between string and date types assume standard SQL formatting","\u2014","for example, ",(0,i.kt)("inlineCode",{parentName:"td"},"2000-01-02"),". For handling other formats, use one of the ",(0,i.kt)("a",{parentName:"td",href:"/docs/29.0.0/querying/sql-scalar#date-and-time-functions"},"time functions"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,i.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NULL")),(0,i.kt)("td",{parentName:"tr",align:null},"Druid native array types work as SQL arrays, and multi-value strings can be converted to arrays. See ",(0,i.kt)("a",{parentName:"td",href:"#arrays"},"Arrays")," for more information.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"OTHER"),(0,i.kt)("td",{parentName:"tr",align:null},"COMPLEX"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"May represent various Druid column types such as hyperUnique, approxHistogram, etc.")))),(0,i.kt)("sup",null,"*"),"The default value is ",(0,i.kt)("code",null,"NULL")," for all types, except in the deprecated legacy mode (",(0,i.kt)("code",null,"druid.generic.useDefaultValueForNull = true"),") which initialize a default value.",(0,i.kt)("br",null),(0,i.kt)("br",null),"For casts between two SQL types, the behavior depends on the runtime type:",(0,i.kt)("p",null,"Casts between two SQL types with the same Druid runtime type have no effect other than the exceptions noted in the table."),(0,i.kt)("p",null,"Casts between two SQL types that have different Druid runtime types generate a runtime cast in Druid."),(0,i.kt)("p",null,"If a value cannot be cast to the target type, as in ",(0,i.kt)("inlineCode",{parentName:"p"},"CAST('foo' AS BIGINT)"),", Druid a substitutes ",(0,i.kt)("a",{parentName:"p",href:"#null-values"},"NULL"),".\nWhen ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.generic.useDefaultValueForNull = true")," (deprecated legacy mode), Druid instead substitutes a default value, including when NULL values cast to non-nullable types. For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.generic.useDefaultValueForNull = true"),", a null VARCHAR cast to BIGINT is converted to a zero."),(0,i.kt)("h2",{id:"arrays"},"Arrays"),(0,i.kt)("p",null,"Druid supports ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/arrays"},(0,i.kt)("inlineCode",{parentName:"a"},"ARRAY")," types"),", which behave as standard SQL arrays, where results are grouped by matching entire arrays. The ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/sql#unnest"},(0,i.kt)("inlineCode",{parentName:"a"},"UNNEST")," operator")," can be used to perform operations on individual array elements, translating each element into a separate row. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY")," typed columns can be stored in segments with JSON-based ingestion using the 'auto' typed dimension schema shared with ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/ingestion/schema-design#schema-auto-discovery-for-dimensions"},"schema auto-discovery")," to detect and ingest arrays as ARRAY typed columns. For ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/multi-stage-query/"},"SQL based ingestion"),", the query context parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"arrayIngestMode")," must be specified as ",(0,i.kt)("inlineCode",{parentName:"p"},'"array"')," to ingest ARRAY types. In Druid 28, the default mode for this parameter is ",(0,i.kt)("inlineCode",{parentName:"p"},'"mvd"')," for backwards compatibility, which instead can only handle ",(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY<STRING>")," which it stores in ",(0,i.kt)("a",{parentName:"p",href:"#multi-value-strings"},"multi-value string columns"),". "),(0,i.kt)("p",null,"You can convert multi-value dimensions to standard SQL arrays explicitly with ",(0,i.kt)("inlineCode",{parentName:"p"},"MV_TO_ARRAY")," or implicitly using ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/sql-array-functions"},"array functions"),". You can also use the array functions to construct arrays from multiple columns."),(0,i.kt)("p",null,"Druid serializes ",(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY")," results as a JSON string of the array by default, which can be controlled by the context parameter\n",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/sql-query-context"},(0,i.kt)("inlineCode",{parentName:"a"},"sqlStringifyArrays")),". When set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and using JSON ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/api-reference/sql-api#responses"},"result formats"),", the arrays will instead be returned as regular JSON arrays instead of in stringified form."),(0,i.kt)("h2",{id:"multi-value-strings"},"Multi-value strings"),(0,i.kt)("p",null,"Druid's native type system allows strings to have multiple values. These ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/multi-value-dimensions"},"multi-value string dimensions")," are reported in SQL as type VARCHAR and can be\nsyntactically used like any other VARCHAR. Regular string functions that refer to multi-value string dimensions are applied to all values for each row individually."),(0,i.kt)("p",null,"You can treat multi-value string dimensions as arrays using special\n",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/sql-multivalue-string-functions"},"multi-value string functions"),", which perform powerful array-aware operations, but retain their VARCHAR type and behavior."),(0,i.kt)("p",null,"Grouping by multi-value dimensions observes the native Druid multi-value aggregation behavior, which is similar to an implicit SQL UNNEST. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/multi-value-dimensions#grouping"},"Grouping")," for more information."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Because the SQL planner treats multi-value dimensions as VARCHAR, there are some inconsistencies between how they are handled in Druid SQL and in native queries. For instance, expressions involving multi-value dimensions may be incorrectly optimized by the Druid SQL planner. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"multi_val_dim = 'a' AND multi_val_dim = 'b'")," is optimized to\n",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", even though it is possible for a single row to have both ",(0,i.kt)("inlineCode",{parentName:"p"},"'a'")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"'b'")," as values for ",(0,i.kt)("inlineCode",{parentName:"p"},"multi_val_dim"),"."),(0,i.kt)("p",{parentName:"admonition"},"The SQL behavior of multi-value dimensions may change in a future release to more closely align with their behavior in native queries, but the ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/sql-multivalue-string-functions"},"multi-value string functions")," should be able to provide nearly all possible native functionality.")),(0,i.kt)("h2",{id:"multi-value-strings-behavior"},"Multi-value strings behavior"),(0,i.kt)("p",null,"The behavior of Druid ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/multi-value-dimensions"},"multi-value string dimensions")," varies depending on the context of\ntheir usage."),(0,i.kt)("p",null,"When used with standard VARCHAR functions which expect a single input value per row, such as CONCAT, Druid will map\nthe function across all values in the row. If the row is null or empty, the function receives ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," as its input."),(0,i.kt)("p",null,"When used with the explicit ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/sql-multivalue-string-functions"},"multi-value string functions"),", Druid processes the\nrow values as if they were ARRAY typed. Any operations which produce null and empty rows are distinguished as\nseparate values (unlike implicit mapping behavior). These multi-value string functions, typically denoted with an ",(0,i.kt)("inlineCode",{parentName:"p"},"MV_"),"\nprefix, retain their VARCHAR type after the computation is complete. Note that Druid multi-value columns do ",(0,i.kt)("em",{parentName:"p"},"not"),"\ndistinguish between empty and null rows. An empty row will never appear natively as input to a multi-valued function,\nbut any multi-value function which manipulates the array form of the value may produce an empty array, which is handled\nseparately while processing."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Do not mix the usage of multi-value functions and normal scalar functions within the same expression, as the planner will be unable\nto determine how to properly process the value given its ambiguous usage. A multi-value string must be treated consistently within\nan expression.")),(0,i.kt)("p",null,"When converted to ARRAY or used with ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/sql-array-functions"},"array functions"),", multi-value strings behave as standard SQL arrays and can no longer\nbe manipulated with non-array functions."),(0,i.kt)("p",null,"By default Druid serializes multi-value VARCHAR results as a JSON string of the array, if grouping was not applied on the value.\nIf the value was grouped, due to the implicit UNNEST behavior, all results will always be standard single value\nVARCHAR. ARRAY typed results serialization is controlled with the context parameter ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/sql-query-context"},(0,i.kt)("inlineCode",{parentName:"a"},"sqlStringifyArrays")),". When set\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and using JSON ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/api-reference/sql-api#responses"},"result formats"),", the arrays will instead be returned\nas regular JSON arrays instead of in stringified form."),(0,i.kt)("h2",{id:"null-values"},"NULL values"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/configuration/#sql-compatible-null-handling"},(0,i.kt)("inlineCode",{parentName:"a"},"druid.generic.useDefaultValueForNull")),"\nruntime property controls Druid's NULL handling mode. For the most SQL compliant behavior, set this to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," (the default)."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.generic.useDefaultValueForNull = false")," (the default), NULLs are treated more closely to the SQL standard. In this mode,\nnumeric NULL is permitted, and NULLs and empty strings are no longer treated as interchangeable. This property\naffects both storage and querying, and must be set on all Druid service types to be available at both ingestion time\nand query time. There is some overhead associated with the ability to handle NULLs; see\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/design/segments#handling-null-values"},"segment internals")," documentation for more details."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.generic.useDefaultValueForNull = true")," (deprecated legacy mode), Druid treats NULLs and empty strings\ninterchangeably, rather than according to the SQL standard. In this mode Druid SQL only has partial support for NULLs.\nFor example, the expressions ",(0,i.kt)("inlineCode",{parentName:"p"},"col IS NULL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"col = ''")," are equivalent, and both evaluate to true if ",(0,i.kt)("inlineCode",{parentName:"p"},"col")," contains\nan empty string. Similarly, the expression ",(0,i.kt)("inlineCode",{parentName:"p"},"COALESCE(col1, col2)")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"col2")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"col1")," is an empty string. While\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT(*)")," aggregator counts all rows, the ",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT(expr)")," aggregator counts the number of rows where ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," is\nneither null nor the empty string. Numeric columns in this mode are not nullable; any null or missing values are\ntreated as zeroes. This was the default prior to Druid 28.0.0, but will be removed in a future release so that Druid\nalways behaves in an SQL compatible manner."),(0,i.kt)("h2",{id:"boolean-logic"},"Boolean logic"),(0,i.kt)("p",null,"By default, Druid uses ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Three-valued_logic#SQL"},"SQL three-valued logic")," for filter processing\nand boolean expression evaluation. This behavior relies on three settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/29.0.0/configuration/#sql-compatible-null-handling"},(0,i.kt)("inlineCode",{parentName:"a"},"druid.generic.useDefaultValueForNull"))," must be set to false (default), a runtime property which allows NULL values to exist in numeric columns and expressions, and string typed columns to distinguish between NULL and the empty string "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/29.0.0/configuration/#expression-processing-configurations"},(0,i.kt)("inlineCode",{parentName:"a"},"druid.expressions.useStrictBooleans"))," must be set to true (default), a runtime property controls Druid's boolean logic mode for expressions, as well as coercing all expression boolean values to be represented with a 1 for true and 0 for false"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/29.0.0/configuration/#sql-compatible-null-handling"},(0,i.kt)("inlineCode",{parentName:"a"},"druid.generic.useThreeValueLogicForNativeFilters"))," must be set to true (default), a runtime property which decouples three-value logic handling from ",(0,i.kt)("inlineCode",{parentName:"li"},"druid.generic.useDefaultValueForNull")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"druid.expressions.useStrictBooleans")," for backwards compatibility with older versions of Druid that did not fully support SQL compatible null value logic handling")),(0,i.kt)("p",null,"If any of these settings is configured with a non-default value, Druid will use two-valued logic for non-expression based filters. Expression based filters are controlled independently with ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.expressions.useStrictBooleans"),", which if set to false Druid will use two-valued logic for expressions."),(0,i.kt)("p",null,"These configurations have been deprecated and will be removed in a future release so that Druid always has SQL compliant behavior."),(0,i.kt)("h2",{id:"nested-columns"},"Nested columns"),(0,i.kt)("p",null,"Druid supports storing nested data structures in segments using the native ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPLEX<json>")," type. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/nested-columns"},"Nested columns")," for more information."),(0,i.kt)("p",null,"You can interact with nested data using ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.0/querying/sql-json-functions"},"JSON functions"),", which can extract nested values, parse from string, serialize to string, and create new ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPLEX<json>")," structures."),(0,i.kt)("p",null,"COMPLEX types have limited functionality outside the specialized functions that use them, so their behavior is undefined when:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Grouping on complex values."),(0,i.kt)("li",{parentName:"ul"},"Filtering directly on complex values."),(0,i.kt)("li",{parentName:"ul"},"Used as inputs to aggregators without specialized handling for a specific complex type.")),(0,i.kt)("p",null,"In many cases, functions are provided to translate COMPLEX value types to STRING, which serves as a workaround solution until COMPLEX type functionality can be improved."))}h.isMDXComponent=!0}}]);