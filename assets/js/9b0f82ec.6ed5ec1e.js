"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[61235],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=l,k=m["".concat(d,".").concat(c)]||m[c]||p[c]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41587:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return f}});var a=n(3905),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&s(e,n,t[n]);return e};const m={title:"HashSetCollisionBuilder<T>",slug:"/rimbu/hashed/set-custom/HashSetCollisionBuilder/class"},c="class HashSetCollisionBuilder<T>",k={unversionedId:"rimbu_hashed/set-custom/HashSetCollisionBuilder.class",id:"rimbu_hashed/set-custom/HashSetCollisionBuilder.class",title:"HashSetCollisionBuilder<T>",description:"undocumented",source:"@site/api/rimbu_hashed/set-custom/HashSetCollisionBuilder.class.mdx",sourceDirName:"rimbu_hashed/set-custom",slug:"/rimbu/hashed/set-custom/HashSetCollisionBuilder/class",permalink:"/api/rimbu/hashed/set-custom/HashSetCollisionBuilder/class",draft:!1,tags:[],version:"current",frontMatter:{title:"HashSetCollisionBuilder<T>",slug:"/rimbu/hashed/set-custom/HashSetCollisionBuilder/class"},sidebar:"defaultSidebar",previous:{title:"HashSetCollision<T>",permalink:"/api/rimbu/hashed/set-custom/HashSetCollision/class"},next:{title:"HashSetContext<UT>",permalink:"/api/rimbu/hashed/set-custom/HashSetContext/class"}},h={},f=[{value:"Type parameters",id:"type-parameters",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>_entries</code>",id:"_entries",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>source</code>",id:"source",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>addInternal</code>",id:"addinternal",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>buildNE</code>",id:"buildne",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>hasInternal</code>",id:"hasinternal",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>removeInternal</code>",id:"removeinternal",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Parameters",id:"parameters-2",level:4}],N={toc:f};function b(e){var t,n=e,{components:l}=n,s=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},N),s),r(t,i({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h1",p({},{id:"class-hashsetcollisionbuildert"}),(0,a.kt)("inlineCode",{parentName:"h1"},"class HashSetCollisionBuilder<T>")),(0,a.kt)("p",null,"undocumented"),(0,a.kt)("h3",p({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"undocumented")))),(0,a.kt)("h2",p({},{id:"properties"}),"Properties"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",p({},{id:"_entries"}),(0,a.kt)("inlineCode",{parentName:"h3"},"_entries")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",p({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"_entries?: "),(0,a.kt)("a",p({parentName:"p"},{href:"/api/rimbu/list/List/Builder/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"List.Builder")),(0,a.kt)("inlineCode",{parentName:"p"},"<T> "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",p({},{id:"context"}),(0,a.kt)("inlineCode",{parentName:"h3"},"context")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",p({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,a.kt)("a",p({parentName:"p"},{href:"/api/rimbu/hashed/set-custom/HashSetContext/class"}),(0,a.kt)("inlineCode",{parentName:"a"},"HashSetContext")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",p({},{id:"source"}),(0,a.kt)("inlineCode",{parentName:"h3"},"source")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",p({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"source?: "),(0,a.kt)("a",p({parentName:"p"},{href:"/api/rimbu/hashed/set-custom/HashSetCollision/class"}),(0,a.kt)("inlineCode",{parentName:"a"},"HashSetCollision")),(0,a.kt)("inlineCode",{parentName:"p"},"<T> "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;")))),(0,a.kt)("h2",p({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",p({},{id:"addinternal"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addInternal")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",p({},{id:"definition-3"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"addInternal(value: T): boolean;"))),(0,a.kt)("h4",p({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"value")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",p({},{id:"buildne"}),(0,a.kt)("inlineCode",{parentName:"h3"},"buildNE")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",p({},{id:"definition-4"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"buildNE(): "),(0,a.kt)("a",p({parentName:"p"},{href:"/api/rimbu/hashed/set-custom/HashSetCollision/class"}),(0,a.kt)("inlineCode",{parentName:"a"},"HashSetCollision")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",p({},{id:"hasinternal"}),(0,a.kt)("inlineCode",{parentName:"h3"},"hasInternal")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",p({},{id:"definition-5"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hasInternal(value: T, hash?: number): boolean;"))),(0,a.kt)("h4",p({},{id:"parameters-1"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"value")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"hash")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",p({},{id:"removeinternal"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeInternal")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",p({},{id:"definition-6"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"removeInternal(value: T): boolean;"))),(0,a.kt)("h4",p({},{id:"parameters-2"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"value")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))))}b.isMDXComponent=!0}}]);