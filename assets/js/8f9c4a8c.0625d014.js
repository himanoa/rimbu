"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[82819],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>d});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),m=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=m(e.components);return t.createElement(c.Provider,{value:n},e.children)},l="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=m(r),y=i,d=l["".concat(c,".").concat(y)]||l[y]||s[y]||a;return r?t.createElement(d,o(o({ref:n},u),{},{components:r})):t.createElement(d,o({ref:n},u))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=y;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[l]="string"==typeof e?e:i,o[1]=p;for(var m=2;m<a;m++)o[m]=r[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},24615:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>v,contentTitle:()=>f,default:()=>h,frontMatter:()=>d,metadata:()=>b,toc:()=>k});var t=r(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,n,r)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,l=(e,n)=>{for(var r in n||(n={}))c.call(n,r)&&u(e,r,n[r]);if(p)for(var r of p(n))m.call(n,r)&&u(e,r,n[r]);return e},s=(e,n)=>a(e,o(n)),y=(e,n)=>{var r={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&p)for(var t of p(e))n.indexOf(t)<0&&m.call(e,t)&&(r[t]=e[t]);return r};const d={title:"minBy",slug:"/rimbu/core/AsyncReducer/minBy/var"},f="type minBy",b={unversionedId:"rimbu_core/AsyncReducer/minBy.var",id:"rimbu_core/AsyncReducer/minBy.var",title:"minBy",description:"Returns a Reducer that remembers the minimum value of the inputs using the given compFun to compare input values",source:"@site/api/rimbu_core/AsyncReducer/minBy.var.mdx",sourceDirName:"rimbu_core/AsyncReducer",slug:"/rimbu/core/AsyncReducer/minBy/var",permalink:"/api/rimbu/core/AsyncReducer/minBy/var",draft:!1,tags:[],version:"current",frontMatter:{title:"minBy",slug:"/rimbu/core/AsyncReducer/minBy/var"},sidebar:"defaultSidebar",previous:{title:"min",permalink:"/api/rimbu/core/AsyncReducer/min/var"},next:{title:"nonEmpty",permalink:"/api/rimbu/core/AsyncReducer/nonEmpty/var"}},v={},k=[{value:"Definition",id:"definition",level:2}],O={toc:k},g="wrapper";function h(e){var n=e,{components:r}=n,i=y(n,["components"]);return(0,t.kt)(g,s(l(l({},O),i),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",l({},{id:"type-minby"}),(0,t.kt)("inlineCode",{parentName:"h1"},"type minBy")),(0,t.kt)("p",null,"Returns a ",(0,t.kt)("inlineCode",{parentName:"p"},"Reducer")," that remembers the minimum value of the inputs using the given ",(0,t.kt)("inlineCode",{parentName:"p"},"compFun")," to compare input values"),(0,t.kt)("admonition",l({},{title:"example",type:"note"}),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",l({parentName:"pre"},{className:"language-ts"}),"const stream = Stream.of('abc', 'a', 'abcde', 'ab')\nconsole.log(stream.minBy((s1, s2) => s1.length - s2.length))\n// 'a'\n"))),(0,t.kt)("h2",l({},{id:"definition"}),"Definition"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"minBy: {"),(0,t.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,t.kt)("inlineCode",{parentName:"p"},"<T>(compFun: (v1: T, v2: T) => "),(0,t.kt)("a",l({parentName:"p"},{href:"/api/rimbu/core/MaybePromise/type"}),(0,t.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,t.kt)("inlineCode",{parentName:"p"},"<number>): "),(0,t.kt)("a",l({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/type"}),(0,t.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,t.kt)("inlineCode",{parentName:"p"},"<T, T "),(0,t.kt)("code",null,"|"),(0,t.kt)("inlineCode",{parentName:"p"}," undefined>;"),(0,t.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,t.kt)("inlineCode",{parentName:"p"},"<T, O>(compFun: (v1: T, v2: T) => "),(0,t.kt)("a",l({parentName:"p"},{href:"/api/rimbu/core/MaybePromise/type"}),(0,t.kt)("inlineCode",{parentName:"a"},"MaybePromise")),(0,t.kt)("inlineCode",{parentName:"p"},"<number>, otherwise: AsyncOptLazy<O>): "),(0,t.kt)("a",l({parentName:"p"},{href:"/api/rimbu/core/AsyncReducer/type"}),(0,t.kt)("inlineCode",{parentName:"a"},"AsyncReducer")),(0,t.kt)("inlineCode",{parentName:"p"},"<T, T "),(0,t.kt)("code",null,"|"),(0,t.kt)("inlineCode",{parentName:"p"}," O>;"),(0,t.kt)("br",null),"\xa0","\xa0",(0,t.kt)("inlineCode",{parentName:"p"},"}")))}h.isMDXComponent=!0}}]);