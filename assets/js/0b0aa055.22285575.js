"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[61540],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>s});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),s=a,f=d["".concat(p,".").concat(s)]||d[s]||m[s]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82953:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>s,default:()=>g,frontMatter:()=>d,metadata:()=>f,toc:()=>y});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))u.call(n,t)&&c(e,t,n[t]);return e};const d={title:"Range_2",slug:"/rimbu/common/Range_2/type"},s="type Range_2<T>",f={unversionedId:"rimbu_common/Range_2.type",id:"rimbu_common/Range_2.type",title:"Range_2",description:"A range definition for any type of (orderable) value. If a start or end is defined, a tuple can be used where the second item is a boolean indicating whether that end is inclusive (true) or exclusive (false).",source:"@site/api/rimbu_common/Range_2.type.mdx",sourceDirName:"rimbu_common",slug:"/rimbu/common/Range_2/type",permalink:"/api/rimbu/common/Range_2/type",draft:!1,tags:[],version:"current",frontMatter:{title:"Range_2",slug:"/rimbu/common/Range_2/type"},sidebar:"defaultSidebar",previous:{title:"Range_2 (namespace)",permalink:"/api/rimbu/common/Range_2/namespace"},next:{title:"Reducer (namespace)",permalink:"/api/rimbu/common/Reducer/namespace"}},b={},y=[{value:"Definition",id:"definition",level:2}],k={toc:y};function g(e){var n,t=e,{components:a}=t,c=((e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=m(m({},k),c),o(n,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"type-range_2t"}),(0,r.kt)("inlineCode",{parentName:"h1"},"type Range_2<T>")),(0,r.kt)("p",null,"A range definition for any type of (orderable) value. If a start or end is defined, a tuple can be used where the second item is a boolean indicating whether that end is inclusive (true) or exclusive (false).\nA Range of type T can have one of the following forms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"{ end: T }"),(0,r.kt)("li",{parentName:"ul"},"{ end: ","[T, boolean]"," }"),(0,r.kt)("li",{parentName:"ul"},"{ start: T }"),(0,r.kt)("li",{parentName:"ul"},"{ start: T, end: T }"),(0,r.kt)("li",{parentName:"ul"},"{ start: T, end: ","[T, boolean]"," }"),(0,r.kt)("li",{parentName:"ul"},"{ start: ","[T, boolean]"," }"),(0,r.kt)("li",{parentName:"ul"},"{ start: ","[T, boolean]",", end: T }"),(0,r.kt)("li",{parentName:"ul"},"{ start: ","[T, boolean]",", end: ","[T, boolean]"," }")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,r.kt)("a",m({parentName:"p"},{href:"/api/rimbu/common/Range_2/namespace"}),"Range_2")),(0,r.kt)("h2",m({},{id:"definition"}),"Definition"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"export declare type Range<T> = {"),(0,r.kt)("br",null),"\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"start: T "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," [T, boolean];"),(0,r.kt)("br",null),"\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"end?: T "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," [T, boolean];"),(0,r.kt)("br",null),"\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"amount?: undefined;"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"p"},"} "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," {"),(0,r.kt)("br",null),"\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"start?: T "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," [T, boolean];"),(0,r.kt)("br",null),"\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"end: T "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," [T, boolean];"),(0,r.kt)("br",null),"\xa0","\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"amount?: undefined;"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"p"},"};")))}g.isMDXComponent=!0}}]);