"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[84726],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=p,y=d["".concat(u,".").concat(m)]||d[m]||f[m]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:p,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22415:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return b}});var n=r(3905),p=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(a)for(var r of a(t))l.call(t,r)&&c(e,r,t[r]);return e};const d={title:"Tuple",slug:"/rimbu/deep/Tuple/type"},m="type Tuple<T>",y={unversionedId:"rimbu_deep/Tuple.type",id:"rimbu_deep/Tuple.type",title:"Tuple",description:"A readonly array of fixed length and types.",source:"@site/api/rimbu_deep/Tuple.type.mdx",sourceDirName:"rimbu_deep",slug:"/rimbu/deep/Tuple/type",permalink:"/api/rimbu/deep/Tuple/type",draft:!1,tags:[],version:"current",frontMatter:{title:"Tuple",slug:"/rimbu/deep/Tuple/type"},sidebar:"defaultSidebar",previous:{title:"Source",permalink:"/api/rimbu/deep/Tuple/Source/type"},next:{title:"@rimbu/graph",permalink:"/api/rimbu/graph"}},s={},b=[{value:"Definition",id:"definition",level:2}],O={toc:b};function v(e){var t,r=e,{components:p}=r,c=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},O),c),o(t,i({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("h1",f({},{id:"type-tuplet"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type Tuple<T>")),(0,n.kt)("p",null,"A readonly array of fixed length and types."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,n.kt)("a",f({parentName:"p"},{href:"/api/rimbu/deep/Tuple/namespace"}),"Tuple")),(0,n.kt)("h2",f({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export declare type Tuple<T extends "),(0,n.kt)("a",f({parentName:"p"},{href:"/api/rimbu/deep/Tuple/Source/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Tuple.Source")),(0,n.kt)("inlineCode",{parentName:"p"},"> = Readonly<T>;")))}v.isMDXComponent=!0}}]);