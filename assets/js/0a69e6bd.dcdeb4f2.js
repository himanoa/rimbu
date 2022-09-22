"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[37550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=p(n),c=l,k=m["".concat(d,".").concat(c)]||m[c]||s[c]||a;return n?i.createElement(k,o(o({ref:t},u),{},{components:n})):i.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>c,default:()=>y,frontMatter:()=>m,metadata:()=>k,toc:()=>f});var i=n(3905),l=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&u(e,n,t[n]);if(r)for(var n of r(t))p.call(t,n)&&u(e,n,t[n]);return e};const m={title:"GraphEmptyBase",slug:"/rimbu/graph/custom/GraphEmptyBase/class"},c="abstract class GraphEmptyBase",k={unversionedId:"rimbu_graph/custom/GraphEmptyBase.class",id:"rimbu_graph/custom/GraphEmptyBase.class",title:"GraphEmptyBase",description:"undocumented",source:"@site/api/rimbu_graph/custom/GraphEmptyBase.class.mdx",sourceDirName:"rimbu_graph/custom",slug:"/rimbu/graph/custom/GraphEmptyBase/class",permalink:"/api/rimbu/graph/custom/GraphEmptyBase/class",draft:!1,tags:[],version:"current",frontMatter:{title:"GraphEmptyBase",slug:"/rimbu/graph/custom/GraphEmptyBase/class"},sidebar:"defaultSidebar",previous:{title:"GraphEmpty<N,V,Tp,TpG>",permalink:"/api/rimbu/graph/custom/GraphEmpty/class"},next:{title:"GraphNonEmpty<N,Tp,TpG>",permalink:"/api/rimbu/graph/custom/GraphNonEmpty/class"}},v={},f=[{value:"Properties",id:"properties",level:2},{value:"<code>connectionSize</code>",id:"connectionsize",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>isEmpty</code>",id:"isempty",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>length</code>",id:"length",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>nodeSize</code>",id:"nodesize",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>size</code>",id:"size",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>[Symbol.iterator]</code>",id:"symboliterator",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>assumeNonEmpty</code>",id:"assumenonempty",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"<code>disconnect</code>",id:"disconnect",level:3},{value:"Definition",id:"definition-7",level:4},{value:"<code>disconnectAll</code>",id:"disconnectall",level:3},{value:"Definition",id:"definition-8",level:4},{value:"<code>filter</code>",id:"filter",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>forEach</code>",id:"foreach",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>getConnectionStreamFrom</code>",id:"getconnectionstreamfrom",level:3},{value:"Definition",id:"definition-11",level:4},{value:"<code>getConnectionStreamTo</code>",id:"getconnectionstreamto",level:3},{value:"Definition",id:"definition-12",level:4},{value:"<code>hasConnection</code>",id:"hasconnection",level:3},{value:"Definition",id:"definition-13",level:4},{value:"<code>hasNode</code>",id:"hasnode",level:3},{value:"Definition",id:"definition-14",level:4},{value:"<code>isSink</code>",id:"issink",level:3},{value:"Definition",id:"definition-15",level:4},{value:"<code>isSource</code>",id:"issource",level:3},{value:"Definition",id:"definition-16",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-17",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>remove</code>",id:"remove",level:3},{value:"Definition",id:"definition-18",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"<code>removeNode</code>",id:"removenode",level:3},{value:"Definition",id:"definition-19",level:4},{value:"<code>removeNodes</code>",id:"removenodes",level:3},{value:"Definition",id:"definition-20",level:4},{value:"<code>removeUnconnectedNodes</code>",id:"removeunconnectednodes",level:3},{value:"Definition",id:"definition-21",level:4},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition-22",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"<code>streamConnections</code>",id:"streamconnections",level:3},{value:"Definition",id:"definition-23",level:4},{value:"<code>streamNodes</code>",id:"streamnodes",level:3},{value:"Definition",id:"definition-24",level:4},{value:"<code>toArray</code>",id:"toarray",level:3},{value:"Definition",id:"definition-25",level:4},{value:"Overrides",id:"overrides-10",level:4}],h={toc:f};function y(e){var t,n=e,{components:l}=n,u=((e,t)=>{var n={};for(var i in e)d.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&r)for(var i of r(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=s(s({},h),u),a(t,o({components:l,mdxType:"MDXLayout"}))),(0,i.kt)("h1",s({},{id:"abstract-class-graphemptybase"}),(0,i.kt)("inlineCode",{parentName:"h1"},"abstract class GraphEmptyBase")),(0,i.kt)("p",null,"undocumented"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Extends:")," ",(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/EmptyBase/class"}),(0,i.kt)("inlineCode",{parentName:"a"},"EmptyBase"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Extended by:")," ",(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphEmpty/class"}),(0,i.kt)("inlineCode",{parentName:"a"},"GraphEmpty<N,V,Tp,TpG>")),", ",(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphEmpty/class"}),(0,i.kt)("inlineCode",{parentName:"a"},"ValuedGraphEmpty<N,V,Tp,TpG>"))),(0,i.kt)("h2",s({},{id:"properties"}),"Properties"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"connectionsize"}),(0,i.kt)("inlineCode",{parentName:"h3"},"connectionSize")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get connectionSize(): 0;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"isempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"isEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-1"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get isEmpty(): true;"))),(0,i.kt)("h4",s({},{id:"overrides"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/EmptyBase/class#isEmpty"}),"EmptyBase.isEmpty"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"length"}),(0,i.kt)("inlineCode",{parentName:"h3"},"length")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-2"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get length(): 0;"))),(0,i.kt)("h4",s({},{id:"overrides-1"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/EmptyBase/class#length"}),"EmptyBase.length"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"nodesize"}),(0,i.kt)("inlineCode",{parentName:"h3"},"nodeSize")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-3"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get nodeSize(): 0;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"size"}),(0,i.kt)("inlineCode",{parentName:"h3"},"size")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-4"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"get size(): 0;"))),(0,i.kt)("h4",s({},{id:"overrides-2"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/EmptyBase/class#size"}),"EmptyBase.size"))),(0,i.kt)("h2",s({},{id:"methods"}),"Methods"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"symboliterator"}),(0,i.kt)("inlineCode",{parentName:"h3"},"[Symbol.iterator]")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-5"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[Symbol.iterator](): "),(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/FastIterator/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"FastIterator")),(0,i.kt)("inlineCode",{parentName:"p"},"<any>;"))),(0,i.kt)("h4",s({},{id:"overrides-3"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/EmptyBase/class#%5BSymbol.iterator%5D"}),"EmptyBase.[Symbol.iterator]"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"assumenonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"assumeNonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-6"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assumeNonEmpty(): never;"))),(0,i.kt)("h4",s({},{id:"overrides-4"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/EmptyBase/class#assumeNonEmpty"}),"EmptyBase.assumeNonEmpty"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"disconnect"}),(0,i.kt)("inlineCode",{parentName:"h3"},"disconnect")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-7"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"disconnect(): any;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"disconnectall"}),(0,i.kt)("inlineCode",{parentName:"h3"},"disconnectAll")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-8"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"disconnectAll(): any;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"filter"}),(0,i.kt)("inlineCode",{parentName:"h3"},"filter")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-9"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"filter(): any;"))),(0,i.kt)("h4",s({},{id:"overrides-5"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/EmptyBase/class#filter"}),"EmptyBase.filter"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"foreach"}),(0,i.kt)("inlineCode",{parentName:"h3"},"forEach")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-10"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"forEach(): void;"))),(0,i.kt)("h4",s({},{id:"overrides-6"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/EmptyBase/class#forEach"}),"EmptyBase.forEach"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"getconnectionstreamfrom"}),(0,i.kt)("inlineCode",{parentName:"h3"},"getConnectionStreamFrom")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-11"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getConnectionStreamFrom(): "),(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"Stream")),(0,i.kt)("inlineCode",{parentName:"p"},"<any>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"getconnectionstreamto"}),(0,i.kt)("inlineCode",{parentName:"h3"},"getConnectionStreamTo")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-12"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getConnectionStreamTo(): "),(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"Stream")),(0,i.kt)("inlineCode",{parentName:"p"},"<any>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"hasconnection"}),(0,i.kt)("inlineCode",{parentName:"h3"},"hasConnection")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-13"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hasConnection(): false;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"hasnode"}),(0,i.kt)("inlineCode",{parentName:"h3"},"hasNode")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-14"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hasNode(): false;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"issink"}),(0,i.kt)("inlineCode",{parentName:"h3"},"isSink")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-15"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isSink(): false;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"issource"}),(0,i.kt)("inlineCode",{parentName:"h3"},"isSource")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-16"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isSource(): false;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"nonempty"}),(0,i.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-17"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nonEmpty(): false;"))),(0,i.kt)("h4",s({},{id:"overrides-7"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/EmptyBase/class#nonEmpty"}),"EmptyBase.nonEmpty"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"remove"}),(0,i.kt)("inlineCode",{parentName:"h3"},"remove")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-18"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"remove(): any;"))),(0,i.kt)("h4",s({},{id:"overrides-8"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/EmptyBase/class#remove"}),"EmptyBase.remove"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"removenode"}),(0,i.kt)("inlineCode",{parentName:"h3"},"removeNode")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-19"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"removeNode(): any;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"removenodes"}),(0,i.kt)("inlineCode",{parentName:"h3"},"removeNodes")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-20"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"removeNodes(): any;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"removeunconnectednodes"}),(0,i.kt)("inlineCode",{parentName:"h3"},"removeUnconnectedNodes")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-21"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"removeUnconnectedNodes(): any;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"stream"}),(0,i.kt)("inlineCode",{parentName:"h3"},"stream")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-22"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stream(): "),(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"Stream")),(0,i.kt)("inlineCode",{parentName:"p"},"<any>;"))),(0,i.kt)("h4",s({},{id:"overrides-9"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/EmptyBase/class#stream"}),"EmptyBase.stream"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"streamconnections"}),(0,i.kt)("inlineCode",{parentName:"h3"},"streamConnections")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-23"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"streamConnections(): "),(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"Stream")),(0,i.kt)("inlineCode",{parentName:"p"},"<any>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"streamnodes"}),(0,i.kt)("inlineCode",{parentName:"h3"},"streamNodes")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-24"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"streamNodes(): "),(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,i.kt)("inlineCode",{parentName:"a"},"Stream")),(0,i.kt)("inlineCode",{parentName:"p"},"<any>;")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",s({},{id:"toarray"}),(0,i.kt)("inlineCode",{parentName:"h3"},"toArray")),(0,i.kt)("p",null,"undocumented")),(0,i.kt)("h4",s({},{id:"definition-25"}),"Definition"),(0,i.kt)("code",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"toArray(): [];"))),(0,i.kt)("h4",s({},{id:"overrides-10"}),"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/EmptyBase/class#toArray"}),"EmptyBase.toArray"))))}y.isMDXComponent=!0}}]);