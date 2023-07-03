"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[33564],{3905:(e,n,i)=>{i.d(n,{Zo:()=>u,kt:()=>c});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function d(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=t.createContext({}),o=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},u=function(e){var n=o(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=o(i),m=a,c=s["".concat(p,".").concat(m)]||s[m]||k[m]||r;return i?t.createElement(c,l(l({ref:n},u),{},{components:i})):t.createElement(c,l({ref:n},u))}));function c(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=m;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d[s]="string"==typeof e?e:a,l[1]=d;for(var o=2;o<r;o++)l[o]=i[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},90793:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>v,contentTitle:()=>h,default:()=>b,frontMatter:()=>c,metadata:()=>f,toc:()=>y});var t=i(3905),a=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(e,n,i)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,s=(e,n)=>{for(var i in n||(n={}))p.call(n,i)&&u(e,i,n[i]);if(d)for(var i of d(n))o.call(n,i)&&u(e,i,n[i]);return e},k=(e,n)=>r(e,l(n)),m=(e,n)=>{var i={};for(var t in e)p.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(null!=e&&d)for(var t of d(e))n.indexOf(t)<0&&o.call(e,t)&&(i[t]=e[t]);return i};const c={title:"EdgeGraphHashed.Types",slug:"/rimbu/core/EdgeGraphHashed/Types/interface"},h="interface EdgeGraphHashed.Types",f={unversionedId:"rimbu_core/EdgeGraphHashed/Types.interface",id:"rimbu_core/EdgeGraphHashed/Types.interface",title:"EdgeGraphHashed.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_core/EdgeGraphHashed/Types.interface.mdx",sourceDirName:"rimbu_core/EdgeGraphHashed",slug:"/rimbu/core/EdgeGraphHashed/Types/interface",permalink:"/api/rimbu/core/EdgeGraphHashed/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"EdgeGraphHashed.Types",slug:"/rimbu/core/EdgeGraphHashed/Types/interface"},sidebar:"defaultSidebar",previous:{title:"EdgeGraphHashed.NonEmpty<N>",permalink:"/api/rimbu/core/EdgeGraphHashed/NonEmpty/interface"},next:{title:"EdgeGraphHashed<N>",permalink:"/api/rimbu/core/EdgeGraphHashed/interface"}},v={},y=[{value:"Properties",id:"properties",level:2},{value:"<code>_N</code>",id:"_n",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>_V</code>",id:"_v",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>link</code>",id:"link",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"<code>linkConnections</code>",id:"linkconnections",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>linkConnectionsBuilder</code>",id:"linkconnectionsbuilder",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>linkConnectionsContext</code>",id:"linkconnectionscontext",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>linkMap</code>",id:"linkmap",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"<code>linkMapBuilder</code>",id:"linkmapbuilder",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"<code>linkMapContext</code>",id:"linkmapcontext",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Overrides",id:"overrides-10",level:4},{value:"<code>linkMapNonEmpty</code>",id:"linkmapnonempty",level:3},{value:"Definition",id:"definition-11",level:4},{value:"Overrides",id:"overrides-11",level:4},{value:"<code>linkTarget</code>",id:"linktarget",level:3},{value:"Definition",id:"definition-12",level:4},{value:"Overrides",id:"overrides-12",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-13",level:4},{value:"Overrides",id:"overrides-13",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-14",level:4},{value:"Overrides",id:"overrides-14",level:4}],N={toc:y},C="wrapper";function b(e){var n=e,{components:i}=n,a=m(n,["components"]);return(0,t.kt)(C,k(s(s({},N),a),{components:i,mdxType:"MDXLayout"}),(0,t.kt)("h1",s({},{id:"interface-edgegraphhashedtypes"}),(0,t.kt)("inlineCode",{parentName:"h1"},"interface EdgeGraphHashed.Types")),(0,t.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Extends:")," ",(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/EdgeGraphBase/Types/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"EdgeGraphBase.Types"))),(0,t.kt)("h2",s({},{id:"properties"}),"Properties"),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",s({},{id:"_n"}),(0,t.kt)("inlineCode",{parentName:"h3"},"_N")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",s({},{id:"definition"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly _N: N;"))),(0,t.kt)("h4",s({},{id:"overrides"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphValues/interface#_N"}),"GraphValues._N"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",s({},{id:"_v"}),(0,t.kt)("inlineCode",{parentName:"h3"},"_V")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",s({},{id:"definition-1"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly _V: V;"))),(0,t.kt)("h4",s({},{id:"overrides-1"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphValues/interface#_V"}),"GraphValues._V"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",s({},{id:"builder"}),(0,t.kt)("inlineCode",{parentName:"h3"},"builder")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",s({},{id:"definition-2"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/core/EdgeGraphHashed/Builder/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"EdgeGraphHashed.Builder")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",s({},{id:"overrides-2"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/EdgeGraphBase/Types/interface#builder"}),"Types.builder"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",s({},{id:"context"}),(0,t.kt)("inlineCode",{parentName:"h3"},"context")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",s({},{id:"definition-3"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/core/EdgeGraphHashed/Context/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"EdgeGraphHashed.Context")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",s({},{id:"overrides-3"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/EdgeGraphBase/Types/interface#context"}),"Types.context"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",s({},{id:"link"}),(0,t.kt)("inlineCode",{parentName:"h3"},"link")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",s({},{id:"definition-4"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly link: Link<this['_N']>;"))),(0,t.kt)("h4",s({},{id:"overrides-4"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/VariantGraphBase/Types/interface#link"}),"Types.link"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",s({},{id:"linkconnections"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkConnections")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",s({},{id:"definition-5"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkConnections: "),(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"HashSet")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",s({},{id:"overrides-5"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkConnections"}),"Types.linkConnections"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",s({},{id:"linkconnectionsbuilder"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkConnectionsBuilder")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",s({},{id:"definition-6"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkConnectionsBuilder: "),(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/Builder/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"HashSet.Builder")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",s({},{id:"overrides-6"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkConnectionsBuilder"}),"Types.linkConnectionsBuilder"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",s({},{id:"linkconnectionscontext"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkConnectionsContext")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",s({},{id:"definition-7"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkConnectionsContext: "),(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/Context/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"HashSet.Context")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",s({},{id:"overrides-7"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkConnectionsContext"}),"Types.linkConnectionsContext"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",s({},{id:"linkmap"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkMap")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",s({},{id:"definition-8"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkMap: "),(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"HashMap")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"HashSet")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>>;"))),(0,t.kt)("h4",s({},{id:"overrides-8"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkMap"}),"Types.linkMap"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",s({},{id:"linkmapbuilder"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkMapBuilder")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",s({},{id:"definition-9"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkMapBuilder: "),(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/Builder/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"HashMap.Builder")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/Builder/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"HashSet.Builder")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>>;"))),(0,t.kt)("h4",s({},{id:"overrides-9"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkMapBuilder"}),"Types.linkMapBuilder"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",s({},{id:"linkmapcontext"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkMapContext")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",s({},{id:"definition-10"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkMapContext: "),(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/Context/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"HashMap.Context")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",s({},{id:"overrides-10"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkMapContext"}),"Types.linkMapContext"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",s({},{id:"linkmapnonempty"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkMapNonEmpty")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",s({},{id:"definition-11"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkMapNonEmpty: "),(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/NonEmpty/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"HashMap.NonEmpty")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"HashSet")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>>;"))),(0,t.kt)("h4",s({},{id:"overrides-11"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkMapNonEmpty"}),"Types.linkMapNonEmpty"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",s({},{id:"linktarget"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkTarget")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",s({},{id:"definition-12"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkTarget: "),(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/Link/Target/type"}),(0,t.kt)("inlineCode",{parentName:"a"},"Link.Target")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",s({},{id:"overrides-12"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/VariantGraphBase/Types/interface#linkTarget"}),"Types.linkTarget"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",s({},{id:"nonempty"}),(0,t.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",s({},{id:"definition-13"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/core/EdgeGraphHashed/NonEmpty/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"EdgeGraphHashed.NonEmpty")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",s({},{id:"overrides-13"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/EdgeGraphBase/Types/interface#nonEmpty"}),"Types.nonEmpty"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",s({},{id:"normal"}),(0,t.kt)("inlineCode",{parentName:"h3"},"normal")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",s({},{id:"definition-14"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/core/EdgeGraphHashed/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"EdgeGraphHashed")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",s({},{id:"overrides-14"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/EdgeGraphBase/Types/interface#normal"}),"Types.normal"))))}b.isMDXComponent=!0}}]);