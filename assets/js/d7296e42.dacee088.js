"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[49252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(r),c=n,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||l;return r?a.createElement(k,i(i({ref:t},m),{},{components:r})):a.createElement(k,i({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>y,frontMatter:()=>d,metadata:()=>k,toc:()=>N});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&m(e,r,t[r]);return e};const d={title:"MapPureIterator<T,A,T2>",slug:"/rimbu/stream/custom/MapPureIterator/class"},c="class MapPureIterator<T,A,T2>",k={unversionedId:"rimbu_stream/custom/MapPureIterator.class",id:"rimbu_stream/custom/MapPureIterator.class",title:"MapPureIterator<T,A,T2>",description:"undocumented",source:"@site/api/rimbu_stream/custom/MapPureIterator.class.mdx",sourceDirName:"rimbu_stream/custom",slug:"/rimbu/stream/custom/MapPureIterator/class",permalink:"/api/rimbu/stream/custom/MapPureIterator/class",draft:!1,tags:[],version:"current",frontMatter:{title:"MapPureIterator<T,A,T2>",slug:"/rimbu/stream/custom/MapPureIterator/class"},sidebar:"defaultSidebar",previous:{title:"MapIterator<T,T2>",permalink:"/api/rimbu/stream/custom/MapIterator/class"},next:{title:"PrependIterator<T>",permalink:"/api/rimbu/stream/custom/PrependIterator/class"}},f={},N=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>args</code>",id:"args",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>mapFun</code>",id:"mapfun",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>source</code>",id:"source",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>fastNext</code>",id:"fastnext",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>next</code>",id:"next",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-1",level:4}],b={toc:N};function y(e){var t,r=e,{components:n}=r,m=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=s(s({},b),m),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",s({},{id:"class-mappureiteratortat2"}),(0,a.kt)("inlineCode",{parentName:"h1"},"class MapPureIterator<T,A,T2>")),(0,a.kt)("p",null,"undocumented"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends:")," ",(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/custom/FastIteratorBase/class"}),(0,a.kt)("inlineCode",{parentName:"a"},"FastIteratorBase<T>"))),(0,a.kt)("h2",s({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Constraints"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"undocumented")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"A"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"readonly unknown[]")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"undocumented")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"T2"),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"undocumented")))),(0,a.kt)("h2",s({},{id:"properties"}),"Properties"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"args"}),(0,a.kt)("inlineCode",{parentName:"h3"},"args")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",s({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly args: A;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"mapfun"}),(0,a.kt)("inlineCode",{parentName:"h3"},"mapFun")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",s({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly mapFun: (value: T, ...args: A) => T2;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"source"}),(0,a.kt)("inlineCode",{parentName:"h3"},"source")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",s({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly source: "),(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/FastIterator/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"FastIterator")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;")))),(0,a.kt)("h2",s({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"fastnext"}),(0,a.kt)("inlineCode",{parentName:"h3"},"fastNext")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",s({},{id:"definition-3"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fastNext<O>(otherwise?: "),(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): T2 "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("h4",s({},{id:"type-parameters-1"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"O"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",s({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"otherwise")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"td"},"<O>")),(0,a.kt)("td",s({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",s({},{id:"overrides"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/custom/FastIteratorBase/class#fastNext"}),"FastIteratorBase.fastNext"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",s({},{id:"next"}),(0,a.kt)("inlineCode",{parentName:"h3"},"next")),(0,a.kt)("p",null,"Returns the next ",(0,a.kt)("inlineCode",{parentName:"p"},"IteratorResult"),".")),(0,a.kt)("h4",s({},{id:"definition-4"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"next(): IteratorResult<T>;"))),(0,a.kt)("h4",s({},{id:"overrides-1"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/FastIterator/interface#next"}),"FastIterator.next"),", ",(0,a.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/custom/FastIteratorBase/class#next"}),"FastIteratorBase.next"))))}y.isMDXComponent=!0}}]);