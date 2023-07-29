"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[4482],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},h=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),s=p(t),u=a,d=s["".concat(c,".").concat(u)]||s[u]||m[u]||i;return t?r.createElement(d,l(l({ref:n},h),{},{components:t})):r.createElement(d,l({ref:n},h))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},56098:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>f,default:()=>w,frontMatter:()=>d,metadata:()=>C,toc:()=>k});var r=t(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&h(e,t,n[t]);if(o)for(var t of o(n))p.call(n,t)&&h(e,t,n[t]);return e},m=(e,n)=>i(e,l(n)),u=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const d={title:"RemoteChannelServer",slug:"/rimbu/channel/RemoteChannelServer/interface"},f="interface RemoteChannelServer",C={unversionedId:"rimbu_channel/RemoteChannelServer.interface",id:"rimbu_channel/RemoteChannelServer.interface",title:"RemoteChannelServer",description:"A RemoteChannel server communicates with a RemoteChannel client through the given message port, and allows clients to easily create new channels to communicate with processes in the server context. The server needs to set up handlers to deal with the created channels.",source:"@site/api/rimbu_channel/RemoteChannelServer.interface.mdx",sourceDirName:"rimbu_channel",slug:"/rimbu/channel/RemoteChannelServer/interface",permalink:"/api/rimbu/channel/RemoteChannelServer/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"RemoteChannelServer",slug:"/rimbu/channel/RemoteChannelServer/interface"},sidebar:"defaultSidebar",previous:{title:"RemoteChannelServer.Constructors",permalink:"/api/rimbu/channel/RemoteChannelServer/Constructors/interface"},next:{title:"RemoteObject (namespace)",permalink:"/api/rimbu/channel/RemoteObject/namespace"}},v={},k=[{value:"Properties",id:"properties",level:2},{value:"<code>crossChannelCh</code>",id:"crosschannelch",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>readChannelCh</code>",id:"readchannelch",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>writeChannelCh</code>",id:"writechannelch",level:3},{value:"Definition",id:"definition-2",level:4}],b={toc:k},y="wrapper";function w(e){var n=e,{components:t}=n,a=u(n,["components"]);return(0,r.kt)(y,m(s(s({},b),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"interface-remotechannelserver"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface RemoteChannelServer")),(0,r.kt)("p",null,"A RemoteChannel server communicates with a RemoteChannel client through the given message port, and allows clients to easily create new channels to communicate with processes in the server context. The server needs to set up handlers to deal with the created channels."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/channel/RemoteChannelServer/namespace"}),"RemoteChannelServer")),(0,r.kt)("h2",s({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"crosschannelch"}),(0,r.kt)("inlineCode",{parentName:"h3"},"crossChannelCh")),(0,r.kt)("p",null,"Channel that will send new cross channels requested by the client.")),(0,r.kt)("h4",s({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly crossChannelCh: "),(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/channel/Channel/Read/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Channel.Read")),(0,r.kt)("inlineCode",{parentName:"p"},"<"),(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/channel/CrossChannel/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"CrossChannel")),(0,r.kt)("inlineCode",{parentName:"p"},"<unknown, unknown>>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"readchannelch"}),(0,r.kt)("inlineCode",{parentName:"h3"},"readChannelCh")),(0,r.kt)("p",null,"Channel that will send new read channels requested by the client.")),(0,r.kt)("h4",s({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly readChannelCh: "),(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/channel/Channel/Read/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Channel.Read")),(0,r.kt)("inlineCode",{parentName:"p"},"<"),(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/channel/Channel/Read/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Channel.Read")),(0,r.kt)("inlineCode",{parentName:"p"},"<unknown>>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",s({},{id:"writechannelch"}),(0,r.kt)("inlineCode",{parentName:"h3"},"writeChannelCh")),(0,r.kt)("p",null,"Channel that will send new write channels requested by the client.")),(0,r.kt)("h4",s({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly writeChannelCh: "),(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/channel/Channel/Read/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Channel.Read")),(0,r.kt)("inlineCode",{parentName:"p"},"<"),(0,r.kt)("a",s({parentName:"p"},{href:"/api/rimbu/channel/Channel/Write/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Channel.Write")),(0,r.kt)("inlineCode",{parentName:"p"},"<unknown>>;")))))}w.isMDXComponent=!0}}]);