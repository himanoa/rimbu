"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[99785],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return s}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(a),s=n,b=c["".concat(p,".").concat(s)]||c[s]||d[s]||i;return a?r.createElement(b,l(l({ref:t},u),{},{components:a})):r.createElement(b,l({ref:t},u))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19643:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return b},toc:function(){return f}});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))m.call(t,a)&&u(e,a,t[a]);return e};const c={title:"Rimbu API Docs",slug:"."},s="Rimbu API Docs",b={unversionedId:"index",id:"index",title:"Rimbu API Docs",description:"Welcome to the Rimbu API documentation! Here you will find extensive and navigable documentation for all the collection packages. All collections can be imported directly through sub-packages,",source:"@site/api/index.mdx",sourceDirName:".",slug:"/",permalink:"/api/",draft:!1,tags:[],version:"current",frontMatter:{title:"Rimbu API Docs",slug:"."},sidebar:"defaultSidebar",next:{title:"@rimbu/bimap",permalink:"/api/rimbu/bimap"}},k={},f=[{value:"Package overview",id:"package-overview",level:2}],N={toc:f};function g(e){var t,a=e,{components:n}=a,u=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=d(d({},N),u),i(t,l({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",d({},{id:"rimbu-api-docs"}),"Rimbu API Docs"),(0,r.kt)("p",null,"Welcome to the Rimbu API documentation! Here you will find extensive and navigable documentation for all the collection packages. All collections can be imported directly through sub-packages,\nhowever, the the ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core"}),(0,r.kt)("inlineCode",{parentName:"a"},"@ribu/core")," package")," also exports the same collections for convenience. In most cases, importing from ",(0,r.kt)("inlineCode",{parentName:"p"},"@rimbu/core")," will be sufficient."),(0,r.kt)("p",null,"To read how to get started with Rimbu, see the ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/getting-started"}),"Getting Started page"),"."),(0,r.kt)("h2",d({},{id:"package-overview"}),"Package overview"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Package Name"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/bimap"}),(0,r.kt)("inlineCode",{parentName:"a"},"@rimbu/bimap"))),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Provides BiMap implementations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/bimultimap"}),(0,r.kt)("inlineCode",{parentName:"a"},"@rimbu/bimultimap"))),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Provides BiMultiMap implementations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/collection-types"}),(0,r.kt)("inlineCode",{parentName:"a"},"@rimbu/collection-types"))),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"A convenience package that exports all the base types for Rimbu Sets and Maps.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/common"}),(0,r.kt)("inlineCode",{parentName:"a"},"@rimbu/common"))),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Provides many commonly used types and utilities that can also be of use to Rimbu users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/core"}),(0,r.kt)("inlineCode",{parentName:"a"},"@rimbu/core"))),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"A convenience package that exports all of the main collections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/deep"}),(0,r.kt)("inlineCode",{parentName:"a"},"@rimbu/deep"))),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Provides utilities to patch and match plain JavaScript objects.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/graph"}),(0,r.kt)("inlineCode",{parentName:"a"},"@rimbu/graph"))),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Provides many types of Graph implementations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/hashed"}),(0,r.kt)("inlineCode",{parentName:"a"},"@rimbu/hashed"))),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Pprovides implementations of the ",(0,r.kt)("inlineCode",{parentName:"td"},"HashSet")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"HashMap"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/list"}),"`@rimbu/list")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Provides the ",(0,r.kt)("inlineCode",{parentName:"td"},"List")," implementation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/multimap"}),"`@rimbu/multimap")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Provides implementations for various MultiMaps.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/multiset"}),"`@rimbu/multiset")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Provides implementations for various MultiSets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/ordered"}),"`@rimbu/ordered")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Provides various ",(0,r.kt)("inlineCode",{parentName:"td"},"OrderedMap")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"OrderedSet")," implementations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/sorted"}),"`@rimbu/sorted")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Provides implementations for sorted maps and sets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/stream"}),"`@rimbu/stream")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Provides the ",(0,r.kt)("inlineCode",{parentName:"td"},"Stream")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"AsyncStream")," implementations and many related utilities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/table"}),"`@rimbu/table")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Provides implementations for tables (2-dimensional maps).")))))}g.isMDXComponent=!0}}]);