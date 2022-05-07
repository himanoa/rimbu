"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[52637],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61884:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return b}});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&l(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&l(e,n,t[n]);return e};const f={title:"Link",slug:"/rimbu/graph/custom/Link/type"},m="type Link<N>",d={unversionedId:"rimbu_graph/custom/Link.type",id:"rimbu_graph/custom/Link.type",title:"Link",description:"A potentially valued connection between two nodes, being a 2-valued or 3-valued tuple of which the first two elements are nodes",source:"@site/api/rimbu_graph/custom/Link.type.mdx",sourceDirName:"rimbu_graph/custom",slug:"/rimbu/graph/custom/Link/type",permalink:"/api/rimbu/graph/custom/Link/type",draft:!1,tags:[],version:"current",frontMatter:{title:"Link",slug:"/rimbu/graph/custom/Link/type"},sidebar:"defaultSidebar",previous:{title:"Target",permalink:"/api/rimbu/graph/custom/Link/Target/type"},next:{title:"ValuedGraphBase (namespace)",permalink:"/api/rimbu/graph/custom/ValuedGraphBase/namespace"}},y={},b=[{value:"Definition",id:"definition",level:2}],g={toc:b};function k(e){var t,n=e,{components:o}=n,l=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},g),l),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"type-linkn"}),(0,r.kt)("inlineCode",{parentName:"h1"},"type Link<N>")),(0,r.kt)("p",null,"A potentially valued connection between two nodes, being a 2-valued or 3-valued tuple of which the first two elements are nodes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/Link/namespace"}),"Link")),(0,r.kt)("h2",s({},{id:"definition"}),"Definition"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"export declare type Link<N> = [N, N] "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," [N, N, unknown];")))}k.isMDXComponent=!0}}]);