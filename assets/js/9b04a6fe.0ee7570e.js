"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[74670],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=m(a),s=r,N=k["".concat(o,".").concat(s)]||k[s]||u[s]||l;return a?n.createElement(N,i(i({ref:t},d),{},{components:a})):n.createElement(N,i({ref:t},d))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},58765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>k,metadata:()=>N,toc:()=>y});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))m.call(t,a)&&d(e,a,t[a]);return e};const k={title:"SortedMultiMapSortedValue (namespace)",slug:"/rimbu/multimap/SortedMultiMapSortedValue/namespace"},s="namespace SortedMultiMapSortedValue",N={unversionedId:"rimbu_multimap/SortedMultiMapSortedValue/index",id:"rimbu_multimap/SortedMultiMapSortedValue/index",title:"SortedMultiMapSortedValue (namespace)",description:"A type-invariant immutable MultiMap of key type K, and value type V. In the MultiMap, each key has at least one value. See the MultiMap documentation and the SortedMultiMapSortedValue API documentation",source:"@site/api/rimbu_multimap/SortedMultiMapSortedValue/index.mdx",sourceDirName:"rimbu_multimap/SortedMultiMapSortedValue",slug:"/rimbu/multimap/SortedMultiMapSortedValue/namespace",permalink:"/api/rimbu/multimap/SortedMultiMapSortedValue/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"SortedMultiMapSortedValue (namespace)",slug:"/rimbu/multimap/SortedMultiMapSortedValue/namespace"},sidebar:"defaultSidebar",previous:{title:"SortedMultiMapHashValue<K,V>",permalink:"/api/rimbu/multimap/SortedMultiMapHashValue/interface"},next:{title:"SortedMultiMapSortedValue.Builder<K,V>",permalink:"/api/rimbu/multimap/SortedMultiMapSortedValue/Builder/interface"}},c={},y=[{value:"Interfaces",id:"interfaces",level:2},{value:"Static Methods",id:"static-methods",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>createContext</code>",id:"createcontext",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>defaultContext</code>",id:"defaultcontext",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"<code>empty</code>",id:"empty",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>from</code>",id:"from",level:3},{value:"Definitions",id:"definitions",level:4},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>of</code>",id:"of",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>reducer</code>",id:"reducer",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Type parameters",id:"type-parameters-6",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Overrides",id:"overrides-4",level:4}],h={toc:y};function f(e){var t,a=e,{components:r}=a,d=((e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},h),d),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"namespace-sortedmultimapsortedvalue"}),(0,n.kt)("inlineCode",{parentName:"h1"},"namespace SortedMultiMapSortedValue")),(0,n.kt)("p",null,"A type-invariant immutable MultiMap of key type K, and value type V. In the MultiMap, each key has at least one value. See the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/docs/collections/multimap"}),"MultiMap documentation")," and the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/api/rimbu/multimap/SortedMultiMapSortedValue/interface"}),"SortedMultiMapSortedValue API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/multimap/SortedMultiMapSortedValue/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMultiMapSortedValue<K,V>"))),(0,n.kt)("h2",u({},{id:"interfaces"}),"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/multimap/SortedMultiMapSortedValue/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMultiMapSortedValue.Builder<K,V>"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A mutable ",(0,n.kt)("inlineCode",{parentName:"td"},"SortedMultiMapSortedValue")," builder used to efficiently create new immutable instances. See the ",(0,n.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/docs/collections/multimap"}),"MultiMap documentation")," and the ",(0,n.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/api/rimbu/multimap/SortedMultiMapSortedValue/Builder/interface"}),"SortedMultiMapSortedValue.Builder API documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/multimap/SortedMultiMapSortedValue/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMultiMapSortedValue.Context<UK,UV>"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A context instance for an ",(0,n.kt)("inlineCode",{parentName:"td"},"SortedMultiMapSortedValue")," that acts as a factory for every instance of this type of collection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/multimap/SortedMultiMapSortedValue/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMultiMapSortedValue.NonEmpty<K,V>"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A non-empty type-invariant immutable MultiMap of key type K, and value type V. In the MultiMap, each key has at least one value. See the ",(0,n.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/docs/collections/multimap"}),"MultiMap documentation")," and the ",(0,n.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/api/rimbu/multimap/SortedMultiMapSortedValue/interface"}),"SortedMultiMapSortedValue API documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/multimap/SortedMultiMapSortedValue/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMultiMapSortedValue.Types"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))),(0,n.kt)("h2",u({},{id:"static-methods"}),"Static Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"builder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"builder")),(0,n.kt)("p",null,"Returns an empty builder instance for this type of collection and context.")),(0,n.kt)("h4",u({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"builder<K extends UK, V extends UV>(): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/WithKeyValue/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithKeyValue")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, K, V>['builder'];"))),(0,n.kt)("h4",u({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UK")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UV")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"HashMultiMapHashValue.builder<number, string>()    // => HashMultiMapHashValue.Builder<number, string>\n"))),(0,n.kt)("h4",u({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/multimap/custom/MultiMapBase/Factory/interface#builder"}),"Factory.builder"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"createcontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"createContext")),(0,n.kt)("p",null,"Returns a new SortedMultiMapSortedValue context instance based on the given ",(0,n.kt)("inlineCode",{parentName:"p"},"options"),".")),(0,n.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"createContext<K, V>(options?: {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"keyMapContext?: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMap.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<K>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"keyMapValuesContext?: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<V>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"}): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/multimap/SortedMultiMapSortedValue/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMultiMapSortedValue.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<K, V>;"))),(0,n.kt)("h4",u({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"{"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"keyMapContext?: "),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/sorted/map/SortedMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMap.Context")),(0,n.kt)("inlineCode",{parentName:"td"},"<K>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"keyMapValuesContext?: "),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/sorted/set/SortedSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet.Context")),(0,n.kt)("inlineCode",{parentName:"td"},"<V>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"}")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"(optional) an object containing the following properties:",(0,n.kt)("br",null)," - keyMapContext - (optional) the map context to use for key to valueset mappings",(0,n.kt)("br",null)," - keyMapValuesContext - (optional) the set context to use for value sets"))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"defaultcontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"defaultContext")),(0,n.kt)("p",null,"Returns the default context for HashMultiMapHashValue.")),(0,n.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"defaultContext<UK, UV>(): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/multimap/SortedMultiMapSortedValue/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMultiMapSortedValue.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UK, UV>;"))),(0,n.kt)("h4",u({},{id:"type-parameters-2"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"UK"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the upper key type for which the context can create instances")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"UV"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the upper value type for which the context can create instances"))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"empty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"empty")),(0,n.kt)("p",null,"Returns the (singleton) empty instance of this type and context with given key and value types.")),(0,n.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"empty<K extends UK, V extends UV>(): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/WithKeyValue/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithKeyValue")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, K, V>['normal'];"))),(0,n.kt)("h4",u({},{id:"type-parameters-3"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UK")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UV")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"HashMultiMapHashValue.empty<number, string>()    // => HashMultiMapHashValue<number, string>\nHashMultiMapHashValue.empty<string, boolean>()   // => HashMultiMapHashValue<string, boolean>\n"))),(0,n.kt)("h4",u({},{id:"overrides-1"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/multimap/custom/MultiMapBase/Factory/interface#empty"}),"Factory.empty"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"from"}),(0,n.kt)("inlineCode",{parentName:"h3"},"from")),(0,n.kt)("p",null,"Returns an immutable multimap of this type and context, containing the entries in the given ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," ",(0,n.kt)("inlineCode",{parentName:"p"},"StreamSource"),".")),(0,n.kt)("h4",u({},{id:"definitions"}),"Definitions"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<K extends UK, V extends UV>(...sources: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>>): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/WithKeyValue/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithKeyValue")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, K, V>['nonEmpty'];"))),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<K extends UK, V extends UV>(...sources: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>>): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/WithKeyValue/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithKeyValue")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, K, V>['normal'];"))),(0,n.kt)("h4",u({},{id:"type-parameters-4"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UK")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UV")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-1"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"sources")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<"),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<readonly [K, V]>>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"an array of ",(0,n.kt)("inlineCode",{parentName:"td"},"StreamSource")," instances containing key-value entries")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"HashMultiMapHashValue.from([[1, 'a'], [2, 'b']])    // => HashMultiMapHashValue.NonEmpty<number, string>\n"))),(0,n.kt)("h4",u({},{id:"overrides-2"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/multimap/custom/MultiMapBase/Factory/interface#from"}),"Factory.from"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"of"}),(0,n.kt)("inlineCode",{parentName:"h3"},"of")),(0,n.kt)("p",null,"Returns an immutable multimap of this collection type and context, containing the given ",(0,n.kt)("inlineCode",{parentName:"p"},"entries"),".")),(0,n.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"of<K extends UK, V extends UV>(...entries: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/WithKeyValue/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithKeyValue")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, K, V>['nonEmpty'];"))),(0,n.kt)("h4",u({},{id:"type-parameters-5"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UK")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UV")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-2"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"entries")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<readonly [K, V]>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"a non-empty array of key-value entries")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"HashMultiMapHashValue.of([1, 'a'], [2, 'b'], [1, 'c'])    // => HashMap.NonEmpty<number, string>\n"))),(0,n.kt)("h4",u({},{id:"overrides-3"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/multimap/custom/MultiMapBase/Factory/interface#of"}),"Factory.of"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"reducer"}),(0,n.kt)("inlineCode",{parentName:"h3"},"reducer")),(0,n.kt)("p",null,"Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Reducer")," that adds received tuples to a MultiMap and returns the MultiMap as a result. When a ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is given, the reducer will first create a MultiMap from the source, and then add tuples to it.")),(0,n.kt)("h4",u({},{id:"definition-5"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"reducer<K extends UK, V extends UV>(source?: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Reducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Reducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<[K, V], "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/WithKeyValue/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithKeyValue")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, K, V>['normal']>;"))),(0,n.kt)("h4",u({},{id:"type-parameters-6"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UK")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UV")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-3"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"source")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"td"},"<readonly [K, V]>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"(optional) an initial source of tuples to add to")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const someSource: [number, string][] = [1, 'a'], [2, 'b'];\nconst result = Stream.of([1, 'c'], [3, 'a']).reduce(SortedMultiMap.reducer(someSource))\nresult.toArray()   // => [[1, 'a'], [1, 'c'], [2, 'b'], [3, 'a']]\n"))),(0,n.kt)("admonition",u({},{title:"note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"uses a builder under the hood. If the given ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is a BiMap in the same context, it will directly call ",(0,n.kt)("inlineCode",{parentName:"p"},".toBuilder()"),".")),(0,n.kt)("h4",u({},{id:"overrides-4"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/multimap/custom/MultiMapBase/Factory/interface#reducer"}),"Factory.reducer"))))}f.isMDXComponent=!0}}]);