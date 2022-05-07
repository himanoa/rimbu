"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[21246],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=c(r),u=n,f=s["".concat(p,".").concat(u)]||s[u]||m[u]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},80763:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return h}});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&l(e,r,t[r]);if(d)for(var r of d(t))c.call(t,r)&&l(e,r,t[r]);return e};const s={title:"OrderedSortedMap<K,V>",slug:"/rimbu/ordered/map/OrderedSortedMap/interface"},u="interface OrderedSortedMap<K,V>",f={unversionedId:"rimbu_ordered/map/OrderedSortedMap.interface",id:"rimbu_ordered/map/OrderedSortedMap.interface",title:"OrderedSortedMap<K,V>",description:"A type-invariant immutable Ordered SortedMap of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the Map documentation and the OrderedSortedMap API documentation",source:"@site/api/rimbu_ordered/map/OrderedSortedMap.interface.mdx",sourceDirName:"rimbu_ordered/map",slug:"/rimbu/ordered/map/OrderedSortedMap/interface",permalink:"/api/rimbu/ordered/map/OrderedSortedMap/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedSortedMap<K,V>",slug:"/rimbu/ordered/map/OrderedSortedMap/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedSortedMap.Types",permalink:"/api/rimbu/ordered/map/OrderedSortedMap/Types/interface"},next:{title:"@rimbu/ordered/map-custom",permalink:"/api/rimbu/ordered/map-custom"}},y={},h=[{value:"Type parameters",id:"type-parameters",level:3}],v={toc:h};function b(e){var t,r=e,{components:n}=r,l=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=m(m({},v),l),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"interface-orderedsortedmapkv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface OrderedSortedMap<K,V>")),(0,a.kt)("p",null,"A type-invariant immutable Ordered SortedMap of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/api/rimbu/ordered/map/OrderedSortedMap/interface"}),"OrderedSortedMap API documentation"),"  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/ordered/map/OrderedSortedMap/namespace"}),"OrderedSortedMap")),(0,a.kt)("h3",m({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"K"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"the key type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"the value type")))),(0,a.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"The OrderedSortedMap keeps maintains the insertion order of elements, thus iterators and streams will also reflect this order. - The OrderedSortedMap wraps around a SortedMap instance, thus has mostly the same time complexity as the SortedMap. - The OrderedSortedMap keeps the key insertion order in a List, thus its space complexity is higher than a regular SortedMap.")))),(0,a.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"const m1 = OrderedSortedMap.empty<number, string>()\nconst m2 = OrderedSortedMap.of([1, 'a'], [2, 'b'])\n")))))}b.isMDXComponent=!0}}]);