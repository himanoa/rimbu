"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[84418],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},o="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),o=m(a),s=r,c=o["".concat(d,".").concat(s)]||o[s]||k[s]||l;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[o]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},19338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>N,default:()=>g,frontMatter:()=>c,metadata:()=>y,toc:()=>v});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,o=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))m.call(t,a)&&u(e,a,t[a]);return e},k=(e,t)=>l(e,i(t)),s=(e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a};const c={title:"Base<I,O,S>",slug:"/rimbu/core/AsyncReducer/Base/class"},N="class Base<I,O,S>",y={unversionedId:"rimbu_core/AsyncReducer/Base.class",id:"rimbu_core/AsyncReducer/Base.class",title:"Base<I,O,S>",description:"A base class that can be used to easily create AsyncReducer instances.",source:"@site/api/rimbu_core/AsyncReducer/Base.class.mdx",sourceDirName:"rimbu_core/AsyncReducer",slug:"/rimbu/core/AsyncReducer/Base/class",permalink:"/api/rimbu/core/AsyncReducer/Base/class",draft:!1,tags:[],version:"current",frontMatter:{title:"Base<I,O,S>",slug:"/rimbu/core/AsyncReducer/Base/class"},sidebar:"defaultSidebar",previous:{title:"AsyncReducer (namespace)",permalink:"/api/rimbu/core/AsyncReducer/namespace"},next:{title:"AsyncReducer.Impl<I,O,S>",permalink:"/api/rimbu/core/AsyncReducer/Impl/interface"}},b={},v=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>init</code>",id:"init",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>next</code>",id:"next",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>onClose</code>",id:"onclose",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>stateToResult</code>",id:"statetoresult",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>collectInput</code>",id:"collectinput",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>dropInput</code>",id:"dropinput",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>filterInput</code>",id:"filterinput",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"<code>mapInput</code>",id:"mapinput",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>mapOutput</code>",id:"mapoutput",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>next</code>",id:"next-1",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>sliceInput</code>",id:"sliceinput",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"<code>stateToResult</code>",id:"statetoresult-1",level:3},{value:"Definition",id:"definition-11",level:4},{value:"Parameters",id:"parameters-7",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"<code>takeInput</code>",id:"takeinput",level:3},{value:"Definition",id:"definition-12",level:4},{value:"Parameters",id:"parameters-8",level:4},{value:"Overrides",id:"overrides-10",level:4}],h={toc:v},f="wrapper";function g(e){var t=e,{components:a}=t,r=s(t,["components"]);return(0,n.kt)(f,k(o(o({},h),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"class-baseios"}),(0,n.kt)("inlineCode",{parentName:"h1"},"class Base<I,O,S>")),(0,n.kt)("p",null,"A base class that can be used to easily create ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncReducer")," instances."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implements:")," ",(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/Impl/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncReducer.Impl<I,O,S>"))),(0,n.kt)("h2",o({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"I"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"the input value type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"O"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"the output value type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"S"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"the internal state type")))),(0,n.kt)("h2",o({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"init"}),(0,n.kt)("inlineCode",{parentName:"h3"},"init")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly init: AsyncOptLazy<S>;"))),(0,n.kt)("h4",o({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/Impl/interface#init"}),"Impl.init"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"next"}),(0,n.kt)("inlineCode",{parentName:"h3"},"next")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly next: (state: S, elem: I, index: number, halt: () => void) => "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/MaybePromise/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,n.kt)("inlineCode",{parentName:"p"},"<S>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"onclose"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onClose")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly onClose?: ((state: S, error?: unknown) => "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/MaybePromise/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,n.kt)("inlineCode",{parentName:"p"},"<void>) "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,n.kt)("h4",o({},{id:"overrides-1"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/Impl/interface#onClose"}),"Impl.onClose"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"statetoresult"}),(0,n.kt)("inlineCode",{parentName:"h3"},"stateToResult")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly stateToResult: (state: S) => "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/MaybePromise/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,n.kt)("inlineCode",{parentName:"p"},"<O>;")))),(0,n.kt)("h2",o({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"collectinput"}),(0,n.kt)("inlineCode",{parentName:"h3"},"collectInput")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"collectInput<I2>(collectFun: "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncCollectFun/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncCollectFun")),(0,n.kt)("inlineCode",{parentName:"p"},"<I2, I>): "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<I2, O>;"))),(0,n.kt)("h4",o({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"I2"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"collectFun")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/api/rimbu/core/AsyncCollectFun/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncCollectFun")),(0,n.kt)("inlineCode",{parentName:"td"},"<I2, I>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"overrides-2"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/Impl/interface#collectInput"}),"Impl.collectInput"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"dropinput"}),(0,n.kt)("inlineCode",{parentName:"h3"},"dropInput")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-5"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"dropInput(amount: number): "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<I, O>;"))),(0,n.kt)("h4",o({},{id:"parameters-1"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"amount")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"overrides-3"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/Impl/interface#dropInput"}),"Impl.dropInput"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"filterinput"}),(0,n.kt)("inlineCode",{parentName:"h3"},"filterInput")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-6"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"filterInput(pred: (value: I, index: number, halt: () => void) => "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/MaybePromise/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,n.kt)("inlineCode",{parentName:"p"},"<boolean>): "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<I, O>;"))),(0,n.kt)("h4",o({},{id:"parameters-2"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"pred")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(value: I, index: number, halt: () => void) => "),(0,n.kt)("a",o({parentName:"td"},{href:"/api/rimbu/core/MaybePromise/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,n.kt)("inlineCode",{parentName:"td"},"<boolean>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"overrides-4"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/Impl/interface#filterInput"}),"Impl.filterInput"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"mapinput"}),(0,n.kt)("inlineCode",{parentName:"h3"},"mapInput")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-7"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"mapInput<I2>(mapFun: (value: I2, index: number) => "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/MaybePromise/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,n.kt)("inlineCode",{parentName:"p"},"<I>): "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<I2, O>;"))),(0,n.kt)("h4",o({},{id:"type-parameters-2"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"I2"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"parameters-3"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mapFun")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(value: I2, index: number) => "),(0,n.kt)("a",o({parentName:"td"},{href:"/api/rimbu/core/MaybePromise/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,n.kt)("inlineCode",{parentName:"td"},"<I>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"overrides-5"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/Impl/interface#mapInput"}),"Impl.mapInput"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"mapoutput"}),(0,n.kt)("inlineCode",{parentName:"h3"},"mapOutput")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-8"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"mapOutput<O2>(mapFun: (value: O) => "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/MaybePromise/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,n.kt)("inlineCode",{parentName:"p"},"<O2>): "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<I, O2>;"))),(0,n.kt)("h4",o({},{id:"type-parameters-3"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"O2"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"parameters-4"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mapFun")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(value: O) => "),(0,n.kt)("a",o({parentName:"td"},{href:"/api/rimbu/core/MaybePromise/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,n.kt)("inlineCode",{parentName:"td"},"<O2>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"overrides-6"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/Impl/interface#mapOutput"}),"Impl.mapOutput"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"next-1"}),(0,n.kt)("inlineCode",{parentName:"h3"},"next")),(0,n.kt)("p",null,"Returns the next state based on the given input values")),(0,n.kt)("h4",o({},{id:"definition-9"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"next(state: S, elem: I, index: number, halt: () => void): "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/MaybePromise/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,n.kt)("inlineCode",{parentName:"p"},"<S>;"))),(0,n.kt)("h4",o({},{id:"parameters-5"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"state")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"S")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"the current state")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"elem")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"I")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"the current input value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"index")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"the current input index")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"halt")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"() => void")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"a function that, when called, ensures no more values are passed to the reducer")))),(0,n.kt)("h4",o({},{id:"overrides-7"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/Impl/interface#next"}),"Impl.next"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"sliceinput"}),(0,n.kt)("inlineCode",{parentName:"h3"},"sliceInput")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-10"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"sliceInput(from?: number, amount?: number): "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<I, O>;"))),(0,n.kt)("h4",o({},{id:"parameters-6"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"from")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"amount")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"overrides-8"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/Impl/interface#sliceInput"}),"Impl.sliceInput"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"statetoresult-1"}),(0,n.kt)("inlineCode",{parentName:"h3"},"stateToResult")),(0,n.kt)("p",null,"Returns the output value based on the given ",(0,n.kt)("inlineCode",{parentName:"p"},"state"))),(0,n.kt)("h4",o({},{id:"definition-11"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"stateToResult(state: S): "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/MaybePromise/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,n.kt)("inlineCode",{parentName:"p"},"<O>;"))),(0,n.kt)("h4",o({},{id:"parameters-7"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"state")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"S")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"the current state")))),(0,n.kt)("h4",o({},{id:"overrides-9"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/Impl/interface#stateToResult"}),"Impl.stateToResult"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",o({},{id:"takeinput"}),(0,n.kt)("inlineCode",{parentName:"h3"},"takeInput")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",o({},{id:"definition-12"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"takeInput(amount: number): "),(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<I, O>;"))),(0,n.kt)("h4",o({},{id:"parameters-8"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"amount")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",o({},{id:"overrides-10"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/Impl/interface#takeInput"}),"Impl.takeInput"))))}g.isMDXComponent=!0}}]);