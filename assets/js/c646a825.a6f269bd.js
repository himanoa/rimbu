"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[40461],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(f,d(d({ref:t},c),{},{components:r})):n.createElement(f,d({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,d=new Array(o);d[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,d[1]=i;for(var l=2;l<o;l++)d[l]=r[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>S,contentTitle:()=>m,default:()=>y,frontMatter:()=>u,metadata:()=>f,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&c(e,r,t[r]);return e};const u={title:"OrderedSortedSet<T>",slug:"/rimbu/ordered/set/OrderedSortedSet/interface"},m="interface OrderedSortedSet<T>",f={unversionedId:"rimbu_ordered/set/OrderedSortedSet.interface",id:"rimbu_ordered/set/OrderedSortedSet.interface",title:"OrderedSortedSet<T>",description:"A type-invariant immutable Ordered SortedSet of value type T. In the Set, there are no duplicate values. See the Set documentation and the OrderedSortedSet API documentation",source:"@site/api/rimbu_ordered/set/OrderedSortedSet.interface.mdx",sourceDirName:"rimbu_ordered/set",slug:"/rimbu/ordered/set/OrderedSortedSet/interface",permalink:"/api/rimbu/ordered/set/OrderedSortedSet/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedSortedSet<T>",slug:"/rimbu/ordered/set/OrderedSortedSet/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedSortedSet.Types",permalink:"/api/rimbu/ordered/set/OrderedSortedSet/Types/interface"},next:{title:"@rimbu/ordered/set-custom",permalink:"/api/rimbu/ordered/set-custom"}},S={},b=[{value:"Type parameters",id:"type-parameters",level:2}],O={toc:b};function y(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},O),c),o(t,d({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"interface-orderedsortedsett"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface OrderedSortedSet<T>")),(0,n.kt)("p",null,"A type-invariant immutable Ordered SortedSet of value type T. In the Set, there are no duplicate values. See the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://rimbu.org/api/rimbu/ordered/set/OrderedSortedSet/interface"}),"OrderedSortedSet API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/set/OrderedSortedSet/namespace"}),"OrderedSortedSet")),(0,n.kt)("h2",s({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the value type")))),(0,n.kt)("admonition",s({},{title:"note",type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The OrderedSortedSet keeps the insertion order of values, thus iterators and stream will also reflect this order. - The OrderedSortedSet wraps around a SortedSet instance, thus has the same time complexity as the SortedSet. - The OrderedSortedSet keeps the key insertion order in a List, thus its space complexity is higher than a regular SortedSet."))),(0,n.kt)("admonition",s({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const s1 = OrderedSortedSet.empty<string>()\nconst s2 = OrderedSortedSet.of('a', 'b', 'c')\n"))))}y.isMDXComponent=!0}}]);