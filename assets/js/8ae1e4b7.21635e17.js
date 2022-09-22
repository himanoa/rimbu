"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[40677],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),c=n,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return r?a.createElement(k,l(l({ref:t},s),{},{components:r})):a.createElement(k,l({ref:t},s))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>y,frontMatter:()=>m,metadata:()=>k,toc:()=>v});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&s(e,r,t[r]);return e};const m={title:"FilterIterator<T>",slug:"/rimbu/stream/custom/FilterIterator/class"},c="class FilterIterator<T>",k={unversionedId:"rimbu_stream/custom/FilterIterator.class",id:"rimbu_stream/custom/FilterIterator.class",title:"FilterIterator<T>",description:"undocumented",source:"@site/api/rimbu_stream/custom/FilterIterator.class.mdx",sourceDirName:"rimbu_stream/custom",slug:"/rimbu/stream/custom/FilterIterator/class",permalink:"/api/rimbu/stream/custom/FilterIterator/class",draft:!1,tags:[],version:"current",frontMatter:{title:"FilterIterator<T>",slug:"/rimbu/stream/custom/FilterIterator/class"},sidebar:"defaultSidebar",previous:{title:"FilterApplyStream<T,A>",permalink:"/api/rimbu/stream/custom/FilterApplyStream/class"},next:{title:"FilterPureIterator<T,A>",permalink:"/api/rimbu/stream/custom/FilterPureIterator/class"}},f={},v=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>invert</code>",id:"invert",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>pred</code>",id:"pred",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>source</code>",id:"source",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>state</code>",id:"state",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>fastNext</code>",id:"fastnext",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>next</code>",id:"next",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Overrides",id:"overrides-1",level:4}],b={toc:v};function y(e){var t,r=e,{components:n}=r,s=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=d(d({},b),s),i(t,l({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",d({},{id:"class-filteriteratort"}),(0,a.kt)("inlineCode",{parentName:"h1"},"class FilterIterator<T>")),(0,a.kt)("p",null,"undocumented"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends:")," ",(0,a.kt)("a",d({parentName:"p"},{href:"/api/rimbu/stream/custom/FastIteratorBase/class"}),(0,a.kt)("inlineCode",{parentName:"a"},"FastIteratorBase<T>"))),(0,a.kt)("h2",d({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"undocumented")))),(0,a.kt)("h2",d({},{id:"properties"}),"Properties"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",d({},{id:"invert"}),(0,a.kt)("inlineCode",{parentName:"h3"},"invert")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",d({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly invert: boolean;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",d({},{id:"pred"}),(0,a.kt)("inlineCode",{parentName:"h3"},"pred")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",d({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly pred: (value: T, index: number, halt: () => void) => boolean;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",d({},{id:"source"}),(0,a.kt)("inlineCode",{parentName:"h3"},"source")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",d({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly source: "),(0,a.kt)("a",d({parentName:"p"},{href:"/api/rimbu/stream/FastIterator/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"FastIterator")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",d({},{id:"state"}),(0,a.kt)("inlineCode",{parentName:"h3"},"state")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",d({},{id:"definition-3"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly state: "),(0,a.kt)("a",d({parentName:"p"},{href:"/api/rimbu/common/TraverseState/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"TraverseState")),(0,a.kt)("inlineCode",{parentName:"p"},";")))),(0,a.kt)("h2",d({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",d({},{id:"fastnext"}),(0,a.kt)("inlineCode",{parentName:"h3"},"fastNext")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",d({},{id:"definition-4"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fastNext<O>(otherwise?: "),(0,a.kt)("a",d({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>): T "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("h4",d({},{id:"type-parameters-1"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"O"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",d({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"otherwise")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("a",d({parentName:"td"},{href:"/api/rimbu/common/OptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,a.kt)("inlineCode",{parentName:"td"},"<O>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",d({},{id:"overrides"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",d({parentName:"p"},{href:"/api/rimbu/stream/custom/FastIteratorBase/class#fastNext"}),"FastIteratorBase.fastNext"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",d({},{id:"next"}),(0,a.kt)("inlineCode",{parentName:"h3"},"next")),(0,a.kt)("p",null,"Returns the next ",(0,a.kt)("inlineCode",{parentName:"p"},"IteratorResult"),".")),(0,a.kt)("h4",d({},{id:"definition-5"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"next(): IteratorResult<T>;"))),(0,a.kt)("h4",d({},{id:"overrides-1"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",d({parentName:"p"},{href:"/api/rimbu/stream/FastIterator/interface#next"}),"FastIterator.next"),", ",(0,a.kt)("a",d({parentName:"p"},{href:"/api/rimbu/stream/custom/FastIteratorBase/class#next"}),"FastIteratorBase.next"))))}y.isMDXComponent=!0}}]);