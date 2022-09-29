"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[82182],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(t),d=a,s=f["".concat(u,".").concat(d)]||f[d]||m[d]||o;return t?n.createElement(s,i(i({ref:r},p),{},{components:t})):n.createElement(s,i({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},37858:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>d,default:()=>y,frontMatter:()=>f,metadata:()=>s,toc:()=>b});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&p(e,t,r[t]);if(c)for(var t of c(r))l.call(r,t)&&p(e,t,r[t]);return e};const f={title:"average",slug:"/rimbu/common/Reducer/average/var"},d="type average",s={unversionedId:"rimbu_common/Reducer/average.var",id:"rimbu_common/Reducer/average.var",title:"average",description:"A Reducer that calculates the average of all given numberic input values.",source:"@site/api/rimbu_common/Reducer/average.var.mdx",sourceDirName:"rimbu_common/Reducer",slug:"/rimbu/common/Reducer/average/var",permalink:"/api/rimbu/common/Reducer/average/var",draft:!1,tags:[],version:"current",frontMatter:{title:"average",slug:"/rimbu/common/Reducer/average/var"},sidebar:"defaultSidebar",previous:{title:"and",permalink:"/api/rimbu/common/Reducer/and/var"},next:{title:"count",permalink:"/api/rimbu/common/Reducer/count/var"}},v={},b=[{value:"Definition",id:"definition",level:2}],g={toc:b};function y(e){var r,t=e,{components:a}=t,p=((e,r)=>{var t={};for(var n in e)u.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=m(m({},g),p),o(r,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"type-average"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type average")),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"Reducer")," that calculates the average of all given numberic input values."),(0,n.kt)("admonition",m({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"console.log(Stream.range({ amount: 5 }).reduce(Reducer.average));\n// => 2\n"))),(0,n.kt)("h2",m({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"average: "),(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/Reducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Reducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<number, number>")))}y.isMDXComponent=!0}}]);