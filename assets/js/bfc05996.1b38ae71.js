"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[99142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(r),c=a,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>y,frontMatter:()=>m,metadata:()=>k,toc:()=>b});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&u(e,r,t[r]);return e};const m={title:"UnfoldIterator<T>",slug:"/rimbu/stream/custom/UnfoldIterator/class"},c="class UnfoldIterator<T>",k={unversionedId:"rimbu_stream/custom/UnfoldIterator.class",id:"rimbu_stream/custom/UnfoldIterator.class",title:"UnfoldIterator<T>",description:"undocumented",source:"@site/api/rimbu_stream/custom/UnfoldIterator.class.mdx",sourceDirName:"rimbu_stream/custom",slug:"/rimbu/stream/custom/UnfoldIterator/class",permalink:"/api/rimbu/stream/custom/UnfoldIterator/class",draft:!1,tags:[],version:"current",frontMatter:{title:"UnfoldIterator<T>",slug:"/rimbu/stream/custom/UnfoldIterator/class"},sidebar:"defaultSidebar",previous:{title:"TakeWhileIterator<T>",permalink:"/api/rimbu/stream/custom/TakeWhileIterator/class"},next:{title:"WindowIterator<T,R>",permalink:"/api/rimbu/stream/custom/WindowIterator/class"}},f={},b=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>current</code>",id:"current",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>getNext</code>",id:"getnext",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>index</code>",id:"index",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>fastNext</code>",id:"fastnext",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>next</code>",id:"next",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-1",level:4}],v={toc:b};function y(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},v),u),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"class-unfolditeratort"}),(0,n.kt)("inlineCode",{parentName:"h1"},"class UnfoldIterator<T>")),(0,n.kt)("p",null,"undocumented"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/custom/FastIteratorBase/class"}),(0,n.kt)("inlineCode",{parentName:"a"},"FastIteratorBase<T>"))),(0,n.kt)("h2",s({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"undocumented")))),(0,n.kt)("h2",s({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"current"}),(0,n.kt)("inlineCode",{parentName:"h3"},"current")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"current: T "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," Token;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"getnext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getNext")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly getNext: (current: T, index: number, stop: Token) => T "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," Token;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"index"}),(0,n.kt)("inlineCode",{parentName:"h3"},"index")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"index: number;")))),(0,n.kt)("h2",s({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"fastnext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"fastNext")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"fastNext<O>(otherwise?: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,n.kt)("inlineCode",{parentName:"p"},"<O>): T "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," O;"))),(0,n.kt)("h4",s({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"O"),(0,n.kt)("td",s({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",s({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"otherwise")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/common/OptLazy/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,n.kt)("inlineCode",{parentName:"td"},"<O>")),(0,n.kt)("td",s({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",s({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/custom/FastIteratorBase/class#fastNext"}),"FastIteratorBase.fastNext"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"next"}),(0,n.kt)("inlineCode",{parentName:"h3"},"next")),(0,n.kt)("p",null,"Returns the next ",(0,n.kt)("inlineCode",{parentName:"p"},"IteratorResult"),".")),(0,n.kt)("h4",s({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"next(): IteratorResult<T>;"))),(0,n.kt)("h4",s({},{id:"overrides-1"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/FastIterator/interface#next"}),"FastIterator.next"),", ",(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/custom/FastIteratorBase/class#next"}),"FastIteratorBase.next"))))}y.isMDXComponent=!0}}]);