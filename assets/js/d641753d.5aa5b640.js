"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[77380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,s=m["".concat(l,".").concat(f)]||m[f]||y[f]||a;return r?n.createElement(s,i(i({ref:t},u),{},{components:r})):n.createElement(s,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65736:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>f,default:()=>v,frontMatter:()=>m,metadata:()=>s,toc:()=>b});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&u(e,r,t[r]);return e};const m={title:"OptLazy",slug:"/rimbu/common/OptLazy/type"},f="type OptLazy<T>",s={unversionedId:"rimbu_common/OptLazy.type",id:"rimbu_common/OptLazy.type",title:"OptLazy",description:"A potentially lazy value of type T.",source:"@site/api/rimbu_common/OptLazy.type.mdx",sourceDirName:"rimbu_common",slug:"/rimbu/common/OptLazy/type",permalink:"/api/rimbu/common/OptLazy/type",draft:!1,tags:[],version:"current",frontMatter:{title:"OptLazy",slug:"/rimbu/common/OptLazy/type"},sidebar:"defaultSidebar",previous:{title:"MaybePromise",permalink:"/api/rimbu/common/MaybePromise/type"},next:{title:"OptLazyOr",permalink:"/api/rimbu/common/OptLazyOr/type"}},O={},b=[{value:"Definition",id:"definition",level:2}],d={toc:b};function v(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=y(y({},d),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",y({},{id:"type-optlazyt"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type OptLazy<T>")),(0,n.kt)("p",null,"A potentially lazy value of type T."),(0,n.kt)("h2",y({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export declare type OptLazy<T> = T "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," (() => T);")))}v.isMDXComponent=!0}}]);