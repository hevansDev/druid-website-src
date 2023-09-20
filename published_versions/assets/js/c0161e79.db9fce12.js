"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(n),d=i,h=p["".concat(l,".").concat(d)]||p[d]||c[d]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={id:"segments",title:"Segments"},l=void 0,m={unversionedId:"design/segments",id:"design/segments",title:"Segments",description:"\x3c!--",source:"@site/docs/latest/design/segments.md",sourceDirName:"design",slug:"/design/segments",permalink:"/docs/latest/design/segments",draft:!1,tags:[],version:"current",frontMatter:{id:"segments",title:"Segments"},sidebar:"docs",previous:{title:"Design",permalink:"/docs/latest/design/architecture"},next:{title:"Processes and servers",permalink:"/docs/latest/design/processes"}},u={},p=[{value:"Segment file structure",id:"segment-file-structure",level:2},{value:"Handling null values",id:"handling-null-values",level:2},{value:"Segments with different schemas",id:"segments-with-different-schemas",level:2},{value:"Column format",id:"column-format",level:2},{value:"Multi-value columns",id:"multi-value-columns",level:3},{value:"Compression",id:"compression",level:2},{value:"Segment identification",id:"segment-identification",level:2},{value:"Segment ID examples",id:"segment-id-examples",level:3},{value:"Sharding",id:"sharding",level:2},{value:"Segment components",id:"segment-components",level:2},{value:"Implications of updating segments",id:"implications-of-updating-segments",level:2}],c={toc:p},d="wrapper";function h(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)(d,(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Druid stores its data and indexes in ",(0,o.kt)("em",{parentName:"p"},"segment files")," partitioned by time. Druid creates a segment for each segment interval that contains data. If an interval is empty\u2014that is, containing no rows\u2014no segment exists for that time interval. Druid may create multiple segments for the same interval if you ingest data for that period via different ingestion jobs. ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/data-management/compaction"},"Compaction")," is the Druid process that attempts to combine these segments into a single segment per interval for optimal performance."),(0,o.kt)("p",null,"The time interval is configurable in the ",(0,o.kt)("inlineCode",{parentName:"p"},"segmentGranularity")," parameter of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/ingestion-spec#granularityspec"},(0,o.kt)("inlineCode",{parentName:"a"},"granularitySpec")),"."),(0,o.kt)("p",null,"For Druid to operate well under heavy query load, it is important for the segment\nfile size to be within the recommended range of 300-700 MB. If your\nsegment files are larger than this range, then consider either\nchanging the granularity of the segment time interval or partitioning your\ndata and/or adjusting the ",(0,o.kt)("inlineCode",{parentName:"p"},"targetRowsPerSegment")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"partitionsSpec"),'.\nA good starting point for this parameter is 5 million rows.\nSee the Sharding section below and the "Partitioning specification" section of\nthe ',(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/hadoop#partitionsspec"},"Batch ingestion")," documentation\nfor more guidance."),(0,o.kt)("h2",{id:"segment-file-structure"},"Segment file structure"),(0,o.kt)("p",null,"Segment files are ",(0,o.kt)("em",{parentName:"p"},"columnar"),": the data for each column is laid out in\nseparate data structures. By storing each column separately, Druid decreases query latency by scanning only those columns actually needed for a query. There are three basic column types: timestamp, dimensions, and metrics:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Druid column types",src:n(88400).Z,title:"Druid Column Types",width:"1936",height:"400"})),(0,o.kt)("p",null,"Timestamp and metrics type columns are arrays of integer or floating point values compressed with\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lz4/lz4-java"},"LZ4"),". Once a query identifies which rows to select, it decompresses them, pulls out the relevant rows, and applies the\ndesired aggregation operator. If a query doesn\u2019t require a column, Druid skips over that column's data."),(0,o.kt)("p",null,"Dimension columns are different because they support filter and\ngroup-by operations, so each dimension requires the following\nthree data structures:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dictionary"),": Maps values (which are always treated as strings) to integer IDs, allowing compact representation of the list and bitmap values."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"List"),": The column\u2019s values, encoded using the dictionary. Required for GroupBy and TopN queries. These operators allow queries that solely aggregate metrics based on filters to run without accessing the list of values."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bitmap"),": One bitmap for each distinct value in the column, to indicate which rows contain that value. Bitmaps allow for quick filtering operations because they are convenient for quickly applying AND and OR operators. Also known as inverted indexes.")),(0,o.kt)("p",null,'To get a better sense of these data structures, consider the "Page" column from the example data above, represented by the following data structures:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'1: Dictionary\n   {\n    "Justin Bieber": 0,\n    "Ke$ha":         1\n   }\n\n2: List of column data\n   [0,\n   0,\n   1,\n   1]\n\n3: Bitmaps\n   value="Justin Bieber": [1,1,0,0]\n   value="Ke$ha":         [0,0,1,1]\n')),(0,o.kt)("p",null,"Note that the bitmap is different from the dictionary and list data structures: the dictionary and list grow linearly with the size of the data, but the size of the bitmap section is the product of data size and column cardinality. That is, there is one bitmap per separate column value. Columns with the same value share the same bitmap."),(0,o.kt)("p",null,"For each row in the list of column data, there is only a single bitmap that has a non-zero entry. This means that high cardinality columns have extremely sparse, and therefore highly compressible, bitmaps. Druid exploits this using compression algorithms that are specially suited for bitmaps, such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RoaringBitmap/RoaringBitmap"},"Roaring bitmap compression"),"."),(0,o.kt)("h2",{id:"handling-null-values"},"Handling null values"),(0,o.kt)("p",null,"By default, Druid string dimension columns use the values ",(0,o.kt)("inlineCode",{parentName:"p"},"''")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," interchangeably. Numeric and metric columns cannot represent ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," but use nulls to mean ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),". However, Druid provides a SQL compatible null handling mode, which you can enable at the system level through ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.generic.useDefaultValueForNull"),". This setting, when set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", allows Druid to create segments ",(0,o.kt)("em",{parentName:"p"},"at ingestion time")," in which the following occurs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"String columns can distinguish ",(0,o.kt)("inlineCode",{parentName:"li"},"''")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),","),(0,o.kt)("li",{parentName:"ul"},"Numeric columns can represent ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," valued rows instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,o.kt)("p",null,"String dimension columns contain no additional column structures in SQL compatible null handling mode. Instead, they reserve an additional dictionary entry for the ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," value. Numeric columns are stored in the segment with an additional bitmap in which the set bits indicate ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"-valued rows. "),(0,o.kt)("p",null,"In addition to slightly increased segment sizes, SQL compatible null handling can incur a performance cost at query time, due to the need to check the null bitmap. This performance cost only occurs for columns that actually contain null values."),(0,o.kt)("h2",{id:"segments-with-different-schemas"},"Segments with different schemas"),(0,o.kt)("p",null,"Druid segments for the same datasource may have different schemas. If a string column (dimension) exists in one segment but not another, queries that involve both segments still work. In default mode, queries for the segment without the dimension behave as if the dimension contains only blank values. In SQL-compatible mode, queries for the segment without the dimension behave as if the dimension contains only null values. Similarly, if one segment has a numeric column (metric) but another does not, queries on the segment without the metric generally operate as expected. Aggregations over the missing metric operate as if the metric doesn't exist."),(0,o.kt)("h2",{id:"column-format"},"Column format"),(0,o.kt)("p",null,"Each column is stored as two parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Jackson-serialized ",(0,o.kt)("inlineCode",{parentName:"li"},"ColumnDescriptor"),"."),(0,o.kt)("li",{parentName:"ul"},"The binary data for the column.")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"ColumnDescriptor")," is  Jackson-serialized instance of the internal Druid ",(0,o.kt)("inlineCode",{parentName:"p"},"ColumnDescriptor")," class . It allows the use of Jackson's polymorphic deserialization to add new and interesting methods of serialization with minimal impact to the code. It consists of some metadata about the column (for example: type, whether it's multi-value) and a list of serialization/deserialization logic that can deserialize the rest of the binary."),(0,o.kt)("h3",{id:"multi-value-columns"},"Multi-value columns"),(0,o.kt)("p",null,"A multi-value column allows a single row to contain multiple strings for a column. You can think of it as an array of strings. If a datasource uses multi-value columns, then the data structures within the segment files look a bit different. Let's imagine that in the example above, the second row is tagged with both the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ke$ha")," ",(0,o.kt)("em",{parentName:"p"},"and")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Justin Bieber")," topics, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'1: Dictionary\n   {\n    "Justin Bieber": 0,\n    "Ke$ha":         1\n   }\n\n2: List of column data\n   [0,\n   [0,1],  <--Row value in a multi-value column can contain an array of values\n   1,\n   1]\n\n3: Bitmaps\n   value="Justin Bieber": [1,1,0,0]\n   value="Ke$ha":         [0,1,1,1]\n                            ^\n                            |\n                            |\n   Multi-value column contains multiple non-zero entries\n')),(0,o.kt)("p",null,"Note the changes to the second row in the list of column data and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ke$ha"),"\nbitmap. If a row has more than one value for a column, its entry in\nthe list is an array of values. Additionally, a row with ",(0,o.kt)("em",{parentName:"p"},"n")," values in the list has ",(0,o.kt)("em",{parentName:"p"},"n")," non-zero valued entries in bitmaps."),(0,o.kt)("h2",{id:"compression"},"Compression"),(0,o.kt)("p",null,"Druid uses LZ4 by default to compress blocks of values for string, long, float, and double columns. Druid uses Roaring to compress bitmaps for string columns and numeric null values. We recommend that you use these defaults unless you've experimented with your data and query patterns suggest that non-default options will perform better in your specific case. "),(0,o.kt)("p",null,"Druid also supports Concise bitmap compression. For string column bitmaps, the differences between using Roaring and Concise are most pronounced for high cardinality columns. In this case, Roaring is substantially faster on filters that match many values, but in some cases Concise can have a lower footprint due to the overhead of the Roaring format (but is still slower when many values are matched). You configure compression at the segment level, not for individual columns. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/ingestion-spec#indexspec"},"IndexSpec")," for more details."),(0,o.kt)("h2",{id:"segment-identification"},"Segment identification"),(0,o.kt)("p",null,"Segment identifiers typically contain the segment datasource, interval start time (in ISO 8601 format), interval end time (in ISO 8601 format), and version information. If data is additionally sharded beyond a time range, the segment identifier also contains a partition number:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"datasource_intervalStart_intervalEnd_version_partitionNum")),(0,o.kt)("h3",{id:"segment-id-examples"},"Segment ID examples"),(0,o.kt)("p",null,"The increasing partition numbers in the following segments indicate that multiple segments exist for the same interval:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foo_2015-01-01/2015-01-02_v1_0\nfoo_2015-01-01/2015-01-02_v1_1\nfoo_2015-01-01/2015-01-02_v1_2\n")),(0,o.kt)("p",null,"If you reindex the data with a new schema, Druid allocates a new version ID to the newly created segments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foo_2015-01-01/2015-01-02_v2_0\nfoo_2015-01-01/2015-01-02_v2_1\nfoo_2015-01-01/2015-01-02_v2_2\n")),(0,o.kt)("h2",{id:"sharding"},"Sharding"),(0,o.kt)("p",null,"Multiple segments can exist for a single time interval and datasource. These segments form a ",(0,o.kt)("inlineCode",{parentName:"p"},"block")," for an interval. Depending on the type of ",(0,o.kt)("inlineCode",{parentName:"p"},"shardSpec")," used to shard the data, Druid queries may only complete if a ",(0,o.kt)("inlineCode",{parentName:"p"},"block")," is complete. For example, if a block consists of the following three segments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sampleData_2011-01-01T02:00:00:00Z_2011-01-01T03:00:00:00Z_v1_0\nsampleData_2011-01-01T02:00:00:00Z_2011-01-01T03:00:00:00Z_v1_1\nsampleData_2011-01-01T02:00:00:00Z_2011-01-01T03:00:00:00Z_v1_2\n")),(0,o.kt)("p",null,"All three segments must load before a query for the interval ",(0,o.kt)("inlineCode",{parentName:"p"},"2011-01-01T02:00:00:00Z_2011-01-01T03:00:00:00Z")," can complete."),(0,o.kt)("p",null,'Linear shard specs are an exception to this rule. Linear shard specs do not enforce "completeness" so queries can complete even if shards are not completely loaded.'),(0,o.kt)("p",null,"For example, if a real-time ingestion creates three segments that were sharded with linear shard spec, and only two of the segments are loaded, queries return results for those two segments."),(0,o.kt)("h2",{id:"segment-components"},"Segment components"),(0,o.kt)("p",null,"A segment contains several files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"version.bin")),(0,o.kt)("p",{parentName:"li"},"  4 bytes representing the current segment version as an integer. For example, for v9 segments the version is 0x0, 0x0, 0x0, 0x9.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"meta.smoosh")),(0,o.kt)("p",{parentName:"li"},"  A file containing metadata (filenames and offsets) about the contents of the other ",(0,o.kt)("inlineCode",{parentName:"p"},"smoosh")," files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"XXXXX.smoosh")),(0,o.kt)("p",{parentName:"li"},"  Smoosh (",(0,o.kt)("inlineCode",{parentName:"p"},".smoosh"),") files contain concatenated binary data. This file consolidation reduces the number of file descriptors that must be open when accessing data. The files are 2 GB or less in size to remain within the limit of a memory-mapped ",(0,o.kt)("inlineCode",{parentName:"p"},"ByteBuffer")," in Java.\nSmoosh files contain the following: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Individual files for each column in the data, including one for the ",(0,o.kt)("inlineCode",{parentName:"li"},"__time")," column that refers to the timestamp of the segment. "),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("inlineCode",{parentName:"li"},"index.drd")," file that contains additional segment metadata.")))),(0,o.kt)("p",null,"In the codebase, segments have an internal format version. The current segment format version is ",(0,o.kt)("inlineCode",{parentName:"p"},"v9"),"."),(0,o.kt)("h2",{id:"implications-of-updating-segments"},"Implications of updating segments"),(0,o.kt)("p",null,"Druid uses versioning to manage updates to create a form of multi-version concurrency control (MVCC). These MVCC versions are distinct from the segment format version discussed above."),(0,o.kt)("p",null,"Note that updates that span multiple segment intervals are only atomic within each interval. They are not atomic across the entire update. For example, if you have the following segments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foo_2015-01-01/2015-01-02_v1_0\nfoo_2015-01-02/2015-01-03_v1_1\nfoo_2015-01-03/2015-01-04_v1_2\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"v2")," segments are loaded into the cluster as soon as they are built and replace ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," segments for the period of time the segments overlap. Before ",(0,o.kt)("inlineCode",{parentName:"p"},"v2")," segments are completely loaded, the cluster may contain a mixture of ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"v2")," segments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foo_2015-01-01/2015-01-02_v1_0\nfoo_2015-01-02/2015-01-03_v2_1\nfoo_2015-01-03/2015-01-04_v1_2\n")),(0,o.kt)("p",null,"In this case, queries may hit a mixture of ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"v2")," segments."))}h.isMDXComponent=!0},88400:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/druid-column-types-0cd9a011b4cc2b4d05f93b3b31a7e735.png"}}]);