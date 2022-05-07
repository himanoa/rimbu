"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[20911],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86676:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return k}});var r=n(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e};const d={title:"RSetBase.Types",slug:"/rimbu/collection-types/set-custom/RSetBase/Types/interface"},m="interface RSetBase.Types",f={unversionedId:"rimbu_collection-types/set-custom/RSetBase/Types.interface",id:"rimbu_collection-types/set-custom/RSetBase/Types.interface",title:"RSetBase.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_collection-types/set-custom/RSetBase/Types.interface.mdx",sourceDirName:"rimbu_collection-types/set-custom/RSetBase",slug:"/rimbu/collection-types/set-custom/RSetBase/Types/interface",permalink:"/api/rimbu/collection-types/set-custom/RSetBase/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"RSetBase.Types",slug:"/rimbu/collection-types/set-custom/RSetBase/Types/interface"},sidebar:"defaultSidebar",previous:{title:"RSetBase.NonEmpty<T,Tp>",permalink:"/api/rimbu/collection-types/set-custom/RSetBase/NonEmpty/interface"},next:{title:"RSetBase<T,Tp>",permalink:"/api/rimbu/collection-types/set-custom/RSetBase/interface"}},y={},k=[{value:"Properties",id:"properties",level:2},{value:"<code>_T</code>",id:"_t",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-2",level:4}],v={toc:k};function b(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},v),c),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"interface-rsetbasetypes"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface RSetBase.Types")),(0,r.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/VariantSetBase/Types/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantSetBase.Types"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Types/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RSet.Types")),", ",(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Types/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedSetBase.Types")),", ",(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/Types/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashSet.Types"))),(0,r.kt)("h2",u({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"_t"}),(0,r.kt)("inlineCode",{parentName:"h3"},"_T")),(0,r.kt)("p",null,"The element type.")),(0,r.kt)("h4",u({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly _T: T;"))),(0,r.kt)("h4",u({},{id:"overrides"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/Elem/interface#_T"}),"Elem._T"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"builder"}),(0,r.kt)("inlineCode",{parentName:"h3"},"builder")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Builder/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RSetBase.Builder")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"context"}),(0,r.kt)("inlineCode",{parentName:"h3"},"context")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Context/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RSetBase.Context")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"nonempty"}),(0,r.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RSetBase.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,r.kt)("h4",u({},{id:"overrides-1"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/VariantSetBase/Types/interface#nonEmpty"}),"Types.nonEmpty"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",u({},{id:"normal"}),(0,r.kt)("inlineCode",{parentName:"h3"},"normal")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RSetBase")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,r.kt)("h4",u({},{id:"overrides-2"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/VariantSetBase/Types/interface#normal"}),"Types.normal"))))}b.isMDXComponent=!0}}]);