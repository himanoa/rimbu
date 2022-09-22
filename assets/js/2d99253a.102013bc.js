"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[26478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,p=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||p;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=r.length,a=new Array(p);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<p;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>b});var n=r(3905),i=Object.defineProperty,p=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&l(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&l(e,r,t[r]);return e};const d={title:"TupIndices",slug:"/rimbu/deep/Deep/Match/TupIndices/type"},f="type TupIndices<T,C,R>",m={unversionedId:"rimbu_deep/Deep/Match/TupIndices.type",id:"rimbu_deep/Deep/Match/TupIndices.type",title:"TupIndices",description:"Type used to indicate an object containing matches for tuple indices.",source:"@site/api/rimbu_deep/Deep/Match/TupIndices.type.mdx",sourceDirName:"rimbu_deep/Deep/Match",slug:"/rimbu/deep/Deep/Match/TupIndices/type",permalink:"/api/rimbu/deep/Deep/Match/TupIndices/type",draft:!1,tags:[],version:"current",frontMatter:{title:"TupIndices",slug:"/rimbu/deep/Deep/Match/TupIndices/type"},sidebar:"defaultSidebar",previous:{title:"ObjProps",permalink:"/api/rimbu/deep/Deep/Match/ObjProps/type"},next:{title:"WithResult",permalink:"/api/rimbu/deep/Deep/Match/WithResult/type"}},y={},b=[{value:"Definition",id:"definition",level:2}],O={toc:b};function h(e){var t,r=e,{components:i}=r,l=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},O),l),p(t,a({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"type-tupindicestcr"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type TupIndices<T,C,R>")),(0,n.kt)("p",null,"Type used to indicate an object containing matches for tuple indices."),(0,n.kt)("h2",s({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"type TupIndices<T, C, R> = {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"[K in "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/deep/Tuple/KeysOf/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Tuple.KeysOf")),(0,n.kt)("inlineCode",{parentName:"p"},"<C>]?: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/deep/Match/Entry/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Match.Entry")),(0,n.kt)("inlineCode",{parentName:"p"},"<T[K & keyof T], C[K], T, R>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"} & NotIterable;")))}h.isMDXComponent=!0}}]);