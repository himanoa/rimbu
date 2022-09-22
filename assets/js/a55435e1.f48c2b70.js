"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[36394],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(t),f=o,s=m["".concat(u,".").concat(f)]||m[f]||y[f]||p;return t?n.createElement(s,a(a({ref:r},l),{},{components:t})):n.createElement(s,a({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<p;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50039:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>f,default:()=>v,frontMatter:()=>m,metadata:()=>s,toc:()=>b});var n=t(3905),o=Object.defineProperty,p=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&l(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&l(e,t,r[t]);return e};const m={title:"NonEmptySource",slug:"/rimbu/deep/Tuple/NonEmptySource/type"},f="type NonEmptySource",s={unversionedId:"rimbu_deep/Tuple/NonEmptySource.type",id:"rimbu_deep/Tuple/NonEmptySource.type",title:"NonEmptySource",description:"A non-empty readonly array that can serve as a source for a Tuple.",source:"@site/api/rimbu_deep/Tuple/NonEmptySource.type.mdx",sourceDirName:"rimbu_deep/Tuple",slug:"/rimbu/deep/Tuple/NonEmptySource/type",permalink:"/api/rimbu/deep/Tuple/NonEmptySource/type",draft:!1,tags:[],version:"current",frontMatter:{title:"NonEmptySource",slug:"/rimbu/deep/Tuple/NonEmptySource/type"},sidebar:"defaultSidebar",previous:{title:"KeysOf",permalink:"/api/rimbu/deep/Tuple/KeysOf/type"},next:{title:"Source",permalink:"/api/rimbu/deep/Tuple/Source/type"}},d={},b=[{value:"Definition",id:"definition",level:2}],O={toc:b};function v(e){var r,t=e,{components:o}=t,l=((e,r)=>{var t={};for(var n in e)u.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=y(y({},O),l),p(r,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",y({},{id:"type-nonemptysource"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type NonEmptySource")),(0,n.kt)("p",null,"A non-empty readonly array that can serve as a source for a Tuple."),(0,n.kt)("h2",y({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"type NonEmptySource = readonly [unknown, ...unknown[]];")))}v.isMDXComponent=!0}}]);