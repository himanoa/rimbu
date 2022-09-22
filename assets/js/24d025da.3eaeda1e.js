"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[56233],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=n.createContext({}),p=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(m.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),f=a,y=l["".concat(m,".").concat(f)]||l[f]||s[f]||o;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=l;var c={};for(var m in r)hasOwnProperty.call(r,m)&&(c[m]=r[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},93868:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>f,default:()=>v,frontMatter:()=>l,metadata:()=>y,toc:()=>d});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))m.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))p.call(r,t)&&u(e,t,r[t]);return e};const l={title:"fromAsyncStreamSource",slug:"/rimbu/stream/fromAsyncStreamSource/var"},f="type fromAsyncStreamSource",y={unversionedId:"rimbu_stream/async-custom/fromAsyncStreamSource.var",id:"rimbu_stream/async-custom/fromAsyncStreamSource.var",title:"fromAsyncStreamSource",description:"undocumented",source:"@site/api/rimbu_stream/async-custom/fromAsyncStreamSource.var.mdx",sourceDirName:"rimbu_stream/async-custom",slug:"/rimbu/stream/fromAsyncStreamSource/var",permalink:"/api/rimbu/stream/fromAsyncStreamSource/var",draft:!1,tags:[],version:"current",frontMatter:{title:"fromAsyncStreamSource",slug:"/rimbu/stream/fromAsyncStreamSource/var"},sidebar:"defaultSidebar",previous:{title:"fixedDoneAsyncIteratorResult",permalink:"/api/rimbu/stream/fixedDoneAsyncIteratorResult/var"},next:{title:"@rimbu/stream/custom",permalink:"/api/rimbu/stream/custom"}},b={},d=[{value:"Definition",id:"definition",level:2}],S={toc:d};function v(e){var r,t=e,{components:a}=t,u=((e,r)=>{var t={};for(var n in e)m.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=s(s({},S),u),o(r,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"type-fromasyncstreamsource"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type fromAsyncStreamSource")),(0,n.kt)("p",null,"undocumented"),(0,n.kt)("h2",s({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"fromAsyncStreamSource: {"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"<T>(source: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/AsyncStreamSource/NonEmpty/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncStreamSource.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/AsyncStream/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncStream.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"<T>(source: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/AsyncStreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncStreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/stream/AsyncStream/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"AsyncStream")),(0,n.kt)("inlineCode",{parentName:"p"},"<T>;"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"p"},"}")))}v.isMDXComponent=!0}}]);