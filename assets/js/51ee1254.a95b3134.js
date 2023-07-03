"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[88201],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(t),y=o,f=s["".concat(p,".").concat(y)]||s[y]||m[y]||a;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},55718:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>d,default:()=>k,frontMatter:()=>f,metadata:()=>b,toc:()=>O});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&l(e,t,r[t]);if(c)for(var t of c(r))u.call(r,t)&&l(e,t,r[t]);return e},m=(e,r)=>a(e,i(r)),y=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const f={title:"nonEmpty",slug:"/rimbu/core/AsyncReducer/nonEmpty/var"},d="type nonEmpty",b={unversionedId:"rimbu_core/AsyncReducer/nonEmpty.var",id:"rimbu_core/AsyncReducer/nonEmpty.var",title:"nonEmpty",description:"Returns an AsyncReducer that outputs true if one or more input values are received, false otherwise.",source:"@site/api/rimbu_core/AsyncReducer/nonEmpty.var.mdx",sourceDirName:"rimbu_core/AsyncReducer",slug:"/rimbu/core/AsyncReducer/nonEmpty/var",permalink:"/api/rimbu/core/AsyncReducer/nonEmpty/var",draft:!1,tags:[],version:"current",frontMatter:{title:"nonEmpty",slug:"/rimbu/core/AsyncReducer/nonEmpty/var"},sidebar:"defaultSidebar",previous:{title:"minBy",permalink:"/api/rimbu/core/AsyncReducer/minBy/var"},next:{title:"or",permalink:"/api/rimbu/core/AsyncReducer/or/var"}},v={},O=[{value:"Definition",id:"definition",level:2}],g={toc:O},E="wrapper";function k(e){var r=e,{components:t}=r,o=y(r,["components"]);return(0,n.kt)(E,m(s(s({},g),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"type-nonempty"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type nonEmpty")),(0,n.kt)("p",null,"Returns an ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncReducer")," that outputs true if one or more input values are received, false otherwise."),(0,n.kt)("admonition",s({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"await AsyncStream.of(1, 2, 3).reduce(AsyncReducer.nonEmpty))\n// => true\n"))),(0,n.kt)("h2",s({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"nonEmpty: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<never, boolean>")))}k.isMDXComponent=!0}}]);