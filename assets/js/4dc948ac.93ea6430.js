"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[32778],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>y,frontMatter:()=>m,metadata:()=>f,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&c(e,r,t[r]);return e};const m={title:"OrderedSetCreators",slug:"/rimbu/ordered/set-custom/OrderedSetCreators/interface"},u="interface OrderedSetCreators",f={unversionedId:"rimbu_ordered/set-custom/OrderedSetCreators.interface",id:"rimbu_ordered/set-custom/OrderedSetCreators.interface",title:"OrderedSetCreators",description:"undocumented",source:"@site/api/rimbu_ordered/set-custom/OrderedSetCreators.interface.mdx",sourceDirName:"rimbu_ordered/set-custom",slug:"/rimbu/ordered/set-custom/OrderedSetCreators/interface",permalink:"/api/rimbu/ordered/set-custom/OrderedSetCreators/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedSetCreators",slug:"/rimbu/ordered/set-custom/OrderedSetCreators/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedSetContextImpl<UT,Tp>",permalink:"/api/rimbu/ordered/set-custom/OrderedSetContextImpl/class"},next:{title:"OrderedSetEmpty<T,Tp,TpG>",permalink:"/api/rimbu/ordered/set-custom/OrderedSetEmpty/class"}},k={},b=[{value:"Methods",id:"methods",level:2},{value:"<code>createContext</code>",id:"createcontext",level:3},{value:"Definition",id:"definition",level:4},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4}],C={toc:b};function y(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},C),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"interface-orderedsetcreators"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface OrderedSetCreators")),(0,n.kt)("p",null,"undocumented"),(0,n.kt)("h2",s({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"createcontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"createContext")),(0,n.kt)("p",null,"Returns a new OrderedSet context instance based on the given ",(0,n.kt)("inlineCode",{parentName:"p"},"options"),".")),(0,n.kt)("h4",s({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"createContext<UT>(options: {"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"listContext?: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/list/List/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List.Context")),(0,n.kt)("inlineCode",{parentName:"p"},";"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"setContext: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set/RSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSet.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UT>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"}): "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/set/OrderedSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSet.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<UT>;"))),(0,n.kt)("h4",s({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"UT"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"the upper element type for which the context can create instances")))),(0,n.kt)("h4",s({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"{"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"listContext?: "),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/list/List/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"List.Context")),(0,n.kt)("inlineCode",{parentName:"td"},";"),(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"setContext: "),(0,n.kt)("a",s({parentName:"td"},{href:"/api/rimbu/collection-types/set/RSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSet.Context")),(0,n.kt)("inlineCode",{parentName:"td"},"<UT>;"),(0,n.kt)("br",null),"\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"td"},"}")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"an object containing the following properties:",(0,n.kt)("br",null)," - listContext - the list context to use for element ordering",(0,n.kt)("br",null)," - setContext - the set context to use for element sets"))))))}y.isMDXComponent=!0}}]);