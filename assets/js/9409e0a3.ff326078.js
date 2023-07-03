"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[11842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,y=m["".concat(c,".").concat(f)]||m[f]||s[f]||l;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[m]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>g,frontMatter:()=>y,metadata:()=>d,toc:()=>C});var n=r(3905),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(a)for(var r of a(t))p.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>l(e,i(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const y={title:"CollectFun",slug:"/rimbu/core/CollectFun/type"},b="type CollectFun<T,R>",d={unversionedId:"rimbu_core/CollectFun.type",id:"rimbu_core/CollectFun.type",title:"CollectFun",description:"A function used in collect methods to collect values from a collection. This is basically a single-pass map and filter.",source:"@site/api/rimbu_core/CollectFun.type.mdx",sourceDirName:"rimbu_core",slug:"/rimbu/core/CollectFun/type",permalink:"/api/rimbu/core/CollectFun/type",draft:!1,tags:[],version:"current",frontMatter:{title:"CollectFun",slug:"/rimbu/core/CollectFun/type"},sidebar:"defaultSidebar",previous:{title:"Skip",permalink:"/api/rimbu/core/CollectFun/Skip/var"},next:{title:"Comp (namespace)",permalink:"/api/rimbu/core/Comp/namespace"}},v={},C=[{value:"Definition",id:"definition",level:2}],O={toc:C},k="wrapper";function g(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(k,s(m(m({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"type-collectfuntr"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type CollectFun<T,R>")),(0,n.kt)("p",null,"A function used in ",(0,n.kt)("inlineCode",{parentName:"p"},"collect")," methods to collect values from a collection. This is basically a single-pass map and filter."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/CollectFun/namespace"}),"CollectFun")),(0,n.kt)("h2",m({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export type CollectFun<T, R> = (value: T, index: number, skip: "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/CollectFun/Skip/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"CollectFun.Skip")),(0,n.kt)("inlineCode",{parentName:"p"},", halt: () => void) => R "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/CollectFun/Skip/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"CollectFun.Skip")),(0,n.kt)("inlineCode",{parentName:"p"},";")))}g.isMDXComponent=!0}}]);