"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[20831],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),l=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(r),u=n,y=c["".concat(d,".").concat(u)]||c[u]||m[u]||o;return r?a.createElement(y,i(i({ref:t},s),{},{components:r})):a.createElement(y,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},87208:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>O,frontMatter:()=>c,metadata:()=>y,toc:()=>f});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&s(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&s(e,r,t[r]);return e};const c={title:"OrderedHashMap.NonEmpty<K,V>",slug:"/rimbu/ordered/OrderedHashMap/NonEmpty/interface"},u="interface OrderedHashMap.NonEmpty<K,V>",y={unversionedId:"rimbu_ordered/OrderedHashMap/NonEmpty.interface",id:"rimbu_ordered/OrderedHashMap/NonEmpty.interface",title:"OrderedHashMap.NonEmpty<K,V>",description:"A non-empty type-invariant immutable Ordered HashMap of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the Map documentation and the OrderedHashMap API documentation",source:"@site/api/rimbu_ordered/OrderedHashMap/NonEmpty.interface.mdx",sourceDirName:"rimbu_ordered/OrderedHashMap",slug:"/rimbu/ordered/OrderedHashMap/NonEmpty/interface",permalink:"/api/rimbu/ordered/OrderedHashMap/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedHashMap.NonEmpty<K,V>",slug:"/rimbu/ordered/OrderedHashMap/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedHashMap.Context<UK>",permalink:"/api/rimbu/ordered/OrderedHashMap/Context/interface"},next:{title:"OrderedHashMap.Types",permalink:"/api/rimbu/ordered/OrderedHashMap/Types/interface"}},h={},f=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition",level:4}],b={toc:f};function O(e){var t,r=e,{components:n}=r,s=((e,t)=>{var r={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=m(m({},b),s),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"interface-orderedhashmapnonemptykv"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface OrderedHashMap.NonEmpty<K,V>")),(0,a.kt)("p",null,"A non-empty type-invariant immutable Ordered HashMap of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://rimbu.org/api/rimbu/ordered/map/OrderedHashMap/interface"}),"OrderedHashMap API documentation"),"  "),(0,a.kt)("h2",m({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"K"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"the key type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"V"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"the value type")))),(0,a.kt)("admonition",m({},{title:"note",type:"note"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The OrderedHashMap keeps maintains the insertion order of elements, thus iterators and streams will also reflect this order. - The OrderedHashMap wraps around a HashMap instance, thus has mostly the same time complexity as the HashMap. - The OrderedHashMap keeps the key insertion order in a List, thus its space complexity is higher than a regular HashMap."))),(0,a.kt)("admonition",m({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"const m1 = OrderedHashMap.empty<number, string>()\nconst m2 = OrderedHashMap.of([1, 'a'], [2, 'b'])\n"))),(0,a.kt)("h2",m({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"stream"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stream")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",m({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stream(): "),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/Stream/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>;")))))}O.isMDXComponent=!0}}]);