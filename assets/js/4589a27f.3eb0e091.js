"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[95977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28187:(e,t,r)=>{r.d(t,{G:()=>o});var n=r(67294);function a(e){return e.replace(/</g,"%3C").replace(/>/g,"%3E")}function o(e){const t=a(`https://g.gravizo.com/svg?\n  @startuml;\n  skinparam monochrome true;\n  skinparam backgroundColor none;\n  skinparam classBackgroundColor darkslategrey;\n  skinparam classBorderColor gray;\n  skinparam classFontColor lightgray;\n  skinparam classStereotypeFontColor darkgray;\n  skinparam arrowColor lightgray;\n  skinparam linetype ortho;\n  ${e.contents}\n  @enduml;`);return n.createElement("img",{src:t,className:"diagram"})}},88508:(e,t,r)=>{r.d(t,{r:()=>h});var n=r(67294),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>o(e,i(t));const m={previewwindow:"console",view:"split",editorsize:"60",codemirror:"1",moduleview:"1"};function h(e){const t=function(e){let t="",r="";for(const n in e)t+=`${r}${n}=${e[n]}`,r="&";return""===t?"":`?${t}`}(u(d({},m),{module:`/src/${e.path}`})),r=`https://codesandbox.io/embed/github/vitoke/rimbu-sandbox/tree/main${t}`,a=`https://codesandbox.io/s/github/vitoke/rimbu-sandbox/tree/main${t}`;return n.createElement(n.Fragment,null,n.createElement("a",{target:"_blank",className:"button button--secondary",href:a,style:{marginBottom:10}},"Open file below in new window with full type-check"),n.createElement("iframe",{src:r,className:"codesandbox-iframe",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}},23639:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>O,frontMatter:()=>y,metadata:()=>g,toc:()=>w});var n=r(3905),a=r(28187);const o="\ninterface Streamable<T>;\n\ninterface VariantSet<T>;\nabstract RSet<T>;\nclass HashSet<T>;\nclass SortedSet<T>;\n\nStreamable <|.. VariantSet;\nVariantSet <|-- RSet;\nRSet <|-- HashSet;\nRSet <|-- SortedSet;\n";var i=r(88508),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))u.call(t,r)&&m(e,r,t[r]);return e},f=(e,t)=>s(e,c(t)),b=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const y={id:"set",slug:"./set",title:"Set"},k="Set",g={unversionedId:"collections/set",id:"collections/set",title:"Set",description:"A Set is an immutable collection of values, where the collection does not contain duplicate values. That is, all values are unique. The way this uniqueness is determined can vary through the specific Set implementation that is chosen.",source:"@site/docs/collections/set.mdx",sourceDirName:"collections",slug:"/collections/set",permalink:"/docs/collections/set",draft:!1,editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/collections/set.mdx",tags:[],version:"current",frontMatter:{id:"set",slug:"./set",title:"Set"},sidebar:"sidebar",previous:{title:"MultiSet",permalink:"/docs/collections/multiset"},next:{title:"Stream",permalink:"/docs/collections/stream"}},v={},w=[{value:"When to use",id:"when-to-use",level:2},{value:"HashSet",id:"hashset",level:2},{value:"SortedSet",id:"sortedset",level:2},{value:"OrderedSet",id:"orderedset",level:2},{value:"Exports",id:"exports",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Usage",id:"usage",level:2},{value:"Creation",id:"creation",level:3},{value:"Query",id:"query",level:3},{value:"Builder",id:"builder",level:3}],S={toc:w},N="wrapper";function O(e){var t=e,{components:r}=t,l=b(t,["components"]);return(0,n.kt)(N,f(h(h({},S),l),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",h({},{id:"set"}),"Set"),(0,n.kt)("p",null,"A Set is an immutable collection of values, where the collection does not contain duplicate values. That is, all values are unique. The way this uniqueness is determined can vary through the specific Set implementation that is chosen."),(0,n.kt)("h2",h({},{id:"when-to-use"}),"When to use"),(0,n.kt)("p",null,"Sets are useful when you only need to know if some element is present or not in a set. Adding an element for a second time to the same set has no effect. The Set can tell you, in an efficient way, whether some element is present."),(0,n.kt)("p",null,"Imagine we want to censor some words from pieces of text. We can create a Set containing all the words we want to censor. Then, we need to split up the text into words, and for each word query whether our set contains that word. If it does, we replace it with some other characters."),(0,n.kt)("h2",h({},{id:"hashset"}),"HashSet"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"HashSet")," is a Set that uses a ",(0,n.kt)("inlineCode",{parentName:"p"},"Hasher")," instance to convert elements to numbers. These number are used to efficiently verify equality between values, because elements with different hash numbers are guaranteed to be unequal."),(0,n.kt)("h2",h({},{id:"sortedset"}),"SortedSet"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"SortedSet")," is a Set that uses a ",(0,n.kt)("inlineCode",{parentName:"p"},"Comp")," instance that can compare elements and tell whether they are equal or which one is 'larger'. In this way, the Set is kept sorted, and iterating over its elements will produce them in sorted order."),(0,n.kt)("h2",h({},{id:"orderedset"}),"OrderedSet"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"OrderedSet")," is a Set with internally an extra ",(0,n.kt)("inlineCode",{parentName:"p"},"List")," that maintains the insertion order. In this way, iterating over the Set returns the values in the same order as they were inserted."),(0,n.kt)("h2",h({},{id:"exports"}),"Exports"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@rimbu/core")," package exports the following ",(0,n.kt)("em",{parentName:"p"},"abstract")," Set TypeScript types:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"/api/rimbu/collection-types/set/VariantSet/namespace"}),(0,n.kt)("inlineCode",{parentName:"a"},"VariantSet<T>"))),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"a type-variant set of value type T")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"/api/rimbu/collection-types/set/RSet/namespace"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSet<T>"))),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"a generic set of value type T")))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@rimbu/core")," package exports the following ",(0,n.kt)("em",{parentName:"p"},"concrete")," Set TypeScript types:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"/api/rimbu/hashed/set/HashSet/namespace"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashSet<T>"))),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"a set of value type T where items are hashed with a ",(0,n.kt)("inlineCode",{parentName:"td"},"Hasher"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"/api/rimbu/sorted/set/SortedSet/namespace"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet<T>"))),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"a set of value type T where items are sorted with a ",(0,n.kt)("inlineCode",{parentName:"td"},"Comp"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),(0,n.kt)("a",h({parentName:"td"},{href:"/api/rimbu/ordered/set/OrderedSet/namespace"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSet<T>"))),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"a set of value type T where insertion order is maintained")))),(0,n.kt)("h2",h({},{id:"inheritance"}),"Inheritance"),(0,n.kt)(a.G,{contents:o,mdxType:"UmlGraph"}),(0,n.kt)("h2",h({},{id:"usage"}),"Usage"),(0,n.kt)("h3",h({},{id:"creation"}),"Creation"),(0,n.kt)(i.r,{path:"set/create.ts",mdxType:"SandBox"}),(0,n.kt)("h3",h({},{id:"query"}),"Query"),(0,n.kt)(i.r,{path:"set/query.ts",mdxType:"SandBox"}),(0,n.kt)("h3",h({},{id:"builder"}),"Builder"),(0,n.kt)(i.r,{path:"set/build.ts",mdxType:"SandBox"}))}O.isMDXComponent=!0}}]);