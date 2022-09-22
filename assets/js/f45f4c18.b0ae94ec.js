"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[83239],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},27946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>y,frontMatter:()=>u,metadata:()=>f,toc:()=>O});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&l(e,r,t[r]);if(d)for(var r of d(t))s.call(t,r)&&l(e,r,t[r]);return e};const u={title:"OrderedHashSet<T>",slug:"/rimbu/ordered/OrderedHashSet/interface"},m="interface OrderedHashSet<T>",f={unversionedId:"rimbu_ordered/OrderedHashSet.interface",id:"rimbu_ordered/OrderedHashSet.interface",title:"OrderedHashSet<T>",description:"A type-invariant immutable Ordered HashSet of value type T. In the Set, there are no duplicate values. See the Set documentation and the OrderedHashSet API documentation",source:"@site/api/rimbu_ordered/OrderedHashSet.interface.mdx",sourceDirName:"rimbu_ordered",slug:"/rimbu/ordered/OrderedHashSet/interface",permalink:"/api/rimbu/ordered/OrderedHashSet/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedHashSet<T>",slug:"/rimbu/ordered/OrderedHashSet/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedHashSet.Types",permalink:"/api/rimbu/ordered/OrderedHashSet/Types/interface"},next:{title:"OrderedMap (namespace)",permalink:"/api/rimbu/ordered/OrderedMap/namespace"}},h={},O=[{value:"Type parameters",id:"type-parameters",level:2}],b={toc:O};function y(e){var t,r=e,{components:n}=r,l=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=c(c({},b),l),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"interface-orderedhashsett"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface OrderedHashSet<T>")),(0,a.kt)("p",null,"A type-invariant immutable Ordered HashSet of value type T. In the Set, there are no duplicate values. See the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/set"}),"Set documentation")," and the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/ordered/set/OrderedHashSet/interface"}),"OrderedHashSet API documentation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,a.kt)("a",c({parentName:"p"},{href:"/api/rimbu/ordered/OrderedHashSet/namespace"}),"OrderedHashSet")),(0,a.kt)("h2",c({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"the value type")))),(0,a.kt)("admonition",c({},{title:"note",type:"note"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The OrderedHashSet keeps the insertion order of values, thus iterators and stream will also reflect this order. - The OrderedHashSet wraps around a HashSet instance, thus has the same time complexity as the HashSet. - The OrderedHashSet keeps the key insertion order in a List, thus its space complexity is higher than a regular HashSet."))),(0,a.kt)("admonition",c({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"const s1 = OrderedHashSet.empty<string>()\nconst s2 = OrderedHashSet.of('a', 'b', 'c')\n"))))}y.isMDXComponent=!0}}]);