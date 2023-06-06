"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[90049],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(a),h=n,d=s["".concat(l,".").concat(h)]||s[h]||u[h]||p;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var m=2;m<p;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},70102:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>O,frontMatter:()=>d,metadata:()=>f,toc:()=>k});var r=a(3905),n=Object.defineProperty,p=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))m.call(t,a)&&c(e,a,t[a]);return e},u=(e,t)=>p(e,i(t)),h=(e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a};const d={title:"@rimbu/hashed/map",slug:"/rimbu/hashed/map"},b="package @rimbu/hashed/map",f={unversionedId:"rimbu_hashed/map/index",id:"rimbu_hashed/map/index",title:"@rimbu/hashed/map",description:"The @rimbu/hashed/map package provides the HashMap implementation.",source:"@site/api/rimbu_hashed/map/index.mdx",sourceDirName:"rimbu_hashed/map",slug:"/rimbu/hashed/map",permalink:"/api/rimbu/hashed/map",draft:!1,tags:[],version:"current",frontMatter:{title:"@rimbu/hashed/map",slug:"/rimbu/hashed/map"},sidebar:"defaultSidebar",previous:{title:"Hasher<UK>",permalink:"/api/rimbu/hashed/Hasher/interface"},next:{title:"HashMap (namespace)",permalink:"/api/rimbu/hashed/map/HashMap/namespace"}},y={},k=[{value:"Interfaces",id:"interfaces",level:2},{value:"Namespaces",id:"namespaces",level:2}],g={toc:k},v="wrapper";function O(e){var t=e,{components:a}=t,n=h(t,["components"]);return(0,r.kt)(v,u(s(s({},g),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"package-rimbuhashedmap"}),(0,r.kt)("inlineCode",{parentName:"h1"},"package @rimbu/hashed/map")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@rimbu/hashed/map")," package provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," implementation."),(0,r.kt)("p",null," See the ",(0,r.kt)("a",s({parentName:"p"},{href:"/docs/collections/map"}),"Rimbu docs Map page")," for more information."),(0,r.kt)("h2",s({},{id:"interfaces"}),"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"/api/rimbu/hashed/map/HashMap/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashMap<K,V>"))),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"A type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,r.kt)("a",s({parentName:"td"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,r.kt)("a",s({parentName:"td"},{href:"https://rimbu.org/api/rimbu/hashed/map/HashMap/interface"}),"HashMap API documentation"))))),(0,r.kt)("h2",s({},{id:"namespaces"}),"Namespaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"/api/rimbu/hashed/map/HashMap/namespace"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashMap"))),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"A type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,r.kt)("a",s({parentName:"td"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,r.kt)("a",s({parentName:"td"},{href:"https://rimbu.org/api/rimbu/hashed/map/HashMap/interface"}),"HashMap API documentation"))))))}O.isMDXComponent=!0}}]);