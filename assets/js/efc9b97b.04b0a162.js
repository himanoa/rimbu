"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[57689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),h=i,c=m["".concat(p,".").concat(h)]||m[h]||u[h]||r;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>y,frontMatter:()=>m,metadata:()=>c,toc:()=>f});var a=n(3905),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&s(e,n,t[n]);return e};const m={title:"HashTableHashColumn.Types",slug:"/rimbu/table/hash-row/HashTableHashColumn/Types/interface"},h="interface HashTableHashColumn.Types",c={unversionedId:"rimbu_table/hash-row/HashTableHashColumn/Types.interface",id:"rimbu_table/hash-row/HashTableHashColumn/Types.interface",title:"HashTableHashColumn.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_table/hash-row/HashTableHashColumn/Types.interface.mdx",sourceDirName:"rimbu_table/hash-row/HashTableHashColumn",slug:"/rimbu/table/hash-row/HashTableHashColumn/Types/interface",permalink:"/api/rimbu/table/hash-row/HashTableHashColumn/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"HashTableHashColumn.Types",slug:"/rimbu/table/hash-row/HashTableHashColumn/Types/interface"},sidebar:"defaultSidebar",previous:{title:"HashTableHashColumn.NonEmpty<R,C,V>",permalink:"/api/rimbu/table/hash-row/HashTableHashColumn/NonEmpty/interface"},next:{title:"HashTableHashColumn<R,C,V>",permalink:"/api/rimbu/table/hash-row/HashTableHashColumn/interface"}},k={},f=[{value:"Properties",id:"properties",level:2},{value:"<code>_C</code>",id:"_c",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>_R</code>",id:"_r",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>_V</code>",id:"_v",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>columnContext</code>",id:"columncontext",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>row</code>",id:"row",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"<code>rowContext</code>",id:"rowcontext",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"<code>rowMap</code>",id:"rowmap",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Overrides",id:"overrides-10",level:4},{value:"<code>rowMapNonEmpty</code>",id:"rowmapnonempty",level:3},{value:"Definition",id:"definition-11",level:4},{value:"Overrides",id:"overrides-11",level:4},{value:"<code>rowNonEmpty</code>",id:"rownonempty",level:3},{value:"Definition",id:"definition-12",level:4},{value:"Overrides",id:"overrides-12",level:4}],v={toc:f};function y(e){var t,n=e,{components:i}=n,s=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},v),s),r(t,l({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"interface-hashtablehashcolumntypes"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface HashTableHashColumn.Types")),(0,a.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends:")," ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"TableBase.Types"))),(0,a.kt)("h2",u({},{id:"properties"}),"Properties"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"_c"}),(0,a.kt)("inlineCode",{parentName:"h3"},"_C")),(0,a.kt)("p",null,"The column key type.")),(0,a.kt)("h4",u({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly _C: C;"))),(0,a.kt)("h4",u({},{id:"overrides"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/Row/interface#_C"}),"Row._C"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"_r"}),(0,a.kt)("inlineCode",{parentName:"h3"},"_R")),(0,a.kt)("p",null,"The row key type.")),(0,a.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly _R: R;"))),(0,a.kt)("h4",u({},{id:"overrides-1"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/Row/interface#_R"}),"Row._R"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"_v"}),(0,a.kt)("inlineCode",{parentName:"h3"},"_V")),(0,a.kt)("p",null,"The value type.")),(0,a.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly _V: V;"))),(0,a.kt)("h4",u({},{id:"overrides-2"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/Row/interface#_V"}),"Row._V"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"builder"}),(0,a.kt)("inlineCode",{parentName:"h3"},"builder")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/hash-row/HashTableHashColumn/Builder/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"HashTableHashColumn.Builder")),(0,a.kt)("inlineCode",{parentName:"p"},"<this['_R'], this['_C'], this['_V']>;"))),(0,a.kt)("h4",u({},{id:"overrides-3"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#builder"}),"Types.builder"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"columncontext"}),(0,a.kt)("inlineCode",{parentName:"h3"},"columnContext")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly columnContext: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/Context/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"HashMap.Context")),(0,a.kt)("inlineCode",{parentName:"p"},"<this['_C']>;"))),(0,a.kt)("h4",u({},{id:"overrides-4"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#columnContext"}),"Types.columnContext"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"context"}),(0,a.kt)("inlineCode",{parentName:"h3"},"context")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-5"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/hash-row/HashTableHashColumn/Context/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"HashTableHashColumn.Context")),(0,a.kt)("inlineCode",{parentName:"p"},"<this['_R'], this['_C']>;"))),(0,a.kt)("h4",u({},{id:"overrides-5"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#context"}),"Types.context"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"nonempty"}),(0,a.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-6"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/hash-row/HashTableHashColumn/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"HashTableHashColumn.NonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<this['_R'], this['_C'], this['_V']>;"))),(0,a.kt)("h4",u({},{id:"overrides-6"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#nonEmpty"}),"Types.nonEmpty"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"normal"}),(0,a.kt)("inlineCode",{parentName:"h3"},"normal")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-7"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/hash-row/HashTableHashColumn/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"HashTableHashColumn")),(0,a.kt)("inlineCode",{parentName:"p"},"<this['_R'], this['_C'], this['_V']>;"))),(0,a.kt)("h4",u({},{id:"overrides-7"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#normal"}),"Types.normal"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"row"}),(0,a.kt)("inlineCode",{parentName:"h3"},"row")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-8"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly row: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"HashMap")),(0,a.kt)("inlineCode",{parentName:"p"},"<this['_C'], this['_V']>;"))),(0,a.kt)("h4",u({},{id:"overrides-8"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#row"}),"Types.row"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"rowcontext"}),(0,a.kt)("inlineCode",{parentName:"h3"},"rowContext")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-9"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly rowContext: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/Context/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"HashMap.Context")),(0,a.kt)("inlineCode",{parentName:"p"},"<this['_R']>;"))),(0,a.kt)("h4",u({},{id:"overrides-9"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#rowContext"}),"Types.rowContext"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"rowmap"}),(0,a.kt)("inlineCode",{parentName:"h3"},"rowMap")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-10"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly rowMap: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"HashMap")),(0,a.kt)("inlineCode",{parentName:"p"},"<this['_R'], "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"HashMap.NonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<this['_C'], this['_V']>>;"))),(0,a.kt)("h4",u({},{id:"overrides-10"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#rowMap"}),"Types.rowMap"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"rowmapnonempty"}),(0,a.kt)("inlineCode",{parentName:"h3"},"rowMapNonEmpty")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-11"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly rowMapNonEmpty: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"HashMap.NonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<this['_R'], "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"HashMap.NonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<this['_C'], this['_V']>>;"))),(0,a.kt)("h4",u({},{id:"overrides-11"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#rowMapNonEmpty"}),"Types.rowMapNonEmpty"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"rownonempty"}),(0,a.kt)("inlineCode",{parentName:"h3"},"rowNonEmpty")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-12"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly rowNonEmpty: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"HashMap.NonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<this['_C'], this['_V']>;"))),(0,a.kt)("h4",u({},{id:"overrides-12"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#rowNonEmpty"}),"Types.rowNonEmpty"))))}y.isMDXComponent=!0}}]);