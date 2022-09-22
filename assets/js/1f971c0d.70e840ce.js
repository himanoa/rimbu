"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[60905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},73203:(e,t,n)=>{n.d(t,{r:()=>h});var a=n(67294),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const u={previewwindow:"console",view:"split",editorsize:"60",codemirror:"1",moduleview:"1"};function h(e){const t=(n=((e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e})({},u),o={module:`/src/${e.path}`},r(n,i(o)));var n,o;const h=function(e){let t="",n="";for(const a in e)t+=`${n}${a}=${e[a]}`,n="&";return""===t?"":`?${t}`}(t),d=`https://codesandbox.io/embed/github/vitoke/rimbu-sandbox/tree/main${h}`,m=`https://codesandbox.io/s/github/vitoke/rimbu-sandbox/tree/main${h}`;return a.createElement(a.Fragment,null,a.createElement("a",{target:"_blank",className:"button button--secondary",href:m,style:{marginBottom:10}},"Open file below in new window with full type-check"),a.createElement("iframe",{src:d,className:"codesandbox-iframe",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}},97077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>b,toc:()=>v});var a=n(3905),o=n(73203),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&u(e,n,t[n]);return e};const d={id:"deep-patch",slug:"./patch",title:"Deep Patch"},m=void 0,b={unversionedId:"deep/deep-patch",id:"deep/deep-patch",title:"Deep Patch",description:"Overview",source:"@site/docs/deep/patch.mdx",sourceDirName:"deep",slug:"/deep/patch",permalink:"/docs/deep/patch",draft:!1,editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/deep/patch.mdx",tags:[],version:"current",frontMatter:{id:"deep-patch",slug:"./patch",title:"Deep Patch"},sidebar:"sidebar",previous:{title:"Deep Match",permalink:"/docs/deep/match"},next:{title:"Deep Path",permalink:"/docs/deep/path"}},f={},v=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:3},{value:"Example sandbox",id:"example-sandbox",level:3},{value:"Details of the Rimbu Patch Notation",id:"details-of-the-rimbu-patch-notation",level:2},{value:"Update functions",id:"update-functions",level:3},{value:"Simple values",id:"simple-values",level:3},{value:"Plain objects",id:"plain-objects",level:3},{value:"Tuples",id:"tuples",level:3},{value:"Arrays and non-plain objects",id:"arrays-and-non-plain-objects",level:3}],w={toc:v};function y(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},w),u),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h2",h({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Protected")," function and type allow easy creation of plain objects that cannot be modified in TypeScript. However, it is quite useful to create immutable copies of these objects that change some of its properties."),(0,a.kt)("p",null,"The main example is Redux state management, which requires any changes to object data to copy the entire object. However, copying deeply nested objects is a lot of work:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-ts"}),"// update a deeply nested prop without tools\nconst state = {\n  a: 1,\n  b: {\n    c: 'text',\n    d: true,\n  },\n};\n\nconst newState = {\n  ...state,\n  a: state.a + 1,\n  b: {\n    ...state.b,\n    c: 'newText',\n  },\n};\n\n// newState => { a: 2, b: { c: 'newText', d: true } }\n")),(0,a.kt)("p",null,"There are libraries that solve this problem in various ways, for example, the ",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/immerjs/immer"}),"Immer")," library allows you to write mutable code that will in the end result in a new object containing those changes."),(0,a.kt)("p",null,"Rimbu offers the ",(0,a.kt)("inlineCode",{parentName:"p"},"patch")," and related functions, which has a kind of 'contract' to specify how a specific object should be updated. The contract uses a quite concise but powerful notation, making it quite handy for many use cases. It also only copies those parts that have changes, and maintains references to the original parts that didn't change."),(0,a.kt)("h3",h({},{id:"usage"}),"Usage"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",h({parentName:"p"},{href:"/api/rimbu/deep"}),(0,a.kt)("inlineCode",{parentName:"a"},"patch"))," function takes value to update, and a second value matching the corresponding Patch type. This type defines ways in which the object can be updated. The ",(0,a.kt)("inlineCode",{parentName:"p"},"patch")," function executes the patch, and if\nany value has changed, it returns an updated object:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-ts"}),"import { Deep } from '@rimbu/core';\n\nconst state = {\n  a: 1,\n  b: {\n    c: 'text',\n    d: true,\n  },\n};\n\nconst newState = Deep.patch(state, [\n  {\n    a: (v) => v + 1,\n    b: [{ c: 'newText' }],\n  },\n]);\n\n// newState => { a: 2, b: { c: 'newText', d: true } }\n")),(0,a.kt)("h3",h({},{id:"example-sandbox"}),"Example sandbox"),(0,a.kt)("p",null,"The following CodeSandbox shows more example of how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"patch"),":"),(0,a.kt)(o.r,{path:"deep/patch.ts",mdxType:"SandBox"}),(0,a.kt)("h2",h({},{id:"details-of-the-rimbu-patch-notation"}),"Details of the Rimbu Patch Notation"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"patch")," function is quite powerful, but it does require some knowledge of the allowed\nnotation. This section goes into more details about the notation."),(0,a.kt)("h3",h({},{id:"update-functions"}),"Update functions"),(0,a.kt)("p",null,"To patch values, it is allowed to directly set a new value, but it is also allowed to provide\nan update function, like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-ts"}),"patch([1, 2, 3], (v) => [...v, 4]);\n")),(0,a.kt)("p",null,"The update function receives three arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"value: the current value of the item to patch"),(0,a.kt)("li",{parentName:"ul"},"parent: if nested in an object or array, this is the item one level up, otherwise, will be equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"value"),"."),(0,a.kt)("li",{parentName:"ul"},"root: if nested in an object or array, this is the root object provided to the patch function, otherwise, will be equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"value"),".")),(0,a.kt)("p",null,"This can be convenient to access other paths in the object to patch."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-ts"}),"// in this example, the update function receives the following:\n// - value will be the value of `a`\n// - parent will be the value of `b`\n// - root will be the whole object given as parameter\npatch(\n  {\n     a: 1,\n     b: { c: 2, d; 3 }\n      },\n  [{ b: { d: (value, parent, root) => v + parent.c + root.a } }]\n);\n")),(0,a.kt)("h3",h({},{id:"simple-values"}),"Simple values"),(0,a.kt)("p",null,"Patching a simple value has the following options:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-ts"}),"// direct\npatch(1, 2);\n\n// update function\npatch(1, (v) => v + 1);\n")),(0,a.kt)("h3",h({},{id:"plain-objects"}),"Plain objects"),(0,a.kt)("p",null,"Plain objects have the following options:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-ts"}),"const n = { a: 1, b: { c: 'a' } };\n\n// direct (must be exactly the same type)\npatch(n, { a: 1, b: { c: 'b' } });\n\n// partial (must be in an array)\npatch(n, [{ a: 2 }]);\npatch(n, [{ a: (v) => v + 1 }]);\npatch(n, [{ b: [{ c: 'q' }] }]);\n\n// update function returning a full new object\npatch(n, (v) => ({ ...n, a: 2 }));\n\n// update function returning a patch\npatch(n, (v) => [{ a: v.b.c.length }]);\n")),(0,a.kt)("p",null,"When using partial matches, it is also possible to supply multiple separate updates in\nthe array. These will be updated one by one, and the result of the previous patch is the\ninput of the following patch. This makes some use cases easier to achieve."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-ts"}),"// the state has a counter, and a value that keeps the sum of all counters\nconst state = { count: 5, sumCount: 50 };\n\n// this patch does not correctly update the sumCount.\n// parent.count is 5, but should be the new value, which is 6\npatch(state, [\n  {\n    count: (v) => v + 1,\n    sumCount: (v, parent) => v + parent.count,\n  },\n]);\n\n// this patch updates correctly:\n// first count is increased\n// then the sumCount receives the new value for count\npatch(state, [\n  { count: (v) => v + 1 },\n  { sumCount: (v, parent) => v + parent.count },\n]);\n")),(0,a.kt)("h3",h({},{id:"tuples"}),"Tuples"),(0,a.kt)("p",null,"Tuples (arrays of fixed length) have the following options:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"// direct\npatch(Tuple.of(1, 'a'), Tuple.of(2, 'b'));\n\n// index patch object\npatch(Tuple.of(1, 'a'), { 1: 'b' }); // patches the item at index 1\npatch(Tuple.of(1, 'a'), { 0: (v) => v + 1 }); // patches the item at index 0\n\n// update function\npatch(Tuple.of(1, 'a'), () => ({ 1: 'b' })); // patches the item at index 1\n")),(0,a.kt)("h3",h({},{id:"arrays-and-non-plain-objects"}),"Arrays and non-plain objects"),(0,a.kt)("p",null,"Arrays and non-plain objects have the following options:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"// direct\npatch([1, 2, 3], [4, 5, 6]);\n\n// update function\npatch([1, 2, 3], (v) => [...v, 4]);\n")))}y.isMDXComponent=!0}}]);