"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[41190],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,y=u["".concat(p,".").concat(d)]||u[d]||s[d]||o;return r?a.createElement(y,i(i({ref:t},m),{},{components:r})):a.createElement(y,i({ref:t},m))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>x,frontMatter:()=>y,metadata:()=>f,toc:()=>k});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&m(e,r,t[r]);return e},s=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const y={title:"RpcProxy (namespace)",slug:"/rimbu/channel/RpcProxy/namespace"},h="namespace RpcProxy",f={unversionedId:"rimbu_channel/RpcProxy/index",id:"rimbu_channel/RpcProxy/index",title:"RpcProxy (namespace)",description:"A remote procedure call proxy that can be used to perform methods on a remote object as though it is accessible locally.",source:"@site/api/rimbu_channel/RpcProxy/index.mdx",sourceDirName:"rimbu_channel/RpcProxy",slug:"/rimbu/channel/RpcProxy/namespace",permalink:"/api/rimbu/channel/RpcProxy/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"RpcProxy (namespace)",slug:"/rimbu/channel/RpcProxy/namespace"},sidebar:"defaultSidebar",previous:{title:"RemoteObjectSecurityError",permalink:"/api/rimbu/channel/RemoteObjectError/RemoteObjectSecurityError/class"},next:{title:"RpcProxy.Constructors",permalink:"/api/rimbu/channel/RpcProxy/Constructors/interface"}},b={},k=[{value:"Interfaces",id:"interfaces",level:2},{value:"Static Methods",id:"static-methods",level:2},{value:"<code>create</code>",id:"create",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4}],N={toc:k},P="wrapper";function x(e){var t=e,{components:r}=t,n=d(t,["components"]);return(0,a.kt)(P,s(u(u({},N),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"namespace-rpcproxy"}),(0,a.kt)("inlineCode",{parentName:"h1"},"namespace RpcProxy")),(0,a.kt)("p",null,"A remote procedure call proxy that can be used to perform methods on a remote object as though it is accessible locally."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion interface:")," ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/channel/RpcProxy/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"RpcProxy<T>"))),(0,a.kt)("h2",u({},{id:"interfaces"}),"Interfaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/channel/RpcProxy/Constructors/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"RpcProxy.Constructors"))),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Defines the static ",(0,a.kt)("inlineCode",{parentName:"td"},"RpcProxy")," API.")))),(0,a.kt)("h2",u({},{id:"static-methods"}),"Static Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"create"}),(0,a.kt)("inlineCode",{parentName:"h3"},"create")),(0,a.kt)("p",null,"Returns a new RpcProxy instance, where each ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," call will retrieve the proxy execution path and forward the path to the given ",(0,a.kt)("inlineCode",{parentName:"p"},"onCall")," function.")),(0,a.kt)("h4",u({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create<T>(onCall: (path: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/channel/RpcProxy/Path/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"RpcProxy.Path")),(0,a.kt)("inlineCode",{parentName:"p"},") => Promise<any>): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/channel/RpcProxy/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"RpcProxy")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h4",u({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the interface to proxy")))),(0,a.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"onCall")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(path: "),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/channel/RpcProxy/Path/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"RpcProxy.Path")),(0,a.kt)("inlineCode",{parentName:"td"},") => Promise<any>")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"function that will be called with the execution path each time an operation is performed on the proxy object"))))))}x.isMDXComponent=!0}}]);