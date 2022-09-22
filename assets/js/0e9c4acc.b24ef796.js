"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[68716],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>y});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),y=o,f=d["".concat(u,".").concat(y)]||d[y]||m[y]||p;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<p;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15797:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>f,toc:()=>s});var n=t(3905),o=Object.defineProperty,p=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&l(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&l(e,t,r[t]);return e};const d={title:"CompoundForArr",slug:"/rimbu/deep/Deep/Match/CompoundForArr/type"},y="type CompoundForArr<T,C,P,R>",f={unversionedId:"rimbu_deep/Deep/Match/CompoundForArr.type",id:"rimbu_deep/Deep/Match/CompoundForArr.type",title:"CompoundForArr",description:"Defines an object containing exactly one CompoundType key, having an array of matchers.",source:"@site/api/rimbu_deep/Deep/Match/CompoundForArr.type.mdx",sourceDirName:"rimbu_deep/Deep/Match",slug:"/rimbu/deep/Deep/Match/CompoundForArr/type",permalink:"/api/rimbu/deep/Deep/Match/CompoundForArr/type",draft:!1,tags:[],version:"current",frontMatter:{title:"CompoundForArr",slug:"/rimbu/deep/Deep/Match/CompoundForArr/type"},sidebar:"defaultSidebar",previous:{title:"Arr",permalink:"/api/rimbu/deep/Deep/Match/Arr/type"},next:{title:"CompoundForObj",permalink:"/api/rimbu/deep/Deep/Match/CompoundForObj/type"}},b={},s=[{value:"Definition",id:"definition",level:2}],C={toc:s};function h(e){var r,t=e,{components:o}=t,l=((e,r)=>{var t={};for(var n in e)u.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=m(m({},C),l),p(r,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"type-compoundforarrtcpr"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type CompoundForArr<T,C,P,R>")),(0,n.kt)("p",null,"Defines an object containing exactly one ",(0,n.kt)("inlineCode",{parentName:"p"},"CompoundType")," key, having an array of matchers."),(0,n.kt)("h2",m({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"type CompoundForArr<T, C, P, R> = {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"[K in "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Match/CompoundType/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"CompoundType")),(0,n.kt)("inlineCode",{parentName:"p"},"]: {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"[K2 in "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Match/CompoundType/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"CompoundType")),(0,n.kt)("inlineCode",{parentName:"p"},"]?: K2 extends K ? "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Match/Entry/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Match.Entry")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, C, P, R>[] : never;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"};"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"}["),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/deep/Match/CompoundType/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"CompoundType")),(0,n.kt)("inlineCode",{parentName:"p"},"];")))}h.isMDXComponent=!0}}]);