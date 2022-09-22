"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[95210],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),d=c(r),s=a,f=d["".concat(p,".").concat(s)]||d[s]||l[s]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34124:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>s,default:()=>O,frontMatter:()=>d,metadata:()=>f,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(m)for(var r of m(t))c.call(t,r)&&u(e,r,t[r]);return e};const d={title:"maxBy",slug:"/rimbu/common/Reducer/maxBy/var"},s="type maxBy",f={unversionedId:"rimbu_common/Reducer/maxBy.var",id:"rimbu_common/Reducer/maxBy.var",title:"maxBy",description:"Returns a Reducer that remembers the maximum value of the inputs using the given compFun to compare input values",source:"@site/api/rimbu_common/Reducer/maxBy.var.mdx",sourceDirName:"rimbu_common/Reducer",slug:"/rimbu/common/Reducer/maxBy/var",permalink:"/api/rimbu/common/Reducer/maxBy/var",draft:!1,tags:[],version:"current",frontMatter:{title:"maxBy",slug:"/rimbu/common/Reducer/maxBy/var"},sidebar:"defaultSidebar",previous:{title:"max",permalink:"/api/rimbu/common/Reducer/max/var"},next:{title:"min",permalink:"/api/rimbu/common/Reducer/min/var"}},y={},b=[{value:"Definition",id:"definition",level:2}],v={toc:b};function O(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=l(l({},v),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",l({},{id:"type-maxby"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type maxBy")),(0,n.kt)("p",null,"Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Reducer")," that remembers the maximum value of the inputs using the given ",(0,n.kt)("inlineCode",{parentName:"p"},"compFun")," to compare input values"),(0,n.kt)("admonition",l({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",l({parentName:"pre"},{className:"language-ts"}),"const stream = Stream.of('abc', 'a', 'abcde', 'ab')\nconsole.log(stream.maxBy((s1, s2) => s1.length - s2.length))\n// 'abcde'\n"))),(0,n.kt)("h2",l({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"maxBy: {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"<T>(compFun: (v1: T, v2: T) => number): "),(0,n.kt)("a",l({parentName:"p"},{href:"/api/rimbu/common/Reducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Reducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, T "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," undefined>;"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"<T, O>(compFun: (v1: T, v2: T) => number, otherwise: "),(0,n.kt)("a",l({parentName:"p"},{href:"/api/rimbu/common/OptLazy/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"OptLazy")),(0,n.kt)("inlineCode",{parentName:"p"},"<O>): "),(0,n.kt)("a",l({parentName:"p"},{href:"/api/rimbu/common/Reducer/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"Reducer")),(0,n.kt)("inlineCode",{parentName:"p"},"<T, T "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," O>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"}")))}O.isMDXComponent=!0}}]);