"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[82579],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(t),p=i,s=u["".concat(d,".").concat(p)]||u[p]||h[p]||r;return t?a.createElement(s,l(l({ref:n},m),{},{components:t})):a.createElement(s,l({ref:n},m))}));function s(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},54326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>f,default:()=>y,frontMatter:()=>s,metadata:()=>C,toc:()=>v});var a=t(3905),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&m(e,t,n[t]);if(o)for(var t of o(n))c.call(n,t)&&m(e,t,n[t]);return e},h=(e,n)=>r(e,l(n)),p=(e,n)=>{var t={};for(var a in e)d.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))n.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const s={title:"RemoteChannelClient.ReadChannelConfig",slug:"/rimbu/channel/RemoteChannelClient/ReadChannelConfig/interface"},f="interface RemoteChannelClient.ReadChannelConfig",C={unversionedId:"rimbu_channel/RemoteChannelClient/ReadChannelConfig.interface",id:"rimbu_channel/RemoteChannelClient/ReadChannelConfig.interface",title:"RemoteChannelClient.ReadChannelConfig",description:"Interface defining the configuration options for creating a remote Channel.Read channel",source:"@site/api/rimbu_channel/RemoteChannelClient/ReadChannelConfig.interface.mdx",sourceDirName:"rimbu_channel/RemoteChannelClient",slug:"/rimbu/channel/RemoteChannelClient/ReadChannelConfig/interface",permalink:"/api/rimbu/channel/RemoteChannelClient/ReadChannelConfig/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"RemoteChannelClient.ReadChannelConfig",slug:"/rimbu/channel/RemoteChannelClient/ReadChannelConfig/interface"},sidebar:"defaultSidebar",previous:{title:"RemoteChannelClient.CrossChannelConfig",permalink:"/api/rimbu/channel/RemoteChannelClient/CrossChannelConfig/interface"},next:{title:"RemoteChannelClient.WriteChannelConfig",permalink:"/api/rimbu/channel/RemoteChannelClient/WriteChannelConfig/interface"}},k={},v=[{value:"Properties",id:"properties",level:2},{value:"<code>channelId</code>",id:"channelid",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>handshakeAttemptTimeoutMs</code>",id:"handshakeattempttimeoutms",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>maxHandshakeAttempts</code>",id:"maxhandshakeattempts",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>rcsChannelTimeoutMs</code>",id:"rcschanneltimeoutms",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>validator</code>",id:"validator",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-3",level:4}],g={toc:v},b="wrapper";function y(e){var n=e,{components:t}=n,i=p(n,["components"]);return(0,a.kt)(b,h(u(u({},g),i),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"interface-remotechannelclientreadchannelconfig"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface RemoteChannelClient.ReadChannelConfig")),(0,a.kt)("p",null,"Interface defining the configuration options for creating a remote Channel.Read channel"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends:")," ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/channel/RemoteChannel/ReadConfig/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"RemoteChannel.ReadConfig"))),(0,a.kt)("h2",u({},{id:"properties"}),"Properties"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"channelid"}),(0,a.kt)("inlineCode",{parentName:"h3"},"channelId")),(0,a.kt)("p",null,"An ID used for the client and server to connect the correct channels to each other.")),(0,a.kt)("h4",u({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"channelId: string;"))),(0,a.kt)("h4",u({},{id:"overrides"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/channel/RemoteChannel/ReadConfig/interface#channelId"}),"ReadConfig.channelId"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"handshakeattempttimeoutms"}),(0,a.kt)("inlineCode",{parentName:"h3"},"handshakeAttemptTimeoutMs")),(0,a.kt)("p",null,"The amount of milliseconds to wait for a reponse to each handshake.")),(0,a.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"handshakeAttemptTimeoutMs?: number;"))),(0,a.kt)("h4",u({},{id:"overrides-1"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/channel/RemoteChannel/ReadConfig/interface#handshakeAttemptTimeoutMs"}),"ReadConfig.handshakeAttemptTimeoutMs"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"maxhandshakeattempts"}),(0,a.kt)("inlineCode",{parentName:"h3"},"maxHandshakeAttempts")),(0,a.kt)("p",null,"The amount of handshake attempts to make before failing.")),(0,a.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"maxHandshakeAttempts?: number;"))),(0,a.kt)("h4",u({},{id:"overrides-2"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/channel/RemoteChannel/ReadConfig/interface#maxHandshakeAttempts"}),"ReadConfig.maxHandshakeAttempts"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"rcschanneltimeoutms"}),(0,a.kt)("inlineCode",{parentName:"h3"},"rcsChannelTimeoutMs")),(0,a.kt)("p",null,"The amount of ms to wait when blocked sending to the RCS channel.")),(0,a.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rcsChannelTimeoutMs?: number;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"validator"}),(0,a.kt)("inlineCode",{parentName:"h3"},"validator")),(0,a.kt)("p",null,"A function taking a message and returning true if the message is of a valid type, false otherwise")),(0,a.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"validator?: (value: any) => boolean;"))),(0,a.kt)("h4",u({},{id:"overrides-3"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/channel/RemoteChannel/ReadConfig/interface#validator"}),"ReadConfig.validator"))))}y.isMDXComponent=!0}}]);