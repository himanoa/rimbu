"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[83979],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return l}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(n),l=a,y=f["".concat(s,".").concat(l)]||f[l]||m[l]||o;return n?t.createElement(y,c(c({ref:r},u),{},{components:n})):t.createElement(y,c({ref:r},u))}));function l(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99118:function(e,r,n){n.r(r),n.d(r,{assets:function(){return d},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return b}});var t=n(3905),a=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,n)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,m=(e,r)=>{for(var n in r||(r={}))s.call(r,n)&&u(e,n,r[n]);if(i)for(var n of i(r))p.call(r,n)&&u(e,n,r[n]);return e};const f={title:"AsyncTransformer",slug:"/rimbu/stream/async/AsyncTransformer/type"},l="type AsyncTransformer<T,R>",y={unversionedId:"rimbu_stream/async/AsyncTransformer.type",id:"rimbu_stream/async/AsyncTransformer.type",title:"AsyncTransformer",description:"An AsyncReducer that produces instances of AsyncStreamSource.",source:"@site/api/rimbu_stream/async/AsyncTransformer.type.mdx",sourceDirName:"rimbu_stream/async",slug:"/rimbu/stream/async/AsyncTransformer/type",permalink:"/api/rimbu/stream/async/AsyncTransformer/type",draft:!1,tags:[],version:"current",frontMatter:{title:"AsyncTransformer",slug:"/rimbu/stream/async/AsyncTransformer/type"},sidebar:"defaultSidebar",previous:{title:"window",permalink:"/api/rimbu/stream/AsyncTransformer/window/var"},next:{title:"@rimbu/stream/async-custom",permalink:"/api/rimbu/stream/async-custom"}},d={},b=[{value:"Definition",id:"definition",level:2}],O={toc:b};function v(e){var r,n=e,{components:a}=n,u=((e,r)=>{var n={};for(var t in e)s.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))r.indexOf(t)<0&&p.call(e,t)&&(n[t]=e[t]);return n})(n,["components"]);return(0,t.kt)("wrapper",(r=m(m({},O),u),o(r,c({components:a,mdxType:"MDXLayout"}))),(0,t.kt)("h1",m({},{id:"type-asynctransformertr"}),(0,t.kt)("inlineCode",{parentName:"h1"},"type AsyncTransformer<T,R>")),(0,t.kt)("p",null,"An AsyncReducer that produces instances of ",(0,t.kt)("inlineCode",{parentName:"p"},"AsyncStreamSource"),"."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,t.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async/AsyncTransformer/namespace"}),"AsyncTransformer")),(0,t.kt)("h2",m({},{id:"definition"}),"Definition"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"export declare type AsyncTransformer<T, R = T> = "),(0,t.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/AsyncReducer/type"}),(0,t.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,t.kt)("inlineCode",{parentName:"p"},"<T, "),(0,t.kt)("a",m({parentName:"p"},{href:"/api/rimbu/stream/async/AsyncStreamSource/type"}),(0,t.kt)("inlineCode",{parentName:"a"},"AsyncStreamSource")),(0,t.kt)("inlineCode",{parentName:"p"},"<R>>;")))}v.isMDXComponent=!0}}]);