"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[11191],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),b=l(r),f=o,y=b["".concat(c,".").concat(f)]||b[f]||s[f]||p;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<p;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},36644:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>f,default:()=>P,frontMatter:()=>b,metadata:()=>y,toc:()=>m});var n=r(3905),o=Object.defineProperty,p=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(a)for(var r of a(t))l.call(t,r)&&u(e,r,t[r]);return e};const b={title:"ObjProps",slug:"/rimbu/deep/Patch/ObjProps/type"},f="type ObjProps<T,C,R>",y={unversionedId:"rimbu_deep/Patch/ObjProps.type",id:"rimbu_deep/Patch/ObjProps.type",title:"ObjProps",description:"A type defining the allowed patch values for object properties.",source:"@site/api/rimbu_deep/Patch/ObjProps.type.mdx",sourceDirName:"rimbu_deep/Patch",slug:"/rimbu/deep/Patch/ObjProps/type",permalink:"/api/rimbu/deep/Patch/ObjProps/type",draft:!1,tags:[],version:"current",frontMatter:{title:"ObjProps",slug:"/rimbu/deep/Patch/ObjProps/type"},sidebar:"defaultSidebar",previous:{title:"Obj",permalink:"/api/rimbu/deep/Patch/Obj/type"},next:{title:"Tup",permalink:"/api/rimbu/deep/Patch/Tup/type"}},d={},m=[{value:"Definition",id:"definition",level:2}],O={toc:m};function P(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},O),u),p(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"type-objpropstcr"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type ObjProps<T,C,R>")),(0,n.kt)("p",null,"A type defining the allowed patch values for object properties."),(0,n.kt)("h2",s({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"type ObjProps<T, C, R> = {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"[K in keyof C]?: K extends keyof T ? "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/deep/Patch/Entry/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Patch.Entry")),(0,n.kt)("inlineCode",{parentName:"p"},"<T[K], C[K], T, R> : never;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"};")))}P.isMDXComponent=!0}}]);