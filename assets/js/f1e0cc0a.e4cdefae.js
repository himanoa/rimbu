"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},63487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>C,frontMatter:()=>s,metadata:()=>d,toc:()=>b});var r=n(3905),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(a)for(var n of a(t))p.call(t,n)&&u(e,n,t[n]);return e};const s={title:"CollectFun",slug:"/rimbu/common/CollectFun/type"},f="type CollectFun<T,R>",d={unversionedId:"rimbu_common/CollectFun.type",id:"rimbu_common/CollectFun.type",title:"CollectFun",description:"A function used in collect methods to collect values from a collection. This is basically a single-pass map and filter.",source:"@site/api/rimbu_common/CollectFun.type.mdx",sourceDirName:"rimbu_common",slug:"/rimbu/common/CollectFun/type",permalink:"/api/rimbu/common/CollectFun/type",draft:!1,tags:[],version:"current",frontMatter:{title:"CollectFun",slug:"/rimbu/common/CollectFun/type"},sidebar:"defaultSidebar",previous:{title:"Skip",permalink:"/api/rimbu/common/CollectFun/Skip/var"},next:{title:"Comp (namespace)",permalink:"/api/rimbu/common/Comp/namespace"}},y={},b=[{value:"Definition",id:"definition",level:2}],v={toc:b};function C(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},v),u),l(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"type-collectfuntr"}),(0,r.kt)("inlineCode",{parentName:"h1"},"type CollectFun<T,R>")),(0,r.kt)("p",null,"A function used in ",(0,r.kt)("inlineCode",{parentName:"p"},"collect")," methods to collect values from a collection. This is basically a single-pass map and filter."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/CollectFun/namespace"}),"CollectFun")),(0,r.kt)("h2",m({},{id:"definition"}),"Definition"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"export declare type CollectFun<T, R> = (value: T, index: number, skip: "),(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/CollectFun/Skip/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"CollectFun.Skip")),(0,r.kt)("inlineCode",{parentName:"p"},", halt: () => void) => R "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," "),(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/CollectFun/Skip/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"CollectFun.Skip")),(0,r.kt)("inlineCode",{parentName:"p"},";")))}C.isMDXComponent=!0}}]);