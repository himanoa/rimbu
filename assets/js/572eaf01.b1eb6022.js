"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[27342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),f=p,b=m["".concat(l,".").concat(f)]||m[f]||d[f]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function f(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>f,default:()=>P,frontMatter:()=>m,metadata:()=>b,toc:()=>k});var r=n(3905),p=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&u(e,n,t[n]);return e};const m={title:"Tokenize",slug:"/rimbu/deep/Deep/Path/Result/Tokenize/type"},f="type Tokenize<P,Token,Res>",b={unversionedId:"rimbu_deep/Deep/Path/Result/Tokenize.type",id:"rimbu_deep/Deep/Path/Result/Tokenize.type",title:"Tokenize",description:"Converts a path string into separate tokens in a string array.",source:"@site/api/rimbu_deep/Deep/Path/Result/Tokenize.type.mdx",sourceDirName:"rimbu_deep/Deep/Path/Result",slug:"/rimbu/deep/Deep/Path/Result/Tokenize/type",permalink:"/api/rimbu/deep/Deep/Path/Result/Tokenize/type",draft:!1,tags:[],version:"current",frontMatter:{title:"Tokenize",slug:"/rimbu/deep/Deep/Path/Result/Tokenize/type"},sidebar:"defaultSidebar",previous:{title:"Part",permalink:"/api/rimbu/deep/Deep/Path/Result/Part/type"},next:{title:"Result",permalink:"/api/rimbu/deep/Deep/Path/Result/type"}},c={},k=[{value:"Definition",id:"definition",level:2}],y={toc:k};function P(e){var t,n=e,{components:p}=n,u=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},y),u),a(t,i({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("h1",d({},{id:"type-tokenizeptokenres"}),(0,r.kt)("inlineCode",{parentName:"h1"},"type Tokenize<P,Token,Res>")),(0,r.kt)("p",null,"Converts a path string into separate tokens in a string array."),(0,r.kt)("h2",d({},{id:"definition"}),"Definition"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"type Tokenize<P extends string, Token extends string = '', Res extends string[] = []> = P extends '' ? "),(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/deep/Path/Internal/AppendIfNotEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"Path.Internal.AppendIfNotEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<Res, Token> : P extends `[${infer Index}]${infer Rest}` ? "),(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/deep/Path/Result/Tokenize/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"Tokenize")),(0,r.kt)("inlineCode",{parentName:"p"},"<Rest, '', ["),(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"..."),(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/deep/Path/Internal/AppendIfNotEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"Path.Internal.AppendIfNotEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<Res, Token>,`<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Index`<br/>&nbsp;&nbsp;&nbsp;&nbsp;`]> : P extends `?.${infer Rest}` ? "),(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/deep/Path/Result/Tokenize/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"Tokenize")),(0,r.kt)("inlineCode",{parentName:"p"},"<Rest, '', ["),(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"..."),(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/deep/Path/Internal/AppendIfNotEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"Path.Internal.AppendIfNotEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<Res, Token>,`<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`'?.'`<br/>&nbsp;&nbsp;&nbsp;&nbsp;`]> : P extends `.${infer Rest}` ? "),(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/deep/Path/Result/Tokenize/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"Tokenize")),(0,r.kt)("inlineCode",{parentName:"p"},"<Rest, '', [..."),(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/deep/Path/Internal/AppendIfNotEmpty/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"Path.Internal.AppendIfNotEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<Res, Token>, '.']> : P extends `${infer First}${infer Rest}` ? "),(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/deep/Path/Result/Tokenize/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"Tokenize")),"`",(0,r.kt)("inlineCode",{parentName:"p"},"<Rest, "),"${Token}${First}",(0,r.kt)("inlineCode",{parentName:"p"},", Res> : never```;")))}P.isMDXComponent=!0}}]);