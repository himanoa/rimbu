"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[65532],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=n,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},86124:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>f,default:()=>O,frontMatter:()=>k,metadata:()=>v,toc:()=>h});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&d(e,a,t[a]);return e},s=(e,t)=>l(e,i(t)),c=(e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a};const k={title:"FlatMapIterator<T,T2>",slug:"/rimbu/stream/custom/FlatMapIterator/class"},f="class FlatMapIterator<T,T2>",v={unversionedId:"rimbu_stream/custom/FlatMapIterator.class",id:"rimbu_stream/custom/FlatMapIterator.class",title:"FlatMapIterator<T,T2>",description:"undocumented",source:"@site/api/rimbu_stream/custom/FlatMapIterator.class.mdx",sourceDirName:"rimbu_stream/custom",slug:"/rimbu/stream/custom/FlatMapIterator/class",permalink:"/api/rimbu/stream/custom/FlatMapIterator/class",draft:!1,tags:[],version:"current",frontMatter:{title:"FlatMapIterator<T,T2>",slug:"/rimbu/stream/custom/FlatMapIterator/class"},sidebar:"defaultSidebar",previous:{title:"FilterPureIterator<T,A>",permalink:"/api/rimbu/stream/custom/FilterPureIterator/class"},next:{title:"FromIterable<T>",permalink:"/api/rimbu/stream/custom/FromIterable/class"}},N={},h=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>currentIterator</code>",id:"currentiterator",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>done</code>",id:"done",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>flatMapFun</code>",id:"flatmapfun",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>iterator</code>",id:"iterator",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>source</code>",id:"source",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>state</code>",id:"state",level:3},{value:"Definition",id:"definition-5",level:4},{value:"<code>streamSourceHelpers</code>",id:"streamsourcehelpers",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>fastNext</code>",id:"fastnext",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>next</code>",id:"next",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Overrides",id:"overrides-1",level:4}],b={toc:h},y="wrapper";function O(e){var t=e,{components:a}=t,n=c(t,["components"]);return(0,r.kt)(y,s(m(m({},b),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"class-flatmapiteratortt2"}),(0,r.kt)("inlineCode",{parentName:"h1"},"class FlatMapIterator<T,T2>")),(0,r.kt)("p",null,"undocumented"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/custom/FastIteratorBase/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"FastIteratorBase<T>"))),(0,r.kt)("h2",m({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"T"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"undocumented")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"T2"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"undocumented")))),(0,r.kt)("h2",m({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",m({},{id:"currentiterator"}),(0,r.kt)("inlineCode",{parentName:"h3"},"currentIterator")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",m({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"currentIterator: null "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," "),(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/FastIterator/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"FastIterator")),(0,r.kt)("inlineCode",{parentName:"p"},"<T2>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",m({},{id:"done"}),(0,r.kt)("inlineCode",{parentName:"h3"},"done")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",m({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"done: boolean;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",m({},{id:"flatmapfun"}),(0,r.kt)("inlineCode",{parentName:"h3"},"flatMapFun")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",m({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly flatMapFun: (value: T, index: number, halt: () => void) => "),(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,r.kt)("inlineCode",{parentName:"p"},"<T2>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",m({},{id:"iterator"}),(0,r.kt)("inlineCode",{parentName:"h3"},"iterator")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",m({},{id:"definition-3"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"iterator: "),(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/FastIterator/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"FastIterator")),(0,r.kt)("inlineCode",{parentName:"p"},"<T>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",m({},{id:"source"}),(0,r.kt)("inlineCode",{parentName:"h3"},"source")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",m({},{id:"definition-4"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly source: "),(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Stream")),(0,r.kt)("inlineCode",{parentName:"p"},"<T>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",m({},{id:"state"}),(0,r.kt)("inlineCode",{parentName:"h3"},"state")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",m({},{id:"definition-5"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly state: TraverseState;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",m({},{id:"streamsourcehelpers"}),(0,r.kt)("inlineCode",{parentName:"h3"},"streamSourceHelpers")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",m({},{id:"definition-6"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly streamSourceHelpers: "),(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/custom/StreamSourceHelpers/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"StreamSourceHelpers")),(0,r.kt)("inlineCode",{parentName:"p"},";")))),(0,r.kt)("h2",m({},{id:"methods"}),"Methods"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",m({},{id:"fastnext"}),(0,r.kt)("inlineCode",{parentName:"h3"},"fastNext")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",m({},{id:"definition-7"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fastNext<O>(otherwise?: OptLazy<O>): T2 "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," O;"))),(0,r.kt)("h4",m({},{id:"type-parameters-1"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"O"),(0,r.kt)("td",m({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",m({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"otherwise")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"OptLazy<O>")),(0,r.kt)("td",m({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",m({},{id:"overrides"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/custom/FastIteratorBase/class#fastNext"}),"FastIteratorBase.fastNext"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",m({},{id:"next"}),(0,r.kt)("inlineCode",{parentName:"h3"},"next")),(0,r.kt)("p",null,"Returns the next ",(0,r.kt)("inlineCode",{parentName:"p"},"IteratorResult"),".")),(0,r.kt)("h4",m({},{id:"definition-8"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"next(): IteratorResult<T>;"))),(0,r.kt)("h4",m({},{id:"overrides-1"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/FastIterator/interface#next"}),"FastIterator.next"),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/custom/FastIteratorBase/class#next"}),"FastIteratorBase.next"))))}O.isMDXComponent=!0}}]);