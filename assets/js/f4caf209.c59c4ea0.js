"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[70759],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=o(a),k=r,N=u["".concat(m,".").concat(k)]||u[k]||s[k]||i;return a?n.createElement(N,l(l({ref:t},d),{},{components:a})):n.createElement(N,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>k,default:()=>h,frontMatter:()=>u,metadata:()=>N,toc:()=>y});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))o.call(t,a)&&d(e,a,t[a]);return e};const u={title:"List.Context",slug:"/rimbu/list/List/Context/interface"},k="interface List.Context",N={unversionedId:"rimbu_list/List/Context.interface",id:"rimbu_list/List/Context.interface",title:"List.Context",description:"A context instance for List that acts as a factory for every instance of this type of collection.",source:"@site/api/rimbu_list/List/Context.interface.mdx",sourceDirName:"rimbu_list/List",slug:"/rimbu/list/List/Context/interface",permalink:"/api/rimbu/list/List/Context/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"List.Context",slug:"/rimbu/list/List/Context/interface"},sidebar:"defaultSidebar",previous:{title:"List.Builder<T>",permalink:"/api/rimbu/list/List/Builder/interface"},next:{title:"List.NonEmpty<T>",permalink:"/api/rimbu/list/List/NonEmpty/interface"}},c={},y=[{value:"Properties",id:"properties",level:2},{value:"<code>_types</code>",id:"_types",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>typeTag</code>",id:"typetag",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Type parameters",id:"type-parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>empty</code>",id:"empty",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>flatten</code>",id:"flatten",level:3},{value:"Definitions",id:"definitions",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>from</code>",id:"from",level:3},{value:"Definitions",id:"definitions-1",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>fromString</code>",id:"fromstring",level:3},{value:"Definitions",id:"definitions-2",level:4},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"<code>of</code>",id:"of",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>reducer</code>",id:"reducer",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Type parameters",id:"type-parameters-6",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>unzip</code>",id:"unzip",level:3},{value:"Definitions",id:"definitions-3",level:4},{value:"Type parameters",id:"type-parameters-7",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Overrides",id:"overrides-7",level:4}],f={toc:y};function h(e){var t,a=e,{components:r}=a,d=((e,t)=>{var a={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&o.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=s(s({},f),d),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"interface-listcontext"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface List.Context")),(0,n.kt)("p",null,"A context instance for ",(0,n.kt)("inlineCode",{parentName:"p"},"List")," that acts as a factory for every instance of this type of collection."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/custom/ListFactory/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"ListFactory"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/custom/ListContext/class"}),(0,n.kt)("inlineCode",{parentName:"a"},"ListContext"))),(0,n.kt)("h2",s({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"_types"}),(0,n.kt)("inlineCode",{parentName:"h3"},"_types")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly _types: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/List/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List.Types")),(0,n.kt)("inlineCode",{parentName:"p"},";")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"typetag"}),(0,n.kt)("inlineCode",{parentName:"h3"},"typeTag")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly typeTag: 'List';")))),(0,n.kt)("h2",s({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"builder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"builder")),(0,n.kt)("p",null,"Returns an empty List Builder based on this context.")),(0,n.kt)("h4",s({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"builder<T>(): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/List/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List.Builder")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,n.kt)("h4",s({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the List element type")))),(0,n.kt)("admonition",s({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"List.builder<number>()   // => List.Builder<number>\n"))),(0,n.kt)("h4",s({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/custom/ListFactory/interface#builder"}),"ListFactory.builder"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"empty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"empty")),(0,n.kt)("p",null,"Returns the (singleton) empty List for this context with given value type.")),(0,n.kt)("h4",s({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"empty<T>(): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/List/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,n.kt)("h4",s({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the element type")))),(0,n.kt)("admonition",s({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"List.empty<number>()    // => List<number>\nList.empty<string>()    // => List<string>\n"))),(0,n.kt)("h4",s({},{id:"overrides-1"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/custom/ListFactory/interface#empty"}),"ListFactory.empty"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"flatten"}),(0,n.kt)("inlineCode",{parentName:"h3"},"flatten")),(0,n.kt)("p",null,"Returns, if T is a valid ",(0,n.kt)("inlineCode",{parentName:"p"},"StreamSource"),", the result of concatenating all streamable elements of the given sources.")),(0,n.kt)("h4",s({},{id:"definitions"}),"Definitions"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"flatten<T extends "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<unknown>>(source: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>): T extends "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<infer S> ? "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/List/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<S> : never;"))),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"flatten<T extends "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<unknown>>(source: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>): T extends "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<infer S> ? "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/List/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List")),(0,n.kt)("inlineCode",{parentName:"p"},"<S> : never;"))),(0,n.kt)("h4",s({},{id:"type-parameters-2"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<unknown>")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the element type")))),(0,n.kt)("h4",s({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"source")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<T>")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"a ",(0,n.kt)("inlineCode",{parentName:"td"},"StreamSource")," containing ",(0,n.kt)("inlineCode",{parentName:"td"},"StreamSource")," instances of values to concatenate")))),(0,n.kt)("admonition",s({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const m = List.of([1, 2], [3, 4, 5])\nList.flatten(m).toArray() // => [1, 2, 3, 4, 5]\n"))),(0,n.kt)("h4",s({},{id:"overrides-2"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/custom/ListFactory/interface#flatten"}),"ListFactory.flatten"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"from"}),(0,n.kt)("inlineCode",{parentName:"h3"},"from")),(0,n.kt)("p",null,"Returns an immutable set of this collection type and context, containing the given values in ",(0,n.kt)("inlineCode",{parentName:"p"},"source"),".")),(0,n.kt)("h4",s({},{id:"definitions-1"}),"Definitions"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<T>(...sources: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>>): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/List/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<T>(...sources: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>>): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/List/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,n.kt)("h4",s({},{id:"type-parameters-3"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the element type")))),(0,n.kt)("h4",s({},{id:"parameters-1"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"sources")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<"),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<T>>")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"a non-empty array of ",(0,n.kt)("inlineCode",{parentName:"td"},"StreamSource")," instances containing values")))),(0,n.kt)("admonition",s({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"List.from([1, 2, 3], [4, 5]).toArray()\n// => [1, 2, 3, 4, 5]\n"))),(0,n.kt)("h4",s({},{id:"overrides-3"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/custom/ListFactory/interface#from"}),"ListFactory.from"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"fromstring"}),(0,n.kt)("inlineCode",{parentName:"h3"},"fromString")),(0,n.kt)("p",null,"Returns a List of characters from the given strings in ",(0,n.kt)("inlineCode",{parentName:"p"},"sources"),".")),(0,n.kt)("h4",s({},{id:"definitions-2"}),"Definitions"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"fromString<S extends string>(...sources: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/StringNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StringNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<S>>): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/List/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<string>;"))),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"fromString(...sources: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<string>): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/List/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List")),(0,n.kt)("inlineCode",{parentName:"p"},"<string>;"))),(0,n.kt)("h4",s({},{id:"type-parameters-4"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"S"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the source string type")))),(0,n.kt)("h4",s({},{id:"parameters-2"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"sources")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<"),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/common/StringNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StringNonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<S>>")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"a non-empty array containing strings")))),(0,n.kt)("admonition",s({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"List.fromString('abc').toArray()   // => ['a', 'b', 'c']\n"))),(0,n.kt)("h4",s({},{id:"overrides-4"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/custom/ListFactory/interface#fromString"}),"ListFactory.fromString"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"of"}),(0,n.kt)("inlineCode",{parentName:"h3"},"of")),(0,n.kt)("p",null,"Returns an immutable set of this type and context, containing the given ",(0,n.kt)("inlineCode",{parentName:"p"},"values"),".")),(0,n.kt)("h4",s({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"of<T>(...values: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/List/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,n.kt)("h4",s({},{id:"type-parameters-5"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the element type")))),(0,n.kt)("h4",s({},{id:"parameters-3"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"values")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<T>")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"a non-empty array of values")))),(0,n.kt)("admonition",s({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"List.of(1, 2, 3).toArray()   // => [1, 2, 3]\n"))),(0,n.kt)("h4",s({},{id:"overrides-5"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/custom/ListFactory/interface#of"}),"ListFactory.of"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"reducer"}),(0,n.kt)("inlineCode",{parentName:"h3"},"reducer")),(0,n.kt)("p",null,"Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Reducer")," that appends received items to a List and returns the List as a result. When a ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is given, the reducer will first create a List from the source, and then append elements to it.")),(0,n.kt)("h4",s({},{id:"definition-5"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"reducer<T>(source?: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/Reducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Reducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/List/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>>;"))),(0,n.kt)("h4",s({},{id:"type-parameters-6"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the element type")))),(0,n.kt)("h4",s({},{id:"parameters-4"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"source")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"td"},"<T>")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"(optional) an initial source of elements to append to")))),(0,n.kt)("admonition",s({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const someList = List.of(1, 2, 3);\nconst result = Stream.range({ start: 20, amount: 5 }).reduce(List.reducer(someList))\nresult.toArray()   // => [1, 2, 3, 20, 21, 22, 23, 24]\n"))),(0,n.kt)("admonition",s({},{title:"note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"uses a List builder under the hood. If the given ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is a List in the same context, it will directly call ",(0,n.kt)("inlineCode",{parentName:"p"},".toBuilder()"),".")),(0,n.kt)("h4",s({},{id:"overrides-6"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/custom/ListFactory/interface#reducer"}),"ListFactory.reducer"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"unzip"}),(0,n.kt)("inlineCode",{parentName:"h3"},"unzip")),(0,n.kt)("p",null,"Returns an array of Lists, where each list contains the values of the corresponding index of tuple T.")),(0,n.kt)("h4",s({},{id:"definitions-3"}),"Definitions"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"unzip<T extends readonly unknown[] & {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"length: L;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"}, L extends number>(source: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>, length: L): {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"[K in keyof T]: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/List/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<T[K]>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"};"))),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"unzip<T extends readonly unknown[] & {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"length: L;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"}, L extends number>(source: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>, length: L): {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"[K in keyof T]: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/List/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List")),(0,n.kt)("inlineCode",{parentName:"p"},"<T[K]>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"};"))),(0,n.kt)("h4",s({},{id:"type-parameters-7"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"readonly unknown[] & {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"length: L;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"}")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the StreamSource tuple element type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"L"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the tuple element length")))),(0,n.kt)("h4",s({},{id:"parameters-5"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"source")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<T>")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"a ",(0,n.kt)("inlineCode",{parentName:"td"},"StreamSource")," containing tuples of type T to unzip")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"length")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"L")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the length of the tuples in type T")))),(0,n.kt)("admonition",s({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const m = List.of([1, 'a'], [2, 'b'])\nList.unzip(m)  // => [List.NonEmpty<number>, List.NonEmpty<string>]\n"))),(0,n.kt)("h4",s({},{id:"overrides-7"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/custom/ListFactory/interface#unzip"}),"ListFactory.unzip"))))}h.isMDXComponent=!0}}]);