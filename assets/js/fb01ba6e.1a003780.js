"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[35736],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>s});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(t),c=r,s=m["".concat(p,".").concat(c)]||m[c]||k[c]||l;return t?a.createElement(s,i(i({ref:n},u),{},{components:t})):a.createElement(s,i({ref:n},u))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},53763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>h,default:()=>v,frontMatter:()=>s,metadata:()=>C,toc:()=>b});var a=t(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&u(e,t,n[t]);if(o)for(var t of o(n))d.call(n,t)&&u(e,t,n[t]);return e},k=(e,n)=>l(e,i(n)),c=(e,n)=>{var t={};for(var a in e)p.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))n.indexOf(a)<0&&d.call(e,a)&&(t[a]=e[a]);return t};const s={title:"Channel.Constructors",slug:"/rimbu/channel/Channel/Constructors/interface"},h="interface Channel.Constructors",C={unversionedId:"rimbu_channel/Channel/Constructors.interface",id:"rimbu_channel/Channel/Constructors.interface",title:"Channel.Constructors",description:"Defines the static Channel API.",source:"@site/api/rimbu_channel/Channel/Constructors.interface.mdx",sourceDirName:"rimbu_channel/Channel",slug:"/rimbu/channel/Channel/Constructors/interface",permalink:"/api/rimbu/channel/Channel/Constructors/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"Channel.Constructors",slug:"/rimbu/channel/Channel/Constructors/interface"},sidebar:"defaultSidebar",previous:{title:"Channel.Config",permalink:"/api/rimbu/channel/Channel/Config/interface"},next:{title:"Error",permalink:"/api/rimbu/channel/Channel/Error/type"}},f={},b=[{value:"Properties",id:"properties",level:2},{value:"<code>Error</code>",id:"error",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>select</code>",id:"select",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>selectMap</code>",id:"selectmap",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>create</code>",id:"create",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4}],N={toc:b},y="wrapper";function v(e){var n=e,{components:t}=n,r=c(n,["components"]);return(0,a.kt)(y,k(m(m({},N),r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"interface-channelconstructors"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface Channel.Constructors")),(0,a.kt)("p",null,"Defines the static ",(0,a.kt)("inlineCode",{parentName:"p"},"Channel")," API."),(0,a.kt)("h2",m({},{id:"properties"}),"Properties"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"error"}),(0,a.kt)("inlineCode",{parentName:"h3"},"Error")),(0,a.kt)("p",null,"The types of possible Channel errors.")),(0,a.kt)("h4",m({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"get Error(): typeof ChannelError;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"select"}),(0,a.kt)("inlineCode",{parentName:"h3"},"select")),(0,a.kt)("p",null,"Resolves, from the given channel array, to the channel value that is received first, taking into account the provided options.")),(0,a.kt)("h4",m({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"select: {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"<CS extends "),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/channel/Channel/Read/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Channel.Read")),(0,a.kt)("inlineCode",{parentName:"p"},"<any>[], RT>(channels: CS, options: {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"signal?: AbortSignal "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"timeoutMs?: number "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"recover: (channelError: "),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/channel/Channel/Error/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"Channel.Error")),(0,a.kt)("inlineCode",{parentName:"p"},") => RT;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}): Promise<RT "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"[K in keyof CS]: "),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/channel/Channel/MessageType/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"Channel.MessageType")),(0,a.kt)("inlineCode",{parentName:"p"},"<CS[K]>;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}[number]>;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"<CS extends "),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/channel/Channel/Read/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Channel.Read")),(0,a.kt)("inlineCode",{parentName:"p"},"<any>[]>(channels: CS, options?: {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"signal?: AbortSignal "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"timeoutMs?: number "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"recover?: undefined;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}): Promise<{"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"[K in keyof CS]: "),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/channel/Channel/MessageType/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"Channel.MessageType")),(0,a.kt)("inlineCode",{parentName:"p"},"<CS[K]>;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}[number]>;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"};")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"selectmap"}),(0,a.kt)("inlineCode",{parentName:"h3"},"selectMap")),(0,a.kt)("p",null,"Resolves, from the given tuples of channels and channel value handlers, the result of applying the corresponding channel handler to the first channel value that is received. options.")),(0,a.kt)("h4",m({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"selectMap: {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"<TS extends any[], HS extends {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"[K in keyof TS]: ["),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/channel/Channel/Read/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Channel.Read")),(0,a.kt)("inlineCode",{parentName:"p"},"<TS[K]>, (value: TS[K]) => any];"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}>(options?: {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"signal?: AbortSignal "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"timeoutMs?: number "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"recover?: undefined;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}, ...cases: HS & {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"[K in keyof TS]: ["),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/channel/Channel/Read/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Channel.Read")),(0,a.kt)("inlineCode",{parentName:"p"},"<TS[K]>, (value: TS[K]) => any];"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}): Promise<{"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"[K in keyof HS]: Promise<ReturnType<HS[K][1]>>;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}[number]>;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"<TS extends any[], HS extends {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"[K in keyof TS]: ["),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/channel/Channel/Read/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Channel.Read")),(0,a.kt)("inlineCode",{parentName:"p"},"<TS[K]>, (value: TS[K]) => any];"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}, RT>(options: {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"signal?: AbortSignal "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"timeoutMs?: number "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"recover: (channelError: "),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/channel/Channel/Error/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"Channel.Error")),(0,a.kt)("inlineCode",{parentName:"p"},") => RT;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}, ...cases: HS & {"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"[K in keyof TS]: ["),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/channel/Channel/Read/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Channel.Read")),(0,a.kt)("inlineCode",{parentName:"p"},"<TS[K]>, (value: TS[K]) => any];"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}): Promise<{"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"[K in keyof HS]: Promise<ReturnType<HS[K][1]>>;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"}[number] "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," RT>;"),(0,a.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"};")))),(0,a.kt)("h2",m({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",m({},{id:"create"}),(0,a.kt)("inlineCode",{parentName:"h3"},"create")),(0,a.kt)("p",null,"Returns a new Channel instance that can be used to synchronize asynchronous processes within a single thread.")),(0,a.kt)("h4",m({},{id:"definition-3"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create<T = void>(options?: "),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/channel/Channel/Config/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Channel.Config")),(0,a.kt)("inlineCode",{parentName:"p"},"): "),(0,a.kt)("a",m({parentName:"p"},{href:"/api/rimbu/channel/Channel/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Channel")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h4",m({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Default"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"void")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"the channel message type")))),(0,a.kt)("h4",m({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"options")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"/api/rimbu/channel/Channel/Config/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Channel.Config"))),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"(optional) the options used to create the channel",(0,a.kt)("br",null)," - capacity: (optional) the buffer size of the channel",(0,a.kt)("br",null)," - validator: (optional) a function taking a message and returning true if the message is of a valid type, false otherwise"))))))}v.isMDXComponent=!0}}]);