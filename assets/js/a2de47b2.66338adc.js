"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[81856],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58355:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const m={title:"VariantMapBase.Types",slug:"/rimbu/collection-types/map-custom/VariantMapBase/Types/interface"},d="interface VariantMapBase.Types",f={unversionedId:"rimbu_collection-types/map-custom/VariantMapBase/Types.interface",id:"rimbu_collection-types/map-custom/VariantMapBase/Types.interface",title:"VariantMapBase.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_collection-types/map-custom/VariantMapBase/Types.interface.mdx",sourceDirName:"rimbu_collection-types/map-custom/VariantMapBase",slug:"/rimbu/collection-types/map-custom/VariantMapBase/Types/interface",permalink:"/api/rimbu/collection-types/map-custom/VariantMapBase/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"VariantMapBase.Types",slug:"/rimbu/collection-types/map-custom/VariantMapBase/Types/interface"},sidebar:"defaultSidebar",previous:{title:"VariantMapBase.NonEmpty<K,V,Tp>",permalink:"/api/rimbu/collection-types/map-custom/VariantMapBase/NonEmpty/interface"},next:{title:"VariantMapBase<K,V,Tp>",permalink:"/api/rimbu/collection-types/map-custom/VariantMapBase/interface"}},y={},k=[{value:"Properties",id:"properties",level:2},{value:"<code>_K</code>",id:"_k",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>_V</code>",id:"_v",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-3",level:4}],v={toc:k};function b(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},v),u),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"interface-variantmapbasetypes"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface VariantMapBase.Types")),(0,r.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/KeyValue/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"KeyValue<K,V>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/map/VariantMap/Types/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMap.Types")),", ",(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/RMapBase/Types/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RMapBase.Types"))),(0,r.kt)("h2",s({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"_k"}),(0,r.kt)("inlineCode",{parentName:"h3"},"_K")),(0,r.kt)("p",null,"The key type.")),(0,r.kt)("h4",s({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly _K: K;"))),(0,r.kt)("h4",s({},{id:"overrides"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/KeyValue/interface#_K"}),"KeyValue._K"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"_v"}),(0,r.kt)("inlineCode",{parentName:"h3"},"_V")),(0,r.kt)("p",null,"The value type.")),(0,r.kt)("h4",s({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly _V: V;"))),(0,r.kt)("h4",s({},{id:"overrides-1"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/KeyValue/interface#_V"}),"KeyValue._V"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"nonempty"}),(0,r.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",s({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/VariantMapBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMapBase.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"normal"}),(0,r.kt)("inlineCode",{parentName:"h3"},"normal")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",s({},{id:"definition-3"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/VariantMapBase/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMapBase")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))))}b.isMDXComponent=!0}}]);