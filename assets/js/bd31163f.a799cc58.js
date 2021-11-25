"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[5888],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=o,b=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3664:function(e,t,r){r.d(t,{r:function(){return a}});var n=r(7294),o={previewwindow:"console",view:"split",editorsize:"60",codemirror:"1",moduleview:"1"};function a(e){var t=function(e){var t="",r="";for(var n in e)t+=""+r+n+"="+e[n],r="&";return""===t?"":"?"+t}(Object.assign({},o,{module:"/src/"+e.path})),r="https://codesandbox.io/embed/github/vitoke/rimbu-sandbox/tree/main"+t,a="https://codesandbox.io/s/github/vitoke/rimbu-sandbox/tree/main"+t;return n.createElement(n.Fragment,null,n.createElement("a",{target:"_blank",className:"button button--secondary",href:a,style:{marginBottom:10}},"Open file below in new window with full type-check"),n.createElement("iframe",{src:r,className:"codesandbox-iframe",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}},8817:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=r(3664),l=["components"],p={id:"deep-immutable",slug:"./immutable",title:"Immutable"},c=void 0,u={unversionedId:"deep/deep-immutable",id:"deep/deep-immutable",isDocsHomePage:!1,title:"Immutable",description:"TypeScript offers some helper types to prevent users from changing properties in objects. These are mainly the readonly keyword and the Readonly type. However, they require diligence to apply properly:",source:"@site/docs/deep/immutable.mdx",sourceDirName:"deep",slug:"/deep/immutable",permalink:"/docs/deep/immutable",editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/deep/immutable.mdx",tags:[],version:"current",frontMatter:{id:"deep-immutable",slug:"./immutable",title:"Immutable"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/docs/deep/overview"},next:{title:"Deep Match",permalink:"/docs/deep/match"}},m=[{value:"Examples",id:"examples",children:[],level:2}],s={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TypeScript offers some helper types to prevent users from changing properties in objects. These are mainly the ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," keyword and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly<T>")," type. However, they require diligence to apply properly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const obj: Readonly<{\n  a: number;\n  b: { c: boolean; d: number[] };\n}> = {\n  a: 1,\n  b: { c: true },\n  d: [1],\n};\n\nobj.a = 2; // => compiler error\nobj.b.c = false; // => no error!\nobj.d.push(5); // => no error!\n")),(0,a.kt)("p",null,"To create plain JS objects that can be considered immutable in TypeScript, Rimbu offers the ",(0,a.kt)("inlineCode",{parentName:"p"},"Immutable")," function and type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Immutable } from '@rimbu/core';\n\nconst obj = Immutable({\n  a: 1,\n  b: { c: true },\n  d: [1],\n});\nobj.a = 2; // => compiler error\nobj.b.c = false; // => compiler error\nobj.d.push(5); // => compiler error\n")),(0,a.kt)("p",null,"Like ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Immutable")," does not have any effect on the object itself, but only instructs the compiler that all its properties and nested properties are read-only, plus it has some intelligence about arrays and collections."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(i.r,{path:"deep/immutable.ts",mdxType:"SandBox"}))}d.isMDXComponent=!0}}]);