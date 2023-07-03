"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[80653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||s[d]||r;return n?i.createElement(f,l(l({ref:t},m),{},{components:n})):i.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>T,frontMatter:()=>f,metadata:()=>k,toc:()=>v});var i=n(3905),a=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&m(e,n,t[n]);return e},s=(e,t)=>r(e,l(t)),d=(e,t)=>{var n={};for(var i in e)p.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&u.call(e,i)&&(n[i]=e[i]);return n};const f={title:"VariantMultiSetBase.Types",slug:"/rimbu/multiset/custom/VariantMultiSetBase/Types/interface"},y="interface VariantMultiSetBase.Types",k={unversionedId:"rimbu_multiset/custom/VariantMultiSetBase/Types.interface",id:"rimbu_multiset/custom/VariantMultiSetBase/Types.interface",title:"VariantMultiSetBase.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_multiset/custom/VariantMultiSetBase/Types.interface.mdx",sourceDirName:"rimbu_multiset/custom/VariantMultiSetBase",slug:"/rimbu/multiset/custom/VariantMultiSetBase/Types/interface",permalink:"/api/rimbu/multiset/custom/VariantMultiSetBase/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"VariantMultiSetBase.Types",slug:"/rimbu/multiset/custom/VariantMultiSetBase/Types/interface"},sidebar:"defaultSidebar",previous:{title:"VariantMultiSetBase.NonEmpty<T,Tp>",permalink:"/api/rimbu/multiset/custom/VariantMultiSetBase/NonEmpty/interface"},next:{title:"VariantMultiSetBase<T,Tp>",permalink:"/api/rimbu/multiset/custom/VariantMultiSetBase/interface"}},b={},v=[{value:"Properties",id:"properties",level:2},{value:"<code>_T</code>",id:"_t",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>countMap</code>",id:"countmap",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>countMapNonEmpty</code>",id:"countmapnonempty",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-4",level:4}],h={toc:v},N="wrapper";function T(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,i.kt)(N,s(c(c({},h),a),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",c({},{id:"interface-variantmultisetbasetypes"}),(0,i.kt)("inlineCode",{parentName:"h1"},"interface VariantMultiSetBase.Types")),(0,i.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Extends:")," ",(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/Elem/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"Elem<T>"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/core/VariantMultiSet/Types/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"VariantMultiSet.Types")),", ",(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/multiset/custom/MultiSetBase/Types/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"MultiSetBase.Types")),", ",(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/multiset/VariantMultiSet/Types/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"VariantMultiSet.Types"))),(0,i.kt)("h2",c({},{id:"properties"}),"Properties"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"_t"}),(0,i.kt)("inlineCode",{parentName:"h3"},"_T")),(0,i.kt)("p",null,"The element type.")),(0,i.kt)("h4",c({},{id:"definition"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly _T: T;"))),(0,i.kt)("h4",c({},{id:"overrides"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/Elem/interface#_T"}),"Elem._T"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"countmap"}),(0,i.kt)("inlineCode",{parentName:"h3"},"countMap")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-1"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly countMap: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/collection-types/map/VariantMap/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"VariantMap")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_T'], number>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"countmapnonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"countMapNonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-2"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly countMapNonEmpty: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/collection-types/map/VariantMap/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"VariantMap.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_T'], number>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"nonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-3"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/multiset/custom/VariantMultiSetBase/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"VariantMultiSetBase.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",c({},{id:"normal"}),(0,i.kt)("inlineCode",{parentName:"h3"},"normal")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",c({},{id:"definition-4"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,i.kt)("a",c({parentName:"p"},{href:"/api/rimbu/multiset/custom/VariantMultiSetBase/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"VariantMultiSetBase")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))))}T.isMDXComponent=!0}}]);