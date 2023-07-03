"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[89178],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=m(a),s=r,c=u["".concat(o,".").concat(s)]||u[s]||k[s]||i;return a?n.createElement(c,l(l({ref:t},d),{},{components:a})):n.createElement(c,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},72394:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>N,default:()=>v,frontMatter:()=>c,metadata:()=>y,toc:()=>b});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))m.call(t,a)&&d(e,a,t[a]);return e},k=(e,t)=>i(e,l(t)),s=(e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a};const c={title:"BiMap.Context<UK,UV,Tp>",slug:"/rimbu/bimap/BiMap/Context/interface"},N="interface BiMap.Context<UK,UV,Tp>",y={unversionedId:"rimbu_bimap/BiMap/Context.interface",id:"rimbu_bimap/BiMap/Context.interface",title:"BiMap.Context<UK,UV,Tp>",description:"The BiMap's Context instance that serves as a factory for all related immutable instances and builders.",source:"@site/api/rimbu_bimap/BiMap/Context.interface.mdx",sourceDirName:"rimbu_bimap/BiMap",slug:"/rimbu/bimap/BiMap/Context/interface",permalink:"/api/rimbu/bimap/BiMap/Context/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"BiMap.Context<UK,UV,Tp>",slug:"/rimbu/bimap/BiMap/Context/interface"},sidebar:"defaultSidebar",previous:{title:"BiMap.Builder<K,V>",permalink:"/api/rimbu/bimap/BiMap/Builder/interface"},next:{title:"BiMap.NonEmpty<K,V>",permalink:"/api/rimbu/bimap/BiMap/NonEmpty/interface"}},f={},b=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>_types</code>",id:"_types",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>keyValueContext</code>",id:"keyvaluecontext",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>typeTag</code>",id:"typetag",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>valueKeyContext</code>",id:"valuekeycontext",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>empty</code>",id:"empty",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>from</code>",id:"from",level:3},{value:"Definitions",id:"definitions",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>of</code>",id:"of",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>reducer</code>",id:"reducer",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Overrides",id:"overrides-4",level:4}],h={toc:b},g="wrapper";function v(e){var t=e,{components:a}=t,r=s(t,["components"]);return(0,n.kt)(g,k(u(u({},h),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"interface-bimapcontextukuvtp"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface BiMap.Context<UK,UV,Tp>")),(0,n.kt)("p",null,"The BiMap's Context instance that serves as a factory for all related immutable instances and builders."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/bimap/custom/BiMapFactory/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMapFactory<UK,UV>"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/bimap/custom/BiMapContext/class"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMapContext<UK,UV,Tp>"))),(0,n.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"UK"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the upper type limit for key types for which this context can create instances")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"UV"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the upper type limit for value types for which this context can create instances")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Tp"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/bimap/BiMap/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMap.Types"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/bimap/BiMap/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMap.Types"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"undocumented")))),(0,n.kt)("h2",u({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"_types"}),(0,n.kt)("inlineCode",{parentName:"h3"},"_types")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly _types: Tp;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"keyvaluecontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"keyValueContext")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly keyValueContext: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UK>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"typetag"}),(0,n.kt)("inlineCode",{parentName:"h3"},"typeTag")),(0,n.kt)("p",null,"A string tag defining the specific collection type")),(0,n.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly typeTag: 'BiMap';"))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"BiMap.defaultContext().typeTag   // => 'BiMap'\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"valuekeycontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"valueKeyContext")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly valueKeyContext: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UV>;")))),(0,n.kt)("h2",u({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"builder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"builder")),(0,n.kt)("p",null,"Returns an empty ",(0,n.kt)("inlineCode",{parentName:"p"},"BiMap")," builder instance.")),(0,n.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"builder<K extends UK, V extends UV>(): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/bimap/BiMap/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMap.Builder")),(0,n.kt)("inlineCode",{parentName:"p"},"<K, V>;"))),(0,n.kt)("h4",u({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UK")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UV")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"BiMap.builder<number, string>()    // => BiMap.Builder<number, string>\n"))),(0,n.kt)("h4",u({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/bimap/custom/BiMapFactory/interface#builder"}),"BiMapFactory.builder"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"empty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"empty")),(0,n.kt)("p",null,"Returns the (singleton) empty instance of this type and context with given key and value types.")),(0,n.kt)("h4",u({},{id:"definition-5"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"empty<K extends UK, V extends UV>(): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/bimap/BiMap/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMap")),(0,n.kt)("inlineCode",{parentName:"p"},"<K, V>;"))),(0,n.kt)("h4",u({},{id:"type-parameters-2"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UK")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UV")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"BiMap.empty<number, string>()    // => BiMap<number, string>\nBiMap.empty<string, boolean>()   // => BiMap<string, boolean>\n"))),(0,n.kt)("h4",u({},{id:"overrides-1"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/bimap/custom/BiMapFactory/interface#empty"}),"BiMapFactory.empty"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"from"}),(0,n.kt)("inlineCode",{parentName:"h3"},"from")),(0,n.kt)("p",null,"Returns an immutable BiMap, containing the entries in the given ",(0,n.kt)("inlineCode",{parentName:"p"},"sources")," ",(0,n.kt)("inlineCode",{parentName:"p"},"StreamSource")," instances.")),(0,n.kt)("h4",u({},{id:"definitions"}),"Definitions"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<K extends UK, V extends UV>(...sources: ArrayNonEmpty<"),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>>): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/bimap/BiMap/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMap.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<K, V>;"))),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<K extends UK, V extends UV>(...sources: ArrayNonEmpty<"),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>>): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/bimap/BiMap/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMap")),(0,n.kt)("inlineCode",{parentName:"p"},"<K, V>;"))),(0,n.kt)("h4",u({},{id:"type-parameters-3"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UK")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UV")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"sources")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ArrayNonEmpty<"),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"td"},"<readonly [K, V]>>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"an array of ",(0,n.kt)("inlineCode",{parentName:"td"},"StreamSource")," instances contaning key-value entries")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"BiMap.from([[1, 'a'], [2, 'b']])    // => BiMap.NonEmpty<number, string>\n"))),(0,n.kt)("h4",u({},{id:"overrides-2"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/bimap/custom/BiMapFactory/interface#from"}),"BiMapFactory.from"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"of"}),(0,n.kt)("inlineCode",{parentName:"h3"},"of")),(0,n.kt)("p",null,"Returns an immutable ",(0,n.kt)("inlineCode",{parentName:"p"},"BiMap"),", containing the given ",(0,n.kt)("inlineCode",{parentName:"p"},"entries"),".")),(0,n.kt)("h4",u({},{id:"definition-6"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"of<K extends UK, V extends UV>(...entries: ArrayNonEmpty<readonly [K, V]>): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/bimap/BiMap/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMap.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<K, V>;"))),(0,n.kt)("h4",u({},{id:"type-parameters-4"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UK")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UV")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-1"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"entries")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ArrayNonEmpty<readonly [K, V]>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"a non-empty array of key-value entries")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"BiMap.of([1, 'a'], [2, 'b'])    // => BiMap.NonEmpty<number, string>\n"))),(0,n.kt)("h4",u({},{id:"overrides-3"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/bimap/custom/BiMapFactory/interface#of"}),"BiMapFactory.of"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"reducer"}),(0,n.kt)("inlineCode",{parentName:"h3"},"reducer")),(0,n.kt)("p",null,"Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Reducer")," that adds received tuples to a BiMap and returns the BiMap as a result. When a ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is given, the reducer will first create a BiMap from the source, and then add tuples to it.")),(0,n.kt)("h4",u({},{id:"definition-7"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"reducer<K extends UK, V extends UV>(source?: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>): Reducer<readonly [K, V], "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/bimap/BiMap/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMap")),(0,n.kt)("inlineCode",{parentName:"p"},"<K, V>>;"))),(0,n.kt)("h4",u({},{id:"type-parameters-5"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UK")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UV")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-2"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"source")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"td"},"<readonly [K, V]>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"(optional) an initial source of tuples to add to")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const someSource = BiMap.of([1, 'a'], [2, 'b']);\nconst result = Stream.of([1, 'c'], [3, 'a']).reduce(BiMap.reducer(someSource))\nresult.toArray()   // => [[1, 'c'], [2, 'b'], [3, 'a']]\n"))),(0,n.kt)("admonition",u({},{title:"note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"uses a builder under the hood. If the given ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is a BiMap in the same context, it will directly call ",(0,n.kt)("inlineCode",{parentName:"p"},".toBuilder()"),".")),(0,n.kt)("h4",u({},{id:"overrides-4"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/bimap/custom/BiMapFactory/interface#reducer"}),"BiMapFactory.reducer"))))}v.isMDXComponent=!0}}]);