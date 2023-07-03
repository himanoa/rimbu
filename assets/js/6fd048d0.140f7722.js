"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[67489],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(r),s=n,h=u["".concat(l,".").concat(s)]||u[s]||d[s]||i;return r?a.createElement(h,p(p({ref:t},m),{},{components:r})):a.createElement(h,p({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,p[1]=o;for(var c=2;c<i;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},98071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>v,frontMatter:()=>h,metadata:()=>b,toc:()=>g});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&m(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&m(e,r,t[r]);return e},d=(e,t)=>i(e,p(t)),s=(e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const h={title:"Graph (namespace)",slug:"/rimbu/core/Graph/namespace"},f="namespace Graph",b={unversionedId:"rimbu_core/Graph/index",id:"rimbu_core/Graph/index",title:"Graph (namespace)",description:"An type-invariant immutable graph. See the Graph documentation and the Graph API documentation",source:"@site/api/rimbu_core/Graph/index.mdx",sourceDirName:"rimbu_core/Graph",slug:"/rimbu/core/Graph/namespace",permalink:"/api/rimbu/core/Graph/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"Graph (namespace)",slug:"/rimbu/core/Graph/namespace"},sidebar:"defaultSidebar",previous:{title:"ForcedError",permalink:"/api/rimbu/core/ErrBase/ForcedError/class"},next:{title:"Graph.Builder<N>",permalink:"/api/rimbu/core/Graph/Builder/interface"}},y={},g=[{value:"Interfaces",id:"interfaces",level:2}],k={toc:g},N="wrapper";function v(e){var t=e,{components:r}=t,n=s(t,["components"]);return(0,a.kt)(N,d(u(u({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"namespace-graph"}),(0,a.kt)("inlineCode",{parentName:"h1"},"namespace Graph")),(0,a.kt)("p",null,"An type-invariant immutable graph. See the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/Graph/interface"}),"Graph API documentation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/core/Graph/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Graph<N>"))),(0,a.kt)("h2",u({},{id:"interfaces"}),"Interfaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/core/Graph/Builder/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Graph.Builder<N>"))),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"A mutable ",(0,a.kt)("inlineCode",{parentName:"td"},"Graph")," builder used to efficiently create new immutable instances. See the ",(0,a.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,a.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/api/rimbu/graph/Graph/Builder/interface"}),"Graph.Builder API documentation"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/core/Graph/Context/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Graph.Context<UN>"))),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"The EdgeValuedGraGraphphSorted's Context instance that serves as a factory for all related immutable instances and builders.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/core/Graph/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Graph.NonEmpty<N>"))),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"A non-empty type-invariant immutable graph. See the ",(0,a.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,a.kt)("a",u({parentName:"td"},{href:"https://rimbu.org/api/rimbu/graph/Graph/interface"}),"Graph API documentation"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/core/Graph/Types/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Graph.Types"))),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))))}v.isMDXComponent=!0}}]);