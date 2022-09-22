"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[67469],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44942:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>k,frontMatter:()=>u,metadata:()=>f,toc:()=>y});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e};const u={title:"@rimbu/collection-types/set",slug:"/rimbu/collection-types/set"},d="package @rimbu/collection-types/set",f={unversionedId:"rimbu_collection-types/set/index",id:"rimbu_collection-types/set/index",title:"@rimbu/collection-types/set",description:"The @rimbu/collection-types/set package provides interfaces for the variant VariantSet and generic RSet types.",source:"@site/api/rimbu_collection-types/set/index.mdx",sourceDirName:"rimbu_collection-types/set",slug:"/rimbu/collection-types/set",permalink:"/api/rimbu/collection-types/set",draft:!1,tags:[],version:"current",frontMatter:{title:"@rimbu/collection-types/set",slug:"/rimbu/collection-types/set"},sidebar:"defaultSidebar",previous:{title:"WithRow",permalink:"/api/rimbu/collection-types/map-custom/WithRow/type"},next:{title:"RSet (namespace)",permalink:"/api/rimbu/collection-types/set/RSet/namespace"}},b={},y=[{value:"Interfaces",id:"interfaces",level:2},{value:"Namespaces",id:"namespaces",level:2}],h={toc:y};function k(e){var t,r=e,{components:n}=r,s=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=m(m({},h),s),i(t,o({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"package-rimbucollection-typesset"}),(0,a.kt)("inlineCode",{parentName:"h1"},"package @rimbu/collection-types/set")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@rimbu/collection-types/set")," package provides interfaces for the variant ",(0,a.kt)("inlineCode",{parentName:"p"},"VariantSet")," and generic ",(0,a.kt)("inlineCode",{parentName:"p"},"RSet")," types.\nSee ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/collections/set"}),"Rimbu docs Set page")," for more information."),(0,a.kt)("h2",m({},{id:"interfaces"}),"Interfaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"/api/rimbu/collection-types/set/RSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"RSet<T>"))),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"A type-invariant immutable Set of value type T. In the Set, there are no duplicate values. See the ",(0,a.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,a.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/api/rimbu/collection-types/set/RSet/interface"}),"RSet API documentation"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"/api/rimbu/collection-types/set/VariantSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"VariantSet<T>"))),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"A type-variant immutable Set of value type T. In the Set, there are no duplicate values. See the ",(0,a.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,a.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/api/rimbu/collection-types/set/VariantSet/interface"}),"VariantSet API documentation"))))),(0,a.kt)("h2",m({},{id:"namespaces"}),"Namespaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"/api/rimbu/collection-types/set/RSet/namespace"}),(0,a.kt)("inlineCode",{parentName:"a"},"RSet"))),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"A type-invariant immutable Set of value type T. In the Set, there are no duplicate values. See the ",(0,a.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,a.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/api/rimbu/collection-types/set/RSet/interface"}),"RSet API documentation"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"/api/rimbu/collection-types/set/VariantSet/namespace"}),(0,a.kt)("inlineCode",{parentName:"a"},"VariantSet"))),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"A type-variant immutable Set of value type T. In the Set, there are no duplicate values. See the ",(0,a.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,a.kt)("a",m({parentName:"td"},{href:"https://rimbu.org/api/rimbu/collection-types/set/VariantSet/interface"}),"VariantSet API documentation"))))))}k.isMDXComponent=!0}}]);