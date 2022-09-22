"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[5713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),o=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=o(n),s=r,c=k["".concat(m,".").concat(s)]||k[s]||u[s]||l;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},19108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>s,default:()=>b,frontMatter:()=>k,metadata:()=>c,toc:()=>h});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))o.call(t,n)&&d(e,n,t[n]);return e};const k={title:"AsyncReducer.Impl<I,O,S>",slug:"/rimbu/common/AsyncReducer/Impl/interface"},s="interface AsyncReducer.Impl<I,O,S>",c={unversionedId:"rimbu_common/AsyncReducer/Impl.interface",id:"rimbu_common/AsyncReducer/Impl.interface",title:"AsyncReducer.Impl<I,O,S>",description:"undocumented",source:"@site/api/rimbu_common/AsyncReducer/Impl.interface.mdx",sourceDirName:"rimbu_common/AsyncReducer",slug:"/rimbu/common/AsyncReducer/Impl/interface",permalink:"/api/rimbu/common/AsyncReducer/Impl/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"AsyncReducer.Impl<I,O,S>",slug:"/rimbu/common/AsyncReducer/Impl/interface"},sidebar:"defaultSidebar",previous:{title:"Base<I,O,S>",permalink:"/api/rimbu/common/AsyncReducer/Base/class"},next:{title:"and",permalink:"/api/rimbu/common/AsyncReducer/and/var"}},N={},h=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>init</code>",id:"init",level:3},{value:"Definition",id:"definition",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>collectInput</code>",id:"collectinput",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>dropInput</code>",id:"dropinput",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>filterInput</code>",id:"filterinput",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>mapInput</code>",id:"mapinput",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>mapOutput</code>",id:"mapoutput",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"<code>next</code>",id:"next",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"<code>onClose</code>",id:"onclose",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"<code>sliceInput</code>",id:"sliceinput",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Parameters",id:"parameters-7",level:4},{value:"<code>stateToResult</code>",id:"statetoresult",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Parameters",id:"parameters-8",level:4},{value:"<code>takeInput</code>",id:"takeinput",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Parameters",id:"parameters-9",level:4}],y={toc:h};function b(e){var t,n=e,{components:r}=n,d=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&o.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},y),d),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"interface-asyncreducerimplios"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface AsyncReducer.Impl<I,O,S>")),(0,a.kt)("p",null,"undocumented"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/AsyncReducer/Base/class"}),(0,a.kt)("inlineCode",{parentName:"a"},"Base<I,O,S>"))),(0,a.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"I"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"undocumented")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"O"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"undocumented")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"S"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"undocumented")))),(0,a.kt)("h2",u({},{id:"properties"}),"Properties"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"init"}),(0,a.kt)("inlineCode",{parentName:"h3"},"init")),(0,a.kt)("p",null,"The initial state value for the reducer algorithm.")),(0,a.kt)("h4",u({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly init: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/AsyncOptLazy/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"AsyncOptLazy")),(0,a.kt)("inlineCode",{parentName:"p"},"<S>;")))),(0,a.kt)("h2",u({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"collectinput"}),(0,a.kt)("inlineCode",{parentName:"h3"},"collectInput")),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncReducer")," instance that converts or filters its input values using given ",(0,a.kt)("inlineCode",{parentName:"p"},"collectFun")," before passing them to the reducer.")),(0,a.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"collectInput<I2>(collectFun: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/AsyncCollectFun/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"AsyncCollectFun")),(0,a.kt)("inlineCode",{parentName:"p"},"<I2, I>): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/AsyncReducer/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,a.kt)("inlineCode",{parentName:"p"},"<I2, O>;"))),(0,a.kt)("h4",u({},{id:"type-parameters-1"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"I2"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"collectFun")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/AsyncCollectFun/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"AsyncCollectFun")),(0,a.kt)("inlineCode",{parentName:"td"},"<I2, I>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a function receiving",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"td"},"value"),": the next value",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"td"},"index"),": the value index",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"td"},"skip"),": a token that, when returned, will not add a value to the resulting collection",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"td"},"halt"),": a function that, when called, ensures no next elements are passed")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"AsyncReducer\n.createMono(0, async (c, v) => c + v)\n.collectInput(async (v, _, skip) => v <= 10 ? skip : v * 2)\n// this reducer will double all input values larger thant 10 before summing them,\n// and will skip all values smaller than 10\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"dropinput"}),(0,a.kt)("inlineCode",{parentName:"h3"},"dropInput")),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Reducer")," instance that skips the first given ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," of input elements, and will process subsequent elements.")),(0,a.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dropInput(amount: number): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/AsyncReducer/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,a.kt)("inlineCode",{parentName:"p"},"<I, O>;"))),(0,a.kt)("h4",u({},{id:"parameters-1"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"amount")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the amount of elements to skip")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"await AsyncStream\n.from(Stream.range({ end: 10 }))\n.reduce(\nAsyncReducer\n.createMono(0, async (c, v) => c + v)\n.dropInput(9)\n)\n// => 19\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"filterinput"}),(0,a.kt)("inlineCode",{parentName:"h3"},"filterInput")),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncReducer")," instance that only passes values to the reducer that satisy the given ",(0,a.kt)("inlineCode",{parentName:"p"},"pred")," predicate.")),(0,a.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"filterInput(pred: (value: I, index: number, halt: () => void) => "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/MaybePromise/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,a.kt)("inlineCode",{parentName:"p"},"<boolean>): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/AsyncReducer/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,a.kt)("inlineCode",{parentName:"p"},"<I, O>;"))),(0,a.kt)("h4",u({},{id:"parameters-2"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"pred")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(value: I, index: number, halt: () => void) => "),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/MaybePromise/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,a.kt)("inlineCode",{parentName:"td"},"<boolean>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a potaentially asynchronous function that returns true if the value should be passed to the reducer based on the following inputs:",(0,a.kt)("br",null)," - value: the current input value",(0,a.kt)("br",null)," - index: the current input index",(0,a.kt)("br",null)," - halt: function that, when called, ensures no more new values are passed to the reducer")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"AsyncReducer\n.createMono(0, async (c, v) => c + v)\n.filterInput(async v => v > 10)\n// this reducer will only sum values larger than 10\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"mapinput"}),(0,a.kt)("inlineCode",{parentName:"h3"},"mapInput")),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncReducer")," instance that converts its input values using given ",(0,a.kt)("inlineCode",{parentName:"p"},"mapFun")," before passing them to the reducer.")),(0,a.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mapInput<I2>(mapFun: (value: I2, index: number) => "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/MaybePromise/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,a.kt)("inlineCode",{parentName:"p"},"<I>): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/AsyncReducer/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,a.kt)("inlineCode",{parentName:"p"},"<I2, O>;"))),(0,a.kt)("h4",u({},{id:"type-parameters-2"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"I2"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",u({},{id:"parameters-3"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"mapFun")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(value: I2, index: number) => "),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/MaybePromise/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,a.kt)("inlineCode",{parentName:"td"},"<I>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a potentially asynchronous function that returns a new value to pass to the reducer based on the following inputs:",(0,a.kt)("br",null)," - value: the current input value",(0,a.kt)("br",null)," - index: the current input index")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"AsyncReducer\n.createMono(0, async (c, v) => c + v)\n.mapInput(async v => v * 2)\n// this reducer will double all input values before summing them\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"mapoutput"}),(0,a.kt)("inlineCode",{parentName:"h3"},"mapOutput")),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncReducer")," instance that converts its output values using given ",(0,a.kt)("inlineCode",{parentName:"p"},"mapFun"),".")),(0,a.kt)("h4",u({},{id:"definition-5"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mapOutput<O2>(mapFun: (value: O) => "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/MaybePromise/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,a.kt)("inlineCode",{parentName:"p"},"<O2>): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/AsyncReducer/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,a.kt)("inlineCode",{parentName:"p"},"<I, O2>;"))),(0,a.kt)("h4",u({},{id:"type-parameters-3"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"O2"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",u({},{id:"parameters-4"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"mapFun")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(value: O) => "),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/MaybePromise/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,a.kt)("inlineCode",{parentName:"td"},"<O2>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a potentially asynchronous function that takes the current output value and converts it to a new output value")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"AsyncReducer\n.createMono(0, async (c, v) => c + v)\n.mapOutput(async v => String(v))\n// this reducer will convert all its results to string before returning them\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"next"}),(0,a.kt)("inlineCode",{parentName:"h3"},"next")),(0,a.kt)("p",null,"Returns the next state based on the given input values")),(0,a.kt)("h4",u({},{id:"definition-6"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"next(state: S, elem: I, index: number, halt: () => void): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/MaybePromise/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,a.kt)("inlineCode",{parentName:"p"},"<S>;"))),(0,a.kt)("h4",u({},{id:"parameters-5"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"state")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"S")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the current state")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"elem")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"I")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the current input value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"index")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the current input index")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"halt")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"() => void")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"a function that, when called, ensures no more values are passed to the reducer"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"onclose"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onClose")),(0,a.kt)("p",null,"An optional function that is called when the reducer will no longer receive values.")),(0,a.kt)("h4",u({},{id:"definition-7"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"onClose?(state: S, error?: unknown): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/MaybePromise/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,a.kt)("inlineCode",{parentName:"p"},"<void>;"))),(0,a.kt)("h4",u({},{id:"parameters-6"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"state")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"S")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the final reducer state")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"error")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"unknown")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"(optional) if an error has occured, it ix passed here"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"sliceinput"}),(0,a.kt)("inlineCode",{parentName:"h3"},"sliceInput")),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Reducer")," instance that takes given ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," of elements starting at given ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," index, and ignores other elements.")),(0,a.kt)("h4",u({},{id:"definition-8"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sliceInput(from?: number, amount?: number): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/AsyncReducer/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,a.kt)("inlineCode",{parentName:"p"},"<I, O>;"))),(0,a.kt)("h4",u({},{id:"parameters-7"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"from")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"(default: 0) the index at which to start processing elements")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"amount")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"(optional) the amount of elements to process, if not given, processes all elements from the ",(0,a.kt)("inlineCode",{parentName:"td"},"from")," index")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"await AsyncStream\n.from(Stream.range({ end: 10 }))\n.reduce(\nAsyncReducer\n.createMono(0, async (c, v) => c + v)\n.sliceInput(1, 2)\n)\n// => 3\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"statetoresult"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stateToResult")),(0,a.kt)("p",null,"Returns the output value based on the given ",(0,a.kt)("inlineCode",{parentName:"p"},"state"))),(0,a.kt)("h4",u({},{id:"definition-9"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stateToResult(state: S): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/MaybePromise/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,a.kt)("inlineCode",{parentName:"p"},"<O>;"))),(0,a.kt)("h4",u({},{id:"parameters-8"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"state")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"S")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the current state"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"takeinput"}),(0,a.kt)("inlineCode",{parentName:"h3"},"takeInput")),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncReducer")," instance that takes at most the given ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," of input elements, and will ignore subsequent elements.")),(0,a.kt)("h4",u({},{id:"definition-10"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"takeInput(amount: number): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/AsyncReducer/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,a.kt)("inlineCode",{parentName:"p"},"<I, O>;"))),(0,a.kt)("h4",u({},{id:"parameters-9"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"amount")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the amount of elements to accept")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"await AsyncStream\n.from(Stream.range({ end: 10 }))\n.reduce(\nAsyncReducer\n.createMono(0, async (c, v) => c + v)\n.takeInput(2)\n)\n// => 1\n")))))}b.isMDXComponent=!0}}]);