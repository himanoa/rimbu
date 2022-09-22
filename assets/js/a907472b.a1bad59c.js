"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[12032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>v,frontMatter:()=>d,metadata:()=>f,toc:()=>k});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={title:"Row<R,C,V>",slug:"/rimbu/collection-types/set-custom/Row/interface"},m="interface Row<R,C,V>",f={unversionedId:"rimbu_collection-types/set-custom/Row.interface",id:"rimbu_collection-types/set-custom/Row.interface",title:"Row<R,C,V>",description:"A higher-kind utility type providing access to a row type R, a column type C, and a value type V.",source:"@site/api/rimbu_collection-types/set-custom/Row.interface.mdx",sourceDirName:"rimbu_collection-types/set-custom",slug:"/rimbu/collection-types/set-custom/Row/interface",permalink:"/api/rimbu/collection-types/set-custom/Row/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"Row<R,C,V>",slug:"/rimbu/collection-types/set-custom/Row/interface"},sidebar:"defaultSidebar",previous:{title:"RSetBase<T,Tp>",permalink:"/api/rimbu/collection-types/set-custom/RSetBase/interface"},next:{title:"VariantSetBase (namespace)",permalink:"/api/rimbu/collection-types/set-custom/VariantSetBase/namespace"}},y={},k=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>_C</code>",id:"_c",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>_R</code>",id:"_r",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>_V</code>",id:"_v",level:3},{value:"Definition",id:"definition-2",level:4}],b={toc:k};function v(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},b),u),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"interface-rowrcv"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface Row<R,C,V>")),(0,r.kt)("p",null,"A higher-kind utility type providing access to a row type R, a column type C, and a value type V."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/table/custom/VariantTableBase/Types/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantTableBase.Types"))),(0,r.kt)("h2",s({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Default"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"R"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"undocumented")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"C"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"undocumented")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"undocumented")))),(0,r.kt)("h2",s({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"_c"}),(0,r.kt)("inlineCode",{parentName:"h3"},"_C")),(0,r.kt)("p",null,"The column key type.")),(0,r.kt)("h4",s({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly _C: C;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"_r"}),(0,r.kt)("inlineCode",{parentName:"h3"},"_R")),(0,r.kt)("p",null,"The row key type.")),(0,r.kt)("h4",s({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly _R: R;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"_v"}),(0,r.kt)("inlineCode",{parentName:"h3"},"_V")),(0,r.kt)("p",null,"The value type.")),(0,r.kt)("h4",s({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly _V: V;")))))}v.isMDXComponent=!0}}]);