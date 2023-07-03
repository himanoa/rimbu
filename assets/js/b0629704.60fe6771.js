"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[61399],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>c});var l=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function u(e,t){if(null==e)return{};var i,l,a=function(e,t){if(null==e)return{};var i,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=l.createContext({}),o=function(e){var t=l.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=o(e.components);return l.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=o(i),k=a,c=m["".concat(p,".").concat(k)]||m[k]||s[k]||n;return i?l.createElement(c,r(r({ref:t},d),{},{components:i})):l.createElement(c,r({ref:t},d))}));function c(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,r=new Array(n);r[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[m]="string"==typeof e?e:a,r[1]=u;for(var o=2;o<n;o++)r[o]=i[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,i)}k.displayName="MDXCreateElement"},76497:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>N,frontMatter:()=>c,metadata:()=>y,toc:()=>f});var l=i(3905),a=Object.defineProperty,n=Object.defineProperties,r=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(e,t,i)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,m=(e,t)=>{for(var i in t||(t={}))p.call(t,i)&&d(e,i,t[i]);if(u)for(var i of u(t))o.call(t,i)&&d(e,i,t[i]);return e},s=(e,t)=>n(e,r(t)),k=(e,t)=>{var i={};for(var l in e)p.call(e,l)&&t.indexOf(l)<0&&(i[l]=e[l]);if(null!=e&&u)for(var l of u(e))t.indexOf(l)<0&&o.call(e,l)&&(i[l]=e[l]);return i};const c={title:"HashBiMultiMap.Types",slug:"/rimbu/core/HashBiMultiMap/Types/interface"},v="interface HashBiMultiMap.Types",y={unversionedId:"rimbu_core/HashBiMultiMap/Types.interface",id:"rimbu_core/HashBiMultiMap/Types.interface",title:"HashBiMultiMap.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_core/HashBiMultiMap/Types.interface.mdx",sourceDirName:"rimbu_core/HashBiMultiMap",slug:"/rimbu/core/HashBiMultiMap/Types/interface",permalink:"/api/rimbu/core/HashBiMultiMap/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"HashBiMultiMap.Types",slug:"/rimbu/core/HashBiMultiMap/Types/interface"},sidebar:"defaultSidebar",previous:{title:"HashBiMultiMap.NonEmpty<K,V>",permalink:"/api/rimbu/core/HashBiMultiMap/NonEmpty/interface"},next:{title:"HashBiMultiMap<K,V>",permalink:"/api/rimbu/core/HashBiMultiMap/interface"}},h={},f=[{value:"Properties",id:"properties",level:2},{value:"<code>_K</code>",id:"_k",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>_V</code>",id:"_v",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>keyMultiMapValues</code>",id:"keymultimapvalues",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"<code>keyValueMultiMap</code>",id:"keyvaluemultimap",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>keyValueMultiMapContext</code>",id:"keyvaluemultimapcontext",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>keyValueMultiMapNonEmpty</code>",id:"keyvaluemultimapnonempty",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"<code>valueKeyMultiMap</code>",id:"valuekeymultimap",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Overrides",id:"overrides-10",level:4},{value:"<code>valueKeyMultiMapContext</code>",id:"valuekeymultimapcontext",level:3},{value:"Definition",id:"definition-11",level:4},{value:"Overrides",id:"overrides-11",level:4},{value:"<code>valueKeyMultiMapNonEmpty</code>",id:"valuekeymultimapnonempty",level:3},{value:"Definition",id:"definition-12",level:4},{value:"Overrides",id:"overrides-12",level:4},{value:"<code>valueMultiMapValues</code>",id:"valuemultimapvalues",level:3},{value:"Definition",id:"definition-13",level:4},{value:"Overrides",id:"overrides-13",level:4}],M={toc:f},b="wrapper";function N(e){var t=e,{components:i}=t,a=k(t,["components"]);return(0,l.kt)(b,s(m(m({},M),a),{components:i,mdxType:"MDXLayout"}),(0,l.kt)("h1",m({},{id:"interface-hashbimultimaptypes"}),(0,l.kt)("inlineCode",{parentName:"h1"},"interface HashBiMultiMap.Types")),(0,l.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Extends:")," ",(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/bimultimap/custom/BiMultiMapBase/Types/interface"}),(0,l.kt)("inlineCode",{parentName:"a"},"BiMultiMapBase.Types"))),(0,l.kt)("h2",m({},{id:"properties"}),"Properties"),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",m({},{id:"_k"}),(0,l.kt)("inlineCode",{parentName:"h3"},"_K")),(0,l.kt)("p",null,"The key type.")),(0,l.kt)("h4",m({},{id:"definition"}),"Definition"),(0,l.kt)("code",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"readonly _K: K;"))),(0,l.kt)("h4",m({},{id:"overrides"}),"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/KeyValue/interface#_K"}),"KeyValue._K"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",m({},{id:"_v"}),(0,l.kt)("inlineCode",{parentName:"h3"},"_V")),(0,l.kt)("p",null,"The value type.")),(0,l.kt)("h4",m({},{id:"definition-1"}),"Definition"),(0,l.kt)("code",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"readonly _V: V;"))),(0,l.kt)("h4",m({},{id:"overrides-1"}),"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/KeyValue/interface#_V"}),"KeyValue._V"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",m({},{id:"builder"}),(0,l.kt)("inlineCode",{parentName:"h3"},"builder")),(0,l.kt)("p",null,"undocumented")),(0,l.kt)("h4",m({},{id:"definition-2"}),"Definition"),(0,l.kt)("code",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/HashBiMultiMap/Builder/interface"}),(0,l.kt)("inlineCode",{parentName:"a"},"HashBiMultiMap.Builder")),(0,l.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;"))),(0,l.kt)("h4",m({},{id:"overrides-2"}),"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/bimultimap/custom/BiMultiMapBase/Types/interface#builder"}),"Types.builder"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",m({},{id:"context"}),(0,l.kt)("inlineCode",{parentName:"h3"},"context")),(0,l.kt)("p",null,"undocumented")),(0,l.kt)("h4",m({},{id:"definition-3"}),"Definition"),(0,l.kt)("code",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/HashBiMultiMap/Context/interface"}),(0,l.kt)("inlineCode",{parentName:"a"},"HashBiMultiMap.Context")),(0,l.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;"))),(0,l.kt)("h4",m({},{id:"overrides-3"}),"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/bimultimap/custom/BiMultiMapBase/Types/interface#context"}),"Types.context"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",m({},{id:"keymultimapvalues"}),(0,l.kt)("inlineCode",{parentName:"h3"},"keyMultiMapValues")),(0,l.kt)("p",null,"undocumented")),(0,l.kt)("h4",m({},{id:"definition-4"}),"Definition"),(0,l.kt)("code",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"readonly keyMultiMapValues: "),(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/interface"}),(0,l.kt)("inlineCode",{parentName:"a"},"HashSet")),(0,l.kt)("inlineCode",{parentName:"p"},"<this['_V']>;"))),(0,l.kt)("h4",m({},{id:"overrides-4"}),"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/bimultimap/custom/BiMultiMapBase/Types/interface#keyMultiMapValues"}),"Types.keyMultiMapValues"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",m({},{id:"keyvaluemultimap"}),(0,l.kt)("inlineCode",{parentName:"h3"},"keyValueMultiMap")),(0,l.kt)("p",null,"undocumented")),(0,l.kt)("h4",m({},{id:"definition-5"}),"Definition"),(0,l.kt)("code",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"readonly keyValueMultiMap: "),(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/HashMultiMapHashValue/interface"}),(0,l.kt)("inlineCode",{parentName:"a"},"HashMultiMapHashValue")),(0,l.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;"))),(0,l.kt)("h4",m({},{id:"overrides-5"}),"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/bimultimap/custom/BiMultiMapBase/Types/interface#keyValueMultiMap"}),"Types.keyValueMultiMap"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",m({},{id:"keyvaluemultimapcontext"}),(0,l.kt)("inlineCode",{parentName:"h3"},"keyValueMultiMapContext")),(0,l.kt)("p",null,"The key to value multimap context type (higher-kinded type).")),(0,l.kt)("h4",m({},{id:"definition-6"}),"Definition"),(0,l.kt)("code",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"readonly keyValueMultiMapContext: MultiMap.Context<this['_K'], this['_V']>;"))),(0,l.kt)("h4",m({},{id:"overrides-6"}),"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/bimultimap/custom/BiMultiMapBase/Types/interface#keyValueMultiMapContext"}),"Types.keyValueMultiMapContext"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",m({},{id:"keyvaluemultimapnonempty"}),(0,l.kt)("inlineCode",{parentName:"h3"},"keyValueMultiMapNonEmpty")),(0,l.kt)("p",null,"The non-empty key to value multimap type (higher-kinded type).")),(0,l.kt)("h4",m({},{id:"definition-7"}),"Definition"),(0,l.kt)("code",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"readonly keyValueMultiMapNonEmpty: MultiMap.NonEmpty<this['_K'], this['_V']>;"))),(0,l.kt)("h4",m({},{id:"overrides-7"}),"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/bimultimap/custom/BiMultiMapBase/Types/interface#keyValueMultiMapNonEmpty"}),"Types.keyValueMultiMapNonEmpty"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",m({},{id:"nonempty"}),(0,l.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,l.kt)("p",null,"undocumented")),(0,l.kt)("h4",m({},{id:"definition-8"}),"Definition"),(0,l.kt)("code",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/HashBiMultiMap/NonEmpty/interface"}),(0,l.kt)("inlineCode",{parentName:"a"},"HashBiMultiMap.NonEmpty")),(0,l.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;"))),(0,l.kt)("h4",m({},{id:"overrides-8"}),"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/bimultimap/custom/BiMultiMapBase/Types/interface#nonEmpty"}),"Types.nonEmpty"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",m({},{id:"normal"}),(0,l.kt)("inlineCode",{parentName:"h3"},"normal")),(0,l.kt)("p",null,"undocumented")),(0,l.kt)("h4",m({},{id:"definition-9"}),"Definition"),(0,l.kt)("code",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/HashBiMultiMap/interface"}),(0,l.kt)("inlineCode",{parentName:"a"},"HashBiMultiMap")),(0,l.kt)("inlineCode",{parentName:"p"},"<this['_K'], this['_V']>;"))),(0,l.kt)("h4",m({},{id:"overrides-9"}),"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/bimultimap/custom/BiMultiMapBase/Types/interface#normal"}),"Types.normal"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",m({},{id:"valuekeymultimap"}),(0,l.kt)("inlineCode",{parentName:"h3"},"valueKeyMultiMap")),(0,l.kt)("p",null,"undocumented")),(0,l.kt)("h4",m({},{id:"definition-10"}),"Definition"),(0,l.kt)("code",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"readonly valueKeyMultiMap: "),(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/core/HashMultiMapHashValue/interface"}),(0,l.kt)("inlineCode",{parentName:"a"},"HashMultiMapHashValue")),(0,l.kt)("inlineCode",{parentName:"p"},"<this['_V'], this['_K']>;"))),(0,l.kt)("h4",m({},{id:"overrides-10"}),"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/bimultimap/custom/BiMultiMapBase/Types/interface#valueKeyMultiMap"}),"Types.valueKeyMultiMap"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",m({},{id:"valuekeymultimapcontext"}),(0,l.kt)("inlineCode",{parentName:"h3"},"valueKeyMultiMapContext")),(0,l.kt)("p",null,"The value to key multimap context type (higher-kinded type).")),(0,l.kt)("h4",m({},{id:"definition-11"}),"Definition"),(0,l.kt)("code",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"readonly valueKeyMultiMapContext: MultiMap.Context<this['_V'], this['_K']>;"))),(0,l.kt)("h4",m({},{id:"overrides-11"}),"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/bimultimap/custom/BiMultiMapBase/Types/interface#valueKeyMultiMapContext"}),"Types.valueKeyMultiMapContext"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",m({},{id:"valuekeymultimapnonempty"}),(0,l.kt)("inlineCode",{parentName:"h3"},"valueKeyMultiMapNonEmpty")),(0,l.kt)("p",null,"The non-empty value to key multimap type (higher-kinded type).")),(0,l.kt)("h4",m({},{id:"definition-12"}),"Definition"),(0,l.kt)("code",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"readonly valueKeyMultiMapNonEmpty: MultiMap.NonEmpty<this['_V'], this['_K']>;"))),(0,l.kt)("h4",m({},{id:"overrides-12"}),"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/bimultimap/custom/BiMultiMapBase/Types/interface#valueKeyMultiMapNonEmpty"}),"Types.valueKeyMultiMapNonEmpty"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",m({},{id:"valuemultimapvalues"}),(0,l.kt)("inlineCode",{parentName:"h3"},"valueMultiMapValues")),(0,l.kt)("p",null,"undocumented")),(0,l.kt)("h4",m({},{id:"definition-13"}),"Definition"),(0,l.kt)("code",null,(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"readonly valueMultiMapValues: "),(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/interface"}),(0,l.kt)("inlineCode",{parentName:"a"},"HashSet")),(0,l.kt)("inlineCode",{parentName:"p"},"<this['_K']>;"))),(0,l.kt)("h4",m({},{id:"overrides-13"}),"Overrides"),(0,l.kt)("p",null,(0,l.kt)("a",m({parentName:"p"},{href:"/api/rimbu/bimultimap/custom/BiMultiMapBase/Types/interface#valueMultiMapValues"}),"Types.valueMultiMapValues"))))}N.isMDXComponent=!0}}]);