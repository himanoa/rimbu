"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[55029],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=d(a),k=n,h=u["".concat(o,".").concat(k)]||u[k]||s[k]||l;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9986:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>N,default:()=>b,frontMatter:()=>h,metadata:()=>c,toc:()=>f});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))d.call(t,a)&&m(e,a,t[a]);return e},s=(e,t)=>l(e,i(t)),k=(e,t)=>{var a={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&d.call(e,r)&&(a[r]=e[r]);return a};const h={title:"ArrowValuedGraphHashed.Context<UN>",slug:"/rimbu/graph/ArrowValuedGraphHashed/Context/interface"},N="interface ArrowValuedGraphHashed.Context<UN>",c={unversionedId:"rimbu_graph/ArrowValuedGraphHashed/Context.interface",id:"rimbu_graph/ArrowValuedGraphHashed/Context.interface",title:"ArrowValuedGraphHashed.Context<UN>",description:"The ArrowValuedGraphHashed's Context instance that serves as a factory for all related immutable instances and builders.",source:"@site/api/rimbu_graph/ArrowValuedGraphHashed/Context.interface.mdx",sourceDirName:"rimbu_graph/ArrowValuedGraphHashed",slug:"/rimbu/graph/ArrowValuedGraphHashed/Context/interface",permalink:"/api/rimbu/graph/ArrowValuedGraphHashed/Context/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"ArrowValuedGraphHashed.Context<UN>",slug:"/rimbu/graph/ArrowValuedGraphHashed/Context/interface"},sidebar:"defaultSidebar",previous:{title:"ArrowValuedGraphHashed.Builder<N,V>",permalink:"/api/rimbu/graph/ArrowValuedGraphHashed/Builder/interface"},next:{title:"ArrowValuedGraphHashed.NonEmpty<N,V>",permalink:"/api/rimbu/graph/ArrowValuedGraphHashed/NonEmpty/interface"}},y={},f=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>_fixedType</code>",id:"_fixedtype",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>isDirected</code>",id:"isdirected",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>linkConnectionsContext</code>",id:"linkconnectionscontext",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>linkMapContext</code>",id:"linkmapcontext",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>typeTag</code>",id:"typetag",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>empty</code>",id:"empty",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>from</code>",id:"from",level:3},{value:"Definitions",id:"definitions",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>of</code>",id:"of",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"<code>reducer</code>",id:"reducer",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Overrides",id:"overrides-9",level:4}],g={toc:f},v="wrapper";function b(e){var t=e,{components:a}=t,n=k(t,["components"]);return(0,r.kt)(v,s(u(u({},g),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"interface-arrowvaluedgraphhashedcontextun"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface ArrowValuedGraphHashed.Context<UN>")),(0,r.kt)("p",null,"The ArrowValuedGraphHashed's Context instance that serves as a factory for all related immutable instances and builders."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ArrowValuedGraphBase/Context/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphBase.Context<UN,Tp>"))),(0,r.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"UN"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"the upper type limit for node types for which this context can create instances")))),(0,r.kt)("h2",u({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"_fixedtype"}),(0,r.kt)("inlineCode",{parentName:"h3"},"_fixedType")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly _fixedType: UN;"))),(0,r.kt)("h4",u({},{id:"overrides"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Context/interface#_fixedType"}),"Context._fixedType"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"isdirected"}),(0,r.kt)("inlineCode",{parentName:"h3"},"isDirected")),(0,r.kt)("p",null,"Returns true if the graphs created by this context are arrow (directed) graphs.")),(0,r.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly isDirected: boolean;"))),(0,r.kt)("h4",u({},{id:"overrides-1"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Context/interface#isDirected"}),"Context.isDirected"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"linkconnectionscontext"}),(0,r.kt)("inlineCode",{parentName:"h3"},"linkConnectionsContext")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," instance used to create internal connection maps")),(0,r.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly linkConnectionsContext: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,r.kt)("inlineCode",{parentName:"p"},"<Tp, UN, unknown>['linkConnectionsContext'];"))),(0,r.kt)("h4",u({},{id:"overrides-2"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Context/interface#linkConnectionsContext"}),"Context.linkConnectionsContext"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"linkmapcontext"}),(0,r.kt)("inlineCode",{parentName:"h3"},"linkMapContext")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," instance used to create internal link maps")),(0,r.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly linkMapContext: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,r.kt)("inlineCode",{parentName:"p"},"<Tp, UN, unknown>['linkMapContext'];"))),(0,r.kt)("h4",u({},{id:"overrides-3"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Context/interface#linkMapContext"}),"Context.linkMapContext"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"typetag"}),(0,r.kt)("inlineCode",{parentName:"h3"},"typeTag")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly typeTag: 'ArrowValuedGraphHashed';"))),(0,r.kt)("h4",u({},{id:"overrides-4"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Context/interface#typeTag"}),"Context.typeTag"))),(0,r.kt)("h2",u({},{id:"methods"}),"Methods"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"builder"}),(0,r.kt)("inlineCode",{parentName:"h3"},"builder")),(0,r.kt)("p",null,"Returns an empty builder instance.")),(0,r.kt)("h4",u({},{id:"definition-5"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"builder<N extends UN, V>(): "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,r.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['builder'];"))),(0,r.kt)("h4",u({},{id:"type-parameters-1"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"UN")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",u({parentName:"tr"},{align:null})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))))),(0,r.kt)("admonition",u({},{title:"example",type:"note"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.builder<number, string>()    // => ArrowValuedGraphHashed.Builder<number, string>\n"))),(0,r.kt)("h4",u({},{id:"overrides-5"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Factory/interface#builder"}),"Factory.builder"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"empty"}),(0,r.kt)("inlineCode",{parentName:"h3"},"empty")),(0,r.kt)("p",null,"Returns the (singleton) empty instance of this type and context with given key and value types.")),(0,r.kt)("h4",u({},{id:"definition-6"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"empty<N extends UN, V>(): "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,r.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['normal'];"))),(0,r.kt)("h4",u({},{id:"type-parameters-2"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"UN")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",u({parentName:"tr"},{align:null})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))))),(0,r.kt)("admonition",u({},{title:"example",type:"note"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.empty<number, string>()    // => ArrowValuedGraphHashed<number, string>\nArrowValuedGraphHashed.empty<string, boolean>()   // => ArrowValuedGraphHashed<string, boolean>\n"))),(0,r.kt)("h4",u({},{id:"overrides-6"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Factory/interface#empty"}),"Factory.empty"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"from"}),(0,r.kt)("inlineCode",{parentName:"h3"},"from")),(0,r.kt)("p",null,"Returns an immutable valued Graph, containing the graph elements from each of the given ",(0,r.kt)("inlineCode",{parentName:"p"},"sources"),".")),(0,r.kt)("h4",u({},{id:"definitions"}),"Definitions"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"from<N extends UN, V>(...sources: ArrayNonEmpty<"),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<ValuedGraphElement<N, V>>>): "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,r.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['nonEmpty'];"))),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"from<N extends UN, V>(...sources: ArrayNonEmpty<"),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,r.kt)("inlineCode",{parentName:"p"},"<ValuedGraphElement<N, V>>>): "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,r.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['normal'];"))),(0,r.kt)("h4",u({},{id:"type-parameters-3"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"UN")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",u({parentName:"tr"},{align:null})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"sources")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"ArrayNonEmpty<"),(0,r.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"td"},"<ValuedGraphElement<N, V>>>")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"an array of ",(0,r.kt)("inlineCode",{parentName:"td"},"StreamSource")," instances containing graph elements to add")))),(0,r.kt)("admonition",u({},{title:"example",type:"note"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.from([[1], [2]], [[3, 4, 'c']])  // => ArrowValuedGraphHashed.NonEmpty<number, string>\n"))),(0,r.kt)("h4",u({},{id:"overrides-7"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Factory/interface#from"}),"Factory.from"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"of"}),(0,r.kt)("inlineCode",{parentName:"h3"},"of")),(0,r.kt)("p",null,"Returns an immutable valued Graph instance containing the graph elements from the given ",(0,r.kt)("inlineCode",{parentName:"p"},"graphElements"),".")),(0,r.kt)("h4",u({},{id:"definition-7"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"of<N extends UN, V>(...graphElements: ArrayNonEmpty<ValuedGraphElement<N, V>>): "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,r.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['nonEmpty'];"))),(0,r.kt)("h4",u({},{id:"type-parameters-4"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"UN")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",u({parentName:"tr"},{align:null})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",u({},{id:"parameters-1"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"graphElements")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"ArrayNonEmpty<ValuedGraphElement<N, V>>")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"a non-empty array of graph elements that are either a single tuple containing a node, or a triplet containing two connection nodes and the connection value.")))),(0,r.kt)("admonition",u({},{title:"example",type:"note"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.of([1], [2], [3, 4, 'a']) // => ArrowValuedGraphHashed.NonEmpty<number, string>\n"))),(0,r.kt)("h4",u({},{id:"overrides-8"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Factory/interface#of"}),"Factory.of"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"reducer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"reducer")),(0,r.kt)("p",null,"Returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducer")," that adds valued received graph elements to a ValuedGraph and returns the ValuedGraph as a result. When a ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," is given, the reducer will first create a graph from the source, and then add graph elements to it.")),(0,r.kt)("h4",u({},{id:"definition-8"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"reducer<N extends UN, V>(source?: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<ValuedGraphElement<N, V>>): Reducer<ValuedGraphElement<N, V>, "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,r.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['normal']>;"))),(0,r.kt)("h4",u({},{id:"type-parameters-5"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"UN")),(0,r.kt)("td",u({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",u({parentName:"tr"},{align:null})),(0,r.kt)("td",u({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",u({},{id:"parameters-2"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"td"},"<ValuedGraphElement<N, V>>")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"(optional) an initial source of graph elements to add to")))),(0,r.kt)("admonition",u({},{title:"example",type:"note"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const someSource: ValuedGraphElement<number, string>[] = [[1, 2, 'a'], [3], [5]];\nconst result = Stream.of([1, 3, 'b'], [4, 3, 'c']).reduce(ArrowGraphSorted.reducer(someSource))\nresult.toArray()   // => [[1, 2, 'a'], [1, 3, 'b'], [4, 3, 'c'], [5]]\n"))),(0,r.kt)("admonition",u({},{title:"note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"uses a builder under the hood. If the given ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," is a ValuedGraph in the same context, it will directly call ",(0,r.kt)("inlineCode",{parentName:"p"},".toBuilder()"),".")),(0,r.kt)("h4",u({},{id:"overrides-9"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Factory/interface#reducer"}),"Factory.reducer"))))}b.isMDXComponent=!0}}]);