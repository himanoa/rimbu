"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[26495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,k=m["".concat(d,".").concat(c)]||m[c]||p[c]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>y,frontMatter:()=>m,metadata:()=>k,toc:()=>v});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&s(e,n,t[n]);return e};const m={title:"RangeDownIterator",slug:"/rimbu/stream/custom/RangeDownIterator/class"},c="class RangeDownIterator",k={unversionedId:"rimbu_stream/custom/RangeDownIterator.class",id:"rimbu_stream/custom/RangeDownIterator.class",title:"RangeDownIterator",description:"undocumented",source:"@site/api/rimbu_stream/custom/RangeDownIterator.class.mdx",sourceDirName:"rimbu_stream/custom",slug:"/rimbu/stream/custom/RangeDownIterator/class",permalink:"/api/rimbu/stream/custom/RangeDownIterator/class",draft:!1,tags:[],version:"current",frontMatter:{title:"RangeDownIterator",slug:"/rimbu/stream/custom/RangeDownIterator/class"},sidebar:"defaultSidebar",previous:{title:"RandomIterator",permalink:"/api/rimbu/stream/custom/RandomIterator/class"},next:{title:"RangeStream",permalink:"/api/rimbu/stream/custom/RangeStream/class"}},f={},v=[{value:"Properties",id:"properties",level:2},{value:"<code>delta</code>",id:"delta",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>end</code>",id:"end",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>start</code>",id:"start",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>state</code>",id:"state",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>fastNext</code>",id:"fastnext",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>next</code>",id:"next",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Overrides",id:"overrides-1",level:4}],b={toc:v};function y(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},b),s),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"class-rangedowniterator"}),(0,r.kt)("inlineCode",{parentName:"h1"},"class RangeDownIterator")),(0,r.kt)("p",null,"undocumented"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",p({parentName:"p"},{href:"/api/rimbu/stream/custom/FastIteratorBase/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"FastIteratorBase<T>"))),(0,r.kt)("h2",p({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",p({},{id:"delta"}),(0,r.kt)("inlineCode",{parentName:"h3"},"delta")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",p({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly delta: number;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",p({},{id:"end"}),(0,r.kt)("inlineCode",{parentName:"h3"},"end")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",p({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly end: number "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," undefined;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",p({},{id:"start"}),(0,r.kt)("inlineCode",{parentName:"h3"},"start")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",p({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly start: number;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",p({},{id:"state"}),(0,r.kt)("inlineCode",{parentName:"h3"},"state")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",p({},{id:"definition-3"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"state: number;")))),(0,r.kt)("h2",p({},{id:"methods"}),"Methods"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",p({},{id:"fastnext"}),(0,r.kt)("inlineCode",{parentName:"h3"},"fastNext")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",p({},{id:"definition-4"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fastNext<O>(otherwise?: "),(0,r.kt)("a",p({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,r.kt)("inlineCode",{parentName:"p"},"<O>): number "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," O;"))),(0,r.kt)("h4",p({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"O"),(0,r.kt)("td",p({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",p({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"otherwise")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("a",p({parentName:"td"},{href:"/api/rimbu/common/OptLazy/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,r.kt)("inlineCode",{parentName:"td"},"<O>")),(0,r.kt)("td",p({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",p({},{id:"overrides"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"/api/rimbu/stream/custom/FastIteratorBase/class#fastNext"}),"FastIteratorBase.fastNext"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",p({},{id:"next"}),(0,r.kt)("inlineCode",{parentName:"h3"},"next")),(0,r.kt)("p",null,"Returns the next ",(0,r.kt)("inlineCode",{parentName:"p"},"IteratorResult"),".")),(0,r.kt)("h4",p({},{id:"definition-5"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"next(): IteratorResult<T>;"))),(0,r.kt)("h4",p({},{id:"overrides-1"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"/api/rimbu/stream/FastIterator/interface#next"}),"FastIterator.next"),", ",(0,r.kt)("a",p({parentName:"p"},{href:"/api/rimbu/stream/custom/FastIteratorBase/class#next"}),"FastIteratorBase.next"))))}y.isMDXComponent=!0}}]);