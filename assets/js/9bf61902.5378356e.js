"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[73584],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(a),k=r,c=s["".concat(o,".").concat(k)]||s[k]||u[k]||i;return a?n.createElement(c,l(l({ref:t},m),{},{components:a})):n.createElement(c,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},38565:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return N}});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))d.call(t,a)&&m(e,a,t[a]);return e};const s={title:"ArrowValuedGraph.Context<UN>",slug:"/rimbu/graph/ArrowValuedGraph/Context/interface"},k="interface ArrowValuedGraph.Context<UN>",c={unversionedId:"rimbu_graph/ArrowValuedGraph/Context.interface",id:"rimbu_graph/ArrowValuedGraph/Context.interface",title:"ArrowValuedGraph.Context<UN>",description:"The ArrowValuedGraph's Context instance that serves as a factory for all related immutable instances and builders.",source:"@site/api/rimbu_graph/ArrowValuedGraph/Context.interface.mdx",sourceDirName:"rimbu_graph/ArrowValuedGraph",slug:"/rimbu/graph/ArrowValuedGraph/Context/interface",permalink:"/api/rimbu/graph/ArrowValuedGraph/Context/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"ArrowValuedGraph.Context<UN>",slug:"/rimbu/graph/ArrowValuedGraph/Context/interface"},sidebar:"defaultSidebar",previous:{title:"ArrowValuedGraph.Builder<N,V>",permalink:"/api/rimbu/graph/ArrowValuedGraph/Builder/interface"},next:{title:"ArrowValuedGraph.NonEmpty<N,V>",permalink:"/api/rimbu/graph/ArrowValuedGraph/NonEmpty/interface"}},h={},N=[{value:"Type parameters",id:"type-parameters",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>_fixedType</code>",id:"_fixedtype",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>isDirected</code>",id:"isdirected",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>linkConnectionsContext</code>",id:"linkconnectionscontext",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>linkMapContext</code>",id:"linkmapcontext",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>typeTag</code>",id:"typetag",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Type parameters",id:"type-parameters-1",level:3},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>empty</code>",id:"empty",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Type parameters",id:"type-parameters-2",level:3},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>from</code>",id:"from",level:3},{value:"Definitions",id:"definitions",level:4},{value:"Type parameters",id:"type-parameters-3",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>of</code>",id:"of",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Type parameters",id:"type-parameters-4",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"<code>reducer</code>",id:"reducer",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Type parameters",id:"type-parameters-5",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Overrides",id:"overrides-9",level:4}],v={toc:N};function g(e){var t,a=e,{components:r}=a,m=((e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},v),m),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"interface-arrowvaluedgraphcontextun"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface ArrowValuedGraph.Context<UN>")),(0,n.kt)("p",null,"The ArrowValuedGraph's Context instance that serves as a factory for all related immutable instances and builders."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ArrowValuedGraphBase/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphBase.Context<UN,Tp>"))),(0,n.kt)("h3",u({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"UN"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the upper type limit for node types for which this context can create instances")))),(0,n.kt)("h2",u({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"_fixedtype"}),(0,n.kt)("inlineCode",{parentName:"h3"},"_fixedType")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly _fixedType: UN;"))),(0,n.kt)("h4",u({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Context/interface#_fixedType"}),"Context._fixedType"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"isdirected"}),(0,n.kt)("inlineCode",{parentName:"h3"},"isDirected")),(0,n.kt)("p",null,"Returns true if the graphs created by this context are arrow (directed) graphs.")),(0,n.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly isDirected: boolean;"))),(0,n.kt)("h4",u({},{id:"overrides-1"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Context/interface#isDirected"}),"Context.isDirected"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"linkconnectionscontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"linkConnectionsContext")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"context")," instance used to create internal connection maps")),(0,n.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly linkConnectionsContext: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, UN, unknown>['linkConnectionsContext'];"))),(0,n.kt)("h4",u({},{id:"overrides-2"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Context/interface#linkConnectionsContext"}),"Context.linkConnectionsContext"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"linkmapcontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"linkMapContext")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"context")," instance used to create internal link maps")),(0,n.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly linkMapContext: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, UN, unknown>['linkMapContext'];"))),(0,n.kt)("h4",u({},{id:"overrides-3"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Context/interface#linkMapContext"}),"Context.linkMapContext"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"typetag"}),(0,n.kt)("inlineCode",{parentName:"h3"},"typeTag")),(0,n.kt)("p",null,"A string tag defining the specific collection type")),(0,n.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly typeTag: string;"))),(0,n.kt)("div",u({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.defaultContext().typeTag   // => 'ArrowValuedGraphHashed'\n")))),(0,n.kt)("h4",u({},{id:"overrides-4"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Context/interface#typeTag"}),"Context.typeTag"))),(0,n.kt)("h2",u({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"builder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"builder")),(0,n.kt)("p",null,"Returns an empty builder instance.")),(0,n.kt)("h4",u({},{id:"definition-5"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"builder<N extends UN, V>(): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['builder'];"))),(0,n.kt)("h3",u({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UN")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("div",u({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.builder<number, string>()    // => ArrowValuedGraphHashed.Builder<number, string>\n")))),(0,n.kt)("h4",u({},{id:"overrides-5"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Factory/interface#builder"}),"Factory.builder"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"empty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"empty")),(0,n.kt)("p",null,"Returns the (singleton) empty instance of this type and context with given key and value types.")),(0,n.kt)("h4",u({},{id:"definition-6"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"empty<N extends UN, V>(): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['normal'];"))),(0,n.kt)("h3",u({},{id:"type-parameters-2"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UN")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("div",u({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.empty<number, string>()    // => ArrowValuedGraphHashed<number, string>\nArrowValuedGraphHashed.empty<string, boolean>()   // => ArrowValuedGraphHashed<string, boolean>\n")))),(0,n.kt)("h4",u({},{id:"overrides-6"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Factory/interface#empty"}),"Factory.empty"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"from"}),(0,n.kt)("inlineCode",{parentName:"h3"},"from")),(0,n.kt)("p",null,"Returns an immutable valued Graph, containing the graph elements from each of the given ",(0,n.kt)("inlineCode",{parentName:"p"},"sources"),".")),(0,n.kt)("h4",u({},{id:"definitions"}),"Definitions"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<N extends UN, V>(...sources: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphElement/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ValuedGraphElement")),(0,n.kt)("inlineCode",{parentName:"p"},"<N, V>>>): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['nonEmpty'];"))),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<N extends UN, V>(...sources: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphElement/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ValuedGraphElement")),(0,n.kt)("inlineCode",{parentName:"p"},"<N, V>>>): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['normal'];"))),(0,n.kt)("h3",u({},{id:"type-parameters-3"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UN")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"sources")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<"),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<"),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/graph/custom/ValuedGraphElement/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ValuedGraphElement")),(0,n.kt)("inlineCode",{parentName:"td"},"<N, V>>>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"an array of ",(0,n.kt)("inlineCode",{parentName:"td"},"StreamSource")," instances containing graph elements to add")))),(0,n.kt)("div",u({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.from([[1], [2]], [[3, 4, 'c']])  // => ArrowValuedGraphHashed.NonEmpty<number, string>\n")))),(0,n.kt)("h4",u({},{id:"overrides-7"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Factory/interface#from"}),"Factory.from"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"of"}),(0,n.kt)("inlineCode",{parentName:"h3"},"of")),(0,n.kt)("p",null,"Returns an immutable valued Graph instance containing the graph elements from the given ",(0,n.kt)("inlineCode",{parentName:"p"},"graphElements"),".")),(0,n.kt)("h4",u({},{id:"definition-7"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"of<N extends UN, V>(...graphElements: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphElement/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ValuedGraphElement")),(0,n.kt)("inlineCode",{parentName:"p"},"<N, V>>): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['nonEmpty'];"))),(0,n.kt)("h3",u({},{id:"type-parameters-4"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UN")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-1"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"graphElements")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/common/ArrayNonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ArrayNonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<"),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/graph/custom/ValuedGraphElement/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ValuedGraphElement")),(0,n.kt)("inlineCode",{parentName:"td"},"<N, V>>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"a non-empty array of graph elements that are either a single tuple containing a node, or a triplet containing two connection nodes and the connection value.")))),(0,n.kt)("div",u({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.of([1], [2], [3, 4, 'a']) // => ArrowValuedGraphHashed.NonEmpty<number, string>\n")))),(0,n.kt)("h4",u({},{id:"overrides-8"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Factory/interface#of"}),"Factory.of"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"reducer"}),(0,n.kt)("inlineCode",{parentName:"h3"},"reducer")),(0,n.kt)("p",null,"Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Reducer")," that adds valued received graph elements to a ValuedGraph and returns the ValuedGraph as a result. When a ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is given, the reducer will first create a graph from the source, and then add graph elements to it.")),(0,n.kt)("h4",u({},{id:"definition-8"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"reducer<N extends UN, V>(source?: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphElement/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ValuedGraphElement")),(0,n.kt)("inlineCode",{parentName:"p"},"<N, V>>): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Reducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Reducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<"),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphElement/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ValuedGraphElement")),(0,n.kt)("inlineCode",{parentName:"p"},"<N, V>, "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, N, V>['normal']>;"))),(0,n.kt)("h3",u({},{id:"type-parameters-5"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UN")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-2"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"source")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<"),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/graph/custom/ValuedGraphElement/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ValuedGraphElement")),(0,n.kt)("inlineCode",{parentName:"td"},"<N, V>>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"(optional) an initial source of graph elements to add to")))),(0,n.kt)("div",u({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const someSource: ValuedGraphElement<number, string>[] = [[1, 2, 'a'], [3], [5]];\nconst result = Stream.of([1, 3, 'b'], [4, 3, 'c']).reduce(ArrowGraphSorted.reducer(someSource))\nresult.toArray()   // => [[1, 2, 'a'], [1, 3, 'b'], [4, 3, 'c'], [5]]\n")))),(0,n.kt)("div",u({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"uses a builder under the hood. If the given ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is a ValuedGraph in the same context, it will directly call ",(0,n.kt)("inlineCode",{parentName:"p"},".toBuilder()"),"."))),(0,n.kt)("h4",u({},{id:"overrides-9"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Factory/interface#reducer"}),"Factory.reducer"))))}g.isMDXComponent=!0}}]);