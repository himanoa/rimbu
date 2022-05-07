"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[77223],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(n),s=a,f=d["".concat(p,".").concat(s)]||d[s]||c[s]||l;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46675:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return b}});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&m(e,n,t[n]);return e};const d={title:"ValuedLink (namespace)",slug:"/rimbu/graph/custom/ValuedLink/namespace"},s="namespace ValuedLink",f={unversionedId:"rimbu_graph/custom/ValuedLink/index",id:"rimbu_graph/custom/ValuedLink/index",title:"ValuedLink (namespace)",description:"A valued connection between two nodes, being a 3-valued tuple of which the first two elements are nodes and the last element a value",source:"@site/api/rimbu_graph/custom/ValuedLink/index.mdx",sourceDirName:"rimbu_graph/custom/ValuedLink",slug:"/rimbu/graph/custom/ValuedLink/namespace",permalink:"/api/rimbu/graph/custom/ValuedLink/namespace",draft:!1,tags:[],version:"current",frontMatter:{title:"ValuedLink (namespace)",slug:"/rimbu/graph/custom/ValuedLink/namespace"},sidebar:"defaultSidebar",previous:{title:"ValuedGraphTypesContextImpl",permalink:"/api/rimbu/graph/custom/ValuedGraphTypesContextImpl/interface"},next:{title:"Target",permalink:"/api/rimbu/graph/custom/ValuedLink/Target/type"}},k={},b=[{value:"Functions",id:"functions",level:2},{value:"<code>fromArgs</code>",id:"fromargs",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters",level:3},{value:"Parameters",id:"parameters",level:4}],g={toc:b};function y(e){var t,n=e,{components:a}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},g),m),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"namespace-valuedlink"}),(0,r.kt)("inlineCode",{parentName:"h1"},"namespace ValuedLink")),(0,r.kt)("p",null,"A valued connection between two nodes, being a 3-valued tuple of which the first two elements are nodes and the last element a value"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Companion type:")," ",(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedLink/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"ValuedLink<N,V>"))),(0,r.kt)("h2",c({},{id:"functions"}),"Functions"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"fromargs"}),(0,r.kt)("inlineCode",{parentName:"h3"},"fromArgs")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"function fromArgs<N, V>(node1: N, node2: N, value: V): "),(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedLink/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"ValuedLink")),(0,r.kt)("inlineCode",{parentName:"p"},"<N, V>;"))),(0,r.kt)("h3",c({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"N"),(0,r.kt)("td",c({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",c({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",c({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"node1")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"N")),(0,r.kt)("td",c({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"node2")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"N")),(0,r.kt)("td",c({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"V")),(0,r.kt)("td",c({parentName:"tr"},{align:null})))))))}y.isMDXComponent=!0}}]);