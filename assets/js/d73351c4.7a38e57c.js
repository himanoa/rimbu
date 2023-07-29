"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[88532],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(a),h=r,d=c["".concat(l,".").concat(h)]||c[h]||u[h]||p;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<p;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},89715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>g,frontMatter:()=>d,metadata:()=>y,toc:()=>k});var n=a(3905),r=Object.defineProperty,p=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))m.call(t,a)&&s(e,a,t[a]);return e},u=(e,t)=>p(e,i(t)),h=(e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a};const d={title:"HashMap<K,V>",slug:"/rimbu/hashed/map/HashMap/interface"},f="interface HashMap<K,V>",y={unversionedId:"rimbu_hashed/map/HashMap.interface",id:"rimbu_hashed/map/HashMap.interface",title:"HashMap<K,V>",description:"A type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the Map documentation and the HashMap API documentation",source:"@site/api/rimbu_hashed/map/HashMap.interface.mdx",sourceDirName:"rimbu_hashed/map",slug:"/rimbu/hashed/map/HashMap/interface",permalink:"/api/rimbu/hashed/map/HashMap/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"HashMap<K,V>",slug:"/rimbu/hashed/map/HashMap/interface"},sidebar:"defaultSidebar",previous:{title:"HashMap.Types",permalink:"/api/rimbu/hashed/map/HashMap/Types/interface"},next:{title:"@rimbu/hashed/map-custom",permalink:"/api/rimbu/hashed/map-custom"}},b={},k=[{value:"Type parameters",id:"type-parameters",level:2}],v={toc:k},M="wrapper";function g(e){var t=e,{components:a}=t,r=h(t,["components"]);return(0,n.kt)(M,u(c(c({},v),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"interface-hashmapkv"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface HashMap<K,V>")),(0,n.kt)("p",null,"A type-invariant immutable Map of key type K, and value type V. In the Map, each key has exactly one value, and the Map cannot contain duplicate keys. See the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/docs/collections/map"}),"Map documentation")," and the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://rimbu.org/api/rimbu/hashed/map/HashMap/interface"}),"HashMap API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/namespace"}),"HashMap")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/hashed/map-custom/HashMapEmpty/class"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashMapEmpty<K,V>")),", ",(0,n.kt)("a",c({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashMap.NonEmpty<K,V>"))),(0,n.kt)("h2",c({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"the key type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"the value type")))),(0,n.kt)("admonition",c({},{title:"note",type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"HashMap")," uses the context's ",(0,n.kt)("inlineCode",{parentName:"li"},"hasher")," instance to hash keys for performance.",(0,n.kt)("br",null)," - The ",(0,n.kt)("inlineCode",{parentName:"li"},"HashMap")," uses the context's ",(0,n.kt)("inlineCode",{parentName:"li"},"eq")," function to determine equivalence between keys."))),(0,n.kt)("admonition",c({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"const m1 = HashMap.empty<number, string>()\nconst m2 = HashMap.of([1, 'a'], [2, 'b'])\n"))))}g.isMDXComponent=!0}}]);