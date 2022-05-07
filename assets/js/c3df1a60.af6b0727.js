"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[46748],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,f=d["".concat(u,".").concat(c)]||d[c]||s[c]||a;return n?i.createElement(f,l(l({ref:t},m),{},{components:n})):i.createElement(f,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35445:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return y}});var i=n(3905),r=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&m(e,n,t[n]);return e};const d={title:"MultiSetBase.Types",slug:"/rimbu/multiset/custom/MultiSetBase/Types/interface"},c="interface MultiSetBase.Types",f={unversionedId:"rimbu_multiset/custom/MultiSetBase/Types.interface",id:"rimbu_multiset/custom/MultiSetBase/Types.interface",title:"MultiSetBase.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_multiset/custom/MultiSetBase/Types.interface.mdx",sourceDirName:"rimbu_multiset/custom/MultiSetBase",slug:"/rimbu/multiset/custom/MultiSetBase/Types/interface",permalink:"/api/rimbu/multiset/custom/MultiSetBase/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"MultiSetBase.Types",slug:"/rimbu/multiset/custom/MultiSetBase/Types/interface"},sidebar:"defaultSidebar",previous:{title:"MultiSetBase.NonEmpty<T,Tp>",permalink:"/api/rimbu/multiset/custom/MultiSetBase/NonEmpty/interface"},next:{title:"MultiSetBase<T,Tp>",permalink:"/api/rimbu/multiset/custom/MultiSetBase/interface"}},k={},y=[{value:"Properties",id:"properties",level:2},{value:"<code>_T</code>",id:"_t",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>countMap</code>",id:"countmap",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>countMapContext</code>",id:"countmapcontext",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>countMapNonEmpty</code>",id:"countmapnonempty",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Overrides",id:"overrides-4",level:4}],v={toc:y};function h(e){var t,n=e,{components:r}=n,m=((e,t)=>{var n={};for(var i in e)u.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=s(s({},v),m),a(t,l({components:r,mdxType:"MDXLayout"}))),(0,i.kt)("h1",s({},{id:"interface-multisetbasetypes"}),(0,i.kt)("inlineCode",{parentName:"h1"},"interface MultiSetBase.Types")),(0,i.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Extends:")," ",(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/multiset/custom/VariantMultiSetBase/Types/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"VariantMultiSetBase.Types"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/multiset/HashMultiSet/Types/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashMultiSet.Types")),", ",(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/multiset/custom/ContextImplTypes/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"ContextImplTypes")),", ",(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/multiset/SortedMultiSet/Types/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMultiSet.Types")),", ",(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/multiset/MultiSet/Types/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"MultiSet.Types"))),(0,i.kt)("h2",s({},{id:"properties"}),"Properties"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"_t"}),(0,i.kt)("inlineCode",{parentName:"h3"},"_T")),(0,i.kt)("p",null,"The element type.")),(0,i.kt)("h4",s({},{id:"definition"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly _T: T;"))),(0,i.kt)("h4",s({},{id:"overrides"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/Elem/interface#_T"}),"Elem._T"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"builder"}),(0,i.kt)("inlineCode",{parentName:"h3"},"builder")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-1"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/multiset/custom/MultiSetBase/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"MultiSetBase.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"context"}),(0,i.kt)("inlineCode",{parentName:"h3"},"context")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-2"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/multiset/custom/MultiSetBase/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"MultiSetBase.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"countmap"}),(0,i.kt)("inlineCode",{parentName:"h3"},"countMap")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-3"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly countMap: "),(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RMap")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_T'], number>;"))),(0,i.kt)("h4",s({},{id:"overrides-1"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/multiset/custom/VariantMultiSetBase/Types/interface#countMap"}),"Types.countMap"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"countmapcontext"}),(0,i.kt)("inlineCode",{parentName:"h3"},"countMapContext")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-4"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly countMapContext: "),(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"countmapnonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"countMapNonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-5"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly countMapNonEmpty: "),(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RMap.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_T'], number>;"))),(0,i.kt)("h4",s({},{id:"overrides-2"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/multiset/custom/VariantMultiSetBase/Types/interface#countMapNonEmpty"}),"Types.countMapNonEmpty"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"nonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-6"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/multiset/custom/MultiSetBase/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"MultiSetBase.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,i.kt)("h4",s({},{id:"overrides-3"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/multiset/custom/VariantMultiSetBase/Types/interface#nonEmpty"}),"Types.nonEmpty"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"normal"}),(0,i.kt)("inlineCode",{parentName:"h3"},"normal")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-7"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/multiset/custom/MultiSetBase/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"MultiSetBase")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,i.kt)("h4",s({},{id:"overrides-4"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/multiset/custom/VariantMultiSetBase/Types/interface#normal"}),"Types.normal"))))}h.isMDXComponent=!0}}]);