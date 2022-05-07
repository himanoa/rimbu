"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[37845],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return s}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),m=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(a),s=n,h=c["".concat(u,".").concat(s)]||c[s]||b[s]||o;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},75580:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return f}});var r=a(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&p(e,a,t[a]);if(i)for(var a of i(t))m.call(t,a)&&p(e,a,t[a]);return e};const c={title:"@rimbu/table/hash-row",slug:"/rimbu/table/hash-row"},s="package @rimbu/table/hash-row",h={unversionedId:"rimbu_table/hash-row/index",id:"rimbu_table/hash-row/index",title:"@rimbu/table/hash-row",description:"The @rimbu/table/hash-row package provides tables with hashed row key implementations.",source:"@site/api/rimbu_table/hash-row/index.mdx",sourceDirName:"rimbu_table/hash-row",slug:"/rimbu/table/hash-row",permalink:"/api/rimbu/table/hash-row",draft:!1,tags:[],version:"current",frontMatter:{title:"@rimbu/table/hash-row",slug:"/rimbu/table/hash-row"},sidebar:"defaultSidebar",previous:{title:"VariantTableBase<R,C,V,Tp>",permalink:"/api/rimbu/table/custom/VariantTableBase/interface"},next:{title:"HashTableHashColumn (namespace)",permalink:"/api/rimbu/table/hash-row/HashTableHashColumn/namespace"}},d={},f=[{value:"Interfaces",id:"interfaces",level:2},{value:"Namespaces",id:"namespaces",level:2}],y={toc:f};function k(e){var t,a=e,{components:n}=a,p=((e,t)=>{var a={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=b(b({},y),p),o(t,l({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",b({},{id:"package-rimbutablehash-row"}),(0,r.kt)("inlineCode",{parentName:"h1"},"package @rimbu/table/hash-row")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@rimbu/table/hash-row")," package provides tables with hashed row key implementations."),(0,r.kt)("p",null," See the ",(0,r.kt)("a",b({parentName:"p"},{href:"/docs/collections/table"}),"Rimbu docs Table page")," for more information."),(0,r.kt)("h2",b({},{id:"interfaces"}),"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",b({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("a",b({parentName:"td"},{href:"/api/rimbu/table/hash-row/HashTableHashColumn/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashTableHashColumn<R,C,V>"))),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"A type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the ",(0,r.kt)("a",b({parentName:"td"},{href:"https://rimbu.org/docs/collections/table"}),"Table documentation")," and the ",(0,r.kt)("a",b({parentName:"td"},{href:"https://rimbu.org/api/rimbu/table/hash-row/HashTableHashColumn/interface"}),"HashTableHashColumn API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("a",b({parentName:"td"},{href:"/api/rimbu/table/hash-row/HashTableSortedColumn/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashTableSortedColumn<R,C,V>"))),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"A type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the ",(0,r.kt)("a",b({parentName:"td"},{href:"https://rimbu.org/docs/collections/table"}),"Table documentation")," and the ",(0,r.kt)("a",b({parentName:"td"},{href:"https://rimbu.org/api/rimbu/table/hash-row/HashTableSortedColumn/interface"}),"HashTableSortedColumn API documentation"))))),(0,r.kt)("h2",b({},{id:"namespaces"}),"Namespaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",b({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("a",b({parentName:"td"},{href:"/api/rimbu/table/hash-row/HashTableHashColumn/namespace"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashTableHashColumn"))),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"A type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the ",(0,r.kt)("a",b({parentName:"td"},{href:"https://rimbu.org/docs/collections/table"}),"Table documentation")," and the ",(0,r.kt)("a",b({parentName:"td"},{href:"https://rimbu.org/api/rimbu/table/hash-row/HashTableHashColumn/interface"}),"HashTableHashColumn API documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("a",b({parentName:"td"},{href:"/api/rimbu/table/hash-row/HashTableSortedColumn/namespace"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashTableSortedColumn"))),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"A type-invariant immutable Table of row key type R, column key type C, and value type V. In the Table, a combination of a row and column key has exactly one value. See the ",(0,r.kt)("a",b({parentName:"td"},{href:"https://rimbu.org/docs/collections/table"}),"Table documentation")," and the ",(0,r.kt)("a",b({parentName:"td"},{href:"https://rimbu.org/api/rimbu/table/hash-row/HashTableSortedColumn/interface"}),"HashTableSortedColumn API documentation"))))))}k.isMDXComponent=!0}}]);