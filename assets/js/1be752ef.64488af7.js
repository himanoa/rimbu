"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[18090],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=i,m=s["".concat(d,".").concat(f)]||s[f]||c[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},94545:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return S},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return k}});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e};const s={title:"SortedSet.Types",slug:"/rimbu/sorted/SortedSet/Types/interface"},f="interface SortedSet.Types",m={unversionedId:"rimbu_sorted/SortedSet/Types.interface",id:"rimbu_sorted/SortedSet/Types.interface",title:"SortedSet.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_sorted/SortedSet/Types.interface.mdx",sourceDirName:"rimbu_sorted/SortedSet",slug:"/rimbu/sorted/SortedSet/Types/interface",permalink:"/api/rimbu/sorted/SortedSet/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"SortedSet.Types",slug:"/rimbu/sorted/SortedSet/Types/interface"},sidebar:"defaultSidebar",previous:{title:"SortedSet.NonEmpty<T>",permalink:"/api/rimbu/sorted/SortedSet/NonEmpty/interface"},next:{title:"SortedSet<T>",permalink:"/api/rimbu/sorted/SortedSet/interface"}},y={},k=[{value:"Properties",id:"properties",level:2},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-2",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-3",level:4}],b={toc:k};function S(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},b),u),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"interface-sortedsettypes"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface SortedSet.Types")),(0,r.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,r.kt)("h2",c({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"builder"}),(0,r.kt)("inlineCode",{parentName:"h3"},"builder")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/Builder/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedSet.Builder")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"context"}),(0,r.kt)("inlineCode",{parentName:"h3"},"context")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/Context/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedSet.Context")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"nonempty"}),(0,r.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedSet.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"normal"}),(0,r.kt)("inlineCode",{parentName:"h3"},"normal")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-3"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,r.kt)("inlineCode",{parentName:"p"},"<this['_T']>;")))))}S.isMDXComponent=!0}}]);