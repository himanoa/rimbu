"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[80385],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=d(r),u=n,f=c["".concat(l,".").concat(u)]||c[u]||s[u]||o;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},51391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>f,toc:()=>k});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))d.call(t,r)&&m(e,r,t[r]);return e};const c={title:"@rimbu/sorted",slug:"/rimbu/sorted"},u="package @rimbu/sorted",f={unversionedId:"rimbu_sorted/index",id:"rimbu_sorted/index",title:"@rimbu/sorted",description:"The @rimbu/sorted package provides implementations for sorted maps and sets.",source:"@site/api/rimbu_sorted/index.mdx",sourceDirName:"rimbu_sorted",slug:"/rimbu/sorted",permalink:"/api/rimbu/sorted",draft:!1,tags:[],version:"current",frontMatter:{title:"@rimbu/sorted",slug:"/rimbu/sorted"},sidebar:"defaultSidebar",previous:{title:"OrderedSortedSetCreators",permalink:"/api/rimbu/ordered/set-custom/OrderedSortedSetCreators/interface"},next:{title:"SortedMap (namespace)",permalink:"/api/rimbu/sorted/SortedMap/namespace"}},b={},k=[{value:"Interfaces",id:"interfaces",level:2},{value:"Namespaces",id:"namespaces",level:2}],h={toc:k};function y(e){var t,r=e,{components:n}=r,m=((e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=s(s({},h),m),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",s({},{id:"package-rimbusorted"}),(0,a.kt)("inlineCode",{parentName:"h1"},"package @rimbu/sorted")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@rimbu/sorted")," package provides implementations for sorted maps and sets."),(0,a.kt)("p",null," See the ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/collections/map"}),"Rimbu docs Map page")," and ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/collections/set"}),"Rimbu docs Set page")," for more information."),(0,a.kt)("p",null," This is a convenience package that exports everything from the following sub-packages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"./sorted/map"}),(0,a.kt)("inlineCode",{parentName:"a"},"@rimbu/sorted/map"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"./sorted/set"}),(0,a.kt)("inlineCode",{parentName:"a"},"@rimbu/sorted/set")))),(0,a.kt)("h2",s({},{id:"interfaces"}),"Interfaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"/api/rimbu/sorted/SortedMap/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedMap<K,V>"))),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"A type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,a.kt)("a",s({parentName:"td"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,a.kt)("a",s({parentName:"td"},{href:"https://rimbu.org/api/rimbu/sorted/map/SortedMap/interface"}),"SortedMap API documentation"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"/api/rimbu/sorted/SortedSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet<T>"))),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"A type-invariant immutable Set of value type T. In the Set, there are no duplicate values. See the ",(0,a.kt)("a",s({parentName:"td"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,a.kt)("a",s({parentName:"td"},{href:"https://rimbu.org/api/rimbu/ordered/set/SortedSet/interface"}),"SortedSet API documentation"))))),(0,a.kt)("h2",s({},{id:"namespaces"}),"Namespaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"/api/rimbu/sorted/SortedMap/namespace"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedMap"))),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"A type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,a.kt)("a",s({parentName:"td"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,a.kt)("a",s({parentName:"td"},{href:"https://rimbu.org/api/rimbu/sorted/map/SortedMap/interface"}),"SortedMap API documentation"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"/api/rimbu/sorted/SortedSet/namespace"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet"))),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"A type-invariant immutable Set of value type T. In the Set, there are no duplicate values. See the ",(0,a.kt)("a",s({parentName:"td"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,a.kt)("a",s({parentName:"td"},{href:"https://rimbu.org/api/rimbu/ordered/set/SortedSet/interface"}),"SortedSet API documentation"))))))}y.isMDXComponent=!0}}]);