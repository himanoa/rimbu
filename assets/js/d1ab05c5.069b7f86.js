"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[44115],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,k=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},74270:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return p},metadata:function(){return k},toc:function(){return f}});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&s(e,n,t[n]);return e};const p={title:"AsyncReduceAllIterator<I,R>",slug:"/rimbu/stream/async-custom/AsyncReduceAllIterator/class"},m="class AsyncReduceAllIterator<I,R>",k={unversionedId:"rimbu_stream/async-custom/AsyncReduceAllIterator.class",id:"rimbu_stream/async-custom/AsyncReduceAllIterator.class",title:"AsyncReduceAllIterator<I,R>",description:"undocumented",source:"@site/api/rimbu_stream/async-custom/AsyncReduceAllIterator.class.mdx",sourceDirName:"rimbu_stream/async-custom",slug:"/rimbu/stream/async-custom/AsyncReduceAllIterator/class",permalink:"/api/rimbu/stream/async-custom/AsyncReduceAllIterator/class",draft:!1,tags:[],version:"current",frontMatter:{title:"AsyncReduceAllIterator<I,R>",slug:"/rimbu/stream/async-custom/AsyncReduceAllIterator/class"},sidebar:"defaultSidebar",previous:{title:"AsyncPrependIterator<T>",permalink:"/api/rimbu/stream/async-custom/AsyncPrependIterator/class"},next:{title:"AsyncReduceIterator<I,R>",permalink:"/api/rimbu/stream/async-custom/AsyncReduceIterator/class"}},y={},f=[{value:"Type parameters",id:"type-parameters",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>err</code>",id:"err",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>index</code>",id:"index",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>isDone</code>",id:"isdone",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>reducers</code>",id:"reducers",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>reducersToClose</code>",id:"reducerstoclose",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>return</code>",id:"return",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>source</code>",id:"source",level:3},{value:"Definition",id:"definition-6",level:4},{value:"<code>state</code>",id:"state",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>fastNext</code>",id:"fastnext",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Type parameters",id:"type-parameters-1",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>next</code>",id:"next",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Overrides",id:"overrides-2",level:4}],v={toc:f};function N(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},v),s),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"class-asyncreducealliteratorir"}),(0,r.kt)("inlineCode",{parentName:"h1"},"class AsyncReduceAllIterator<I,R>")),(0,r.kt)("p",null,"undocumented"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFastIteratorBase/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncFastIteratorBase<T>"))),(0,r.kt)("h3",c({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"I"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"undocumented")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"R"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"undocumented")))),(0,r.kt)("h2",c({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"err"}),(0,r.kt)("inlineCode",{parentName:"h3"},"err")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"err: any;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"index"}),(0,r.kt)("inlineCode",{parentName:"h3"},"index")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"index: number;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"isdone"}),(0,r.kt)("inlineCode",{parentName:"h3"},"isDone")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isDone: boolean;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"reducers"}),(0,r.kt)("inlineCode",{parentName:"h3"},"reducers")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-3"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly reducers: "),(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/common/AsyncReducer/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,r.kt)("inlineCode",{parentName:"p"},"<I, any>[];")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"reducerstoclose"}),(0,r.kt)("inlineCode",{parentName:"h3"},"reducersToClose")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-4"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly reducersToClose: Set<"),(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/common/AsyncReducer/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,r.kt)("inlineCode",{parentName:"p"},"<any>>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"return"}),(0,r.kt)("inlineCode",{parentName:"h3"},"return")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-5"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"return?: () => Promise<any>;"))),(0,r.kt)("h4",c({},{id:"overrides"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFastIteratorBase/class#return"}),"AsyncFastIteratorBase.return"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"source"}),(0,r.kt)("inlineCode",{parentName:"h3"},"source")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-6"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly source: "),(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/async/AsyncFastIterator/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncFastIterator")),(0,r.kt)("inlineCode",{parentName:"p"},"<I>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"state"}),(0,r.kt)("inlineCode",{parentName:"h3"},"state")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-7"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"state?: unknown[];")))),(0,r.kt)("h2",c({},{id:"methods"}),"Methods"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"fastnext"}),(0,r.kt)("inlineCode",{parentName:"h3"},"fastNext")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-8"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fastNext<O>(otherwise?: "),(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/common/AsyncOptLazy/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncOptLazy")),(0,r.kt)("inlineCode",{parentName:"p"},"<O>): Promise<R "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," O>;"))),(0,r.kt)("h3",c({},{id:"type-parameters-1"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"O"),(0,r.kt)("td",c({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",c({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"otherwise")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/common/AsyncOptLazy/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncOptLazy")),(0,r.kt)("inlineCode",{parentName:"td"},"<O>")),(0,r.kt)("td",c({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",c({},{id:"overrides-1"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFastIteratorBase/class#fastNext"}),"AsyncFastIteratorBase.fastNext"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"next"}),(0,r.kt)("inlineCode",{parentName:"h3"},"next")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-9"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"next(): Promise<IteratorResult<T>>;"))),(0,r.kt)("h4",c({},{id:"overrides-2"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/async/AsyncFastIterator/interface#next"}),"AsyncFastIterator.next"),", ",(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFastIteratorBase/class#next"}),"AsyncFastIteratorBase.next"))))}N.isMDXComponent=!0}}]);