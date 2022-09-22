"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[63774],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||s;return a?r.createElement(y,i(i({ref:t},c),{},{components:a})):r.createElement(y,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28959:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>y,toc:()=>f});var r=a(3905),n=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))l.call(t,a)&&c(e,a,t[a]);return e};const u={title:"AsyncFastIteratorBase<T>",slug:"/rimbu/stream/async-custom/AsyncFastIteratorBase/class"},d="abstract class AsyncFastIteratorBase<T>",y={unversionedId:"rimbu_stream/async-custom/AsyncFastIteratorBase.class",id:"rimbu_stream/async-custom/AsyncFastIteratorBase.class",title:"AsyncFastIteratorBase<T>",description:"undocumented",source:"@site/api/rimbu_stream/async-custom/AsyncFastIteratorBase.class.mdx",sourceDirName:"rimbu_stream/async-custom",slug:"/rimbu/stream/async-custom/AsyncFastIteratorBase/class",permalink:"/api/rimbu/stream/async-custom/AsyncFastIteratorBase/class",draft:!1,tags:[],version:"current",frontMatter:{title:"AsyncFastIteratorBase<T>",slug:"/rimbu/stream/async-custom/AsyncFastIteratorBase/class"},sidebar:"defaultSidebar",previous:{title:"AsyncDropWhileIterator<T>",permalink:"/api/rimbu/stream/async-custom/AsyncDropWhileIterator/class"},next:{title:"AsyncFilterIterator<T>",permalink:"/api/rimbu/stream/async-custom/AsyncFilterIterator/class"}},k={},f=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>return</code>",id:"return",level:3},{value:"Definition",id:"definition",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>fastNext</code>",id:"fastnext",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>next</code>",id:"next",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-1",level:4}],N={toc:f};function b(e){var t,a=e,{components:n}=a,c=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&l.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=m(m({},N),c),s(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"abstract-class-asyncfastiteratorbaset"}),(0,r.kt)("inlineCode",{parentName:"h1"},"abstract class AsyncFastIteratorBase<T>")),(0,r.kt)("p",null,"undocumented"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implements:")," ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/AsyncFastIterator/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncFastIterator<T>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extended by:")," ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncDropWhileIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncDropWhileIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFlatMapIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncFlatMapIterator<T,T2>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncSplitWhereIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncSplitWhereIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/FromIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"FromIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncConcatIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncConcatIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncPrependIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncPrependIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncOfIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncOfIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFilterIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncFilterIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncIndexedIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncIndexedIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncRepeatIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncRepeatIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncReduceAllIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncReduceAllIterator<I,R>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncMapIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncMapIterator<T,T2>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncZipWithIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncZipWithIterator<I,R>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncDropIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncDropIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncWindowIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncWindowIterator<T,R>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFilterPureIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncFilterPureIterator<T,A>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncCollectIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncCollectIterator<T,R>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncTakeWhileIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncTakeWhileIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncDistinctPreviousIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncDistinctPreviousIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncZipAllWithItererator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncZipAllWithItererator<I,F,R>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncAppendIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncAppendIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncUnfoldIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncUnfoldIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncMapPureIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncMapPureIterator<T,A,T2>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/FromResourceIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"FromResourceIterator<T,R>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncIntersperseIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncIntersperseIterator<T,S>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncIndicesWhereIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncIndicesWhereIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncSplitOnIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncSplitOnIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFoldIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncFoldIterator<I,R>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncIndicesOfIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncIndicesOfIterator<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncReduceIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncReduceIterator<I,R>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/FromPromise/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"FromPromise<T>")),", ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncTakeIterator/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncTakeIterator<T>"))),(0,r.kt)("h2",m({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"T"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"undocumented")))),(0,r.kt)("h2",m({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",m({},{id:"return"}),(0,r.kt)("inlineCode",{parentName:"h3"},"return")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",m({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"return?: undefined "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," (() => Promise<any>);")))),(0,r.kt)("h2",m({},{id:"methods"}),"Methods"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",m({},{id:"fastnext"}),(0,r.kt)("inlineCode",{parentName:"h3"},"fastNext")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",m({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"abstract fastNext<O>(otherwise?: "),(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/AsyncOptLazy/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncOptLazy")),(0,r.kt)("inlineCode",{parentName:"p"},"<O>): "),(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/MaybePromise/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,r.kt)("inlineCode",{parentName:"p"},"<T "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," O>;"))),(0,r.kt)("h4",m({},{id:"type-parameters-1"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"O"),(0,r.kt)("td",m({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",m({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"otherwise")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("a",m({parentName:"td"},{href:"/api/rimbu/common/AsyncOptLazy/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncOptLazy")),(0,r.kt)("inlineCode",{parentName:"td"},"<O>")),(0,r.kt)("td",m({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",m({},{id:"overrides"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/AsyncFastIterator/interface#fastNext"}),"AsyncFastIterator.fastNext"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",m({},{id:"next"}),(0,r.kt)("inlineCode",{parentName:"h3"},"next")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",m({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"next(): Promise<IteratorResult<T>>;"))),(0,r.kt)("h4",m({},{id:"overrides-1"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/AsyncFastIterator/interface#next"}),"AsyncFastIterator.next"))))}b.isMDXComponent=!0}}]);