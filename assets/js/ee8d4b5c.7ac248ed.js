"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[37339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(n),b=r,y=s["".concat(p,".").concat(b)]||s[b]||c[b]||o;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},93438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>b,default:()=>k,frontMatter:()=>s,metadata:()=>y,toc:()=>f});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))m.call(t,n)&&u(e,n,t[n]);return e};const s={title:"HashTableSortedColumn.NonEmpty<R,C,V>",slug:"/rimbu/table/HashTableSortedColumn/NonEmpty/interface"},b="interface HashTableSortedColumn.NonEmpty<R,C,V>",y={unversionedId:"rimbu_table/HashTableSortedColumn/NonEmpty.interface",id:"rimbu_table/HashTableSortedColumn/NonEmpty.interface",title:"HashTableSortedColumn.NonEmpty<R,C,V>",description:"A non-empty type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the Table documentation and the HashTableSortedColumn API documentation",source:"@site/api/rimbu_table/HashTableSortedColumn/NonEmpty.interface.mdx",sourceDirName:"rimbu_table/HashTableSortedColumn",slug:"/rimbu/table/HashTableSortedColumn/NonEmpty/interface",permalink:"/api/rimbu/table/HashTableSortedColumn/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"HashTableSortedColumn.NonEmpty<R,C,V>",slug:"/rimbu/table/HashTableSortedColumn/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"HashTableSortedColumn.Context<UR,UC>",permalink:"/api/rimbu/table/HashTableSortedColumn/Context/interface"},next:{title:"HashTableSortedColumn.Types",permalink:"/api/rimbu/table/HashTableSortedColumn/Types/interface"}},d={},f=[{value:"Type parameters",id:"type-parameters",level:2}],h={toc:f};function k(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},h),u),o(t,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"interface-hashtablesortedcolumnnonemptyrcv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface HashTableSortedColumn.NonEmpty<R,C,V>")),(0,a.kt)("p",null,"A non-empty type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/table"}),"Table documentation")," and the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/table/hash-row/HashTableSortedColumn/interface"}),"HashTableSortedColumn API documentation"),"  "),(0,a.kt)("h2",c({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"R"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"the row key type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"C"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"the column key type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"the value type")))),(0,a.kt)("admonition",c({},{title:"note",type:"note"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The HashTableSortedColumn uses a HashMap to map row keys to column. - The HashTableSortedColumn uses SortedMaps to map column keys to values."))),(0,a.kt)("admonition",c({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"const t1 = HashTableSortedColumn.empty<number, string, boolean>()\nconst t2 = HashTableSortedColumn.of([1, 'a', true], [2, 'a', false])\n"))))}k.isMDXComponent=!0}}]);