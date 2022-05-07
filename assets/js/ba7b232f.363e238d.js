"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[90332],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(a),d=r,b=s["".concat(c,".").concat(d)]||s[d]||p[d]||o;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},10767:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return s},metadata:function(){return b},toc:function(){return f}});var n=a(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&u(e,a,t[a]);if(i)for(var a of i(t))m.call(t,a)&&u(e,a,t[a]);return e};const s={title:"HashTableSortedColumn<R,C,V>",slug:"/rimbu/table/hash-row/HashTableSortedColumn/interface"},d="interface HashTableSortedColumn<R,C,V>",b={unversionedId:"rimbu_table/hash-row/HashTableSortedColumn.interface",id:"rimbu_table/hash-row/HashTableSortedColumn.interface",title:"HashTableSortedColumn<R,C,V>",description:"A type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the Table documentation and the HashTableSortedColumn API documentation",source:"@site/api/rimbu_table/hash-row/HashTableSortedColumn.interface.mdx",sourceDirName:"rimbu_table/hash-row",slug:"/rimbu/table/hash-row/HashTableSortedColumn/interface",permalink:"/api/rimbu/table/hash-row/HashTableSortedColumn/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"HashTableSortedColumn<R,C,V>",slug:"/rimbu/table/hash-row/HashTableSortedColumn/interface"},sidebar:"defaultSidebar",previous:{title:"HashTableSortedColumn.Types",permalink:"/api/rimbu/table/hash-row/HashTableSortedColumn/Types/interface"},next:{title:"@rimbu/table/sorted-row",permalink:"/api/rimbu/table/sorted-row"}},h={},f=[{value:"Type parameters",id:"type-parameters",level:3}],y={toc:f};function v(e){var t,a=e,{components:r}=a,u=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),u),o(t,l({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"interface-hashtablesortedcolumnrcv"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface HashTableSortedColumn<R,C,V>")),(0,n.kt)("p",null,"A type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://rimbu.org/docs/collections/table"}),"Table documentation")," and the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://rimbu.org/api/rimbu/table/hash-row/HashTableSortedColumn/interface"}),"HashTableSortedColumn API documentation"),"  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,n.kt)("a",p({parentName:"p"},{href:"/api/rimbu/table/hash-row/HashTableSortedColumn/namespace"}),"HashTableSortedColumn")),(0,n.kt)("h3",p({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"R"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"the row key type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"C"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"the column key type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"the value type")))),(0,n.kt)("div",p({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},"The HashTableSortedColumn uses a HashMap to map row keys to column. - The HashTableSortedColumn uses SortedMaps to map column keys to values.")))),(0,n.kt)("div",p({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,n.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",p({parentName:"pre"},{className:"language-ts"}),"const t1 = HashTableSortedColumn.empty<number, string, boolean>()\nconst t2 = HashTableSortedColumn.of([1, 'a', true], [2, 'a', false])\n")))))}v.isMDXComponent=!0}}]);