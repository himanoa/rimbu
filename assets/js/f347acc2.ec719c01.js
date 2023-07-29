"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[36872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>y,frontMatter:()=>k,metadata:()=>g,toc:()=>h});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))m.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>l(e,i(t)),c=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n};const k={title:"RemoteChannel.SimpleMessagePort",slug:"/rimbu/channel/RemoteChannel/SimpleMessagePort/interface"},f="interface RemoteChannel.SimpleMessagePort",g={unversionedId:"rimbu_channel/RemoteChannel/SimpleMessagePort.interface",id:"rimbu_channel/RemoteChannel/SimpleMessagePort.interface",title:"RemoteChannel.SimpleMessagePort",description:"Interface used to perform low-level message communication between processes. Compatible with browser, Node, and Worker contexts.",source:"@site/api/rimbu_channel/RemoteChannel/SimpleMessagePort.interface.mdx",sourceDirName:"rimbu_channel/RemoteChannel",slug:"/rimbu/channel/RemoteChannel/SimpleMessagePort/interface",permalink:"/api/rimbu/channel/RemoteChannel/SimpleMessagePort/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"RemoteChannel.SimpleMessagePort",slug:"/rimbu/channel/RemoteChannel/SimpleMessagePort/interface"},sidebar:"defaultSidebar",previous:{title:"RemoteChannel.ReadConfig",permalink:"/api/rimbu/channel/RemoteChannel/ReadConfig/interface"},next:{title:"RemoteChannel.WriteConfig",permalink:"/api/rimbu/channel/RemoteChannel/WriteConfig/interface"}},b={},h=[{value:"Methods",id:"methods",level:2},{value:"<code>addEventListener</code>",id:"addeventlistener",level:3},{value:"Definition",id:"definition",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>postMessage</code>",id:"postmessage",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>removeEventListener</code>",id:"removeeventlistener",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Parameters",id:"parameters-2",level:4}],N={toc:h},v="wrapper";function y(e){var t=e,{components:n}=t,r=c(t,["components"]);return(0,a.kt)(v,u(d(d({},N),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",d({},{id:"interface-remotechannelsimplemessageport"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface RemoteChannel.SimpleMessagePort")),(0,a.kt)("p",null,"Interface used to perform low-level message communication between processes. Compatible with browser, Node, and Worker contexts."),(0,a.kt)("h2",d({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",d({},{id:"addeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addEventListener")),(0,a.kt)("p",null,"Adds a message listener to the message port.")),(0,a.kt)("h4",d({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener(type: 'message', listener: (ev: {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"data: any;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}) => any, options?: boolean "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"once?: boolean;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}): void;"))),(0,a.kt)("h4",d({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"type")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"'message'")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"only 'message' is supported.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"listener")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(ev: {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"data: any;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"}) => any")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"a callback function receiving the message data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"options")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"td"}," {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"once?: boolean;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"}")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"(optional) callback options"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",d({},{id:"postmessage"}),(0,a.kt)("inlineCode",{parentName:"h3"},"postMessage")),(0,a.kt)("p",null,"Sends a message to the message port.")),(0,a.kt)("h4",d({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"postMessage(message: any): void;"))),(0,a.kt)("h4",d({},{id:"parameters-1"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"message")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"any")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"the message to send"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",d({},{id:"removeeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeEventListener")),(0,a.kt)("p",null,"Removes a message listener from the message port.")),(0,a.kt)("h4",d({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"removeEventListener(type: 'message', listener: (ev: {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"data: any;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}) => any): void;"))),(0,a.kt)("h4",d({},{id:"parameters-2"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"type")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"'message'")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"only 'message' is supported.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"listener")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(ev: {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"data: any;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"td"},"}) => any")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"a callback function receiving the message data"))))))}y.isMDXComponent=!0}}]);