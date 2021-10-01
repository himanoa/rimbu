(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[9010],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=n,m=c["".concat(d,".").concat(h)]||c[h]||u[h]||o;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3664:function(e,t,r){"use strict";r.d(t,{r:function(){return o}});var a=r(7294),n={previewwindow:"console",view:"split",editorsize:"60",codemirror:"1",moduleview:"1"};function o(e){var t=function(e){var t="",r="";for(var a in e)t+=""+r+a+"="+e[a],r="&";return""===t?"":"?"+t}(Object.assign({},n,{module:"/src/"+e.path})),r="https://codesandbox.io/embed/github/vitoke/rimbu-sandbox/tree/main"+t,o="https://codesandbox.io/s/github/vitoke/rimbu-sandbox/tree/main"+t;return console.log({embedUrl:r}),a.createElement(a.Fragment,null,a.createElement("a",{target:"_blank",className:"button button--secondary",href:o,style:{marginBottom:10}},"Open file below in new window with full type-check"),a.createElement("iframe",{src:r,className:"codesandbox-iframe",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}},6830:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i=r(3664),l=["components"],d={id:"arrow-valued-graph",slug:"./arrow-valued-graph",title:"Arrow Valued Graph"},p="ArrowValuedGraph<N,V>",s={unversionedId:"collections/graph/arrow-valued-graph",id:"collections/graph/arrow-valued-graph",isDocsHomePage:!1,title:"Arrow Valued Graph",description:"An ArrowValuedGraph is a directed ValuedGraph where the edges have values. This structure is useful for situations in which elements of the same type can have relations to each other, and those relations have some associated value. The relations are directed, so A -> B does not imply that B -> A.",source:"@site/docs/collections/graph/arrow-valued-graph.mdx",sourceDirName:"collections/graph",slug:"/collections/graph/arrow-valued-graph",permalink:"/docs/collections/graph/arrow-valued-graph",editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/collections/graph/arrow-valued-graph.mdx",tags:[],version:"current",frontMatter:{id:"arrow-valued-graph",slug:"./arrow-valued-graph",title:"Arrow Valued Graph"},sidebar:"sidebar",previous:{title:"Arrow Graph",permalink:"/docs/collections/graph/arrow-graph"},next:{title:"Edge Graph",permalink:"/docs/collections/graph/edge-graph"}},u=[{value:"Usage",id:"usage",children:[{value:"Creation",id:"creation",children:[]},{value:"Query",id:"query",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Builder",id:"builder",children:[]}]}],c={toc:u};function h(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"arrowvaluedgraphnv"},(0,o.kt)("inlineCode",{parentName:"h1"},"ArrowValuedGraph<N,V>")),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrowValuedGraph")," is a directed ",(0,o.kt)("inlineCode",{parentName:"p"},"ValuedGraph")," where the edges have values. This structure is useful for situations in which elements of the same type can have relations to each other, and those relations have some associated value. The relations are directed, so ",(0,o.kt)("inlineCode",{parentName:"p"},"A -> B")," does not imply that ",(0,o.kt)("inlineCode",{parentName:"p"},"B -> A"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Like all ",(0,o.kt)("inlineCode",{parentName:"p"},"Graph")," implementations, these graphs can contain cycles and isolated nodes are allowed."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@rimbu/core")," package exports the following ArrowValuedGraph types:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ArrowValuedGraph<N, V>")),(0,o.kt)("td",{parentName:"tr",align:null},"a generic directed valued graph with nodes of type N, and edge values of type V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ArrowValuedGraphHashed<N, V>")),(0,o.kt)("td",{parentName:"tr",align:null},"a valued directed graph with hashed nodes of type N, and edge values of type V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ArrowvaluedGraphSorted<N, V>")),(0,o.kt)("td",{parentName:"tr",align:null},"a valued directed graph with sorted nodes of type N, and edge values of type V")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"creation"},"Creation"),(0,o.kt)(i.r,{path:"graph/arrow/valued/create.ts",mdxType:"SandBox"}),(0,o.kt)("h3",{id:"query"},"Query"),(0,o.kt)(i.r,{path:"graph/arrow/valued/query.ts",mdxType:"SandBox"}),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)(i.r,{path:"graph/arrow/valued/motivation.ts",mdxType:"SandBox"}),(0,o.kt)("h3",{id:"builder"},"Builder"),(0,o.kt)(i.r,{path:"graph/arrow/valued/build.ts",mdxType:"SandBox"}))}h.isMDXComponent=!0}}]);