"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[42691],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=s(r),f=a,m=y["".concat(l,".").concat(f)]||y[f]||u[f]||i;return r?n.createElement(m,p(p({ref:t},c),{},{components:r})):n.createElement(m,p({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},32124:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>C,frontMatter:()=>y,metadata:()=>m,toc:()=>d});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&c(e,r,t[r]);return e};const y={title:"Cls",slug:"/rimbu/spy/Spy/Cls/type"},f="type Cls<I,A>",m={unversionedId:"rimbu_spy/Spy/Cls.type",id:"rimbu_spy/Spy/Cls.type",title:"Cls",description:"The resulting tuple type of the Spy.cls function containing the resulting spy class, and the metadata object containing extra information about the created instances.",source:"@site/api/rimbu_spy/Spy/Cls.type.mdx",sourceDirName:"rimbu_spy/Spy",slug:"/rimbu/spy/Spy/Cls/type",permalink:"/api/rimbu/spy/Spy/Cls/type",draft:!1,tags:[],version:"current",frontMatter:{title:"Cls",slug:"/rimbu/spy/Spy/Cls/type"},sidebar:"defaultSidebar",previous:{title:"Spy (namespace)",permalink:"/api/rimbu/spy/Spy/namespace"},next:{title:"Spy.ClsMeta<C,A>",permalink:"/api/rimbu/spy/Spy/ClsMeta/interface"}},b={},d=[{value:"Definition",id:"definition",level:2}],O={toc:d};function C(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},O),c),i(t,p({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"type-clsia"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type Cls<I,A>")),(0,n.kt)("p",null,"The resulting tuple type of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Spy.cls")," function containing the resulting spy class, and the metadata object containing extra information about the created instances."),(0,n.kt)("h2",u({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"type Cls<I, A extends any[]> = "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/spy/Construct/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Construct")),(0,n.kt)("inlineCode",{parentName:"p"},"<A, "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/spy/Spy/ClsObj/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Spy.ClsObj")),(0,n.kt)("inlineCode",{parentName:"p"},"<I, A>> & "),(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/spy/Spy/ClsMeta/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"Spy.ClsMeta")),(0,n.kt)("inlineCode",{parentName:"p"},"<I, A>;")))}C.isMDXComponent=!0}}]);