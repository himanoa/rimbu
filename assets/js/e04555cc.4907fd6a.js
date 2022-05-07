"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[2569],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return s}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(r),s=o,b=f["".concat(u,".").concat(s)]||f[s]||m[s]||i;return r?n.createElement(b,a(a({ref:t},l),{},{components:r})):n.createElement(b,a({ref:t},l))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73676:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return s},default:function(){return O},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return d}});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&l(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&l(e,r,t[r]);return e};const f={title:"Eq",slug:"/rimbu/common/Eq/type"},s="type Eq<T>",b={unversionedId:"rimbu_common/Eq.type",id:"rimbu_common/Eq.type",title:"Eq",description:"A function returning true if given v1 and v2 should be considered equal.",source:"@site/api/rimbu_common/Eq.type.mdx",sourceDirName:"rimbu_common",slug:"/rimbu/common/Eq/type",permalink:"/api/rimbu/common/Eq/type",draft:!1,tags:[],version:"current",frontMatter:{title:"Eq",slug:"/rimbu/common/Eq/type"},sidebar:"defaultSidebar",previous:{title:"objectIs",permalink:"/api/rimbu/common/Eq/objectIs/var"},next:{title:"ErrBase (namespace)",permalink:"/api/rimbu/common/ErrBase/namespace"}},y={},d=[{value:"Definition",id:"definition",level:2}],v={toc:d};function O(e){var t,r=e,{components:o}=r,l=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},v),l),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"type-eqt"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type Eq<T>")),(0,n.kt)("p",null,"A function returning true if given ",(0,n.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"v2")," should be considered equal."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/Eq/namespace"}),"Eq")),(0,n.kt)("h2",m({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export declare type Eq<T> = (v1: T, v2: T) => boolean;")))}O.isMDXComponent=!0}}]);