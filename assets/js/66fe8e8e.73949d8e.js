"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[19293],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,y=d["".concat(c,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(y,o(o({ref:t},s),{},{components:a})):n.createElement(y,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31993:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>y,toc:()=>k});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&s(e,a,t[a]);if(i)for(var a of i(t))p.call(t,a)&&s(e,a,t[a]);return e};const d={id:"collections",sidebar_position:3,slug:"."},u="Immutable collections",y={unversionedId:"collections/collections",id:"collections/collections",title:"Immutable collections",description:"Here is a brief overview of the basic Rimbu TypeScript immutable collection types. Many of these types have multiple concrete implementations, see the corresponding links for more information:",source:"@site/docs/collections/collections.mdx",sourceDirName:"collections",slug:"/collections/",permalink:"/docs/collections/",draft:!1,editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/collections/collections.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"collections",sidebar_position:3,slug:"."},sidebar:"sidebar",previous:{title:"Basic Concepts",permalink:"/docs/basic-concepts"},next:{title:"Overview",permalink:"/docs/collections/graph"}},b={},k=[{value:"Single-typed base collections",id:"single-typed-base-collections",level:2},{value:"Two-typed base collections",id:"two-typed-base-collections",level:2},{value:"Three-typed base collections",id:"three-typed-base-collections",level:2}],f={toc:k};function h(e){var t,a=e,{components:r}=a,s=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},f),s),l(t,o({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"immutable-collections"}),"Immutable collections"),(0,n.kt)("p",null,"Here is a brief overview of the basic Rimbu TypeScript immutable collection types. Many of these types have multiple concrete implementations, see the corresponding links for more information:"),(0,n.kt)("h2",m({},{id:"single-typed-base-collections"}),"Single-typed base collections"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"collections/stream"}),(0,n.kt)("inlineCode",{parentName:"a"},"Stream<T>"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"an Iterable-like structure that represents a source that can produce values of type T when requested")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"collections/list"}),(0,n.kt)("inlineCode",{parentName:"a"},"List<T>"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"an immutable ordered sequence of elements of type T that can be manipulated and accessed randomly in a relatively efficient way")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"collections/set"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSet<T>"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"a Set collection with values of type T, where the collection does not contain duplicate values")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"collections/multiset"}),(0,n.kt)("inlineCode",{parentName:"a"},"MultiSet<T>"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"a Set-like structure where each unique element of type T can be added multiple times, and its count is stored")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"collections/graph"}),(0,n.kt)("inlineCode",{parentName:"a"},"Graph<N>"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"a collection of nodes of type N that can be connected through edges")))),(0,n.kt)("h2",m({},{id:"two-typed-base-collections"}),"Two-typed base collections"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"collections/map"}),(0,n.kt)("inlineCode",{parentName:"a"},"RMap<K, V>"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"a Map collection with entries containing keys of type K and values of type V. Each key has exactly one value, and each key is unique")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"collections/multimap"}),(0,n.kt)("inlineCode",{parentName:"a"},"MultiMap<K, V>"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"a Map-like structure in which each key of type K has one or more values of type V. For each key, it's associated values are unique")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"collections/bimap"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMap<K, V>"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"a bidirectional Map of keys of type K and values of type V, where each key has exactly one value, and each value has exactly one key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"collections/bimultimap"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMultiMap<K, V>"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"a bidirectional MultiMap of keys of type K and values of type V, where each key-value association also has an inverse value-key association")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"collections/graph"}),(0,n.kt)("inlineCode",{parentName:"a"},"ValuedGraph<N, V>"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"a collection of nodes of type N that can be connected through edges with values of type V")))),(0,n.kt)("h2",m({},{id:"three-typed-base-collections"}),"Three-typed base collections"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"collections/table"}),(0,n.kt)("inlineCode",{parentName:"a"},"Table<R, C, V>"))),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"an immutable 2-dimensional Map, containing row keys of type R and column keys of type C, where a combination of a row and column key can contain one value of type V")))))}h.isMDXComponent=!0}}]);