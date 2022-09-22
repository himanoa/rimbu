"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[88818],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=m(a),s=r,c=k["".concat(p,".").concat(s)]||k[s]||u[s]||l;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},45690:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>s,default:()=>f,frontMatter:()=>k,metadata:()=>c,toc:()=>b});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(o)for(var a of o(t))m.call(t,a)&&d(e,a,t[a]);return e};const k={title:"@rimbu/common",slug:"/rimbu/common"},s="package @rimbu/common",c={unversionedId:"rimbu_common/index",id:"rimbu_common/index",title:"@rimbu/common",description:"The @rimbu/common package provides many commonly used types and utilities that can also be of use to Rimbu users.",source:"@site/api/rimbu_common/index.mdx",sourceDirName:"rimbu_common",slug:"/rimbu/common",permalink:"/api/rimbu/common",draft:!1,tags:[],version:"current",frontMatter:{title:"@rimbu/common",slug:"/rimbu/common"},sidebar:"defaultSidebar",previous:{title:"WithRow",permalink:"/api/rimbu/collection-types/set-custom/WithRow/type"},next:{title:"ArrayNonEmpty",permalink:"/api/rimbu/common/ArrayNonEmpty/type"}},N={},b=[{value:"Interfaces",id:"interfaces",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Functions",id:"functions",level:2},{value:"<code>Err</code>",id:"err",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>OptLazy</code>",id:"optlazy",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Type parameters",id:"type-parameters",level:5},{value:"Parameters",id:"parameters",level:4},{value:"<code>OptLazyOr</code>",id:"optlazyor",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Type parameters",id:"type-parameters-1",level:5},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>TraverseState</code>",id:"traversestate",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>Update</code>",id:"update",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Type parameters",id:"type-parameters-2",level:5},{value:"Parameters",id:"parameters-3",level:4}],y={toc:b};function f(e){var t,a=e,{components:r}=a,d=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),d),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"package-rimbucommon"}),(0,n.kt)("inlineCode",{parentName:"h1"},"package @rimbu/common")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@rimbu/common")," package provides many commonly used types and utilities that can also be of use to Rimbu users."),(0,n.kt)("h2",u({},{id:"interfaces"}),"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/Comp/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"Comp<K>"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"An object providing methods to compare two values of type ",(0,n.kt)("inlineCode",{parentName:"td"},"K"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/ToJSON/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"ToJSON<V,D>"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Utility type to convert some object to a JSON serializable format.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/TraverseState/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"TraverseState"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"An object used to track the state of a traversal, e.g. a ",(0,n.kt)("inlineCode",{parentName:"td"},"forEach"),".")))),(0,n.kt)("h2",u({},{id:"namespaces"}),"Namespaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/AsyncOptLazy/namespace"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncOptLazy"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A potentially lazy and/or asynchronous value of type T.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/AsyncReducer/namespace"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncReducer"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"An ",(0,n.kt)("inlineCode",{parentName:"td"},"AsyncReducer")," is a stand-alone asynchronous calculation that takes input values of type I, and, when requested, produces an output value of type O.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/CollectFun/namespace"}),(0,n.kt)("inlineCode",{parentName:"a"},"CollectFun"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A function used in ",(0,n.kt)("inlineCode",{parentName:"td"},"collect")," methods to collect values from a collection. This is basically a single-pass map and filter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/Comp/namespace"}),(0,n.kt)("inlineCode",{parentName:"a"},"Comp"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"An object providing methods to compare two values of type ",(0,n.kt)("inlineCode",{parentName:"td"},"K"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/Eq/namespace"}),(0,n.kt)("inlineCode",{parentName:"a"},"Eq"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A function returning true if given ",(0,n.kt)("inlineCode",{parentName:"td"},"v1")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"v2")," should be considered equal.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/ErrBase/namespace"}),(0,n.kt)("inlineCode",{parentName:"a"},"ErrBase"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"undocumented")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/IndexRange/namespace"}),(0,n.kt)("inlineCode",{parentName:"a"},"IndexRange"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A flexible range specification for numeric indices. If a start or end is defined, a tuple can be used where the second item is a boolean indicating whether that end is inclusive or exclusive.")))),(0,n.kt)("p",null," An IndexRange can have one of the following forms:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"{ amount: number }"),(0,n.kt)("li",{parentName:"ul"},"{ start: number }"),(0,n.kt)("li",{parentName:"ul"},"{ start: number, amount: number }"),(0,n.kt)("li",{parentName:"ul"},"{ start: number, end: number }"),(0,n.kt)("li",{parentName:"ul"},"{ start: number, end: ","[number, boolean]"," }"),(0,n.kt)("li",{parentName:"ul"},"{ start: ","[number, boolean]"," }"),(0,n.kt)("li",{parentName:"ul"},"{ start: ","[number, boolean]",", amount: number }"),(0,n.kt)("li",{parentName:"ul"},"{ start: ","[number, boolean]",", end: number }"),(0,n.kt)("li",{parentName:"ul"},"{ start: ","[number, boolean]",", end: ","[number, boolean]"," }"),(0,n.kt)("li",{parentName:"ul"},"{ end: number }"),(0,n.kt)("li",{parentName:"ul"},"{ end: ","[number, boolean]"," }\n|\n| ",(0,n.kt)("a",u({parentName:"li"},{href:"/api/rimbu/common/Range_2/namespace"}),(0,n.kt)("inlineCode",{parentName:"a"},"Range_2"))," | A range definition for any type of (orderable) value. If a start or end is defined, a tuple can be used where the second item is a boolean indicating whether that end is inclusive (true) or exclusive (false).\nA Range of type T can have one of the following forms:\n"),(0,n.kt)("li",{parentName:"ul"},"{ end: T }"),(0,n.kt)("li",{parentName:"ul"},"{ end: ","[T, boolean]"," }"),(0,n.kt)("li",{parentName:"ul"},"{ start: T }"),(0,n.kt)("li",{parentName:"ul"},"{ start: T, end: T }"),(0,n.kt)("li",{parentName:"ul"},"{ start: T, end: ","[T, boolean]"," }"),(0,n.kt)("li",{parentName:"ul"},"{ start: ","[T, boolean]"," }"),(0,n.kt)("li",{parentName:"ul"},"{ start: ","[T, boolean]",", end: T }"),(0,n.kt)("li",{parentName:"ul"},"{ start: ","[T, boolean]",", end: ","[T, boolean]"," }\n|\n| ",(0,n.kt)("a",u({parentName:"li"},{href:"/api/rimbu/common/Reducer/namespace"}),(0,n.kt)("inlineCode",{parentName:"a"},"Reducer"))," | A ",(0,n.kt)("inlineCode",{parentName:"li"},"Reducer")," is a stand-alone calculation that takes input values of type I, and, when requested, produces an output value of type O. |")),(0,n.kt)("h2",u({},{id:"functions"}),"Functions"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"err"}),(0,n.kt)("inlineCode",{parentName:"h3"},"Err")),(0,n.kt)("p",null,"Throws an ",(0,n.kt)("inlineCode",{parentName:"p"},"Err.ForcedError")," error when called.")),(0,n.kt)("h4",u({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export declare function Err(): never;"))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const emptyMap = HashMap.empty<number, string>()\nemptyMap.get(5, Err);\n// throws: Err.CustomError(message: 'Err: forced to throw error')\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"optlazy"}),(0,n.kt)("inlineCode",{parentName:"h3"},"OptLazy")),(0,n.kt)("p",null,"Returns the value contained in an ",(0,n.kt)("inlineCode",{parentName:"p"},"OptLazy")," instance of type T.")),(0,n.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export declare function OptLazy<T>(optLazy: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>): T;"))),(0,n.kt)("h5",u({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"optLazy")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/OptLazy/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,n.kt)("inlineCode",{parentName:"td"},"<T>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the ",(0,n.kt)("inlineCode",{parentName:"td"},"OptLazy")," value of type T")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"OptLazy(1)              // => 1\nOptLazy(() => 1)        // => 1\nOptLazy(() => () => 1)  // => () => 1\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"optlazyor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"OptLazyOr")),(0,n.kt)("p",null,"Returns the value contained in an ",(0,n.kt)("inlineCode",{parentName:"p"},"OptLazyOr")," instance of type T, or the given ",(0,n.kt)("inlineCode",{parentName:"p"},"otherValue")," if the lazy function returns it.")),(0,n.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export declare function OptLazyOr<T, O>(optLazyOr: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/OptLazyOr/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"OptLazyOr")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, O>, otherValue: O): T "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," O;"))),(0,n.kt)("h5",u({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"O"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-1"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"optLazyOr")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/OptLazyOr/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"OptLazyOr")),(0,n.kt)("inlineCode",{parentName:"td"},"<T, O>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"a value or a function returning a value or otherwise the received value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"otherValue")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"O")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the value to return if the optLazyOr does not return its own value")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"OptLazyOr(1, 'a')               // => 1\nOptLazyOr(() => 1, 'a')         // => 1\nOptLazyOr((none) => none, 'a')  // => 'a'\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"traversestate"}),(0,n.kt)("inlineCode",{parentName:"h3"},"TraverseState")),(0,n.kt)("p",null,"Returns a new ",(0,n.kt)("inlineCode",{parentName:"p"},"TraverseState")," instance, using optionally given ",(0,n.kt)("inlineCode",{parentName:"p"},"startIndex")," as a start index value.")),(0,n.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export declare function TraverseState(startIndex?: number): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/TraverseState/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"TraverseState")),(0,n.kt)("inlineCode",{parentName:"p"},";"))),(0,n.kt)("h4",u({},{id:"parameters-2"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"startIndex")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"(default: 0) the start index to use"))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"update"}),(0,n.kt)("inlineCode",{parentName:"h3"},"Update")),(0,n.kt)("p",null,"Returns the result of given ",(0,n.kt)("inlineCode",{parentName:"p"},"update")," parameter, where it can either directly give a new value, or it is a function receiving the given ",(0,n.kt)("inlineCode",{parentName:"p"},"value"),", and returns a new value.")),(0,n.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export declare function Update<T>(value: T, update: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Update/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Update")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>): T;"))),(0,n.kt)("h5",u({},{id:"type-parameters-2"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-3"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the current value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"update")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/Update/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Update")),(0,n.kt)("inlineCode",{parentName:"td"},"<T>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"an ",(0,n.kt)("inlineCode",{parentName:"td"},"Update")," value, either a new value or a function receiving the old value and returning a new one.")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"Update(1, 2)          // => 2\nUpdate(1, () => 10)   // => 10\nUpdate(1, v => v + 1) // => 2\n")))))}f.isMDXComponent=!0}}]);