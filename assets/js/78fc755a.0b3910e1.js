"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[64318],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=d(a),s=r,h=u["".concat(o,".").concat(s)]||u[s]||k[s]||i;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5819:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>N,default:()=>v,frontMatter:()=>h,metadata:()=>c,toc:()=>y});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))d.call(t,a)&&m(e,a,t[a]);return e},k=(e,t)=>i(e,l(t)),s=(e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a};const h={title:"EdgeGraphSorted (namespace)",slug:"/rimbu/core/EdgeGraphSorted/namespace"},N="namespace EdgeGraphSorted",c={unversionedId:"rimbu_core/EdgeGraphSorted/index",id:"rimbu_core/EdgeGraphSorted/index",title:"EdgeGraphSorted (namespace)",description:"An type-invariant immutable valued edge (undirected) graph. The connections are internally maintained using sorted collections See the Graph documentation and the EdgeGraphSorted API documentation",source:"@site/api/rimbu_core/EdgeGraphSorted/index.mdx",sourceDirName:"rimbu_core/EdgeGraphSorted",slug:"/rimbu/core/EdgeGraphSorted/namespace",permalink:"/api/rimbu/core/EdgeGraphSorted/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"EdgeGraphSorted (namespace)",slug:"/rimbu/core/EdgeGraphSorted/namespace"},sidebar:"defaultSidebar",previous:{title:"EdgeGraphHashed<N>",permalink:"/api/rimbu/core/EdgeGraphHashed/interface"},next:{title:"EdgeGraphSorted.Builder<N>",permalink:"/api/rimbu/core/EdgeGraphSorted/Builder/interface"}},g={},y=[{value:"Interfaces",id:"interfaces",level:2},{value:"Static Methods",id:"static-methods",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>createContext</code>",id:"createcontext",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>defaultContext</code>",id:"defaultcontext",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"<code>empty</code>",id:"empty",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>from</code>",id:"from",level:3},{value:"Definitions",id:"definitions",level:4},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>of</code>",id:"of",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>reducer</code>",id:"reducer",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Type parameters",id:"type-parameters-6",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Overrides",id:"overrides-4",level:4}],f={toc:y},b="wrapper";function v(e){var t=e,{components:a}=t,r=s(t,["components"]);return(0,n.kt)(b,k(u(u({},f),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"namespace-edgegraphsorted"}),(0,n.kt)("inlineCode",{parentName:"h1"},"namespace EdgeGraphSorted")),(0,n.kt)("p",null,"An type-invariant immutable valued edge (undirected) graph. The connections are internally maintained using sorted collections See the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/EdgeGraphSorted/interface"}),"EdgeGraphSorted API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/EdgeGraphSorted/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraphSorted<N>"))),(0,n.kt)("h2",u({},{id:"interfaces"}),"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/core/EdgeGraphSorted/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraphSorted.Builder<N>"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A mutable ",(0,n.kt)("inlineCode",{parentName:"td"},"EdgeGraphSorted")," builder used to efficiently create new immutable instances. See the ",(0,n.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,n.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/api/rimbu/graph/EdgeGraphSorted/Builder/interface"}),"EdgeGraphSorted.Builder API documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/core/EdgeGraphSorted/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraphSorted.Context<UN>"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The EdgeGraphSorted's Context instance that serves as a factory for all related immutable instances and builders.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/core/EdgeGraphSorted/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraphSorted.NonEmpty<N>"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A non-empty type-invariant immutable valued edge (undirected) graph. The connections are internally maintained using sorted collections See the ",(0,n.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,n.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/api/rimbu/graph/EdgeGraphSorted/interface"}),"EdgeGraphSorted API documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/core/EdgeGraphSorted/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraphSorted.Types"))),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))),(0,n.kt)("h2",u({},{id:"static-methods"}),"Static Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"builder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"builder")),(0,n.kt)("p",null,"Returns an empty builder instance.")),(0,n.kt)("h4",u({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"builder<N extends UN>(): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, N, unknown>['builder'];"))),(0,n.kt)("h4",u({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UN")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowValuedGraphHashed.builder<number, string>()    // => ArrowValuedGraphHashed.Builder<number, string>\n"))),(0,n.kt)("h4",u({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Factory/interface#builder"}),"Factory.builder"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"createcontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"createContext")),(0,n.kt)("p",null,"Returns a new EdgeGraphSorted context instance based on the given ",(0,n.kt)("inlineCode",{parentName:"p"},"options"),".")),(0,n.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"createContext<UN>(options?: {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"linkMapContext?: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMap.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UN>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"linkConnectionsContext?: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UN>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"}): EdgeGraphSorted.Context<UN>;"))),(0,n.kt)("h4",u({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"UN"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the upper node type for which the context can create instances")))),(0,n.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"{"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"linkMapContext?: "),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/sorted/map/SortedMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMap.Context")),(0,n.kt)("inlineCode",{parentName:"td"},"<UN>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"linkConnectionsContext?: "),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/sorted/set/SortedSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet.Context")),(0,n.kt)("inlineCode",{parentName:"td"},"<UN>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"}")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"(optional) an object containing the following properties:",(0,n.kt)("br",null)," - linkMapContext - (optional) the map context to use to maintain link maps",(0,n.kt)("br",null)," - linkConnectionsContext - (optional) the set context to use to maintain link connections"))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"defaultcontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"defaultContext")),(0,n.kt)("p",null,"Returns the default context for this type of graph.")),(0,n.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"defaultContext<UN>(): EdgeGraphSorted.Context<UN>;"))),(0,n.kt)("h4",u({},{id:"type-parameters-2"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"UN"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the upper node type that the context should accept"))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"empty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"empty")),(0,n.kt)("p",null,"Returns the (singleton) empty instance of this type and context with given key and value types.")),(0,n.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"empty<N extends UN>(): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, N, unknown>['normal'];"))),(0,n.kt)("h4",u({},{id:"type-parameters-3"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UN")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowGraphHashed.empty<number>()    // => ArrowGraphHashed<number>\nArrowGraphHashed.empty<string>()    // => ArrowGraphHashed<string>\n"))),(0,n.kt)("h4",u({},{id:"overrides-1"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Factory/interface#empty"}),"Factory.empty"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"from"}),(0,n.kt)("inlineCode",{parentName:"h3"},"from")),(0,n.kt)("p",null,"Returns an immutable valued Graph, containing the graph elements from each of the given ",(0,n.kt)("inlineCode",{parentName:"p"},"sources"),".")),(0,n.kt)("h4",u({},{id:"definitions"}),"Definitions"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<N extends UN>(...sources: ArrayNonEmpty<"),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<GraphElement<N>>>): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, N, unknown>['nonEmpty'];"))),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"from<N extends UN>(...sources: ArrayNonEmpty<"),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<GraphElement<N>>>): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, N, unknown>['normal'];"))),(0,n.kt)("h4",u({},{id:"type-parameters-4"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UN")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-1"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"sources")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ArrayNonEmpty<"),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<GraphElement<N>>>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"an array of ",(0,n.kt)("inlineCode",{parentName:"td"},"StreamSource")," instances containing graph elements to add")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowGraphHashed.from([[1], [2]], [[3, 4]])  // => ArrowGraphHashed.NonEmpty<number>\n"))),(0,n.kt)("h4",u({},{id:"overrides-2"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Factory/interface#from"}),"Factory.from"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"of"}),(0,n.kt)("inlineCode",{parentName:"h3"},"of")),(0,n.kt)("p",null,"Returns an immutable valued Graph instance containing the graph elements from the given ",(0,n.kt)("inlineCode",{parentName:"p"},"graphElements"),".")),(0,n.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"of<N extends UN>(...graphElements: ArrayNonEmpty<GraphElement<N>>): "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, N, unknown>['nonEmpty'];"))),(0,n.kt)("h4",u({},{id:"type-parameters-5"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UN")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-2"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"graphElements")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ArrayNonEmpty<GraphElement<N>>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"a non-empty array of graph elements that are either a single tuple containing a node, or a triplet containing two connection nodes and the connection value.")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"ArrowGraphHashed.of([1], [2], [3, 4]) // => ArrowGraphHashed.NonEmpty<number>\n"))),(0,n.kt)("h4",u({},{id:"overrides-3"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Factory/interface#of"}),"Factory.of"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"reducer"}),(0,n.kt)("inlineCode",{parentName:"h3"},"reducer")),(0,n.kt)("p",null,"Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Reducer")," that adds received graph elements to a Graph and returns the Graph as a result. When a ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is given, the reducer will first create a graph from the source, and then add graph elements to it.")),(0,n.kt)("h4",u({},{id:"definition-5"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"reducer<N extends UN>(source?: "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<GraphElement<N>>): Reducer<GraphElement<N>, "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,n.kt)("inlineCode",{parentName:"p"},"<Tp, N, unknown>['normal']>;"))),(0,n.kt)("h4",u({},{id:"type-parameters-6"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Constraints"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"N"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"UN")),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",u({},{id:"parameters-3"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"source")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"td"},"<GraphElement<N>>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"(optional) an initial source of graph elements to add to")))),(0,n.kt)("admonition",u({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const someSource: GraphElement<number>[] = [[1, 2], [3], [5]];\nconst result = Stream.of([1, 3], [4, 3]).reduce(ArrowGraphSorted.reducer(someSource))\nresult.toArray()   // => [[1, 2], [1, 3], [4, 3], [5]]\n"))),(0,n.kt)("admonition",u({},{title:"note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"uses a builder under the hood. If the given ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," is a Graph in the same context, it will directly call ",(0,n.kt)("inlineCode",{parentName:"p"},".toBuilder()"),".")),(0,n.kt)("h4",u({},{id:"overrides-4"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Factory/interface#reducer"}),"Factory.reducer"))))}v.isMDXComponent=!0}}]);