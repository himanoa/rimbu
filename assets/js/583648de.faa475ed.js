"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[31215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=m(r),s=n,h=d["".concat(l,".").concat(s)]||d[s]||u[s]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:n,o[1]=p;for(var m=2;m<i;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},62762:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>w,frontMatter:()=>h,metadata:()=>f,toc:()=>N});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))m.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>i(e,o(t)),s=(e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&m.call(e,a)&&(r[a]=e[a]);return r};const h={title:"ArrowGraph (namespace)",slug:"/rimbu/core/ArrowGraph/namespace"},k="namespace ArrowGraph",f={unversionedId:"rimbu_core/ArrowGraph/index",id:"rimbu_core/ArrowGraph/index",title:"ArrowGraph (namespace)",description:"An type-invariant immutable arrow (directed) graph. See the Graph documentation and the ArrowGraph API documentation",source:"@site/api/rimbu_core/ArrowGraph/index.mdx",sourceDirName:"rimbu_core/ArrowGraph",slug:"/rimbu/core/ArrowGraph/namespace",permalink:"/api/rimbu/core/ArrowGraph/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"ArrowGraph (namespace)",slug:"/rimbu/core/ArrowGraph/namespace"},sidebar:"defaultSidebar",previous:{title:"ArrayNonEmpty",permalink:"/api/rimbu/core/ArrayNonEmpty/type"},next:{title:"ArrowGraph.Builder<N>",permalink:"/api/rimbu/core/ArrowGraph/Builder/interface"}},b={},N=[{value:"Interfaces",id:"interfaces",level:2},{value:"Static Methods",id:"static-methods",level:2},{value:"<code>createContext</code>",id:"createcontext",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4}],y={toc:N},g="wrapper";function w(e){var t=e,{components:r}=t,n=s(t,["components"]);return(0,a.kt)(g,u(d(d({},y),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",d({},{id:"namespace-arrowgraph"}),(0,a.kt)("inlineCode",{parentName:"h1"},"namespace ArrowGraph")),(0,a.kt)("p",null,"An type-invariant immutable arrow (directed) graph. See the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/ArrowGraph/interface"}),"ArrowGraph API documentation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,a.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/ArrowGraph/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrowGraph<N>"))),(0,a.kt)("h2",d({},{id:"interfaces"}),"Interfaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("a",d({parentName:"td"},{href:"/api/rimbu/core/ArrowGraph/Builder/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrowGraph.Builder<N>"))),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"A mutable ",(0,a.kt)("inlineCode",{parentName:"td"},"ArrowGraph")," builder used to efficiently create new immutable instances. See the ",(0,a.kt)("a",d({parentName:"td"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,a.kt)("a",d({parentName:"td"},{href:"https://rimbu.org/api/rimbu/graph/ArrowGraph/Builder/interface"}),"ArrowGraph.Builder API documentation"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("a",d({parentName:"td"},{href:"/api/rimbu/core/ArrowGraph/Context/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrowGraph.Context<UN>"))),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"The ArrowGraph's Context instance that serves as a factory for all related immutable instances and builders.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("a",d({parentName:"td"},{href:"/api/rimbu/core/ArrowGraph/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrowGraph.NonEmpty<N>"))),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"A non-empty type-invariant immutable arrow (directed) graph. See the ",(0,a.kt)("a",d({parentName:"td"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,a.kt)("a",d({parentName:"td"},{href:"https://rimbu.org/api/rimbu/graph/ArrowGraph/interface"}),"ArrowGraph API documentation"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("a",d({parentName:"td"},{href:"/api/rimbu/core/ArrowGraph/Types/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrowGraph.Types"))),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))),(0,a.kt)("h2",d({},{id:"static-methods"}),"Static Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",d({},{id:"createcontext"}),(0,a.kt)("inlineCode",{parentName:"h3"},"createContext")),(0,a.kt)("p",null,"Returns a new ArrowGraph context instance based on the given ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),".")),(0,a.kt)("h4",d({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createContext<UN>(options: {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"linkMapContext: "),(0,a.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,a.kt)("inlineCode",{parentName:"p"},"<UN>;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"linkConnectionsContext: "),(0,a.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Context/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"RSet.Context")),(0,a.kt)("inlineCode",{parentName:"p"},"<UN>;"),(0,a.kt)("br",null),"\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}): "),(0,a.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/ArrowGraph/Context/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrowGraph.Context")),(0,a.kt)("inlineCode",{parentName:"p"},"<UN>;"))),(0,a.kt)("h4",d({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"UN"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"the upper node type for which the context can create instances")))),(0,a.kt)("h4",d({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"options")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"linkMapContext: "),(0,a.kt)("a",d({parentName:"td"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,a.kt)("inlineCode",{parentName:"td"},"<UN>;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"linkConnectionsContext: "),(0,a.kt)("a",d({parentName:"td"},{href:"/api/rimbu/collection-types/set/RSet/Context/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"RSet.Context")),(0,a.kt)("inlineCode",{parentName:"td"},"<UN>;"),(0,a.kt)("br",null),"\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"}")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"an object containing the following properties:",(0,a.kt)("br",null)," - linkMapContext - the map context to use to maintain link maps",(0,a.kt)("br",null)," - linkConnectionsContext - the set context to use to maintain link connection maps"))))))}w.isMDXComponent=!0}}]);