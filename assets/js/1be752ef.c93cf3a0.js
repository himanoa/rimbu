"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[18090],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,f=c["".concat(d,".").concat(m)]||c[m]||s[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=c;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},94545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>b,frontMatter:()=>c,metadata:()=>f,toc:()=>k});var n=r(3905),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(a)for(var r of a(t))p.call(t,r)&&u(e,r,t[r]);return e};const c={title:"SortedSet.Types",slug:"/rimbu/sorted/SortedSet/Types/interface"},m="interface SortedSet.Types",f={unversionedId:"rimbu_sorted/SortedSet/Types.interface",id:"rimbu_sorted/SortedSet/Types.interface",title:"SortedSet.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_sorted/SortedSet/Types.interface.mdx",sourceDirName:"rimbu_sorted/SortedSet",slug:"/rimbu/sorted/SortedSet/Types/interface",permalink:"/api/rimbu/sorted/SortedSet/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"SortedSet.Types",slug:"/rimbu/sorted/SortedSet/Types/interface"},sidebar:"defaultSidebar",previous:{title:"SortedSet.NonEmpty<T>",permalink:"/api/rimbu/sorted/SortedSet/NonEmpty/interface"},next:{title:"SortedSet<T>",permalink:"/api/rimbu/sorted/SortedSet/interface"}},y={},k=[{value:"Properties",id:"properties",level:2},{value:"<code>_T</code>",id:"_t",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-4",level:4}],v={toc:k};function b(e){var t,r=e,{components:i}=r,u=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},v),u),o(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"interface-sortedsettypes"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface SortedSet.Types")),(0,n.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSet.Types"))),(0,n.kt)("h2",s({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"_t"}),(0,n.kt)("inlineCode",{parentName:"h3"},"_T")),(0,n.kt)("p",null,"The element type.")),(0,n.kt)("h4",s({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly _T: T;"))),(0,n.kt)("h4",s({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/Elem/interface#_T"}),"Elem._T"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"builder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"builder")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/sorted/SortedSet/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet.Builder")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,n.kt)("h4",s({},{id:"overrides-1"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Types/interface#builder"}),"Types.builder"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"context"}),(0,n.kt)("inlineCode",{parentName:"h3"},"context")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/sorted/SortedSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,n.kt)("h4",s({},{id:"overrides-2"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Types/interface#context"}),"Types.context"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"nonempty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/sorted/SortedSet/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,n.kt)("h4",s({},{id:"overrides-3"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Types/interface#nonEmpty"}),"Types.nonEmpty"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"normal"}),(0,n.kt)("inlineCode",{parentName:"h3"},"normal")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/sorted/SortedSet/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,n.kt)("h4",s({},{id:"overrides-4"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Types/interface#normal"}),"Types.normal"))))}b.isMDXComponent=!0}}]);