"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[66216],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=m(a),s=r,k=d["".concat(o,".").concat(s)]||d[s]||c[s]||i;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},92735:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>s,default:()=>y,frontMatter:()=>d,metadata:()=>k,toc:()=>M});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))m.call(t,a)&&u(e,a,t[a]);return e};const d={title:"MultiMap (namespace)",slug:"/rimbu/multimap/MultiMap/namespace"},s="namespace MultiMap",k={unversionedId:"rimbu_multimap/MultiMap/index",id:"rimbu_multimap/MultiMap/index",title:"MultiMap (namespace)",description:"A type-invariant immutable MultiMap of key type K, and value type V. In the Map, each key has at least one value. See the MultiMap documentation and the MultiMap API documentation",source:"@site/api/rimbu_multimap/MultiMap/index.mdx",sourceDirName:"rimbu_multimap/MultiMap",slug:"/rimbu/multimap/MultiMap/namespace",permalink:"/api/rimbu/multimap/MultiMap/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"MultiMap (namespace)",slug:"/rimbu/multimap/MultiMap/namespace"},sidebar:"defaultSidebar",previous:{title:"HashMultiMapSortedValue<K,V>",permalink:"/api/rimbu/multimap/HashMultiMapSortedValue/interface"},next:{title:"MultiMap.Builder<K,V>",permalink:"/api/rimbu/multimap/MultiMap/Builder/interface"}},f={},M=[{value:"Interfaces",id:"interfaces",level:2},{value:"Static Methods",id:"static-methods",level:2},{value:"<code>createContext</code>",id:"createcontext",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4}],b={toc:M};function y(e){var t,a=e,{components:r}=a,u=((e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),u),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"namespace-multimap"}),(0,n.kt)("inlineCode",{parentName:"h1"},"namespace MultiMap")),(0,n.kt)("p",null,"A type-invariant immutable MultiMap of key type K, and value type V. In the Map, each key has at least one value. See the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/multimap"}),"MultiMap documentation")," and the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/multimap/MultiMap/interface"}),"MultiMap API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/multimap/MultiMap/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"MultiMap<K,V>"))),(0,n.kt)("h2",c({},{id:"interfaces"}),"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/multimap/MultiMap/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"MultiMap.Builder<K,V>"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"A mutable ",(0,n.kt)("inlineCode",{parentName:"td"},"MultiMap")," builder used to efficiently create new immutable instances. See the ",(0,n.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/multimap"}),"MultiMap documentation")," and the ",(0,n.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/multimap/MultiMap/Builder/interface"}),"MultiMap.Builder API documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/multimap/MultiMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"MultiMap.Context<UK,UV>"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"A context instance for ",(0,n.kt)("inlineCode",{parentName:"td"},"MultiMap")," implementations that acts as a factory for every instance of this type of collection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/multimap/MultiMap/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"MultiMap.NonEmpty<K,V>"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"A non-empty type-invariant immutable MultiMap of key type K, and value type V. In the Map, each key has at least one value. See the ",(0,n.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/multimap"}),"MultiMap documentation")," and the ",(0,n.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/multimap/MultiMap/interface"}),"MultiMap API documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/multimap/MultiMap/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"MultiMap.Types"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))),(0,n.kt)("h2",c({},{id:"static-methods"}),"Static Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",c({},{id:"createcontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"createContext")),(0,n.kt)("p",null,"Returns a new MultiMap context instance based on the given ",(0,n.kt)("inlineCode",{parentName:"p"},"options"),".")),(0,n.kt)("h4",c({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"createContext<UK, UV>(options: {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"keyMapContext: "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UK>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"keyMapValuesContext: "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSet.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UV>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"}): "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/multimap/MultiMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"MultiMap.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UK, UV>;"))),(0,n.kt)("h4",c({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"UK"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"the upper key type for which the context can create instances")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"UV"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"the upper value type for which the context can create instances")))),(0,n.kt)("h4",c({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"{"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"keyMapContext: "),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,n.kt)("inlineCode",{parentName:"td"},"<UK>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"keyMapValuesContext: "),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/collection-types/set/RSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSet.Context")),(0,n.kt)("inlineCode",{parentName:"td"},"<UV>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"}")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"an object containing the following properties:",(0,n.kt)("br",null)," - keyMapContext - the map context to use for key to valueset mappings",(0,n.kt)("br",null)," - keyMapValuesContext - the set context to use for value sets"))))))}y.isMDXComponent=!0}}]);