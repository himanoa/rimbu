"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[63037],{3905:function(e,n,i){i.d(n,{Zo:function(){return u},kt:function(){return m}});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function p(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=t.createContext({}),d=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},u=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(i),m=a,c=s["".concat(o,".").concat(m)]||s[m]||k[m]||r;return i?t.createElement(c,l(l({ref:n},u),{},{components:i})):t.createElement(c,l({ref:n},u))}));function m(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=s;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var d=2;d<r;d++)l[d]=i[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}s.displayName="MDXCreateElement"},70049:function(e,n,i){i.r(n),i.d(n,{assets:function(){return h},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var t=i(3905),a=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,n,i)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,k=(e,n)=>{for(var i in n||(n={}))o.call(n,i)&&u(e,i,n[i]);if(p)for(var i of p(n))d.call(n,i)&&u(e,i,n[i]);return e};const s={title:"ValuedGraph.Types",slug:"/rimbu/graph/ValuedGraph/Types/interface"},m="interface ValuedGraph.Types",c={unversionedId:"rimbu_graph/ValuedGraph/Types.interface",id:"rimbu_graph/ValuedGraph/Types.interface",title:"ValuedGraph.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_graph/ValuedGraph/Types.interface.mdx",sourceDirName:"rimbu_graph/ValuedGraph",slug:"/rimbu/graph/ValuedGraph/Types/interface",permalink:"/api/rimbu/graph/ValuedGraph/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"ValuedGraph.Types",slug:"/rimbu/graph/ValuedGraph/Types/interface"},sidebar:"defaultSidebar",previous:{title:"ValuedGraph.NonEmpty<N,V>",permalink:"/api/rimbu/graph/ValuedGraph/NonEmpty/interface"},next:{title:"ValuedGraph<N,V>",permalink:"/api/rimbu/graph/ValuedGraph/interface"}},h={},f=[{value:"Properties",id:"properties",level:2},{value:"<code>_N</code>",id:"_n",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>_V</code>",id:"_v",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>link</code>",id:"link",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"<code>linkConnections</code>",id:"linkconnections",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>linkConnectionsBuilder</code>",id:"linkconnectionsbuilder",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>linkConnectionsContext</code>",id:"linkconnectionscontext",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>linkMap</code>",id:"linkmap",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"<code>linkMapBuilder</code>",id:"linkmapbuilder",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"<code>linkMapContext</code>",id:"linkmapcontext",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Overrides",id:"overrides-10",level:4},{value:"<code>linkMapNonEmpty</code>",id:"linkmapnonempty",level:3},{value:"Definition",id:"definition-11",level:4},{value:"Overrides",id:"overrides-11",level:4},{value:"<code>linkTarget</code>",id:"linktarget",level:3},{value:"Definition",id:"definition-12",level:4},{value:"Overrides",id:"overrides-12",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-13",level:4},{value:"Overrides",id:"overrides-13",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-14",level:4},{value:"Overrides",id:"overrides-14",level:4}],v={toc:f};function y(e){var n,i=e,{components:a}=i,u=((e,n)=>{var i={};for(var t in e)o.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(null!=e&&p)for(var t of p(e))n.indexOf(t)<0&&d.call(e,t)&&(i[t]=e[t]);return i})(i,["components"]);return(0,t.kt)("wrapper",(n=k(k({},v),u),r(n,l({components:a,mdxType:"MDXLayout"}))),(0,t.kt)("h1",k({},{id:"interface-valuedgraphtypes"}),(0,t.kt)("inlineCode",{parentName:"h1"},"interface ValuedGraph.Types")),(0,t.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Extends:")," ",(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Types/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"ValuedGraphBase.Types"))),(0,t.kt)("h2",k({},{id:"properties"}),"Properties"),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"_n"}),(0,t.kt)("inlineCode",{parentName:"h3"},"_N")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly _N: N;"))),(0,t.kt)("h4",k({},{id:"overrides"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphValues/interface#_N"}),"GraphValues._N"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"_v"}),(0,t.kt)("inlineCode",{parentName:"h3"},"_V")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-1"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly _V: V;"))),(0,t.kt)("h4",k({},{id:"overrides-1"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphValues/interface#_V"}),"GraphValues._V"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"builder"}),(0,t.kt)("inlineCode",{parentName:"h3"},"builder")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-2"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/ValuedGraph/Builder/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"ValuedGraph.Builder")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>;"))),(0,t.kt)("h4",k({},{id:"overrides-2"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Types/interface#builder"}),"Types.builder"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"context"}),(0,t.kt)("inlineCode",{parentName:"h3"},"context")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-3"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/ValuedGraph/Context/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"ValuedGraph.Context")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",k({},{id:"overrides-3"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Types/interface#context"}),"Types.context"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"link"}),(0,t.kt)("inlineCode",{parentName:"h3"},"link")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-4"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly link: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedLink/type"}),(0,t.kt)("inlineCode",{parentName:"a"},"ValuedLink")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>;"))),(0,t.kt)("h4",k({},{id:"overrides-4"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/VariantGraphBase/Types/interface#link"}),"Types.link"),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/VariantValuedGraphBase/Types/interface#link"}),"Types.link"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linkconnections"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkConnections")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-5"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkConnections: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RMap")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>;"))),(0,t.kt)("h4",k({},{id:"overrides-5"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Types/interface#linkConnections"}),"Types.linkConnections"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linkconnectionsbuilder"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkConnectionsBuilder")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-6"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkConnectionsBuilder: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Builder/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RMap.Builder")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>;"))),(0,t.kt)("h4",k({},{id:"overrides-6"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Types/interface#linkConnectionsBuilder"}),"Types.linkConnectionsBuilder"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linkconnectionscontext"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkConnectionsContext")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-7"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkConnectionsContext: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",k({},{id:"overrides-7"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Types/interface#linkConnectionsContext"}),"Types.linkConnectionsContext"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linkmap"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkMap")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-8"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkMap: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RMap")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RMap")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>>;"))),(0,t.kt)("h4",k({},{id:"overrides-8"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Types/interface#linkMap"}),"Types.linkMap"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linkmapbuilder"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkMapBuilder")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-9"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkMapBuilder: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Builder/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RMap.Builder")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Builder/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RMap.Builder")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>>;"))),(0,t.kt)("h4",k({},{id:"overrides-9"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Types/interface#linkMapBuilder"}),"Types.linkMapBuilder"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linkmapcontext"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkMapContext")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-10"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkMapContext: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/Context/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RMap.Context")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N']>;"))),(0,t.kt)("h4",k({},{id:"overrides-10"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Types/interface#linkMapContext"}),"Types.linkMapContext"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linkmapnonempty"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkMapNonEmpty")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-11"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkMapNonEmpty: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/NonEmpty/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RMap.NonEmpty")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/collection-types/map/RMap/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"RMap")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>>;"))),(0,t.kt)("h4",k({},{id:"overrides-11"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Types/interface#linkMapNonEmpty"}),"Types.linkMapNonEmpty"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"linktarget"}),(0,t.kt)("inlineCode",{parentName:"h3"},"linkTarget")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-12"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly linkTarget: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedLink/Target/type"}),(0,t.kt)("inlineCode",{parentName:"a"},"ValuedLink.Target")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>;"))),(0,t.kt)("h4",k({},{id:"overrides-12"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/VariantGraphBase/Types/interface#linkTarget"}),"Types.linkTarget"),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/VariantValuedGraphBase/Types/interface#linkTarget"}),"Types.linkTarget"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"nonempty"}),(0,t.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-13"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/ValuedGraph/NonEmpty/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"ValuedGraph.NonEmpty")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>;"))),(0,t.kt)("h4",k({},{id:"overrides-13"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Types/interface#nonEmpty"}),"Types.nonEmpty"))),(0,t.kt)("details",null,(0,t.kt)("summary",null,(0,t.kt)("h3",k({},{id:"normal"}),(0,t.kt)("inlineCode",{parentName:"h3"},"normal")),(0,t.kt)("p",null,"undocumented")),(0,t.kt)("h4",k({},{id:"definition-14"}),"Definition"),(0,t.kt)("code",null,(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/ValuedGraph/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"ValuedGraph")),(0,t.kt)("inlineCode",{parentName:"p"},"<this['_N'], this['_V']>;"))),(0,t.kt)("h4",k({},{id:"overrides-14"}),"Overrides"),(0,t.kt)("p",null,(0,t.kt)("a",k({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/Types/interface#normal"}),"Types.normal"))))}y.isMDXComponent=!0}}]);