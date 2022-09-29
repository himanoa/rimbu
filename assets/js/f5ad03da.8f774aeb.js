"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[2232],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=u(r),y=p,d=f["".concat(l,".").concat(y)]||f[y]||s[y]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function y(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,a=new Array(i);a[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,a[1]=o;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>y,default:()=>v,frontMatter:()=>f,metadata:()=>d,toc:()=>b});var n=r(3905),p=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&c(e,r,t[r]);return e};const f={title:"Result",slug:"/rimbu/deep/Deep/Selector/Result/type"},y="type Result<T,SL>",d={unversionedId:"rimbu_deep/Deep/Selector/Result.type",id:"rimbu_deep/Deep/Selector/Result.type",title:"Result",description:"Type defining the result type of applying the SL selector type to the T value type.",source:"@site/api/rimbu_deep/Deep/Selector/Result.type.mdx",sourceDirName:"rimbu_deep/Deep/Selector",slug:"/rimbu/deep/Deep/Selector/Result/type",permalink:"/api/rimbu/deep/Deep/Selector/Result/type",draft:!1,tags:[],version:"current",frontMatter:{title:"Result",slug:"/rimbu/deep/Deep/Selector/Result/type"},sidebar:"defaultSidebar",previous:{title:"Selector (namespace)",permalink:"/api/rimbu/deep/Deep/Selector/namespace"},next:{title:"Shape",permalink:"/api/rimbu/deep/Deep/Selector/Shape/type"}},m={},b=[{value:"Definition",id:"definition",level:2}],O={toc:b};function v(e){var t,r=e,{components:p}=r,c=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},O),c),i(t,a({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"type-resulttsl"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type Result<T,SL>")),(0,n.kt)("p",null,"Type defining the result type of applying the SL selector type to the T value type."),(0,n.kt)("h2",s({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"type Result<T, SL> = "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/deep/Selector/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Selector")),(0,n.kt)("inlineCode",{parentName:"p"},"<T> extends SL ? never : SL extends (...args: any[]) => infer R ? R : SL extends string ? "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/deep/Path/Result/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Path.Result")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, SL> : {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"readonly [K in keyof SL]: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/deep/Selector/Result/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Selector.Result")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, SL[K]>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"};")))}v.isMDXComponent=!0}}]);