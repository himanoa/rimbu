"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[1565],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>s});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=c(t),s=a,m=y["".concat(l,".").concat(s)]||y[s]||f[s]||i;return t?n.createElement(m,p(p({ref:r},u),{},{components:t})):n.createElement(m,p({ref:r},u))}));function s(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=y;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},36929:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>v,frontMatter:()=>y,metadata:()=>m,toc:()=>b});var n=t(3905),a=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&u(e,t,r[t]);if(o)for(var t of o(r))c.call(r,t)&&u(e,t,r[t]);return e};const y={title:"Arr",slug:"/rimbu/deep/Deep/Path/Internal/Arr/type"},s="type Arr<T>",m={unversionedId:"rimbu_deep/Deep/Path/Internal/Arr.type",id:"rimbu_deep/Deep/Path/Internal/Arr.type",title:"Arr",description:"Determines the allowed paths for an array.",source:"@site/api/rimbu_deep/Deep/Path/Internal/Arr.type.mdx",sourceDirName:"rimbu_deep/Deep/Path/Internal",slug:"/rimbu/deep/Deep/Path/Internal/Arr/type",permalink:"/api/rimbu/deep/Deep/Path/Internal/Arr/type",draft:!1,tags:[],version:"current",frontMatter:{title:"Arr",slug:"/rimbu/deep/Deep/Path/Internal/Arr/type"},sidebar:"defaultSidebar",previous:{title:"AppendIfNotEmpty",permalink:"/api/rimbu/deep/Deep/Path/Internal/AppendIfNotEmpty/type"},next:{title:"Generic",permalink:"/api/rimbu/deep/Deep/Path/Internal/Generic/type"}},d={},b=[{value:"Definition",id:"definition",level:2}],O={toc:b};function v(e){var r,t=e,{components:a}=t,u=((e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=f(f({},O),u),i(r,p({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",f({},{id:"type-arrt"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type Arr<T>")),(0,n.kt)("p",null,"Determines the allowed paths for an array."),(0,n.kt)("h2",f({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"type Arr<T extends readonly any[]> = ````[${number}]${``["),"Path.Internal.Generic",(0,n.kt)("inlineCode",{parentName:"p"},"](/api/rimbu/deep/Path/Internal/Generic/type)``<T[number], false, true>}````;")))}v.isMDXComponent=!0}}]);