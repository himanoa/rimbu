"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[97202],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(t),y=i,f=m["".concat(l,".").concat(y)]||m[y]||s[y]||o;return t?n.createElement(f,a(a({ref:r},c),{},{components:t})):n.createElement(f,a({ref:r},c))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17248:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>y,default:()=>v,frontMatter:()=>m,metadata:()=>f,toc:()=>d});var n=t(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&c(e,t,r[t]);if(p)for(var t of p(r))u.call(r,t)&&c(e,t,r[t]);return e};const m={title:"PromiseValue",slug:"/rimbu/spy/PromiseValue/type"},y="type PromiseValue<P>",f={unversionedId:"rimbu_spy/PromiseValue.type",id:"rimbu_spy/PromiseValue.type",title:"PromiseValue",description:"Utility type to return the contained type of a promise.",source:"@site/api/rimbu_spy/PromiseValue.type.mdx",sourceDirName:"rimbu_spy",slug:"/rimbu/spy/PromiseValue/type",permalink:"/api/rimbu/spy/PromiseValue/type",draft:!1,tags:[],version:"current",frontMatter:{title:"PromiseValue",slug:"/rimbu/spy/PromiseValue/type"},sidebar:"defaultSidebar",previous:{title:"FuncInterface<F>",permalink:"/api/rimbu/spy/FuncInterface/interface"},next:{title:"Spy (namespace)",permalink:"/api/rimbu/spy/Spy/namespace"}},b={},d=[{value:"Definition",id:"definition",level:2}],O={toc:d};function v(e){var r,t=e,{components:i}=t,c=((e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=s(s({},O),c),o(r,a({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"type-promisevaluep"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type PromiseValue<P>")),(0,n.kt)("p",null,"Utility type to return the contained type of a promise."),(0,n.kt)("h2",s({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export declare type PromiseValue<P> = P extends Promise<infer R> ? R : never;")))}v.isMDXComponent=!0}}]);