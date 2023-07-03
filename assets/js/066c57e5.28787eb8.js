"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[41083],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>b});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),c=m(a),s=i,b=c["".concat(u,".").concat(s)]||c[s]||d[s]||r;return a?n.createElement(b,l(l({ref:e},o),{},{components:a})):n.createElement(b,l({ref:e},o))}));function b(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=s;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[c]="string"==typeof t?t:i,l[1]=p;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},81137:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>f,contentTitle:()=>k,default:()=>g,frontMatter:()=>b,metadata:()=>M,toc:()=>y});var n=a(3905),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,o=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,c=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&o(t,a,e[a]);if(p)for(var a of p(e))m.call(e,a)&&o(t,a,e[a]);return t},d=(t,e)=>r(t,l(e)),s=(t,e)=>{var a={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&m.call(t,n)&&(a[n]=t[n]);return a};const b={title:"BiMultiMap (namespace)",slug:"/rimbu/bimultimap/BiMultiMap/namespace"},k="namespace BiMultiMap",M={unversionedId:"rimbu_bimultimap/BiMultiMap/index",id:"rimbu_bimultimap/BiMultiMap/index",title:"BiMultiMap (namespace)",description:"A type-invariant immutable bi-directional MultiMap where keys and values have a many-to-many mapping. See the BiMultiMap documentation and the BiMultiMap API documentation",source:"@site/api/rimbu_bimultimap/BiMultiMap/index.mdx",sourceDirName:"rimbu_bimultimap/BiMultiMap",slug:"/rimbu/bimultimap/BiMultiMap/namespace",permalink:"/api/rimbu/bimultimap/BiMultiMap/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"BiMultiMap (namespace)",slug:"/rimbu/bimultimap/BiMultiMap/namespace"},sidebar:"defaultSidebar",previous:{title:"@rimbu/bimultimap",permalink:"/api/rimbu/bimultimap"},next:{title:"BiMultiMap.Builder<K,V>",permalink:"/api/rimbu/bimultimap/BiMultiMap/Builder/interface"}},f={},y=[{value:"Interfaces",id:"interfaces",level:2},{value:"Static Methods",id:"static-methods",level:2},{value:"<code>createContext</code>",id:"createcontext",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4}],h={toc:y},N="wrapper";function g(t){var e=t,{components:a}=e,i=s(e,["components"]);return(0,n.kt)(N,d(c(c({},h),i),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"namespace-bimultimap"}),(0,n.kt)("inlineCode",{parentName:"h1"},"namespace BiMultiMap")),(0,n.kt)("p",null,"A type-invariant immutable bi-directional MultiMap where keys and values have a many-to-many mapping. See the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/bimultimap"}),"BiMultiMap documentation")," and the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/bimultimap/BiMultiMap/interface"}),"BiMultiMap API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/bimultimap/BiMultiMap/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMultiMap<K,V>"))),(0,n.kt)("h2",c({},{id:"interfaces"}),"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/bimultimap/BiMultiMap/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMultiMap.Builder<K,V>"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"A mutable ",(0,n.kt)("inlineCode",{parentName:"td"},"BiMultiMap")," builder used to efficiently create new immutable instances. See the ",(0,n.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/bimultimap"}),"BiMultiMap documentation")," and the ",(0,n.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/bimultimap/BiMultiMap/Builder/interface"}),"BiMultiMap.Builder API documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/bimultimap/BiMultiMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMultiMap.Context<UK,UV>"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The BiMultiMap's Context instance that serves as a factory for all related immutable instances and builders.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/bimultimap/BiMultiMap/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMultiMap.NonEmpty<K,V>"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"A non-empty type-invariant immutable bi-directional MultiMap where keys and values have a many-to-many mapping. See the ",(0,n.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/bimultimap"}),"BiMultiMap documentation")," and the ",(0,n.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/bimultimap/BiMultiMap/interface"}),"BiMultiMap API documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/bimultimap/BiMultiMap/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMultiMap.Types"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))),(0,n.kt)("h2",c({},{id:"static-methods"}),"Static Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",c({},{id:"createcontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"createContext")),(0,n.kt)("p",null,"Returns a new BiMultiMap context instance based on the given ",(0,n.kt)("inlineCode",{parentName:"p"},"options"),".")),(0,n.kt)("h4",c({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"createContext<UK, UV>(options: {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"keyValueMultiMapContext: MultiMap.Context<UK, UV>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"valueKeyMultiMapContext: MultiMap.Context<UV, UK>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"}): "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/bimultimap/BiMultiMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMultiMap.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UK, UV>;"))),(0,n.kt)("h4",c({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"UK"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"the upper key type for which the context can create instances")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"UV"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"the upper value type for which the context can create instances")))),(0,n.kt)("h4",c({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"{"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"keyValueMultiMapContext: MultiMap.Context<UK, UV>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"valueKeyMultiMapContext: MultiMap.Context<UV, UK>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"}")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"an object containing the following properties:",(0,n.kt)("br",null)," - keyValueMultiMapContext - the map context to use for key value multimaps",(0,n.kt)("br",null)," - valueKeyMultiMapContext - the set context to use for value key multimaps"))))))}g.isMDXComponent=!0}}]);