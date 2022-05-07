"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[75009],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),s=a,f=c["".concat(p,".").concat(s)]||c[s]||m[s]||r;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79977:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return h}});var i=n(3905),a=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&u(e,n,t[n]);return e};const c={title:"SortedTableHashColumn.Types",slug:"/rimbu/table/sorted-row/SortedTableHashColumn/Types/interface"},s="interface SortedTableHashColumn.Types",f={unversionedId:"rimbu_table/sorted-row/SortedTableHashColumn/Types.interface",id:"rimbu_table/sorted-row/SortedTableHashColumn/Types.interface",title:"SortedTableHashColumn.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_table/sorted-row/SortedTableHashColumn/Types.interface.mdx",sourceDirName:"rimbu_table/sorted-row/SortedTableHashColumn",slug:"/rimbu/table/sorted-row/SortedTableHashColumn/Types/interface",permalink:"/api/rimbu/table/sorted-row/SortedTableHashColumn/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"SortedTableHashColumn.Types",slug:"/rimbu/table/sorted-row/SortedTableHashColumn/Types/interface"},sidebar:"defaultSidebar",previous:{title:"SortedTableHashColumn.NonEmpty<R,C,V>",permalink:"/api/rimbu/table/sorted-row/SortedTableHashColumn/NonEmpty/interface"},next:{title:"SortedTableHashColumn<R,C,V>",permalink:"/api/rimbu/table/sorted-row/SortedTableHashColumn/interface"}},k={},h=[{value:"Properties",id:"properties",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>columnContext</code>",id:"columncontext",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>row</code>",id:"row",level:3},{value:"Definition",id:"definition-5",level:4},{value:"<code>rowContext</code>",id:"rowcontext",level:3},{value:"Definition",id:"definition-6",level:4},{value:"<code>rowMap</code>",id:"rowmap",level:3},{value:"Definition",id:"definition-7",level:4},{value:"<code>rowMapNonEmpty</code>",id:"rowmapnonempty",level:3},{value:"Definition",id:"definition-8",level:4},{value:"<code>rowNonEmpty</code>",id:"rownonempty",level:3},{value:"Definition",id:"definition-9",level:4}],b={toc:h};function y(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var i in e)p.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&d.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=m(m({},b),u),r(t,o({components:a,mdxType:"MDXLayout"}))),(0,i.kt)("h1",m({},{id:"interface-sortedtablehashcolumntypes"}),(0,i.kt)("inlineCode",{parentName:"h1"},"interface SortedTableHashColumn.Types")),(0,i.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,i.kt)("h2",m({},{id:"properties"}),"Properties"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"builder"}),(0,i.kt)("inlineCode",{parentName:"h3"},"builder")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/SortedTableHashColumn/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedTableHashColumn.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_R'], this['_C'], this['_V']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"columncontext"}),(0,i.kt)("inlineCode",{parentName:"h3"},"columnContext")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-1"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly columnContext: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashMap.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_C']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"context"}),(0,i.kt)("inlineCode",{parentName:"h3"},"context")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-2"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/SortedTableHashColumn/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedTableHashColumn.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_R'], this['_C']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"nonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-3"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/SortedTableHashColumn/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedTableHashColumn.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_R'], this['_C'], this['_V']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"normal"}),(0,i.kt)("inlineCode",{parentName:"h3"},"normal")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-4"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/table/SortedTableHashColumn/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedTableHashColumn")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_R'], this['_C'], this['_V']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"row"}),(0,i.kt)("inlineCode",{parentName:"h3"},"row")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-5"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly row: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashMap")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_C'], this['_V']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"rowcontext"}),(0,i.kt)("inlineCode",{parentName:"h3"},"rowContext")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-6"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly rowContext: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_R']>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"rowmap"}),(0,i.kt)("inlineCode",{parentName:"h3"},"rowMap")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-7"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly rowMap: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_R'], "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashMap.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_C'], this['_V']>>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"rowmapnonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"rowMapNonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-8"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly rowMapNonEmpty: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"SortedMap.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_R'], "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashMap.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_C'], this['_V']>>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",m({},{id:"rownonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"rowNonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",m({},{id:"definition-9"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly rowNonEmpty: "),(0,i.kt)("a",m({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"HashMap.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_C'], this['_V']>;")))))}y.isMDXComponent=!0}}]);