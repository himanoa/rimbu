"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[21929],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34377:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return f}});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&u(e,n,t[n]);return e};const d={title:"AsyncAppendIterator<T>",slug:"/rimbu/stream/async-custom/AsyncAppendIterator/class"},m="class AsyncAppendIterator<T>",k={unversionedId:"rimbu_stream/async-custom/AsyncAppendIterator.class",id:"rimbu_stream/async-custom/AsyncAppendIterator.class",title:"AsyncAppendIterator<T>",description:"undocumented",source:"@site/api/rimbu_stream/async-custom/AsyncAppendIterator.class.mdx",sourceDirName:"rimbu_stream/async-custom",slug:"/rimbu/stream/async-custom/AsyncAppendIterator/class",permalink:"/api/rimbu/stream/async-custom/AsyncAppendIterator/class",draft:!1,tags:[],version:"current",frontMatter:{title:"AsyncAppendIterator<T>",slug:"/rimbu/stream/async-custom/AsyncAppendIterator/class"},sidebar:"defaultSidebar",previous:{title:"@rimbu/stream/async-custom",permalink:"/api/rimbu/stream/async-custom"},next:{title:"AsyncCollectIterator<T,R>",permalink:"/api/rimbu/stream/async-custom/AsyncCollectIterator/class"}},y={},f=[{value:"Type parameters",id:"type-parameters",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>appendDone</code>",id:"appenddone",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>item</code>",id:"item",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>return</code>",id:"return",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>source</code>",id:"source",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>fastNext</code>",id:"fastnext",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Type parameters",id:"type-parameters-1",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>next</code>",id:"next",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Overrides",id:"overrides-2",level:4}],v={toc:f};function b(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},v),u),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"class-asyncappenditeratort"}),(0,r.kt)("inlineCode",{parentName:"h1"},"class AsyncAppendIterator<T>")),(0,r.kt)("p",null,"undocumented"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFastIteratorBase/class"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncFastIteratorBase<T>"))),(0,r.kt)("h3",c({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"T"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"undocumented")))),(0,r.kt)("h2",c({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"appenddone"}),(0,r.kt)("inlineCode",{parentName:"h3"},"appendDone")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"appendDone: boolean;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"item"}),(0,r.kt)("inlineCode",{parentName:"h3"},"item")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly item: "),(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/common/AsyncOptLazy/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncOptLazy")),(0,r.kt)("inlineCode",{parentName:"p"},"<T>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"return"}),(0,r.kt)("inlineCode",{parentName:"h3"},"return")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"return?: () => Promise<any>;"))),(0,r.kt)("h4",c({},{id:"overrides"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFastIteratorBase/class#return"}),"AsyncFastIteratorBase.return"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"source"}),(0,r.kt)("inlineCode",{parentName:"h3"},"source")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-3"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly source: "),(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/async/AsyncFastIterator/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncFastIterator")),(0,r.kt)("inlineCode",{parentName:"p"},"<T>;")))),(0,r.kt)("h2",c({},{id:"methods"}),"Methods"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"fastnext"}),(0,r.kt)("inlineCode",{parentName:"h3"},"fastNext")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-4"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fastNext<O>(otherwise?: "),(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/common/AsyncOptLazy/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncOptLazy")),(0,r.kt)("inlineCode",{parentName:"p"},"<O>): Promise<T "),(0,r.kt)("code",null,"|"),(0,r.kt)("inlineCode",{parentName:"p"}," O>;"))),(0,r.kt)("h3",c({},{id:"type-parameters-1"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"O"),(0,r.kt)("td",c({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",c({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"otherwise")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/api/rimbu/common/AsyncOptLazy/type"}),(0,r.kt)("inlineCode",{parentName:"a"},"AsyncOptLazy")),(0,r.kt)("inlineCode",{parentName:"td"},"<O>")),(0,r.kt)("td",c({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",c({},{id:"overrides-1"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFastIteratorBase/class#fastNext"}),"AsyncFastIteratorBase.fastNext"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",c({},{id:"next"}),(0,r.kt)("inlineCode",{parentName:"h3"},"next")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",c({},{id:"definition-5"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"next(): Promise<IteratorResult<T>>;"))),(0,r.kt)("h4",c({},{id:"overrides-2"}),"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/async/AsyncFastIterator/interface#next"}),"AsyncFastIterator.next"),", ",(0,r.kt)("a",c({parentName:"p"},{href:"/api/rimbu/stream/async-custom/AsyncFastIteratorBase/class#next"}),"AsyncFastIteratorBase.next"))))}b.isMDXComponent=!0}}]);