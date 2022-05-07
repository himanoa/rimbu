"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[245],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=p(n),s=o,d=f["".concat(c,".").concat(s)]||f[s]||m[s]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63487:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return s},default:function(){return C},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return b}});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(a)for(var n of a(t))p.call(t,n)&&u(e,n,t[n]);return e};const f={title:"CollectFun",slug:"/rimbu/common/CollectFun/type"},s="type CollectFun<T,R>",d={unversionedId:"rimbu_common/CollectFun.type",id:"rimbu_common/CollectFun.type",title:"CollectFun",description:"A function used in collect methods to collect values from a collection. This is basically a single-pass map and filter.",source:"@site/api/rimbu_common/CollectFun.type.mdx",sourceDirName:"rimbu_common",slug:"/rimbu/common/CollectFun/type",permalink:"/api/rimbu/common/CollectFun/type",draft:!1,tags:[],version:"current",frontMatter:{title:"CollectFun",slug:"/rimbu/common/CollectFun/type"},sidebar:"defaultSidebar",previous:{title:"Skip",permalink:"/api/rimbu/common/CollectFun/Skip/var"},next:{title:"Comp<K>",permalink:"/api/rimbu/common/Comp/interface"}},y={},b=[{value:"Definition",id:"definition",level:2}],v={toc:b};function C(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},v),u),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"type-collectfuntr"}),(0,r.kt)("inlineCode",{parentName:"h1"},"type CollectFun<T,R>")),(0,r.kt)("p",null,"A function used in ",(0,r.kt)("inlineCode",{parentName:"p"},"collect")," methods to collect values from a collection. This is basically a single-pass map and filter."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/CollectFun/namespace"}),"CollectFun")),(0,r.kt)("h2",m({},{id:"definition"}),"Definition"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"export declare type CollectFun<T, R> = (value: T, index: number, skip: "),(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/CollectFun/Skip/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"CollectFun.Skip")),(0,r.kt)("inlineCode",{parentName:"p"},", halt: () => void) => R "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," "),(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/CollectFun/Skip/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"CollectFun.Skip")),(0,r.kt)("inlineCode",{parentName:"p"},";")))}C.isMDXComponent=!0}}]);