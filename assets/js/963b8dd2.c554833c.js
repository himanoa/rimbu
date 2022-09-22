"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[38895],{3905:(e,t,a)=>{a.d(t,{Zo:()=>b,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=c(a),s=r,f=u["".concat(p,".").concat(s)]||u[s]||m[s]||i;return a?n.createElement(f,l(l({ref:t},b),{},{components:a})):n.createElement(f,l({ref:t},b))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7271:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>f,toc:()=>d});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&b(e,a,t[a]);if(o)for(var a of o(t))c.call(t,a)&&b(e,a,t[a]);return e};const u={title:"VariantTable (namespace)",slug:"/rimbu/table/VariantTable/namespace"},s="namespace VariantTable",f={unversionedId:"rimbu_table/VariantTable/index",id:"rimbu_table/VariantTable/index",title:"VariantTable (namespace)",description:"A type-variant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the Table documentation and the VariantTable API documentation",source:"@site/api/rimbu_table/VariantTable/index.mdx",sourceDirName:"rimbu_table/VariantTable",slug:"/rimbu/table/VariantTable/namespace",permalink:"/api/rimbu/table/VariantTable/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"VariantTable (namespace)",slug:"/rimbu/table/VariantTable/namespace"},sidebar:"defaultSidebar",previous:{title:"Table<R,C,V>",permalink:"/api/rimbu/table/Table/interface"},next:{title:"VariantTable.NonEmpty<R,C,V>",permalink:"/api/rimbu/table/VariantTable/NonEmpty/interface"}},y={},d=[{value:"Interfaces",id:"interfaces",level:2}],k={toc:d};function h(e){var t,a=e,{components:r}=a,b=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},k),b),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"namespace-varianttable"}),(0,n.kt)("inlineCode",{parentName:"h1"},"namespace VariantTable")),(0,n.kt)("p",null,"A type-variant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the ",(0,n.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/docs/collections/table"}),"Table documentation")," and the ",(0,n.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/api/rimbu/table/VariantTable/interface"}),"VariantTable API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/VariantTable/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"VariantTable<R,C,V>"))),(0,n.kt)("h2",m({},{id:"interfaces"}),"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"/api/rimbu/table/VariantTable/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"VariantTable.NonEmpty<R,C,V>"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"A non-empty type-variant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the ",(0,n.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/docs/collections/table"}),"Table documentation")," and the ",(0,n.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/api/rimbu/table/VariantTable/interface"}),"VariantTable API documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"/api/rimbu/table/VariantTable/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"VariantTable.Types"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Utility interface that provides higher-kinded types for this collection.")))))}h.isMDXComponent=!0}}]);