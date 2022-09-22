"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[10016],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(d,".").concat(m)]||c[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>b,frontMatter:()=>c,metadata:()=>f,toc:()=>h});var r=n(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e};const c={title:"OrderedHashSet.Types",slug:"/rimbu/ordered/set/OrderedHashSet/Types/interface"},m="interface OrderedHashSet.Types",f={unversionedId:"rimbu_ordered/set/OrderedHashSet/Types.interface",id:"rimbu_ordered/set/OrderedHashSet/Types.interface",title:"OrderedHashSet.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_ordered/set/OrderedHashSet/Types.interface.mdx",sourceDirName:"rimbu_ordered/set/OrderedHashSet",slug:"/rimbu/ordered/set/OrderedHashSet/Types/interface",permalink:"/api/rimbu/ordered/set/OrderedHashSet/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedHashSet.Types",slug:"/rimbu/ordered/set/OrderedHashSet/Types/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedHashSet.NonEmpty<T>",permalink:"/api/rimbu/ordered/set/OrderedHashSet/NonEmpty/interface"},next:{title:"OrderedHashSet<T>",permalink:"/api/rimbu/ordered/set/OrderedHashSet/interface"}},k={},h=[{value:"Properties",id:"properties",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>sourceContext</code>",id:"sourcecontext",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>sourceSet</code>",id:"sourceset",level:3},{value:"Definition",id:"definition-5",level:4},{value:"<code>sourceSetNonEmpty</code>",id:"sourcesetnonempty",level:3},{value:"Definition",id:"definition-6",level:4}],y={toc:h};function b(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},y),u),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"interface-orderedhashsettypes"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface OrderedHashSet.Types")),(0,r.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,r.kt)("h2",s({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"builder"}),(0,r.kt)("inlineCode",{parentName:"h3"},"builder")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",s({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/OrderedHashSet/Builder/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedHashSet.Builder")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"context"}),(0,r.kt)("inlineCode",{parentName:"h3"},"context")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",s({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/OrderedHashSet/Context/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedHashSet.Context")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"nonempty"}),(0,r.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",s({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/OrderedHashSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedHashSet.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"normal"}),(0,r.kt)("inlineCode",{parentName:"h3"},"normal")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",s({},{id:"definition-3"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/OrderedHashSet/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedHashSet")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"sourcecontext"}),(0,r.kt)("inlineCode",{parentName:"h3"},"sourceContext")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",s({},{id:"definition-4"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly sourceContext: "),(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/Context/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashSet.Context")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"sourceset"}),(0,r.kt)("inlineCode",{parentName:"h3"},"sourceSet")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",s({},{id:"definition-5"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly sourceSet: "),(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashSet")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"sourcesetnonempty"}),(0,r.kt)("inlineCode",{parentName:"h3"},"sourceSetNonEmpty")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",s({},{id:"definition-6"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly sourceSetNonEmpty: "),(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashSet.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))))}b.isMDXComponent=!0}}]);