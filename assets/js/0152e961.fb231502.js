"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[66312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||o;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73203:(e,t,n)=>{n.d(t,{r:()=>u});var a=n(67294),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m={previewwindow:"console",view:"split",editorsize:"60",codemirror:"1",moduleview:"1"};function u(e){const t=(n=((e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&p(e,n,t[n]);return e})({},m),r={module:`/src/${e.path}`},o(n,l(r)));var n,r;const u=function(e){let t="",n="";for(const a in e)t+=`${n}${a}=${e[a]}`,n="&";return""===t?"":`?${t}`}(t),h=`https://codesandbox.io/embed/github/vitoke/rimbu-sandbox/tree/main${u}`,d=`https://codesandbox.io/s/github/vitoke/rimbu-sandbox/tree/main${u}`;return a.createElement(a.Fragment,null,a.createElement("a",{target:"_blank",className:"button button--secondary",href:d,style:{marginBottom:10}},"Open file below in new window with full type-check"),a.createElement("iframe",{src:h,className:"codesandbox-iframe",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}},64934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>g,frontMatter:()=>h,metadata:()=>f,toc:()=>v});var a=n(3905),r=n(73203),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&m(e,n,t[n]);return e};const h={id:"deep-match",slug:"./match",title:"Deep Match"},d=void 0,f={unversionedId:"deep/deep-match",id:"deep/deep-match",title:"Deep Match",description:"Overview",source:"@site/docs/deep/match.mdx",sourceDirName:"deep",slug:"/deep/match",permalink:"/docs/deep/match",draft:!1,editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/deep/match.mdx",tags:[],version:"current",frontMatter:{id:"deep-match",slug:"./match",title:"Deep Match"},sidebar:"sidebar",previous:{title:"index",permalink:"/docs/deep/immutable/"},next:{title:"Deep Patch",permalink:"/docs/deep/patch"}},b={},v=[{value:"Overview",id:"overview",level:2},{value:"Example sandbox",id:"example-sandbox",level:3},{value:"Details for the match methods",id:"details-for-the-match-methods",level:2},{value:"Match simple values",id:"match-simple-values",level:3},{value:"Match objects",id:"match-objects",level:3},{value:"Arrays and Tuples",id:"arrays-and-tuples",level:3},{value:"Function matchers",id:"function-matchers",level:3},{value:"Caveat",id:"caveat",level:4},{value:"Match by reference",id:"match-by-reference",level:3}],y={toc:v};function g(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},y),m),l(t,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h2",u({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"Sometimes it is useful in TypeScript to have have a complex condition on a (nested) object. This can lead to long ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," statements that are also hard to read."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"type Person = {\n  name: string;\n  age: number;\n  address: {\n    street: string;\n    city: string;\n  };\n};\n\nfunction process(person: Person) {\n  if (\n    person.age < 18 &&\n    person.name === 'Bart' &&\n    person.address.city === 'Springfield'\n  ) {\n    console.log('you shall pass');\n  }\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/deep"}),(0,a.kt)("inlineCode",{parentName:"a"},"match"))," function offers, in a similar fashion to ",(0,a.kt)("inlineCode",{parentName:"p"},"patch"),", a way to concisely define the conditions an (immutable) object should meet:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"import { Deep } from '@rimbu/core';\n\nfunction process(person: Person) {\n  if (\n    Deep.match(person, {\n      age: (v) => v < 18,\n      name: 'Bart',\n      address: {\n        city: 'Springfield',\n      },\n    })\n  ) {\n    console.log('you shall pass');\n  }\n}\n")),(0,a.kt)("h3",u({},{id:"example-sandbox"}),"Example sandbox"),(0,a.kt)("p",null,"The following CodeSandbox shows in more detail how ",(0,a.kt)("inlineCode",{parentName:"p"},"match")," can be used for more complex use cases:"),(0,a.kt)(r.r,{path:"deep/match.ts",mdxType:"SandBox"}),(0,a.kt)("h2",u({},{id:"details-for-the-match-methods"}),"Details for the match methods"),(0,a.kt)("p",null,"The Rimbu Match Notation offers a flexible way to match many conditions on values in one go.\nThe match functions evaluate the given conditions and return either true if all the conditions\nare met, or false otherwise."),(0,a.kt)("p",null,"The match notation has similarities to the ",(0,a.kt)("inlineCode",{parentName:"p"},"patch")," notation, but is a bit more relaxed in terms of requirements."),(0,a.kt)("p",null,"This section goes into more details about the match notation."),(0,a.kt)("h3",u({},{id:"match-simple-values"}),"Match simple values"),(0,a.kt)("p",null,"To match simple values, all that is needed is to provide a value to compare to."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"match(1, 1); // -> true\nmatch('a', 'b'); // -> false\nmatch(true, false); // -> false\n")),(0,a.kt)("h3",u({},{id:"match-objects"}),"Match objects"),(0,a.kt)("p",null,"To match objects, the following options are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"partial match, will match all the given property values to the corresponding matchers"),(0,a.kt)("li",{parentName:"ul"},"compound match, an array starting with the compound type, and a number of matchers to test")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"// partial first-level match\nmatch({ a: 1, b: { c: 'q' } }, { a: 1 }); // -> true\n\n// partial deep match\nmatch({ a: 1, b: { c: 'q' } }, { b: { c: 'z' } }); // -> false\n\n// compound match\nmatch(\n  {\n    a: 1,\n    b: { c: 'q' },\n  },\n  ['some', { a: (v) => v > 5 }, { b: { c: 'q' } }]\n); // -> true, the second item matches\n")),(0,a.kt)("h3",u({},{id:"arrays-and-tuples"}),"Arrays and Tuples"),(0,a.kt)("p",null,"To match arrays and tuples, there are two options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"match each element by ",(0,a.kt)("inlineCode",{parentName:"li"},"Object.is")),(0,a.kt)("li",{parentName:"ul"},"provide an object with matchers for specific indices"),(0,a.kt)("li",{parentName:"ul"},"compound matches wrapped in an object")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const arr: number[] = [1, 2, 3];\n\nmatch(arr, [1, 2, 3]); // -> true, each element matches\nmatch(arr, { 1: 10 }); // -> false, element at index 1 is not 10\n\nconst tup = [1, true, 'a'] as [number, boolean, string];\n\nmatch(tup, [1, false, 'a']); // -> false, element 1 does not match\nmatch(tup, { 0: 1, 2: 'a' }); // -> true, elements at index 0 and 2 match\n\n// compound matches\nmatch(\n  [\n    { x: 1, y: 2 },\n    { x: 3, y: 0 },\n  ],\n  { some: [{ x: (v) => v > 5 }, { y: (v) => v < 2 }] }\n); // -> true, matches the first item\n")),(0,a.kt)("h3",u({},{id:"function-matchers"}),"Function matchers"),(0,a.kt)("p",null,"At all places where a match is provided, it is also allowed to provide a function returning\neither a value to match, or a boolean indicating the result of a custom match."),(0,a.kt)("p",null,"The matcher function receives three arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"value: the value of the item to match"),(0,a.kt)("li",{parentName:"ul"},"parent: if nested in an object or array, this is the item one level up, otherwise, will be equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"value"),"."),(0,a.kt)("li",{parentName:"ul"},"root: if nested in an object or array, this is the root object provided to the patch function, otherwise, will be equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"value"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"match(1, (v) => v > 0); // => true\n\nmatch(\n  {\n    a: 1,\n    b: { c: 2, d: { e: 3 } },\n  },\n  {\n    b: {\n      d: { e: (value, parent, root) => value === parent.c + root.a },\n    },\n  }\n); // => true\n\n// instead of returning the boolean in the previous statement, it is also possible to directly match the value\nmatch(\n  {\n    a: 1,\n    b: { c: 2, d: { e: 3 } },\n  },\n  {\n    b: {\n      d: { e: (value, parent, root) => parent.c + root.a },\n    },\n  }\n); // => true\n")),(0,a.kt)("h4",u({},{id:"caveat"}),"Caveat"),(0,a.kt)("p",null,"In the case of matching booleans with functions, there is a conflict between the ability to match the\nvalue returned by a function, and the ability to return a boolean for the match result."),(0,a.kt)("p",null,"In this case, the return value will be considered to indicate whether the match succeeded."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"match(false, false); // -> true\nmatch(false, () => false); // -> false, function indicates match result\n")),(0,a.kt)("h3",u({},{id:"match-by-reference"}),"Match by reference"),(0,a.kt)("p",null,"By default the match functions will inspect value contents when possible. However,\nsometimes it is needed to match values by reference. The easiest way to achieve this\nis to provide a function doing the reference check and returning a boolean."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const l = List.of(1, 2, 3);\n\n// this will traverse the entire object tree, probably not desired\nmatch(l, l);\n\n// match by reference\nmatch(l, (v) => v === l);\n")))}g.isMDXComponent=!0}}]);