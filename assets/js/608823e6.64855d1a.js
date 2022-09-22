"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[41801],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return t?n.createElement(f,i(i({ref:r},m),{},{components:t})):n.createElement(f,i({ref:r},m))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},87017:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>d,default:()=>E,frontMatter:()=>p,metadata:()=>f,toc:()=>y});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&m(e,t,r[t]);if(l)for(var t of l(r))c.call(r,t)&&m(e,t,r[t]);return e};const p={title:"CustomError",slug:"/rimbu/common/ErrBase/CustomError/class"},d="class CustomError",f={unversionedId:"rimbu_common/ErrBase/CustomError.class",id:"rimbu_common/ErrBase/CustomError.class",title:"CustomError",description:"A custom error instance.",source:"@site/api/rimbu_common/ErrBase/CustomError.class.mdx",sourceDirName:"rimbu_common/ErrBase",slug:"/rimbu/common/ErrBase/CustomError/class",permalink:"/api/rimbu/common/ErrBase/CustomError/class",draft:!1,tags:[],version:"current",frontMatter:{title:"CustomError",slug:"/rimbu/common/ErrBase/CustomError/class"},sidebar:"defaultSidebar",previous:{title:"ErrBase (namespace)",permalink:"/api/rimbu/common/ErrBase/namespace"},next:{title:"ForcedError",permalink:"/api/rimbu/common/ErrBase/ForcedError/class"}},b={},y=[{value:"Properties",id:"properties",level:2},{value:"<code>message</code>",id:"message",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>name</code>",id:"name",level:3},{value:"Definition",id:"definition-1",level:4}],v={toc:y};function E(e){var r,t=e,{components:o}=t,m=((e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=u(u({},v),m),a(r,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"class-customerror"}),(0,n.kt)("inlineCode",{parentName:"h1"},"class CustomError")),(0,n.kt)("p",null,"A custom error instance."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extended by:")," ",(0,n.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/ErrBase/ForcedError/class"}),(0,n.kt)("inlineCode",{parentName:"a"},"ForcedError"))),(0,n.kt)("h2",u({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"message"}),(0,n.kt)("inlineCode",{parentName:"h3"},"message")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly message: string;")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",u({},{id:"name"}),(0,n.kt)("inlineCode",{parentName:"h3"},"name")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"get name(): string;")))))}E.isMDXComponent=!0}}]);