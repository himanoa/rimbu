"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[43856],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,b=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},78394:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>k,frontMatter:()=>c,metadata:()=>b,toc:()=>y});var n=a(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(i)for(var a of i(t))p.call(t,a)&&u(e,a,t[a]);return e};const c={title:"HashTableHashColumn<R,C,V>",slug:"/rimbu/table/hash-row/HashTableHashColumn/interface"},h="interface HashTableHashColumn<R,C,V>",b={unversionedId:"rimbu_table/hash-row/HashTableHashColumn.interface",id:"rimbu_table/hash-row/HashTableHashColumn.interface",title:"HashTableHashColumn<R,C,V>",description:"A type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the Table documentation and the HashTableHashColumn API documentation",source:"@site/api/rimbu_table/hash-row/HashTableHashColumn.interface.mdx",sourceDirName:"rimbu_table/hash-row",slug:"/rimbu/table/hash-row/HashTableHashColumn/interface",permalink:"/api/rimbu/table/hash-row/HashTableHashColumn/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"HashTableHashColumn<R,C,V>",slug:"/rimbu/table/hash-row/HashTableHashColumn/interface"},sidebar:"defaultSidebar",previous:{title:"HashTableHashColumn.Types",permalink:"/api/rimbu/table/hash-row/HashTableHashColumn/Types/interface"},next:{title:"HashTableSortedColumn (namespace)",permalink:"/api/rimbu/table/hash-row/HashTableSortedColumn/namespace"}},f={},y=[{value:"Type parameters",id:"type-parameters",level:2}],d={toc:y};function k(e){var t,a=e,{components:r}=a,u=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},d),u),o(t,l({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"interface-hashtablehashcolumnrcv"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface HashTableHashColumn<R,C,V>")),(0,n.kt)("p",null,"A type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the ",(0,n.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/docs/collections/table"}),"Table documentation")," and the ",(0,n.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/api/rimbu/table/hash-row/HashTableHashColumn/interface"}),"HashTableHashColumn API documentation"),"  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,n.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/hash-row/HashTableHashColumn/namespace"}),"HashTableHashColumn")),(0,n.kt)("h2",m({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"R"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"the row key type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"C"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"the column key type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"the value type")))),(0,n.kt)("admonition",m({},{title:"note",type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The HashTableHashColumn uses a HashMap to map row keys to column. - The HashTableHashColumn uses HashMaps to map column keys to values."))),(0,n.kt)("admonition",m({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"const t1 = HashTableHashColumn.empty<number, string, boolean>()\nconst t2 = HashTableHashColumn.of([1, 'a', true], [2, 'a', false])\n"))))}k.isMDXComponent=!0}}]);