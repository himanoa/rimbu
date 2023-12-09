"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[47819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,y=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(y,l(l({ref:t},s),{},{components:n})):a.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>E,frontMatter:()=>y,metadata:()=>k,toc:()=>v});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))m.call(t,n)&&s(e,n,t[n]);return e},c=(e,t)=>i(e,l(t)),d=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n};const y={title:"NonEmptyBase<E>",slug:"/rimbu/collection-types/map-custom/NonEmptyBase/class"},f="abstract class NonEmptyBase<E>",k={unversionedId:"rimbu_collection-types/map-custom/NonEmptyBase.class",id:"rimbu_collection-types/map-custom/NonEmptyBase.class",title:"NonEmptyBase<E>",description:"undocumented",source:"@site/api/rimbu_collection-types/map-custom/NonEmptyBase.class.mdx",sourceDirName:"rimbu_collection-types/map-custom",slug:"/rimbu/collection-types/map-custom/NonEmptyBase/class",permalink:"/api/rimbu/collection-types/map-custom/NonEmptyBase/class",draft:!1,tags:[],version:"current",frontMatter:{title:"NonEmptyBase<E>",slug:"/rimbu/collection-types/map-custom/NonEmptyBase/class"},sidebar:"defaultSidebar",previous:{title:"KeyValue<K,V>",permalink:"/api/rimbu/collection-types/map-custom/KeyValue/interface"},next:{title:"RMapBase (namespace)",permalink:"/api/rimbu/collection-types/map-custom/RMapBase/namespace"}},b={},v=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>isEmpty</code>",id:"isempty",level:3},{value:"Definition",id:"definition",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>[Symbol.iterator]</code>",id:"symboliterator",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>asNormal</code>",id:"asnormal",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>assumeNonEmpty</code>",id:"assumenonempty",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition-5",level:4}],N={toc:v},h="wrapper";function E(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(h,c(u(u({},N),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"abstract-class-nonemptybasee"}),(0,a.kt)("inlineCode",{parentName:"h1"},"abstract class NonEmptyBase<E>")),(0,a.kt)("p",null,"undocumented"),(0,a.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"E"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"undocumented")))),(0,a.kt)("h2",u({},{id:"properties"}),"Properties"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"isempty"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isEmpty")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"get isEmpty(): false;")))),(0,a.kt)("h2",u({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"symboliterator"}),(0,a.kt)("inlineCode",{parentName:"h3"},"[Symbol.iterator]")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[Symbol.iterator](): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/FastIterator/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"FastIterator")),(0,a.kt)("inlineCode",{parentName:"p"},"<E>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"asnormal"}),(0,a.kt)("inlineCode",{parentName:"h3"},"asNormal")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"asNormal(): any;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"assumenonempty"}),(0,a.kt)("inlineCode",{parentName:"h3"},"assumeNonEmpty")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"assumeNonEmpty(): this;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"nonempty"}),(0,a.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nonEmpty(): true;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"stream"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stream")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-5"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"abstract stream(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/Stream/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<E>;")))))}E.isMDXComponent=!0}}]);