"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[98203],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),l=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=l(r),s=n,f=y["".concat(m,".").concat(s)]||y[s]||u[s]||i;return r?a.createElement(f,p(p({ref:t},c),{},{components:r})):a.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=s;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[y]="string"==typeof e?e:n,p[1]=o;for(var l=2;l<i;l++)p[l]=r[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},47105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>x,contentTitle:()=>d,default:()=>P,frontMatter:()=>f,metadata:()=>b,toc:()=>k});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))l.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>i(e,p(t)),s=(e,t)=>{var r={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r};const f={title:"ProximityMap<K,V>",slug:"/rimbu/proximity/map/ProximityMap/interface"},d="interface ProximityMap<K,V>",b={unversionedId:"rimbu_proximity/map/ProximityMap.interface",id:"rimbu_proximity/map/ProximityMap.interface",title:"ProximityMap<K,V>",description:"A type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the Map documentation and the ProximityMap API documentation",source:"@site/api/rimbu_proximity/map/ProximityMap.interface.mdx",sourceDirName:"rimbu_proximity/map",slug:"/rimbu/proximity/map/ProximityMap/interface",permalink:"/api/rimbu/proximity/map/ProximityMap/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"ProximityMap<K,V>",slug:"/rimbu/proximity/map/ProximityMap/interface"},sidebar:"defaultSidebar",previous:{title:"ProximityMap.Types",permalink:"/api/rimbu/proximity/map/ProximityMap/Types/interface"},next:{title:"ProximityMap",permalink:"/api/rimbu/proximity/ProximityMap/var"}},x={},k=[{value:"Type parameters",id:"type-parameters",level:2}],h={toc:k},v="wrapper";function P(e){var t=e,{components:r}=t,n=s(t,["components"]);return(0,a.kt)(v,u(y(y({},h),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",y({},{id:"interface-proximitymapkv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface ProximityMap<K,V>")),(0,a.kt)("p",null,"A type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,a.kt)("a",y({parentName:"p"},{href:"/docs/collections/map"}),"Map documentation")," and the ",(0,a.kt)("a",y({parentName:"p"},{href:"/api/rimbu/proximity/map/ProximityMap/interface"}),"ProximityMap API documentation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,a.kt)("a",y({parentName:"p"},{href:"/api/rimbu/proximity/map/ProximityMap/namespace"}),"ProximityMap")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,a.kt)("a",y({parentName:"p"},{href:"/api/rimbu/proximity/map-custom/ProximityMapEmpty/class"}),(0,a.kt)("inlineCode",{parentName:"a"},"ProximityMapEmpty<K,V>")),", ",(0,a.kt)("a",y({parentName:"p"},{href:"/api/rimbu/proximity/map/ProximityMap/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"ProximityMap.NonEmpty<K,V>"))),(0,a.kt)("h2",y({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",y({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",y({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",y({parentName:"tr"},{align:null}),"K"),(0,a.kt)("td",y({parentName:"tr"},{align:null}),"the key type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",y({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",y({parentName:"tr"},{align:null}),"the value type")))),(0,a.kt)("admonition",y({},{title:"note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"get()")," method is designed to perform a linear scan of all the keys, returning the value associated with the key having the least distance from the input key; however, optimized distance functions can greatly improve efficiency by preventing a full scan.")),(0,a.kt)("admonition",y({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",y({parentName:"pre"},{className:"language-ts"}),"const m1 = ProximityMap.empty<number, string>()\nconst m2 = ProximityMap.of([1, 'a'], [2, 'b'])\n"))))}P.isMDXComponent=!0}}]);