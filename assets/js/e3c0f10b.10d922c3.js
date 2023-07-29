"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[92998],{3905:(e,n,i)=>{i.d(n,{Zo:()=>u,kt:()=>c});var t=i(67294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function p(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=t.createContext({}),d=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},u=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=d(i),m=r,c=k["".concat(o,".").concat(m)]||k[m]||s[m]||a;return i?t.createElement(c,l(l({ref:n},u),{},{components:i})):t.createElement(c,l({ref:n},u))}));function c(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[k]="string"==typeof e?e:r,l[1]=p;for(var d=2;d<a;d++)l[d]=i[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},56485:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>v,contentTitle:()=>h,default:()=>C,frontMatter:()=>c,metadata:()=>f,toc:()=>y});var t=i(3905),r=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,n,i)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,k=(e,n)=>{for(var i in n||(n={}))o.call(n,i)&&u(e,i,n[i]);if(p)for(var i of p(n))d.call(n,i)&&u(e,i,n[i]);return e},s=(e,n)=>a(e,l(n)),m=(e,n)=>{var i={};for(var t in e)o.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(null!=e&&p)for(var t of p(e))n.indexOf(t)<0&&d.call(e,t)&&(i[t]=e[t]);return i};const c={title:"EdgeGraph.Types",slug:"/rimbu/graph/EdgeGraph/Types/interface"},h="interface EdgeGraph.Types",f={unversionedId:"rimbu_graph/EdgeGraph/Types.interface",id:"rimbu_graph/EdgeGraph/Types.interface",title:"EdgeGraph.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_graph/EdgeGraph/Types.interface.mdx",sourceDirName:"rimbu_graph/EdgeGraph",slug:"/rimbu/graph/EdgeGraph/Types/interface",permalink:"/api/rimbu/graph/EdgeGraph/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"EdgeGraph.Types",slug:"/rimbu/graph/EdgeGraph/Types/interface"},sidebar:"defaultSidebar",previous:{title:"EdgeGraph.NonEmpty<N>",permalink:"/api/rimbu/graph/EdgeGraph/NonEmpty/interface"},next:{title:"EdgeGraph<N>",permalink:"/api/rimbu/graph/EdgeGraph/interface"}},v={},y=[{value:"Properties",id:"properties",level:2},{value:"<code>_N</code>",id:"_n",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>_V</code>",id:"_v",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>link</code>",id:"link",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"<code>linkConnections</code>",id:"linkconnections",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>linkConnectionsBuilder</code>",id:"linkconnectionsbuilder",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>linkConnectionsContext</code>",id:"linkconnectionscontext",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>linkMap</code>",id:"linkmap",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"<code>linkMapBuilder</code>",id:"linkmapbuilder",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"<code>linkMapContext</code>",id:"linkmapcontext",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Overrides",id:"overrides-10",level:4},{value:"<code>linkMapNonEmpty</code>",id:"linkmapnonempty",level:3},{value:"Definition",id:"definition-11",level:4},{value:"Overrides",id:"overrides-11",level:4},{value:"<code>linkTarget</code>",id:"linktarget",level:3},{value:"Definition",id:"definition-12",level:4},{value:"Overrides",id:"overrides-12",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-13",level:4},{value:"Overrides",id:"overrides-13",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-14",level:4},{value:"Overrides",id:"overrides-14",level:4}],N={toc:y},g="wrapper";function C(e){var n=e,{components:i}=n,r=m(n,["components"]);return(0,t.kt)(g,s(k(k({},N),r),{components:i,mdxType:"MDXLayout"}),(0,t.kt)("h1",k({},{id:"interface-edgegraphtypes"}),(0,t.kt)("inlineCode",{parentName:"h1"},"interface EdgeGraph.Types")),(0,t.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Extends:")," ",(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/EdgeGraphBase/Types/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"EdgeGraphBase.Types"))),(0,t.kt)("h2",k({},{id:"properties"}),"Properties"),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"_n"}),(0,t.kt)("inlineCode",{parentName:"h3"},"_N")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly _N: N;"))),(0,t.kt)("h4",k({},{id:"overrides"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphValues/interface#_N"}),"GraphValues._N"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"_v"}),(0,t.kt)("inlineCode",{parentName:"h3"},"_V")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-1"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly _V: V;"))),(0,t.kt)("h4",k({},{id:"overrides-1"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphValues/interface#_V"}),"GraphValues._V"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"builder"}),(0,t.kt)("inlineCode",{parentName:"h3"},"builder")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-2"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/EdgeGraph/Builder/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"EdgeGraph.Builder")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",k({},{id:"overrides-2"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/EdgeGraphBase/Types/interface#builder"}),"Types.builder"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"context"}),(0,t.kt)("inlineCode",{parentName:"h3"},"context")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-3"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/EdgeGraph/Context/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"EdgeGraph.Context")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",k({},{id:"overrides-3"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/EdgeGraphBase/Types/interface#context"}),"Types.context"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"link"}),(0,t.kt)("inlineCode",{parentName:"h3"},"link")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-4"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly link: Link<this['_N']>;"))),(0,t.kt)("h4",k({},{id:"overrides-4"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/VariantGraphBase/Types/interface#link"}),"Types.link"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linkconnections"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkConnections")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-5"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkConnections: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RSet")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",k({},{id:"overrides-5"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkConnections"}),"Types.linkConnections"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linkconnectionsbuilder"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkConnectionsBuilder")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-6"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkConnectionsBuilder: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Builder/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RSet.Builder")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",k({},{id:"overrides-6"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkConnectionsBuilder"}),"Types.linkConnectionsBuilder"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linkconnectionscontext"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkConnectionsContext")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-7"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkConnectionsContext: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Context/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RSet.Context")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",k({},{id:"overrides-7"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkConnectionsContext"}),"Types.linkConnectionsContext"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linkmap"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkMap")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-8"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkMap: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RMap")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RSet")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>>;"))),(0,t.kt)("h4",k({},{id:"overrides-8"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkMap"}),"Types.linkMap"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linkmapbuilder"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkMapBuilder")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-9"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkMapBuilder: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Builder/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RMap.Builder")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Builder/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RSet.Builder")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>>;"))),(0,t.kt)("h4",k({},{id:"overrides-9"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkMapBuilder"}),"Types.linkMapBuilder"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linkmapcontext"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkMapContext")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-10"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkMapContext: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",k({},{id:"overrides-10"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkMapContext"}),"Types.linkMapContext"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linkmapnonempty"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkMapNonEmpty")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-11"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkMapNonEmpty: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/NonEmpty/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RMap.NonEmpty")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RSet")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>>;"))),(0,t.kt)("h4",k({},{id:"overrides-11"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkMapNonEmpty"}),"Types.linkMapNonEmpty"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linktarget"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkTarget")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-12"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkTarget: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/Link/Target/type"}),(0,t.kt)("inlineCode",{parentName:"a"},"Link.Target")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",k({},{id:"overrides-12"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/VariantGraphBase/Types/interface#linkTarget"}),"Types.linkTarget"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"nonempty"}),(0,t.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-13"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/EdgeGraph/NonEmpty/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"EdgeGraph.NonEmpty")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",k({},{id:"overrides-13"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/EdgeGraphBase/Types/interface#nonEmpty"}),"Types.nonEmpty"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"normal"}),(0,t.kt)("inlineCode",{parentName:"h3"},"normal")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-14"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/EdgeGraph/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"EdgeGraph")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",k({},{id:"overrides-14"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/EdgeGraphBase/Types/interface#normal"}),"Types.normal"))))}C.isMDXComponent=!0}}]);