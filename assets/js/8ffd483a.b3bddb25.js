"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[44294],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(n),s=r,k=d["".concat(p,".").concat(s)]||d[s]||u[s]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20450:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return s},default:function(){return N},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return f}});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))m.call(t,n)&&c(e,n,t[n]);return e};const d={title:"Comp<K>",slug:"/rimbu/common/Comp/interface"},s="interface Comp<K>",k={unversionedId:"rimbu_common/Comp.interface",id:"rimbu_common/Comp.interface",title:"Comp<K>",description:"An object providing methods to compare two values of type K.",source:"@site/api/rimbu_common/Comp.interface.mdx",sourceDirName:"rimbu_common",slug:"/rimbu/common/Comp/interface",permalink:"/api/rimbu/common/Comp/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"Comp<K>",slug:"/rimbu/common/Comp/interface"},sidebar:"defaultSidebar",previous:{title:"CollectFun",permalink:"/api/rimbu/common/CollectFun/type"},next:{title:"Eq (namespace)",permalink:"/api/rimbu/common/Eq/namespace"}},v={},f=[{value:"Type parameters",id:"type-parameters",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>compare</code>",id:"compare",level:3},{value:"Definition",id:"definition",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>isComparable</code>",id:"iscomparable",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Parameters",id:"parameters-1",level:4}],b={toc:f};function N(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},b),c),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"interface-compk"}),(0,a.kt)("inlineCode",{parentName:"h1"},"interface Comp<K>")),(0,a.kt)("p",null,"An object providing methods to compare two values of type ",(0,a.kt)("inlineCode",{parentName:"p"},"K"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Companion namespace:")," ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/common/Comp/namespace"}),"Comp")),(0,a.kt)("h3",u({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"K"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the value type")))),(0,a.kt)("h2",u({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"compare"}),(0,a.kt)("inlineCode",{parentName:"h3"},"compare")),(0,a.kt)("p",null,"Returns 0 if given ",(0,a.kt)("inlineCode",{parentName:"p"},"value1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"value2")," are equal, a positive value is ",(0,a.kt)("inlineCode",{parentName:"p"},"value1")," is greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"value2"),", and a negative value otherwise.")),(0,a.kt)("h4",u({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"compare(value1: K, value2: K): number;"))),(0,a.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"value1")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"K")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the first value to compare")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"value2")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"K")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the seconds value to compare")))),(0,a.kt)("div",u({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,a.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const c = Comp.numberComp()\nconsole.log(c.compare(5, 5))\n// => 0\nconsole.log(c.compare(3, 5))\n// => -2\nconsole.log(c.compare(5, 3))\n// => 2\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"iscomparable"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isComparable")),(0,a.kt)("p",null,"Returns true if this instance can compare given ",(0,a.kt)("inlineCode",{parentName:"p"},"obj"),".")),(0,a.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isComparable(obj: any): obj is K;"))),(0,a.kt)("h4",u({},{id:"parameters-1"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"obj")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"any")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the object to check")))),(0,a.kt)("div",u({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"example")),(0,a.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const c = Comp.numberComp()\nconsole.log(c.isComparable(5))\n// => true\nconsole.log(c.isComparable('a'))\n// => false\n"))))))}N.isMDXComponent=!0}}]);