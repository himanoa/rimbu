"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[49287],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>s});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),f=u(t),s=o,d=f["".concat(c,".").concat(s)]||f[s]||l[s]||a;return t?n.createElement(d,i(i({ref:r},m),{},{components:t})):n.createElement(d,i({ref:r},m))}));function s(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},99431:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>s,default:()=>O,frontMatter:()=>f,metadata:()=>d,toc:()=>b});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&m(e,t,r[t]);if(p)for(var t of p(r))u.call(r,t)&&m(e,t,r[t]);return e};const f={title:"nonEmpty",slug:"/rimbu/common/Reducer/nonEmpty/var"},s="type nonEmpty",d={unversionedId:"rimbu_common/Reducer/nonEmpty.var",id:"rimbu_common/Reducer/nonEmpty.var",title:"nonEmpty",description:"Returns a Reducer that outputs true if one or more input values are received, false otherwise.",source:"@site/api/rimbu_common/Reducer/nonEmpty.var.mdx",sourceDirName:"rimbu_common/Reducer",slug:"/rimbu/common/Reducer/nonEmpty/var",permalink:"/api/rimbu/common/Reducer/nonEmpty/var",draft:!1,tags:[],version:"current",frontMatter:{title:"nonEmpty",slug:"/rimbu/common/Reducer/nonEmpty/var"},sidebar:"defaultSidebar",previous:{title:"minBy",permalink:"/api/rimbu/common/Reducer/minBy/var"},next:{title:"or",permalink:"/api/rimbu/common/Reducer/or/var"}},y={},b=[{value:"Definition",id:"definition",level:2}],v={toc:b};function O(e){var r,t=e,{components:o}=t,m=((e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=l(l({},v),m),a(r,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",l({},{id:"type-nonempty"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type nonEmpty")),(0,n.kt)("p",null,"Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Reducer")," that outputs true if one or more input values are received, false otherwise."),(0,n.kt)("admonition",l({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",l({parentName:"pre"},{className:"language-ts"}),"console.log(Stream.of(1, 2, 3).reduce(Reducer.nonEmpty))\n// => true\n"))),(0,n.kt)("h2",l({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"nonEmpty: "),(0,n.kt)("a",l({parentName:"p"},{href:"/api/rimbu/common/Reducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Reducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<any, boolean>")))}O.isMDXComponent=!0}}]);