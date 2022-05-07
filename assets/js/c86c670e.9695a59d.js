"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[78625],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,y=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return t?n.createElement(y,p(p({ref:r},c),{},{components:t})):n.createElement(y,p({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=f;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},53736:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return b}});var n=t(3905),a=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&c(e,t,r[t]);if(o)for(var t of o(r))l.call(r,t)&&c(e,t,r[t]);return e};const f={title:"LinkType",slug:"/rimbu/graph/Traverse/LinkType/type"},m="type LinkType<G,N>",y={unversionedId:"rimbu_graph/Traverse/LinkType.type",id:"rimbu_graph/Traverse/LinkType.type",title:"LinkType",description:"Utility type to determine if a graph has valued or unvalued links",source:"@site/api/rimbu_graph/Traverse/LinkType.type.mdx",sourceDirName:"rimbu_graph/Traverse",slug:"/rimbu/graph/Traverse/LinkType/type",permalink:"/api/rimbu/graph/Traverse/LinkType/type",draft:!1,tags:[],version:"current",frontMatter:{title:"LinkType",slug:"/rimbu/graph/Traverse/LinkType/type"},sidebar:"defaultSidebar",previous:{title:"Traverse (namespace)",permalink:"/api/rimbu/graph/Traverse/namespace"},next:{title:"ValuedGraph (namespace)",permalink:"/api/rimbu/graph/ValuedGraph/namespace"}},d={},b=[{value:"Definition",id:"definition",level:2}],k={toc:b};function v(e){var r,t=e,{components:a}=t,c=((e,r)=>{var t={};for(var n in e)u.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=s(s({},k),c),i(r,p({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"type-linktypegn"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type LinkType<G,N>")),(0,n.kt)("p",null,"Utility type to determine if a graph has valued or unvalued links"),(0,n.kt)("h2",s({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export declare type LinkType<G extends "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/VariantGraphBase/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"VariantGraphBase")),(0,n.kt)("inlineCode",{parentName:"p"},"<any, any>, N> = G extends "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/VariantValuedGraphBase/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"VariantValuedGraphBase")),(0,n.kt)("inlineCode",{parentName:"p"},"<N, infer V> ? "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedLink/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"ValuedLink")),(0,n.kt)("inlineCode",{parentName:"p"},"<N, V> : "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/Link/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Link")),(0,n.kt)("inlineCode",{parentName:"p"},"<N>;")))}v.isMDXComponent=!0}}]);