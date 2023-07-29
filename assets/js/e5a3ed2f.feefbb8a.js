"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[72973],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>h});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=i,h=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return r?t.createElement(h,o(o({ref:n},p),{},{components:r})):t.createElement(h,o({ref:n},p))}));function h(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93263:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>y,contentTitle:()=>m,default:()=>P,frontMatter:()=>h,metadata:()=>b,toc:()=>C});var t=r(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,u=(e,n)=>{for(var r in n||(n={}))c.call(n,r)&&p(e,r,n[r]);if(l)for(var r of l(n))s.call(n,r)&&p(e,r,n[r]);return e},f=(e,n)=>a(e,o(n)),d=(e,n)=>{var r={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&l)for(var t of l(e))n.indexOf(t)<0&&s.call(e,t)&&(r[t]=e[t]);return r};const h={title:"Pair",slug:"/rimbu/channel/CrossChannel/Pair/type"},m="type Pair<TSend,TReceive>",b={unversionedId:"rimbu_channel/CrossChannel/Pair.type",id:"rimbu_channel/CrossChannel/Pair.type",title:"Pair",description:"A pair of CrossChannels in which the send module of the first is connected to the receive of the second, and the send module of the second is connected to the receive module of the first.",source:"@site/api/rimbu_channel/CrossChannel/Pair.type.mdx",sourceDirName:"rimbu_channel/CrossChannel",slug:"/rimbu/channel/CrossChannel/Pair/type",permalink:"/api/rimbu/channel/CrossChannel/Pair/type",draft:!1,tags:[],version:"current",frontMatter:{title:"Pair",slug:"/rimbu/channel/CrossChannel/Pair/type"},sidebar:"defaultSidebar",previous:{title:"CrossChannel.Constructors",permalink:"/api/rimbu/channel/CrossChannel/Constructors/interface"},next:{title:"CrossChannel<TSend,TReceive>",permalink:"/api/rimbu/channel/CrossChannel/interface"}},y={},C=[{value:"Definition",id:"definition",level:2}],v={toc:C},O="wrapper";function P(e){var n=e,{components:r}=n,i=d(n,["components"]);return(0,t.kt)(O,f(u(u({},v),i),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",u({},{id:"type-pairtsendtreceive"}),(0,t.kt)("inlineCode",{parentName:"h1"},"type Pair<TSend,TReceive>")),(0,t.kt)("p",null,"A pair of CrossChannels in which the send module of the first is connected to the receive of the second, and the send module of the second is connected to the receive module of the first."),(0,t.kt)("h2",u({},{id:"definition"}),"Definition"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"type Pair<TSend, TReceive> = readonly ["),(0,t.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,t.kt)("inlineCode",{parentName:"p"},"crossSendCh: "),(0,t.kt)("a",u({parentName:"p"},{href:"/api/rimbu/channel/CrossChannel/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"CrossChannel")),(0,t.kt)("inlineCode",{parentName:"p"},"<TSend, TReceive>,"),(0,t.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,t.kt)("inlineCode",{parentName:"p"},"crossReceiveCh: "),(0,t.kt)("a",u({parentName:"p"},{href:"/api/rimbu/channel/CrossChannel/interface"}),(0,t.kt)("inlineCode",{parentName:"a"},"CrossChannel")),(0,t.kt)("inlineCode",{parentName:"p"},"<TReceive, TSend>"),(0,t.kt)("br",null),"\xa0","\xa0",(0,t.kt)("inlineCode",{parentName:"p"},"];")))}P.isMDXComponent=!0}}]);