"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[79665],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>s});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),s=o,f=d["".concat(p,".").concat(s)]||d[s]||m[s]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24847:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>s,default:()=>v,frontMatter:()=>d,metadata:()=>f,toc:()=>b});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&l(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&l(e,r,t[r]);return e};const d={title:"Reducer",slug:"/rimbu/common/Reducer/type"},s="type Reducer<I,O>",f={unversionedId:"rimbu_common/Reducer.type",id:"rimbu_common/Reducer.type",title:"Reducer",description:"A Reducer is a stand-alone calculation that takes input values of type I, and, when requested, produces an output value of type O.",source:"@site/api/rimbu_common/Reducer.type.mdx",sourceDirName:"rimbu_common",slug:"/rimbu/common/Reducer/type",permalink:"/api/rimbu/common/Reducer/type",draft:!1,tags:[],version:"current",frontMatter:{title:"Reducer",slug:"/rimbu/common/Reducer/type"},sidebar:"defaultSidebar",previous:{title:"sum",permalink:"/api/rimbu/common/Reducer/sum/var"},next:{title:"RelatedTo",permalink:"/api/rimbu/common/RelatedTo/type"}},y={},b=[{value:"Definition",id:"definition",level:2}],O={toc:b};function v(e){var t,r=e,{components:o}=r,l=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},O),l),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"type-reducerio"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type Reducer<I,O>")),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"Reducer")," is a stand-alone calculation that takes input values of type I, and, when requested, produces an output value of type O."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/Reducer/namespace"}),"Reducer")),(0,n.kt)("h2",m({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export declare type Reducer<I, O = I> = "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/Reducer/Impl/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"Reducer.Impl")),(0,n.kt)("inlineCode",{parentName:"p"},"<I, O, unknown>;")))}v.isMDXComponent=!0}}]);