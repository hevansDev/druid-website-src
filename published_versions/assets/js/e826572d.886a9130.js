"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"hdfs",title:"HDFS"},s=void 0,p={unversionedId:"development/extensions-core/hdfs",id:"development/extensions-core/hdfs",title:"HDFS",description:"\x3c!--",source:"@site/docs/29.0.0/development/extensions-core/hdfs.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/hdfs",permalink:"/docs/29.0.0/development/extensions-core/hdfs",draft:!1,tags:[],version:"current",frontMatter:{id:"hdfs",title:"HDFS"}},d={},u=[{value:"Deep Storage",id:"deep-storage",level:2},{value:"Configuration for HDFS",id:"configuration-for-hdfs",level:3},{value:"Configuration for Cloud Storage",id:"configuration-for-cloud-storage",level:3},{value:"Configuration for AWS S3",id:"configuration-for-aws-s3",level:4},{value:"Configuration for Google Cloud Storage",id:"configuration-for-google-cloud-storage",level:4},{value:"Reading data from HDFS or Cloud Storage",id:"reading-data-from-hdfs-or-cloud-storage",level:2},{value:"Native batch ingestion",id:"native-batch-ingestion",level:3},{value:"Hadoop-based ingestion",id:"hadoop-based-ingestion",level:3}],c={toc:u},m="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To use this Apache Druid extension, ",(0,r.kt)("a",{parentName:"p",href:"/docs/29.0.0/configuration/extensions#loading-extensions"},"include")," ",(0,r.kt)("inlineCode",{parentName:"p"},"druid-hdfs-storage")," in the extensions load list and run druid processes with ",(0,r.kt)("inlineCode",{parentName:"p"},"GOOGLE_APPLICATION_CREDENTIALS=/path/to/service_account_keyfile")," in the environment."),(0,r.kt)("h2",{id:"deep-storage"},"Deep Storage"),(0,r.kt)("h3",{id:"configuration-for-hdfs"},"Configuration for HDFS"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.storage.type")),(0,r.kt)("td",{parentName:"tr",align:null},"hdfs"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.storage.storageDirectory")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Directory for storing segments."),(0,r.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.hadoop.security.kerberos.principal")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid@EXAMPLE.COM")),(0,r.kt)("td",{parentName:"tr",align:null},"Principal user name"),(0,r.kt)("td",{parentName:"tr",align:null},"empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.hadoop.security.kerberos.keytab")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/etc/security/keytabs/druid.headlessUser.keytab")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to keytab file"),(0,r.kt)("td",{parentName:"tr",align:null},"empty")))),(0,r.kt)("p",null,"Besides the above settings, you also need to include all Hadoop configuration files (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"core-site.xml"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hdfs-site.xml"),")\nin the Druid classpath. One way to do this is copying all those files under ",(0,r.kt)("inlineCode",{parentName:"p"},"${DRUID_HOME}/conf/_common"),"."),(0,r.kt)("p",null,"If you are using the Hadoop ingestion, set your output directory to be a location on Hadoop and it will work.\nIf you want to eagerly authenticate against a secured hadoop/hdfs cluster you must set ",(0,r.kt)("inlineCode",{parentName:"p"},"druid.hadoop.security.kerberos.principal")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"druid.hadoop.security.kerberos.keytab"),", this is an alternative to the cron job method that runs ",(0,r.kt)("inlineCode",{parentName:"p"},"kinit")," command periodically."),(0,r.kt)("h3",{id:"configuration-for-cloud-storage"},"Configuration for Cloud Storage"),(0,r.kt)("p",null,"You can also use the AWS S3 or the Google Cloud Storage as the deep storage via HDFS."),(0,r.kt)("h4",{id:"configuration-for-aws-s3"},"Configuration for AWS S3"),(0,r.kt)("p",null,"To use the AWS S3 as the deep storage, you need to configure ",(0,r.kt)("inlineCode",{parentName:"p"},"druid.storage.storageDirectory")," properly."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.storage.type")),(0,r.kt)("td",{parentName:"tr",align:null},"hdfs"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.storage.storageDirectory")),(0,r.kt)("td",{parentName:"tr",align:null},"s3a://bucket/example/directory or s3n://bucket/example/directory"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the deep storage"),(0,r.kt)("td",{parentName:"tr",align:null},"Must be set.")))),(0,r.kt)("p",null,"You also need to include the ",(0,r.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/"},"Hadoop AWS module"),", especially the ",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop-aws.jar")," in the Druid classpath.\nRun the below command to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop-aws.jar")," file under ",(0,r.kt)("inlineCode",{parentName:"p"},"${DRUID_HOME}/extensions/druid-hdfs-storage")," in all nodes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'${DRUID_HOME}/bin/run-java -classpath "${DRUID_HOME}/lib/*" org.apache.druid.cli.Main tools pull-deps -h "org.apache.hadoop:hadoop-aws:${HADOOP_VERSION}";\ncp ${DRUID_HOME}/hadoop-dependencies/hadoop-aws/${HADOOP_VERSION}/hadoop-aws-${HADOOP_VERSION}.jar ${DRUID_HOME}/extensions/druid-hdfs-storage/\n')),(0,r.kt)("p",null,"Finally, you need to add the below properties in the ",(0,r.kt)("inlineCode",{parentName:"p"},"core-site.xml"),".\nFor more configurations, see the ",(0,r.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/"},"Hadoop AWS module"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n  <name>fs.s3a.impl</name>\n  <value>org.apache.hadoop.fs.s3a.S3AFileSystem</value>\n  <description>The implementation class of the S3A Filesystem</description>\n</property>\n\n<property>\n  <name>fs.AbstractFileSystem.s3a.impl</name>\n  <value>org.apache.hadoop.fs.s3a.S3A</value>\n  <description>The implementation class of the S3A AbstractFileSystem.</description>\n</property>\n\n<property>\n  <name>fs.s3a.access.key</name>\n  <description>AWS access key ID. Omit for IAM role-based or provider-based authentication.</description>\n  <value>your access key</value>\n</property>\n\n<property>\n  <name>fs.s3a.secret.key</name>\n  <description>AWS secret key. Omit for IAM role-based or provider-based authentication.</description>\n  <value>your secret key</value>\n</property>\n")),(0,r.kt)("h4",{id:"configuration-for-google-cloud-storage"},"Configuration for Google Cloud Storage"),(0,r.kt)("p",null,"To use the Google Cloud Storage as the deep storage, you need to configure ",(0,r.kt)("inlineCode",{parentName:"p"},"druid.storage.storageDirectory")," properly."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.storage.type")),(0,r.kt)("td",{parentName:"tr",align:null},"hdfs"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.storage.storageDirectory")),(0,r.kt)("td",{parentName:"tr",align:null},"gs://bucket/example/directory"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the deep storage"),(0,r.kt)("td",{parentName:"tr",align:null},"Must be set.")))),(0,r.kt)("p",null,"All services that need to access GCS need to have the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/dataproc/docs/concepts/connectors/cloud-storage#other_sparkhadoop_clusters"},"GCS connector jar")," in their class path.\nPlease read the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/bigdata-interop/blob/master/gcs/INSTALL.md"},"install instructions"),"\nto properly set up the necessary libraries and configurations.\nOne option is to place this jar in ",(0,r.kt)("inlineCode",{parentName:"p"},"${DRUID_HOME}/lib/")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"${DRUID_HOME}/extensions/druid-hdfs-storage/"),"."),(0,r.kt)("p",null,"Finally, you need to configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"core-site.xml")," file with the filesystem\nand authentication properties needed for GCS. You may want to copy the below\nexample properties. Please follow the instructions at\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/bigdata-interop/blob/master/gcs/INSTALL.md"},"https://github.com/GoogleCloudPlatform/bigdata-interop/blob/master/gcs/INSTALL.md"),"\nfor more details.\nFor more configurations, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudDataproc/hadoop-connectors/blob/v2.0.0/gcs/conf/gcs-core-default.xml"},"GCS core default"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudDataproc/hadoop-connectors/blob/master/gcs/src/test/resources/core-site.xml"},"GCS core template"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n  <name>fs.gs.impl</name>\n  <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem</value>\n  <description>The FileSystem for gs: (GCS) uris.</description>\n</property>\n\n<property>\n  <name>fs.AbstractFileSystem.gs.impl</name>\n  <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFS</value>\n  <description>The AbstractFileSystem for gs: uris.</description>\n</property>\n\n<property>\n  <name>google.cloud.auth.service.account.enable</name>\n  <value>true</value>\n  <description>\n    Whether to use a service account for GCS authorization.\n    Setting this property to `false` will disable use of service accounts for\n    authentication.\n  </description>\n</property>\n\n<property>\n  <name>google.cloud.auth.service.account.json.keyfile</name>\n  <value>/path/to/keyfile</value>\n  <description>\n    The JSON key file of the service account used for GCS\n    access when google.cloud.auth.service.account.enable is true.\n  </description>\n</property>\n")),(0,r.kt)("h2",{id:"reading-data-from-hdfs-or-cloud-storage"},"Reading data from HDFS or Cloud Storage"),(0,r.kt)("h3",{id:"native-batch-ingestion"},"Native batch ingestion"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/29.0.0/ingestion/input-sources#hdfs-input-source"},"HDFS input source")," is supported by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/29.0.0/ingestion/native-batch"},"Parallel task"),"\nto read files directly from the HDFS Storage. You may be able to read objects from cloud storage\nwith the HDFS input source, but we highly recommend to use a proper\n",(0,r.kt)("a",{parentName:"p",href:"/docs/29.0.0/ingestion/input-sources"},"Input Source")," instead if possible because\nit is simple to set up. For now, only the ",(0,r.kt)("a",{parentName:"p",href:"/docs/29.0.0/ingestion/input-sources#s3-input-source"},"S3 input source"),"\nand the ",(0,r.kt)("a",{parentName:"p",href:"/docs/29.0.0/ingestion/input-sources#google-cloud-storage-input-source"},"Google Cloud Storage input source"),"\nare supported for cloud storage types, and so you may still want to use the HDFS input source\nto read from cloud storage other than those two."),(0,r.kt)("h3",{id:"hadoop-based-ingestion"},"Hadoop-based ingestion"),(0,r.kt)("p",null,"If you use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/29.0.0/ingestion/hadoop"},"Hadoop ingestion"),", you can read data from HDFS\nby specifying the paths in your ",(0,r.kt)("a",{parentName:"p",href:"/docs/29.0.0/ingestion/hadoop#inputspec"},(0,r.kt)("inlineCode",{parentName:"a"},"inputSpec")),".\nSee the ",(0,r.kt)("a",{parentName:"p",href:"/docs/29.0.0/ingestion/hadoop#static"},"Static")," inputSpec for details."))}g.isMDXComponent=!0}}]);