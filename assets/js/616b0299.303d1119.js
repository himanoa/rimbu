"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[79116],{3905:(e,t,r)=>{r.d(t,{Zo:()=>y,kt:()=>d});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},y=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=p,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,o(o({ref:t},y),{},{components:r})):n.createElement(m,o({ref:t},y))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82705:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>g,frontMatter:()=>f,metadata:()=>m,toc:()=>b});var n=r(3905),p=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&y(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&y(e,r,t[r]);return e};const f={title:"AppendIfNotEmpty",slug:"/rimbu/deep/Deep/Path/Internal/AppendIfNotEmpty/type"},d="type AppendIfNotEmpty<A,T>",m={unversionedId:"rimbu_deep/Deep/Path/Internal/AppendIfNotEmpty.type",id:"rimbu_deep/Deep/Path/Internal/AppendIfNotEmpty.type",title:"AppendIfNotEmpty",description:"Utility type to only add non-empty string types to a string array.  @typeparma A - the input string array",source:"@site/api/rimbu_deep/Deep/Path/Internal/AppendIfNotEmpty.type.mdx",sourceDirName:"rimbu_deep/Deep/Path/Internal",slug:"/rimbu/deep/Deep/Path/Internal/AppendIfNotEmpty/type",permalink:"/api/rimbu/deep/Deep/Path/Internal/AppendIfNotEmpty/type",draft:!1,tags:[],version:"current",frontMatter:{title:"AppendIfNotEmpty",slug:"/rimbu/deep/Deep/Path/Internal/AppendIfNotEmpty/type"},sidebar:"defaultSidebar",previous:{title:"Internal (namespace)",permalink:"/api/rimbu/deep/Deep/Path/Internal/namespace"},next:{title:"Arr",permalink:"/api/rimbu/deep/Deep/Path/Internal/Arr/type"}},s={},b=[{value:"Definition",id:"definition",level:2}],O={toc:b};function g(e){var t,r=e,{components:p}=r,y=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},O),y),a(t,o({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"type-appendifnotemptyat"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type AppendIfNotEmpty<A,T>")),(0,n.kt)("p",null,"Utility type to only add non-empty string types to a string array.  @typeparma A - the input string array"),(0,n.kt)("h2",u({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"type AppendIfNotEmpty<A extends string[], T extends string> = T extends '' ? A : ["),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"...A,"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"T"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"];")))}g.isMDXComponent=!0}}]);