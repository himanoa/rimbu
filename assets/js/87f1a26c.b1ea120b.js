"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[60626],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},71171:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>O,contentTitle:()=>y,default:()=>h,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&l(e,t,r[t]);if(c)for(var t of c(r))u.call(r,t)&&l(e,t,r[t]);return e},s=(e,r)=>a(e,i(r)),f=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const m={title:"Reducer",slug:"/rimbu/core/Reducer/type"},y="type Reducer<I,O>",b={unversionedId:"rimbu_core/Reducer.type",id:"rimbu_core/Reducer.type",title:"Reducer",description:"A Reducer is a stand-alone calculation that takes input values of type I, and, when requested, produces an output value of type O.",source:"@site/api/rimbu_core/Reducer.type.mdx",sourceDirName:"rimbu_core",slug:"/rimbu/core/Reducer/type",permalink:"/api/rimbu/core/Reducer/type",draft:!1,tags:[],version:"current",frontMatter:{title:"Reducer",slug:"/rimbu/core/Reducer/type"},sidebar:"defaultSidebar",previous:{title:"sum",permalink:"/api/rimbu/core/Reducer/sum/var"},next:{title:"RelatedTo",permalink:"/api/rimbu/core/RelatedTo/type"}},O={},v=[{value:"Definition",id:"definition",level:2}],g={toc:v},k="wrapper";function h(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(k,s(d(d({},g),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"type-reducerio"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type Reducer<I,O>")),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"Reducer")," is a stand-alone calculation that takes input values of type I, and, when requested, produces an output value of type O."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/Reducer/namespace"}),"Reducer")),(0,n.kt)("h2",d({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export type Reducer<I, O = I> = "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/Reducer/Impl/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"Reducer.Impl")),(0,n.kt)("inlineCode",{parentName:"p"},"<I, O, unknown>;")))}h.isMDXComponent=!0}}]);