"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[94588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||r;return n?i.createElement(k,l(l({ref:t},u),{},{components:n})):i.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>C,frontMatter:()=>k,metadata:()=>v,toc:()=>b});var i=n(3905),a=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&u(e,n,t[n]);return e},s=(e,t)=>r(e,l(t)),c=(e,t)=>{var n={};for(var i in e)p.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&d.call(e,i)&&(n[i]=e[i]);return n};const k={title:"Table.Types",slug:"/rimbu/table/Table/Types/interface"},f="interface Table.Types",v={unversionedId:"rimbu_table/Table/Types.interface",id:"rimbu_table/Table/Types.interface",title:"Table.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_table/Table/Types.interface.mdx",sourceDirName:"rimbu_table/Table",slug:"/rimbu/table/Table/Types/interface",permalink:"/api/rimbu/table/Table/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"Table.Types",slug:"/rimbu/table/Table/Types/interface"},sidebar:"defaultSidebar",previous:{title:"Table.NonEmpty<R,C,V>",permalink:"/api/rimbu/table/Table/NonEmpty/interface"},next:{title:"Table<R,C,V>",permalink:"/api/rimbu/table/Table/interface"}},y={},b=[{value:"Properties",id:"properties",level:2},{value:"<code>_C</code>",id:"_c",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>_R</code>",id:"_r",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>_V</code>",id:"_v",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>columnContext</code>",id:"columncontext",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>row</code>",id:"row",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"<code>rowContext</code>",id:"rowcontext",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"<code>rowMap</code>",id:"rowmap",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Overrides",id:"overrides-10",level:4},{value:"<code>rowMapNonEmpty</code>",id:"rowmapnonempty",level:3},{value:"Definition",id:"definition-11",level:4},{value:"Overrides",id:"overrides-11",level:4},{value:"<code>rowNonEmpty</code>",id:"rownonempty",level:3},{value:"Definition",id:"definition-12",level:4},{value:"Overrides",id:"overrides-12",level:4}],h={toc:b},N="wrapper";function C(e){var t=e,{components:n}=t,a=c(t,["components"]);return(0,i.kt)(N,s(m(m({},h),a),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",m({},{id:"interface-tabletypes"}),(0,i.kt)("inlineCode",{parentName:"h1"},"interface Table.Types")),(0,i.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Extends:")," ",(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"TableBase.Types"))),(0,i.kt)("h2",m({},{id:"properties"}),"Properties"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"_c"}),(0,i.kt)("inlineCode",{parentName:"h3"},"_C")),(0,i.kt)("p",null,"The column key type.")),(0,i.kt)("h4",m({},{id:"definition"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly _C: C;"))),(0,i.kt)("h4",m({},{id:"overrides"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/Row/interface#_C"}),"Row._C"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"_r"}),(0,i.kt)("inlineCode",{parentName:"h3"},"_R")),(0,i.kt)("p",null,"The row key type.")),(0,i.kt)("h4",m({},{id:"definition-1"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly _R: R;"))),(0,i.kt)("h4",m({},{id:"overrides-1"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/Row/interface#_R"}),"Row._R"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"_v"}),(0,i.kt)("inlineCode",{parentName:"h3"},"_V")),(0,i.kt)("p",null,"The value type.")),(0,i.kt)("h4",m({},{id:"definition-2"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly _V: V;"))),(0,i.kt)("h4",m({},{id:"overrides-2"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/Row/interface#_V"}),"Row._V"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"builder"}),(0,i.kt)("inlineCode",{parentName:"h3"},"builder")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-3"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/Table/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"Table.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_R'], this['_C'], this['_V']>;"))),(0,i.kt)("h4",m({},{id:"overrides-3"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#builder"}),"Types.builder"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"columncontext"}),(0,i.kt)("inlineCode",{parentName:"h3"},"columnContext")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-4"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly columnContext: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_C']>;"))),(0,i.kt)("h4",m({},{id:"overrides-4"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#columnContext"}),"Types.columnContext"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"context"}),(0,i.kt)("inlineCode",{parentName:"h3"},"context")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-5"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/Table/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"Table.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_R'], this['_C']>;"))),(0,i.kt)("h4",m({},{id:"overrides-5"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#context"}),"Types.context"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"nonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-6"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/Table/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"Table.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_R'], this['_C'], this['_V']>;"))),(0,i.kt)("h4",m({},{id:"overrides-6"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#nonEmpty"}),"Types.nonEmpty"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"normal"}),(0,i.kt)("inlineCode",{parentName:"h3"},"normal")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-7"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/Table/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"Table")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_R'], this['_C'], this['_V']>;"))),(0,i.kt)("h4",m({},{id:"overrides-7"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#normal"}),"Types.normal"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"row"}),(0,i.kt)("inlineCode",{parentName:"h3"},"row")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-8"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly row: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RMap")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_C'], this['_V']>;"))),(0,i.kt)("h4",m({},{id:"overrides-8"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#row"}),"Types.row"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"rowcontext"}),(0,i.kt)("inlineCode",{parentName:"h3"},"rowContext")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-9"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly rowContext: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_R']>;"))),(0,i.kt)("h4",m({},{id:"overrides-9"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#rowContext"}),"Types.rowContext"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"rowmap"}),(0,i.kt)("inlineCode",{parentName:"h3"},"rowMap")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-10"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly rowMap: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RMap")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_R'], "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RMap.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_C'], this['_V']>>;"))),(0,i.kt)("h4",m({},{id:"overrides-10"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#rowMap"}),"Types.rowMap"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"rowmapnonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"rowMapNonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-11"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly rowMapNonEmpty: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RMap.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_R'], "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RMap.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_C'], this['_V']>>;"))),(0,i.kt)("h4",m({},{id:"overrides-11"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#rowMapNonEmpty"}),"Types.rowMapNonEmpty"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"rownonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"rowNonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-12"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly rowNonEmpty: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RMap.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_C'], this['_V']>;"))),(0,i.kt)("h4",m({},{id:"overrides-12"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/Types/interface#rowNonEmpty"}),"Types.rowNonEmpty"))))}C.isMDXComponent=!0}}]);