"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[88038],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>O});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,O=m["".concat(l,".").concat(f)]||m[f]||y[f]||o;return r?n.createElement(O,i(i({ref:t},u),{},{components:r})):n.createElement(O,i({ref:t},u))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},31019:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>O,metadata:()=>b,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&u(e,r,t[r]);return e},y=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const O={title:"OptLazyOr",slug:"/rimbu/common/OptLazyOr/type"},s="type OptLazyOr<T,O>",b={unversionedId:"rimbu_common/OptLazyOr.type",id:"rimbu_common/OptLazyOr.type",title:"OptLazyOr",description:"A potentially lazy value that, in case of a lazy function, received a default value that it can return.",source:"@site/api/rimbu_common/OptLazyOr.type.mdx",sourceDirName:"rimbu_common",slug:"/rimbu/common/OptLazyOr/type",permalink:"/api/rimbu/common/OptLazyOr/type",draft:!1,tags:[],version:"current",frontMatter:{title:"OptLazyOr",slug:"/rimbu/common/OptLazyOr/type"},sidebar:"defaultSidebar",previous:{title:"OptLazy",permalink:"/api/rimbu/common/OptLazy/type"},next:{title:"Range (namespace)",permalink:"/api/rimbu/common/Range/namespace"}},d={},v=[{value:"Definition",id:"definition",level:2}],g={toc:v},j="wrapper";function h(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(j,y(m(m({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"type-optlazyorto"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type OptLazyOr<T,O>")),(0,n.kt)("p",null,"A potentially lazy value that, in case of a lazy function, received a default value that it can return."),(0,n.kt)("h2",m({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export type OptLazyOr<T, O> = T "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"},"((none: O) => T"),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," O);")))}h.isMDXComponent=!0}}]);