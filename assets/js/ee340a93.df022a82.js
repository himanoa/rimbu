"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[5577],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,s=u["".concat(o,".").concat(h)]||u[h]||c[h]||i;return a?n.createElement(s,p(p({ref:t},m),{},{components:a})):n.createElement(s,p({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var d=2;d<i;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77827:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>g});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&m(e,a,t[a]);if(l)for(var a of l(t))d.call(t,a)&&m(e,a,t[a]);return e};const u={title:"EdgeGraph (namespace)",slug:"/rimbu/graph/EdgeGraph/namespace"},h="namespace EdgeGraph",s={unversionedId:"rimbu_graph/EdgeGraph/index",id:"rimbu_graph/EdgeGraph/index",title:"EdgeGraph (namespace)",description:"An type-invariant immutable edge (undirected) graph. See the Graph documentation and the EdgeGraph API documentation",source:"@site/api/rimbu_graph/EdgeGraph/index.mdx",sourceDirName:"rimbu_graph/EdgeGraph",slug:"/rimbu/graph/EdgeGraph/namespace",permalink:"/api/rimbu/graph/EdgeGraph/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"EdgeGraph (namespace)",slug:"/rimbu/graph/EdgeGraph/namespace"},sidebar:"defaultSidebar",previous:{title:"ArrowValuedGraphSorted<N,V>",permalink:"/api/rimbu/graph/ArrowValuedGraphSorted/interface"},next:{title:"EdgeGraph.Builder<N>",permalink:"/api/rimbu/graph/EdgeGraph/Builder/interface"}},k={},g=[{value:"Interfaces",id:"interfaces",level:2},{value:"Static Methods",id:"static-methods",level:2},{value:"<code>createContext</code>",id:"createcontext",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4}],f={toc:g};function b(e){var t,a=e,{components:r}=a,m=((e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},f),m),i(t,p({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"namespace-edgegraph"}),(0,n.kt)("inlineCode",{parentName:"h1"},"namespace EdgeGraph")),(0,n.kt)("p",null,"An type-invariant immutable edge (undirected) graph. See the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/EdgeGraph/interface"}),"EdgeGraph API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/graph/EdgeGraph/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraph<N>"))),(0,n.kt)("h2",c({},{id:"interfaces"}),"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/graph/EdgeGraph/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraph.Builder<N>"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"A mutable ",(0,n.kt)("inlineCode",{parentName:"td"},"EdgeGraph")," builder used to efficiently create new immutable instances. See the ",(0,n.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,n.kt)("a",c({parentName:"td"},{href:"https://rimbu.org/api/rimbu/graph/EdgeGraph/Builder/interface"}),"EdgeGraph.Builder API documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/graph/EdgeGraph/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraph.Context<UN>"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The EdgeGraph's Context instance that serves as a factory for all related immutable instances and builders.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/graph/EdgeGraph/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraph.NonEmpty<N>"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"A non-empty type-invariant immutable edge (undirected) graph.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/graph/EdgeGraph/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraph.Types"))),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))),(0,n.kt)("h2",c({},{id:"static-methods"}),"Static Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",c({},{id:"createcontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"createContext")),(0,n.kt)("p",null,"Returns a new EdgeGraph context instance based on the given ",(0,n.kt)("inlineCode",{parentName:"p"},"options"),".")),(0,n.kt)("h4",c({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"createContext<UN>(options: {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"linkMapContext: "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UN>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"linkConnectionsContext: "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSet.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UN>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"}): "),(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/graph/EdgeGraph/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"EdgeGraph.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UN>;"))),(0,n.kt)("h4",c({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"UN"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"the upper node type for which the context can create instances")))),(0,n.kt)("h4",c({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"{"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"linkMapContext: "),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,n.kt)("inlineCode",{parentName:"td"},"<UN>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"linkConnectionsContext: "),(0,n.kt)("a",c({parentName:"td"},{href:"/api/rimbu/collection-types/set/RSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSet.Context")),(0,n.kt)("inlineCode",{parentName:"td"},"<UN>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"}")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"an object containing the following properties:",(0,n.kt)("br",null)," - linkMapContext - the map context to use to maintain link maps",(0,n.kt)("br",null)," - linkConnectionsContext - the set context to use to maintain link connection maps"))))))}b.isMDXComponent=!0}}]);