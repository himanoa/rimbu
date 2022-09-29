"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[89191],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(r),s=i,f=m["".concat(p,".").concat(s)]||m[s]||c[s]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>s,default:()=>v,frontMatter:()=>m,metadata:()=>f,toc:()=>k});var n=r(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&u(e,r,t[r]);return e};const m={title:"SortedMap.Types",slug:"/rimbu/sorted/map/SortedMap/Types/interface"},s="interface SortedMap.Types",f={unversionedId:"rimbu_sorted/map/SortedMap/Types.interface",id:"rimbu_sorted/map/SortedMap/Types.interface",title:"SortedMap.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_sorted/map/SortedMap/Types.interface.mdx",sourceDirName:"rimbu_sorted/map/SortedMap",slug:"/rimbu/sorted/map/SortedMap/Types/interface",permalink:"/api/rimbu/sorted/map/SortedMap/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"SortedMap.Types",slug:"/rimbu/sorted/map/SortedMap/Types/interface"},sidebar:"defaultSidebar",previous:{title:"SortedMap.NonEmpty<K,V>",permalink:"/api/rimbu/sorted/map/SortedMap/NonEmpty/interface"},next:{title:"SortedMap<K,V>",permalink:"/api/rimbu/sorted/map/SortedMap/interface"}},y={},k=[{value:"Properties",id:"properties",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-3",level:4}],b={toc:k};function v(e){var t,r=e,{components:i}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),u),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"interface-sortedmaptypes"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface SortedMap.Types")),(0,n.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,n.kt)("h2",c({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",c({},{id:"builder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"builder")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",c({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/sorted/SortedMap/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMap.Builder")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",c({},{id:"context"}),(0,n.kt)("inlineCode",{parentName:"h3"},"context")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",c({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/sorted/SortedMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMap.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_K']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",c({},{id:"nonempty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",c({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/sorted/SortedMap/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMap.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",c({},{id:"normal"}),(0,n.kt)("inlineCode",{parentName:"h3"},"normal")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",c({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/sorted/SortedMap/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMap")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))))}v.isMDXComponent=!0}}]);