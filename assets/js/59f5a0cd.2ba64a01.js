"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[69168],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),d=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(p.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(t),m=r,c=s["".concat(p,".").concat(m)]||s[m]||k[m]||a;return t?i.createElement(c,l(l({ref:n},u),{},{components:t})):i.createElement(c,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<a;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},54178:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var i=t(3905),r=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,k=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&u(e,t,n[t]);if(o)for(var t of o(n))d.call(n,t)&&u(e,t,n[t]);return e};const s={title:"ArrowGraph.Types",slug:"/rimbu/graph/ArrowGraph/Types/interface"},m="interface ArrowGraph.Types",c={unversionedId:"rimbu_graph/ArrowGraph/Types.interface",id:"rimbu_graph/ArrowGraph/Types.interface",title:"ArrowGraph.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_graph/ArrowGraph/Types.interface.mdx",sourceDirName:"rimbu_graph/ArrowGraph",slug:"/rimbu/graph/ArrowGraph/Types/interface",permalink:"/api/rimbu/graph/ArrowGraph/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"ArrowGraph.Types",slug:"/rimbu/graph/ArrowGraph/Types/interface"},sidebar:"defaultSidebar",previous:{title:"ArrowGraph.NonEmpty<N>",permalink:"/api/rimbu/graph/ArrowGraph/NonEmpty/interface"},next:{title:"ArrowGraph<N>",permalink:"/api/rimbu/graph/ArrowGraph/interface"}},h={},f=[{value:"Properties",id:"properties",level:2},{value:"<code>_N</code>",id:"_n",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>_V</code>",id:"_v",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>link</code>",id:"link",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"<code>linkConnections</code>",id:"linkconnections",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>linkConnectionsBuilder</code>",id:"linkconnectionsbuilder",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>linkConnectionsContext</code>",id:"linkconnectionscontext",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>linkMap</code>",id:"linkmap",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"<code>linkMapBuilder</code>",id:"linkmapbuilder",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"<code>linkMapContext</code>",id:"linkmapcontext",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Overrides",id:"overrides-10",level:4},{value:"<code>linkMapNonEmpty</code>",id:"linkmapnonempty",level:3},{value:"Definition",id:"definition-11",level:4},{value:"Overrides",id:"overrides-11",level:4},{value:"<code>linkTarget</code>",id:"linktarget",level:3},{value:"Definition",id:"definition-12",level:4},{value:"Overrides",id:"overrides-12",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-13",level:4},{value:"Overrides",id:"overrides-13",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-14",level:4},{value:"Overrides",id:"overrides-14",level:4}],v={toc:f};function y(e){var n,t=e,{components:r}=t,u=((e,n)=>{var t={};for(var i in e)p.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&o)for(var i of o(e))n.indexOf(i)<0&&d.call(e,i)&&(t[i]=e[i]);return t})(t,["components"]);return(0,i.kt)("wrapper",(n=k(k({},v),u),a(n,l({components:r,mdxType:"MDXLayout"}))),(0,i.kt)("h1",k({},{id:"interface-arrowgraphtypes"}),(0,i.kt)("inlineCode",{parentName:"h1"},"interface ArrowGraph.Types")),(0,i.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Extends:")," ",(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ArrowGraphBase/Types/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"ArrowGraphBase.Types"))),(0,i.kt)("h2",k({},{id:"properties"}),"Properties"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",k({},{id:"_n"}),(0,i.kt)("inlineCode",{parentName:"h3"},"_N")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",k({},{id:"definition"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly _N: N;"))),(0,i.kt)("h4",k({},{id:"overrides"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphValues/interface#_N"}),"GraphValues._N"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",k({},{id:"_v"}),(0,i.kt)("inlineCode",{parentName:"h3"},"_V")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",k({},{id:"definition-1"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly _V: V;"))),(0,i.kt)("h4",k({},{id:"overrides-1"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphValues/interface#_V"}),"GraphValues._V"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",k({},{id:"builder"}),(0,i.kt)("inlineCode",{parentName:"h3"},"builder")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",k({},{id:"definition-2"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/ArrowGraph/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"ArrowGraph.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,i.kt)("h4",k({},{id:"overrides-2"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ArrowGraphBase/Types/interface#builder"}),"Types.builder"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",k({},{id:"context"}),(0,i.kt)("inlineCode",{parentName:"h3"},"context")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",k({},{id:"definition-3"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/ArrowGraph/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"ArrowGraph.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,i.kt)("h4",k({},{id:"overrides-3"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ArrowGraphBase/Types/interface#context"}),"Types.context"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",k({},{id:"link"}),(0,i.kt)("inlineCode",{parentName:"h3"},"link")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",k({},{id:"definition-4"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly link: "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/Link/type"}),(0,i.kt)("inlineCode",{parentName:"a"},"Link")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,i.kt)("h4",k({},{id:"overrides-4"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/VariantGraphBase/Types/interface#link"}),"Types.link"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",k({},{id:"linkconnections"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkConnections")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",k({},{id:"definition-5"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkConnections: "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RSet")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,i.kt)("h4",k({},{id:"overrides-5"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkConnections"}),"Types.linkConnections"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",k({},{id:"linkconnectionsbuilder"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkConnectionsBuilder")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",k({},{id:"definition-6"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkConnectionsBuilder: "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RSet.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,i.kt)("h4",k({},{id:"overrides-6"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkConnectionsBuilder"}),"Types.linkConnectionsBuilder"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",k({},{id:"linkconnectionscontext"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkConnectionsContext")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",k({},{id:"definition-7"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkConnectionsContext: "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RSet.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,i.kt)("h4",k({},{id:"overrides-7"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkConnectionsContext"}),"Types.linkConnectionsContext"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",k({},{id:"linkmap"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkMap")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",k({},{id:"definition-8"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkMap: "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RMap")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RSet")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>>;"))),(0,i.kt)("h4",k({},{id:"overrides-8"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkMap"}),"Types.linkMap"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",k({},{id:"linkmapbuilder"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkMapBuilder")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",k({},{id:"definition-9"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkMapBuilder: "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RMap.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Builder/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RSet.Builder")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>>;"))),(0,i.kt)("h4",k({},{id:"overrides-9"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkMapBuilder"}),"Types.linkMapBuilder"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",k({},{id:"linkmapcontext"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkMapContext")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",k({},{id:"definition-10"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkMapContext: "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,i.kt)("h4",k({},{id:"overrides-10"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkMapContext"}),"Types.linkMapContext"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",k({},{id:"linkmapnonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkMapNonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",k({},{id:"definition-11"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkMapNonEmpty: "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RMap.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"RSet")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>>;"))),(0,i.kt)("h4",k({},{id:"overrides-11"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/Types/interface#linkMapNonEmpty"}),"Types.linkMapNonEmpty"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",k({},{id:"linktarget"}),(0,i.kt)("inlineCode",{parentName:"h3"},"linkTarget")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",k({},{id:"definition-12"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly linkTarget: "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/Link/Target/type"}),(0,i.kt)("inlineCode",{parentName:"a"},"Link.Target")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,i.kt)("h4",k({},{id:"overrides-12"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/VariantGraphBase/Types/interface#linkTarget"}),"Types.linkTarget"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",k({},{id:"nonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",k({},{id:"definition-13"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/ArrowGraph/NonEmpty/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"ArrowGraph.NonEmpty")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,i.kt)("h4",k({},{id:"overrides-13"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ArrowGraphBase/Types/interface#nonEmpty"}),"Types.nonEmpty"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",k({},{id:"normal"}),(0,i.kt)("inlineCode",{parentName:"h3"},"normal")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",k({},{id:"definition-14"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/ArrowGraph/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"ArrowGraph")),(0,i.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,i.kt)("h4",k({},{id:"overrides-14"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ArrowGraphBase/Types/interface#normal"}),"Types.normal"))))}y.isMDXComponent=!0}}]);