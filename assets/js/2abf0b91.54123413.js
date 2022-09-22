"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[44915],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>k});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(i),k=a,c=s["".concat(o,".").concat(k)]||s[k]||d[k]||l;return i?n.createElement(c,r(r({ref:t},m),{},{components:i})):n.createElement(c,r({ref:t},m))}));function k(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var u=2;u<l;u++)r[u]=i[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}s.displayName="MDXCreateElement"},87714:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>M,frontMatter:()=>s,metadata:()=>c,toc:()=>f});var n=i(3905),a=Object.defineProperty,l=Object.defineProperties,r=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,i)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,d=(e,t)=>{for(var i in t||(t={}))o.call(t,i)&&m(e,i,t[i]);if(p)for(var i of p(t))u.call(t,i)&&m(e,i,t[i]);return e};const s={title:"MultiMapBase.Types",slug:"/rimbu/multimap/custom/MultiMapBase/Types/interface"},k="interface MultiMapBase.Types",c={unversionedId:"rimbu_multimap/custom/MultiMapBase/Types.interface",id:"rimbu_multimap/custom/MultiMapBase/Types.interface",title:"MultiMapBase.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_multimap/custom/MultiMapBase/Types.interface.mdx",sourceDirName:"rimbu_multimap/custom/MultiMapBase",slug:"/rimbu/multimap/custom/MultiMapBase/Types/interface",permalink:"/api/rimbu/multimap/custom/MultiMapBase/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"MultiMapBase.Types",slug:"/rimbu/multimap/custom/MultiMapBase/Types/interface"},sidebar:"defaultSidebar",previous:{title:"MultiMapBase.NonEmpty<K,V,Tp>",permalink:"/api/rimbu/multimap/custom/MultiMapBase/NonEmpty/interface"},next:{title:"MultiMapBase<K,V,Tp>",permalink:"/api/rimbu/multimap/custom/MultiMapBase/interface"}},y={},f=[{value:"Properties",id:"properties",level:2},{value:"<code>_K</code>",id:"_k",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>_V</code>",id:"_v",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>keyMap</code>",id:"keymap",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>keyMapContext</code>",id:"keymapcontext",level:3},{value:"Definition",id:"definition-5",level:4},{value:"<code>keyMapNonEmpty</code>",id:"keymapnonempty",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>keyMapValues</code>",id:"keymapvalues",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"<code>keyMapValuesContext</code>",id:"keymapvaluescontext",level:3},{value:"Definition",id:"definition-8",level:4},{value:"<code>keyMapValuesNonEmpty</code>",id:"keymapvaluesnonempty",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-11",level:4},{value:"Overrides",id:"overrides-7",level:4}],v={toc:f};function M(e){var t,i=e,{components:a}=i,m=((e,t)=>{var i={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(i[n]=e[n]);return i})(i,["components"]);return(0,n.kt)("wrapper",(t=d(d({},v),m),l(t,r({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"interface-multimapbasetypes"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface MultiMapBase.Types")),(0,n.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/VariantMultiMapBase/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"VariantMultiMapBase.Types"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/HashMultiMapHashValue/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashMultiMapHashValue.Types")),", ",(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/SortedMultiMapSortedValue/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMultiMapSortedValue.Types")),", ",(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/ContextImplTypes/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"ContextImplTypes")),", ",(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/MultiMap/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"MultiMap.Types")),", ",(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/SortedMultiMapHashValue/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedMultiMapHashValue.Types")),", ",(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/HashMultiMapSortedValue/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"HashMultiMapSortedValue.Types"))),(0,n.kt)("h2",d({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"_k"}),(0,n.kt)("inlineCode",{parentName:"h3"},"_K")),(0,n.kt)("p",null,"The key type.")),(0,n.kt)("h4",d({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly _K: K;"))),(0,n.kt)("h4",d({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/KeyValue/interface#_K"}),"KeyValue._K"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"_v"}),(0,n.kt)("inlineCode",{parentName:"h3"},"_V")),(0,n.kt)("p",null,"The value type.")),(0,n.kt)("h4",d({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly _V: V;"))),(0,n.kt)("h4",d({},{id:"overrides-1"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/KeyValue/interface#_V"}),"KeyValue._V"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"builder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"builder")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",d({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/MultiMapBase/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"MultiMapBase.Builder")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"context"}),(0,n.kt)("inlineCode",{parentName:"h3"},"context")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",d({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/MultiMapBase/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"MultiMapBase.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"keymap"}),(0,n.kt)("inlineCode",{parentName:"h3"},"keyMap")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",d({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly keyMap: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RMap")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_K'], "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSet.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_V']>>;"))),(0,n.kt)("h4",d({},{id:"overrides-2"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/VariantMultiMapBase/Types/interface#keyMap"}),"Types.keyMap"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"keymapcontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"keyMapContext")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",d({},{id:"definition-5"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly keyMapContext: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_K']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"keymapnonempty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"keyMapNonEmpty")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",d({},{id:"definition-6"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly keyMapNonEmpty: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RMap.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_K'], "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSet.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_V']>>;"))),(0,n.kt)("h4",d({},{id:"overrides-3"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/VariantMultiMapBase/Types/interface#keyMapNonEmpty"}),"Types.keyMapNonEmpty"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"keymapvalues"}),(0,n.kt)("inlineCode",{parentName:"h3"},"keyMapValues")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",d({},{id:"definition-7"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly keyMapValues: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSet")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_V']>;"))),(0,n.kt)("h4",d({},{id:"overrides-4"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/VariantMultiMapBase/Types/interface#keyMapValues"}),"Types.keyMapValues"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"keymapvaluescontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"keyMapValuesContext")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",d({},{id:"definition-8"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly keyMapValuesContext: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSet.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_V']>;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"keymapvaluesnonempty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"keyMapValuesNonEmpty")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",d({},{id:"definition-9"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly keyMapValuesNonEmpty: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSet.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_V']>;"))),(0,n.kt)("h4",d({},{id:"overrides-5"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/VariantMultiMapBase/Types/interface#keyMapValuesNonEmpty"}),"Types.keyMapValuesNonEmpty"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"nonempty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",d({},{id:"definition-10"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/MultiMapBase/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"MultiMapBase.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;"))),(0,n.kt)("h4",d({},{id:"overrides-6"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/VariantMultiMapBase/Types/interface#nonEmpty"}),"Types.nonEmpty"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",d({},{id:"normal"}),(0,n.kt)("inlineCode",{parentName:"h3"},"normal")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",d({},{id:"definition-11"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/MultiMapBase/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"MultiMapBase")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;"))),(0,n.kt)("h4",d({},{id:"overrides-7"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/VariantMultiMapBase/Types/interface#normal"}),"Types.normal"))))}M.isMDXComponent=!0}}]);