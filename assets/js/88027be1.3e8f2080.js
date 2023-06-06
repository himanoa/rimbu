"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[63509],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),m=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=m(r),s=n,f=u["".concat(c,".").concat(s)]||u[s]||y[s]||i;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:n,o[1]=p;for(var m=2;m<i;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},57265:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>g,frontMatter:()=>f,metadata:()=>b,toc:()=>h});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&l(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&l(e,r,t[r]);return e},y=(e,t)=>i(e,o(t)),s=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&m.call(e,a)&&(r[a]=e[a]);return r};const f={title:"ProximityMap<K,V>",slug:"/rimbu/core/ProximityMap/interface"},d="interface ProximityMap<K,V>",b={unversionedId:"rimbu_core/ProximityMap.interface",id:"rimbu_core/ProximityMap.interface",title:"ProximityMap<K,V>",description:"A type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the Map documentation and the ProximityMap API documentation",source:"@site/api/rimbu_core/ProximityMap.interface.mdx",sourceDirName:"rimbu_core",slug:"/rimbu/core/ProximityMap/interface",permalink:"/api/rimbu/core/ProximityMap/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"ProximityMap<K,V>",slug:"/rimbu/core/ProximityMap/interface"},sidebar:"defaultSidebar",previous:{title:"ProximityMap.Types",permalink:"/api/rimbu/core/ProximityMap/Types/interface"},next:{title:"ProximityMap",permalink:"/api/rimbu/core/ProximityMap/var"}},k={},h=[{value:"Type parameters",id:"type-parameters",level:2}],v={toc:h},P="wrapper";function g(e){var t=e,{components:r}=t,n=s(t,["components"]);return(0,a.kt)(P,y(u(u({},v),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"interface-proximitymapkv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface ProximityMap<K,V>")),(0,a.kt)("p",null,"A type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/collections/map"}),"Map documentation")," and the ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/proximity/map/ProximityMap/interface"}),"ProximityMap API documentation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/ProximityMap/namespace"}),"ProximityMap")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/ProximityMap/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"ProximityMap.NonEmpty<K,V>"))),(0,a.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the key type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the value type")))),(0,a.kt)("admonition",u({},{title:"note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"get()")," method is designed to perform a linear scan of all the keys, returning the value associated with the key having the least distance from the input key; however, optimized distance functions can greatly improve efficiency by preventing a full scan.")),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m1 = ProximityMap.empty<number, string>()\nconst m2 = ProximityMap.of([1, 'a'], [2, 'b'])\n"))))}g.isMDXComponent=!0}}]);