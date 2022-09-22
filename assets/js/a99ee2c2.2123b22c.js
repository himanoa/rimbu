"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[7253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(r),b=o,f=u["".concat(p,".").concat(b)]||u[b]||s[b]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},69247:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>b,default:()=>v,frontMatter:()=>u,metadata:()=>f,toc:()=>y});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&m(e,r,t[r]);return e};const u={title:"objectIs",slug:"/rimbu/common/Eq/objectIs/var"},b="type objectIs",f={unversionedId:"rimbu_common/Eq/objectIs.var",id:"rimbu_common/Eq/objectIs.var",title:"objectIs",description:"An Eq instance that uses Object.is to determine if two objects are equal.",source:"@site/api/rimbu_common/Eq/objectIs.var.mdx",sourceDirName:"rimbu_common/Eq",slug:"/rimbu/common/Eq/objectIs/var",permalink:"/api/rimbu/common/Eq/objectIs/var",draft:!1,tags:[],version:"current",frontMatter:{title:"objectIs",slug:"/rimbu/common/Eq/objectIs/var"},sidebar:"defaultSidebar",previous:{title:"Eq (namespace)",permalink:"/api/rimbu/common/Eq/namespace"},next:{title:"Eq",permalink:"/api/rimbu/common/Eq/type"}},d={},y=[{value:"Definition",id:"definition",level:2}],j={toc:y};function v(e){var t,r=e,{components:o}=r,m=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},j),m),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"type-objectis"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type objectIs")),(0,n.kt)("p",null,"An Eq instance that uses ",(0,n.kt)("inlineCode",{parentName:"p"},"Object.is")," to determine if two objects are equal."),(0,n.kt)("admonition",s({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const eq = Eq.objectIs\nconsole.log(eq(5, 5))\n// => true\nconsole.log(eq(5, 'a'))\n// => false\n"))),(0,n.kt)("h2",s({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"objectIs: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/common/Eq/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Eq")),(0,n.kt)("inlineCode",{parentName:"p"},"<any>")))}v.isMDXComponent=!0}}]);