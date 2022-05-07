"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[68811],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=l(r),f=n,s=h["".concat(c,".").concat(f)]||h[f]||m[f]||i;return r?a.createElement(s,p(p({ref:t},u),{},{components:r})):a.createElement(s,p({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var l=2;l<i;l++)p[l]=r[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4018:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return h},metadata:function(){return s},toc:function(){return b}});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))l.call(t,r)&&u(e,r,t[r]);return e};const h={title:"VariantGraph (namespace)",slug:"/rimbu/graph/VariantGraph/namespace"},f="namespace VariantGraph",s={unversionedId:"rimbu_graph/VariantGraph/index",id:"rimbu_graph/VariantGraph/index",title:"VariantGraph (namespace)",description:"An type-variant immutable graph. See the Graph documentation and the VariantGraph API documentation",source:"@site/api/rimbu_graph/VariantGraph/index.mdx",sourceDirName:"rimbu_graph/VariantGraph",slug:"/rimbu/graph/VariantGraph/namespace",permalink:"/api/rimbu/graph/VariantGraph/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"VariantGraph (namespace)",slug:"/rimbu/graph/VariantGraph/namespace"},sidebar:"defaultSidebar",previous:{title:"ValuedGraph<N,V>",permalink:"/api/rimbu/graph/ValuedGraph/interface"},next:{title:"VariantGraph.NonEmpty<N>",permalink:"/api/rimbu/graph/VariantGraph/NonEmpty/interface"}},d={},b=[{value:"Interfaces",id:"interfaces",level:2}],g={toc:b};function y(e){var t,r=e,{components:n}=r,u=((e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),u),i(t,p({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"namespace-variantgraph"}),(0,a.kt)("inlineCode",{parentName:"h1"},"namespace VariantGraph")),(0,a.kt)("p",null,"An type-variant immutable graph. See the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/api/rimbu/graph/VariantGraph/interface"}),"VariantGraph API documentation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/graph/VariantGraph/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"VariantGraph<N>"))),(0,a.kt)("h2",m({},{id:"interfaces"}),"Interfaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"/api/rimbu/graph/VariantGraph/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"VariantGraph.NonEmpty<N>"))),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"A non-empty type-variant immutable graph. See the ",(0,a.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/docs/collections/graph"}),"Graph documentation")," and the ",(0,a.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/api/rimbu/graph/VariantGraph/interface"}),"VariantGraph API documentation"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"/api/rimbu/graph/VariantGraph/Types/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"VariantGraph.Types"))),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))))}y.isMDXComponent=!0}}]);