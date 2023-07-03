"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[77097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(n),N=r,s=k["".concat(d,".").concat(N)]||k[N]||u[N]||l;return n?a.createElement(s,i(i({ref:t},m),{},{components:n})):a.createElement(s,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=N;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[k]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},71863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>h,toc:()=>b});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&m(e,n,t[n]);return e},u=(e,t)=>l(e,i(t)),N=(e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const s={title:"GraphBase.Builder<N,Tp>",slug:"/rimbu/graph/custom/GraphBase/Builder/interface"},c="interface GraphBase.Builder<N,Tp>",h={unversionedId:"rimbu_graph/custom/GraphBase/Builder.interface",id:"rimbu_graph/custom/GraphBase/Builder.interface",title:"GraphBase.Builder<N,Tp>",description:"undocumented",source:"@site/api/rimbu_graph/custom/GraphBase/Builder.interface.mdx",sourceDirName:"rimbu_graph/custom/GraphBase",slug:"/rimbu/graph/custom/GraphBase/Builder/interface",permalink:"/api/rimbu/graph/custom/GraphBase/Builder/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"GraphBase.Builder<N,Tp>",slug:"/rimbu/graph/custom/GraphBase/Builder/interface"},sidebar:"defaultSidebar",previous:{title:"GraphBase (namespace)",permalink:"/api/rimbu/graph/custom/GraphBase/namespace"},next:{title:"GraphBase.Context<UN,Tp>",permalink:"/api/rimbu/graph/custom/GraphBase/Context/interface"}},g={},b=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>connectionSize</code>",id:"connectionsize",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>isEmpty</code>",id:"isempty",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>nodeSize</code>",id:"nodesize",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>addGraphElement</code>",id:"addgraphelement",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>addGraphElements</code>",id:"addgraphelements",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>addNode</code>",id:"addnode",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>addNodes</code>",id:"addnodes",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>build</code>",id:"build",level:3},{value:"Definition",id:"definition-8",level:4},{value:"<code>connect</code>",id:"connect",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"<code>connectAll</code>",id:"connectall",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"<code>connectIfNodesExist</code>",id:"connectifnodesexist",level:3},{value:"Definition",id:"definition-11",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"<code>disconnect</code>",id:"disconnect",level:3},{value:"Definition",id:"definition-12",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-7",level:4},{value:"<code>disconnectAll</code>",id:"disconnectall",level:3},{value:"Definition",id:"definition-13",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-8",level:4},{value:"<code>hasConnection</code>",id:"hasconnection",level:3},{value:"Definition",id:"definition-14",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-9",level:4},{value:"<code>hasNode</code>",id:"hasnode",level:3},{value:"Definition",id:"definition-15",level:4},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-10",level:4},{value:"<code>removeNode</code>",id:"removenode",level:3},{value:"Definition",id:"definition-16",level:4},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Parameters",id:"parameters-11",level:4},{value:"<code>removeNodes</code>",id:"removenodes",level:3},{value:"Definition",id:"definition-17",level:4},{value:"Type parameters",id:"type-parameters-6",level:4},{value:"Parameters",id:"parameters-12",level:4}],f={toc:b},y="wrapper";function v(e){var t=e,{components:n}=t,r=N(t,["components"]);return(0,a.kt)(y,u(k(k({},f),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",k({},{id:"interface-graphbasebuilderntp"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface GraphBase.Builder<N,Tp>")),(0,a.kt)("p",null,"undocumented"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ArrowGraphBase/Builder/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"ArrowGraphBase.Builder<N,Tp>")),", ",(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/core/Graph/Builder/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Graph.Builder<N>")),", ",(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/EdgeGraphBase/Builder/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"EdgeGraphBase.Builder<N,Tp>")),", ",(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/Graph/Builder/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Graph.Builder<N>"))),(0,a.kt)("h2",k({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Constraints"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"N"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"undocumented")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Tp"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"GraphBase.Types"))),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"GraphBase.Types"))),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"undocumented")))),(0,a.kt)("h2",k({},{id:"properties"}),"Properties"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"connectionsize"}),(0,a.kt)("inlineCode",{parentName:"h3"},"connectionSize")),(0,a.kt)("p",null,"Returns the amount of connections in the graph.")),(0,a.kt)("h4",k({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly connectionSize: number;"))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\n.connectionsSize\n// => 2\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"context"}),(0,a.kt)("inlineCode",{parentName:"h3"},"context")),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," associated to this collection instance.")),(0,a.kt)("h4",k({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,a.kt)("inlineCode",{parentName:"p"},"<Tp, N, unknown>['context'];")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"isempty"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isEmpty")),(0,a.kt)("p",null,"Returns true if there are no entries in the builder.")),(0,a.kt)("h4",k({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly isEmpty: boolean;"))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\n.isEmpty\n// => false\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"nodesize"}),(0,a.kt)("inlineCode",{parentName:"h3"},"nodeSize")),(0,a.kt)("p",null,"Returns the amount of nodes in the graph.")),(0,a.kt)("h4",k({},{id:"definition-3"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly nodeSize: number;"))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\n.nodeSize\n// => 3\n")))),(0,a.kt)("h2",k({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"addgraphelement"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addGraphElement")),(0,a.kt)("p",null,"Adds the given ",(0,a.kt)("inlineCode",{parentName:"p"},"element")," graph element to the builder, where a graph element is either a one-element tuple containing a node, or a two-element tuple containing two nodes indicating a connection.")),(0,a.kt)("h4",k({},{id:"definition-4"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"addGraphElement(element: GraphElement<N>): boolean;"))),(0,a.kt)("h4",k({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"element")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"GraphElement<N>")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const b = ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\nb.addGraphElement([1])  // => false\nb.addGraphElement([4])  // => true\nb.addGraphElement([2, 3])  // => false\nb.addGraphElement([4, 1])  // => true\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"addgraphelements"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addGraphElements")),(0,a.kt)("p",null,"Adds the graph elements in the given ",(0,a.kt)("inlineCode",{parentName:"p"},"elements")," StreamSource to the graph.")),(0,a.kt)("h4",k({},{id:"definition-5"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"addGraphElements(elements: "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"p"},"<GraphElement<N>>): boolean;"))),(0,a.kt)("h4",k({},{id:"parameters-1"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"elements")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"td"},"<GraphElement<N>>")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const b = ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\nb.addGraphElements([[4], [5]])      // => true\nb.addGraphElements([[3, 1], [1]])  // => true\nb.addGraphElements([[1, 2], [1]])  // => false\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"addnode"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addNode")),(0,a.kt)("p",null,"Adds the given ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," to the graph.")),(0,a.kt)("h4",k({},{id:"definition-6"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"addNode(node: N): boolean;"))),(0,a.kt)("h4",k({},{id:"parameters-2"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"node")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"N")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const b = ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\nb.addNode(6)   // => true\nb.addNode(1)   // => false\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"addnodes"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addNodes")),(0,a.kt)("p",null,"Adds the given ",(0,a.kt)("inlineCode",{parentName:"p"},"nodes")," to the builder.")),(0,a.kt)("h4",k({},{id:"definition-7"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"addNodes(nodes: "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"p"},"<N>): boolean;"))),(0,a.kt)("h4",k({},{id:"parameters-3"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"nodes")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"td"},"<N>")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const b = ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\nb.addNodes([3, 4, 5]) // => true\nb.addNodes([1, 2])    // => false\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"build"}),(0,a.kt)("inlineCode",{parentName:"h3"},"build")),(0,a.kt)("p",null,"Returns an immutable Graph containing the links in this Builder instance.")),(0,a.kt)("h4",k({},{id:"definition-8"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"build(): "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,a.kt)("inlineCode",{parentName:"p"},"<Tp, N, unknown>['normal'];"))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const b = ArrowGraphHashed.builder<number, number>()\nb.connect(1, 2)\nb.addNode(3)\nconst g = b.build()\nconsole.log(g.toArray())\n// => [[1, 2], [3]]\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"connect"}),(0,a.kt)("inlineCode",{parentName:"h3"},"connect")),(0,a.kt)("p",null,"Adds a connection between ",(0,a.kt)("inlineCode",{parentName:"p"},"node1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"node2")," to the graph.")),(0,a.kt)("h4",k({},{id:"definition-9"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"connect(node1: N, node2: N): boolean;"))),(0,a.kt)("h4",k({},{id:"parameters-4"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"node1")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"N")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"the first connection node")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"node2")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"N")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const b = ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\nb.connect(3, 1)  // => true\nb.connect(1, 2)  // => false\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"connectall"}),(0,a.kt)("inlineCode",{parentName:"h3"},"connectAll")),(0,a.kt)("p",null,"Adds the connections in given ",(0,a.kt)("inlineCode",{parentName:"p"},"connections")," ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamSource")," to the graph.")),(0,a.kt)("h4",k({},{id:"definition-10"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"connectAll(connections: "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"p"},"<"),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,a.kt)("inlineCode",{parentName:"p"},"<Tp, N, unknown>['link']>): boolean;"))),(0,a.kt)("h4",k({},{id:"parameters-5"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"connections")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"td"},"<"),(0,a.kt)("a",k({parentName:"td"},{href:"/api/rimbu/graph/custom/WithGraphValues/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"WithGraphValues")),(0,a.kt)("inlineCode",{parentName:"td"},"<Tp, N, unknown>['link']>")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const b = ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\nb.connectAll([[1, 2], [3, 1]])   // => true\nb.connectAll([[1, 2]])           // => false\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"connectifnodesexist"}),(0,a.kt)("inlineCode",{parentName:"h3"},"connectIfNodesExist")),(0,a.kt)("p",null,"Returns true if the graph has changed")),(0,a.kt)("h4",k({},{id:"definition-11"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"connectIfNodesExist(node1: N, node2: N): boolean;"))),(0,a.kt)("h4",k({},{id:"parameters-6"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"node1")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"N")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"node2")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"N")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const b = ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\nb.connectIfNodesExist(3, 1)   // => true\nb.connectIfNodesExist(3, 4)   // => false\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"disconnect"}),(0,a.kt)("inlineCode",{parentName:"h3"},"disconnect")),(0,a.kt)("p",null,"Removes the connection between given ",(0,a.kt)("inlineCode",{parentName:"p"},"node1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"node2")," if the connection was present.")),(0,a.kt)("h4",k({},{id:"definition-12"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"disconnect<UN = N>(node1: RelatedTo<N, UN>, node2: RelatedTo<N, UN>): boolean;"))),(0,a.kt)("h4",k({},{id:"type-parameters-1"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"UN"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"N")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",k({},{id:"parameters-7"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"node1")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RelatedTo<N, UN>")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"the first connection node")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"node2")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RelatedTo<N, UN>")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const b = ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\nb.disconnect(1, 2)  // => true\nb.disconnect(3, 4)  // => false\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"disconnectall"}),(0,a.kt)("inlineCode",{parentName:"h3"},"disconnectAll")),(0,a.kt)("p",null,"Removes all connections from the given ",(0,a.kt)("inlineCode",{parentName:"p"},"connections")," ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamSource")," from the graph.")),(0,a.kt)("h4",k({},{id:"definition-13"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"disconnectAll<UN = N>(connections: "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"p"},"<Link<RelatedTo<N, UN>>>): boolean;"))),(0,a.kt)("h4",k({},{id:"type-parameters-2"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"UN"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"N")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",k({},{id:"parameters-8"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"connections")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"td"},"<Link<RelatedTo<N, UN>>>")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const b = ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\nb.disconnectAll([[1, 2], [3, 4]])  // => true\nb.disconnectAll([[3, 4], [5, 6]])  // => false\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"hasconnection"}),(0,a.kt)("inlineCode",{parentName:"h3"},"hasConnection")),(0,a.kt)("p",null,"Returns true if the graph has a connection between given nodes ",(0,a.kt)("inlineCode",{parentName:"p"},"node1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"node2"),".")),(0,a.kt)("h4",k({},{id:"definition-14"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hasConnection<UN = N>(node1: RelatedTo<N, UN>, node2: RelatedTo<N, UN>): boolean;"))),(0,a.kt)("h4",k({},{id:"type-parameters-3"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"UN"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"N")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",k({},{id:"parameters-9"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"node1")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RelatedTo<N, UN>")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"the first connection node")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"node2")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RelatedTo<N, UN>")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"the second connection node")))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const b = ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\nb.hasConnection(1, 2)   // => true\nb.hasConnection(6, 7)   // => false\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"hasnode"}),(0,a.kt)("inlineCode",{parentName:"h3"},"hasNode")),(0,a.kt)("p",null,"Returns true if the graph contains the given ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),".")),(0,a.kt)("h4",k({},{id:"definition-15"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hasNode<UN = N>(node: RelatedTo<N, UN>): boolean;"))),(0,a.kt)("h4",k({},{id:"type-parameters-4"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"UN"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"N")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",k({},{id:"parameters-10"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"node")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RelatedTo<N, UN>")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"the node to search")))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const b = ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\nb.hasNode(1)   // => true\nb.hasNode(6)   // => false\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"removenode"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeNode")),(0,a.kt)("p",null,"Removes the given ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),", and any of its connections, from the graph.")),(0,a.kt)("h4",k({},{id:"definition-16"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"removeNode<UN = N>(node: RelatedTo<N, UN>): boolean;"))),(0,a.kt)("h4",k({},{id:"type-parameters-5"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"UN"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"N")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",k({},{id:"parameters-11"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"node")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RelatedTo<N, UN>")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const b = ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\nb.removeNode(1)  // => true\nb.removeNode(6)  // => false\n")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",k({},{id:"removenodes"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeNodes")),(0,a.kt)("p",null,"Removes the given ",(0,a.kt)("inlineCode",{parentName:"p"},"nodes"),", and any of their connections, from the graph.")),(0,a.kt)("h4",k({},{id:"definition-17"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"removeNodes<UN = N>(nodes: "),(0,a.kt)("a",k({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"p"},"<RelatedTo<N, UN>>): boolean;"))),(0,a.kt)("h4",k({},{id:"type-parameters-6"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"UN"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"N")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",k({},{id:"parameters-12"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"nodes")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"td"},"<RelatedTo<N, UN>>")),(0,a.kt)("td",k({parentName:"tr"},{align:null}))))),(0,a.kt)("admonition",k({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const b = ArrowGraphHashed\n.of([[1, 2], [2, 3]])\n.toBuilder()\nb.removeNodes([1, 6, 7])  // => true\nb.removeNodes([6, 7])     // => false\n")))))}v.isMDXComponent=!0}}]);