"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[99629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=m(n),c=i,s=k["".concat(p,".").concat(c)]||k[c]||u[c]||r;return n?a.createElement(s,l(l({ref:t},d),{},{components:n})):a.createElement(s,l({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},17862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>c,default:()=>f,frontMatter:()=>k,metadata:()=>s,toc:()=>C});var a=n(3905),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))m.call(t,n)&&d(e,n,t[n]);return e};const k={title:"Comp (namespace)",slug:"/rimbu/common/Comp/namespace"},c="namespace Comp",s={unversionedId:"rimbu_common/Comp/index",id:"rimbu_common/Comp/index",title:"Comp (namespace)",description:"An object providing methods to compare two values of type K.",source:"@site/api/rimbu_common/Comp/index.mdx",sourceDirName:"rimbu_common/Comp",slug:"/rimbu/common/Comp/namespace",permalink:"/api/rimbu/common/Comp/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"Comp (namespace)",slug:"/rimbu/common/Comp/namespace"},sidebar:"defaultSidebar",previous:{title:"CollectFun",permalink:"/api/rimbu/common/CollectFun/type"},next:{title:"Comp<K>",permalink:"/api/rimbu/common/Comp/interface"}},N={},C=[{value:"Functions",id:"functions",level:2},{value:"<code>anyDeepComp</code>",id:"anydeepcomp",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters",level:5},{value:"<code>anyFlatComp</code>",id:"anyflatcomp",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Type parameters",id:"type-parameters-1",level:5},{value:"<code>anyShallowComp</code>",id:"anyshallowcomp",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Type parameters",id:"type-parameters-2",level:5},{value:"<code>anyStringJSONComp</code>",id:"anystringjsoncomp",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Type parameters",id:"type-parameters-3",level:5},{value:"<code>anyToStringComp</code>",id:"anytostringcomp",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>bigIntComp</code>",id:"bigintcomp",level:3},{value:"Definition",id:"definition-5",level:4},{value:"<code>booleanComp</code>",id:"booleancomp",level:3},{value:"Definition",id:"definition-6",level:4},{value:"<code>createValueOfComp</code>",id:"createvalueofcomp",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Type parameters",id:"type-parameters-4",level:5},{value:"Parameters",id:"parameters",level:4},{value:"<code>dateComp</code>",id:"datecomp",level:3},{value:"Definition",id:"definition-8",level:4},{value:"<code>defaultComp</code>",id:"defaultcomp",level:3},{value:"Definition",id:"definition-9",level:4},{value:"<code>invert</code>",id:"invert",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Type parameters",id:"type-parameters-5",level:5},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>iterableComp</code>",id:"iterablecomp",level:3},{value:"Definition",id:"definition-11",level:4},{value:"Type parameters",id:"type-parameters-6",level:5},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>numberComp</code>",id:"numbercomp",level:3},{value:"Definition",id:"definition-12",level:4},{value:"<code>objectComp</code>",id:"objectcomp",level:3},{value:"Definition",id:"definition-13",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>stringCaseInsensitiveComp</code>",id:"stringcaseinsensitivecomp",level:3},{value:"Definition",id:"definition-14",level:4},{value:"<code>stringCharCodeComp</code>",id:"stringcharcodecomp",level:3},{value:"Definition",id:"definition-15",level:4},{value:"<code>stringComp</code>",id:"stringcomp",level:3},{value:"Definition",id:"definition-16",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"<code>toEq</code>",id:"toeq",level:3},{value:"Definition",id:"definition-17",level:4},{value:"Type parameters",id:"type-parameters-7",level:5},{value:"Parameters",id:"parameters-5",level:4},{value:"<code>withNull</code>",id:"withnull",level:3},{value:"Definition",id:"definition-18",level:4},{value:"Type parameters",id:"type-parameters-8",level:5},{value:"Parameters",id:"parameters-6",level:4},{value:"<code>withUndefined</code>",id:"withundefined",level:3},{value:"Definition",id:"definition-19",level:4},{value:"Type parameters",id:"type-parameters-9",level:5},{value:"Parameters",id:"parameters-7",level:4}],h={toc:C};function f(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},h),d),r(t,l({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"namespace-comp"}),(0,a.kt)("inlineCode",{parentName:"h1"},"namespace Comp")),(0,a.kt)("p",null,"An object providing methods to compare two values of type ",(0,a.kt)("inlineCode",{parentName:"p"},"K"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp<K>"))),(0,a.kt)("h2",u({},{id:"functions"}),"Functions"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"anydeepcomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"anyDeepComp")),(0,a.kt)("p",null,"Returns a Comp instance that compares any value using default comparison functions. For Iterables and objects, their elements are compared recursively.  ")),(0,a.kt)("h4",u({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function anyDeepComp<T>(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h5",u({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",u({},{title:"note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"can become slow with large nested arrays and objects, and circular structures can cause infinite loops")),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const c = Comp.anyDeepComp();\nconsole.log(c.compare({ a: 1, b: 1 }, { b: 1, a: 1 }))\n// => 0\nconsole.log(c.compare([{ a: 1, b: 1 }], [{ b: 1, a: 1 }]))\n// => 0\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"anyflatcomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"anyFlatComp")),(0,a.kt)("p",null,"Returns a Comp instance that compares any value using default comparison functions, but never recursively compares Iterables or objects. In those cases, it will use the stringComp instance.")),(0,a.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function anyFlatComp<T>(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h5",u({},{id:"type-parameters-1"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const c = Comp.anyFlatComp();\nconsole.log(c.compare({ a: 1, b: 1 }, { b: 1, a: 1 }) < 0)\n// => true\n// First object is smaller because the objects are converted to a string with and then compares the resulting string.\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"anyshallowcomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"anyShallowComp")),(0,a.kt)("p",null,"Returns a Comp instance that compares any value using default comparison functions. For Iterables and objects, their elements are compared only one level deep for performance and to avoid infinite recursion.")),(0,a.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function anyShallowComp<T>(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h5",u({},{id:"type-parameters-2"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const c = Comp.anyShallowComp();\nconsole.log(c.compare({ a: 1, b: 1 }, { b: 1, a: 1 }))\n// => 0\nconsole.log(c.compare([{ a: 1, b: 1 }], [{ b: 1, a: 1 }]) < 0)\n// => true\n// First object is smaller because the objects are converted to a string and then compares the resulting string.\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"anystringjsoncomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"anyStringJSONComp")),(0,a.kt)("p",null,"Returns a Comp instance converts values to string with JSON.stringify, and orders the resulting string naturally.")),(0,a.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function anyStringJSONComp<T>(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h5",u({},{id:"type-parameters-3"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"anytostringcomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"anyToStringComp")),(0,a.kt)("p",null,"Returns a any Comp instance that orders any according to their toString values.")),(0,a.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function anyToStringComp(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<any>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"bigintcomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"bigIntComp")),(0,a.kt)("p",null,"Returns a default bigint Comp instance that orders bigint numbers naturally.")),(0,a.kt)("h4",u({},{id:"definition-5"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function bigIntComp(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<bigint>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"booleancomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"booleanComp")),(0,a.kt)("p",null,"Returns a default boolean Comp instance that orders booleans according to false < true.")),(0,a.kt)("h4",u({},{id:"definition-6"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function booleanComp(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<boolean>;"))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const c = Comp.booleanComp();\nconsole.log(c.compare(false, true) < 0)\n// => true\nconsole.log(c.compare(true, true))\n// => 0\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"createvalueofcomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"createValueOfComp")),(0,a.kt)("p",null,"Returns a Comp instance that orders objects with a ",(0,a.kt)("inlineCode",{parentName:"p"},"valueOf")," method according to the given ",(0,a.kt)("inlineCode",{parentName:"p"},"valueComp")," instance for the valueOf values.")),(0,a.kt)("h4",u({},{id:"definition-7"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function createValueOfComp<T extends {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"valueOf(): V;"),(0,a.kt)("br",null),"\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}, V>(cls: {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"new (): T;"),(0,a.kt)("br",null),"\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}, valueComp?: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<V>): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h5",u({},{id:"type-parameters-4"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"cls")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"new (): T;"),(0,a.kt)("br",null),"\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the constructor of the values the Comp instance can compare")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"valueComp")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"td"},"<V>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"(optional) the Comp instance to use on the .valueOf values"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"datecomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"dateComp")),(0,a.kt)("p",null,"Returns a Date Comp instance that orders Dates according to their ",(0,a.kt)("inlineCode",{parentName:"p"},".valueOf")," value.")),(0,a.kt)("h4",u({},{id:"definition-8"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function dateComp(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<Date>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"defaultcomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"defaultComp")),(0,a.kt)("p",null,"Returns the default Comp instance, which is the Comp.anyDeepComp() instance.")),(0,a.kt)("h4",u({},{id:"definition-9"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function defaultComp(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<any>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"invert"}),(0,a.kt)("inlineCode",{parentName:"h3"},"invert")),(0,a.kt)("p",null,"Returns a Comp instance the reverses the order of the given ",(0,a.kt)("inlineCode",{parentName:"p"},"comp")," instance.")),(0,a.kt)("h4",u({},{id:"definition-10"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function invert<T>(comp: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h5",u({},{id:"type-parameters-5"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",u({},{id:"parameters-1"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"comp")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"td"},"<T>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the Comp instance to wrap")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const c = Comp.invert(Comp.numberComp())\nconsole.log(c.compare(3, 5) > 0)\n// => true\nconsole.log(c.compare(5, 5))\n// => 0\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"iterablecomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"iterableComp")),(0,a.kt)("p",null,"Returns a Comp instance for Iterable objects that orders the Iterables by comparing the elements with the given ",(0,a.kt)("inlineCode",{parentName:"p"},"itemComp")," Comp instance.")),(0,a.kt)("h4",u({},{id:"definition-11"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function iterableComp<T>(itemComp?: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<Iterable<T>>;"))),(0,a.kt)("h5",u({},{id:"type-parameters-6"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",u({},{id:"parameters-2"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"itemComp")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"td"},"<T>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"(optional) the Comp instance to use to compare the Iterable's elements.")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const c = Comp.iterableComp();\nconsole.log(c.compare([1, 3, 2], [1, 3, 2]))\n// => 0\nconsole.log(c.compare([1, 2, 3, 4], [1, 3, 2]) < 0)\n// => true\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"numbercomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"numberComp")),(0,a.kt)("p",null,"Returns a default number Comp instance that orders numbers naturally.")),(0,a.kt)("h4",u({},{id:"definition-12"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function numberComp(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<number>;"))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const c = Comp.numberComp();\nconsole.log(c.compare(3, 5))\n// => -2\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"objectcomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"objectComp")),(0,a.kt)("p",null,"Returns a Comp instance for objects that orders the object keys according to the given ",(0,a.kt)("inlineCode",{parentName:"p"},"keyComp"),", and then compares the corresponding values using the given ",(0,a.kt)("inlineCode",{parentName:"p"},"valueComp"),". Objects are then compared as follows:\nstarting with the smallest key of either object:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if only one of the objects has the key, the object with the key is considered to be larger than the other"),(0,a.kt)("li",{parentName:"ul"},"if both objects have the key, the values are compared with ",(0,a.kt)("inlineCode",{parentName:"li"},"valueComp"),". If the values are not equal, this result is returned.")),(0,a.kt)("p",null,"if the objects have the same keys with the same values, they are considered equal")),(0,a.kt)("h4",u({},{id:"definition-13"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function objectComp(options?: {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"keyComp?: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<any>;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"valueComp?: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<any>;"),(0,a.kt)("br",null),"\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<Record<any, any>>;"))),(0,a.kt)("h4",u({},{id:"parameters-3"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"options")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"keyComp?: "),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"td"},"<any>;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"valueComp?: "),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"td"},"<any>;"),(0,a.kt)("br",null),"\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const c = Comp.objectComp();\nconsole.log(c.compare({ a: 1 }, { a: 1 }))\n// => 0\nconsole.log(c.compare({ a: 1 }, { a: 2 }) < 0)\n// => true\nconsole.log(c.compare({ b: 5 }, { a: 2 }) < 0)\n// => true\nconsole.log(c.compare({ a: 1, b: 2 }, { b: 5 }) < 0)\n// => true\nconsole.log(c.compare({ a: 1, b: 2 }, { b: 2, a: 1 }))\n// => 0\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"stringcaseinsensitivecomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stringCaseInsensitiveComp")),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Comp")," instance that compares strings in a case-insensitive way.")),(0,a.kt)("h4",u({},{id:"definition-14"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function stringCaseInsensitiveComp(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<string>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"stringcharcodecomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stringCharCodeComp")),(0,a.kt)("p",null,"Returns a string Comp instance that orders strings according to their indexed char codes.")),(0,a.kt)("h4",u({},{id:"definition-15"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function stringCharCodeComp(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<string>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"stringcomp"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stringComp")),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Comp")," instance that compares strings based on the string's ",(0,a.kt)("inlineCode",{parentName:"p"},"localeCompare")," method.")),(0,a.kt)("h4",u({},{id:"definition-16"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function stringComp(...args: ConstructorParameters<typeof Intl.Collator>): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<string>;"))),(0,a.kt)("h4",u({},{id:"parameters-4"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"args")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ConstructorParameters<typeof Intl.Collator>")),(0,a.kt)("td",u({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"toeq"}),(0,a.kt)("inlineCode",{parentName:"h3"},"toEq")),(0,a.kt)("p",null,"Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"Eq")," equality instance thet will return true when the given ",(0,a.kt)("inlineCode",{parentName:"p"},"comp")," comparable instance returns 0.")),(0,a.kt)("h4",u({},{id:"definition-17"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function toEq<T>(comp: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Eq/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"Eq")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h5",u({},{id:"type-parameters-7"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",u({},{id:"parameters-5"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"comp")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"td"},"<T>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the ",(0,a.kt)("inlineCode",{parentName:"td"},"Comp")," comparable instance to convert")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const eq = Comp.toEq(Comp.objectComp())\nconsole.log(eq({ a: 1, b: 2 }, { b: 2, a: 1 }))\n// => true\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"withnull"}),(0,a.kt)("inlineCode",{parentName:"h3"},"withNull")),(0,a.kt)("p",null,"Returns a Comp instance that extends the given ",(0,a.kt)("inlineCode",{parentName:"p"},"comp")," instance with the capability to handle ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," values, where null is considered to be smaller than any other value, and equal to another null.")),(0,a.kt)("h4",u({},{id:"definition-18"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function withNull<T>(comp: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<T "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," null>;"))),(0,a.kt)("h5",u({},{id:"type-parameters-8"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",u({},{id:"parameters-6"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"comp")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"td"},"<T>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the Comp instance to wrap")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const c = Comp.withNull(Comp.numberComp())\nconsole.log(c.compare(null, 5) < 0)\n// => true\nconsole.log(c.compare(null, null))\n// => 0\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"withundefined"}),(0,a.kt)("inlineCode",{parentName:"h3"},"withUndefined")),(0,a.kt)("p",null,"Returns a Comp instance that extends the given ",(0,a.kt)("inlineCode",{parentName:"p"},"comp")," instance with the capability to handle ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," values, where undefined is considered to be smaller than any other value, and equal to another undefined.")),(0,a.kt)("h4",u({},{id:"definition-19"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function withUndefined<T>(comp: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"p"},"<T "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined>;"))),(0,a.kt)("h5",u({},{id:"type-parameters-9"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",u({},{id:"parameters-7"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"comp")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/Comp/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Comp")),(0,a.kt)("inlineCode",{parentName:"td"},"<T>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the Comp instance to wrap")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const c = Comp.withUndefined(Comp.numberComp())\nconsole.log(c.compare(undefined, 5) < 0)\n// => true\nconsole.log(c.compare(undefined, undefined))\n// => 0\n")))))}f.isMDXComponent=!0}}]);