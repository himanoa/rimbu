"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[51529],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73203:function(e,t,n){n.d(t,{r:function(){return m}});var a=n(67294),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const u={previewwindow:"console",view:"split",editorsize:"60",codemirror:"1",moduleview:"1"};function m(e){const t=(n=((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e})({},u),r={module:`/src/${e.path}`},o(n,i(r)));var n,r;const m=function(e){let t="",n="";for(const a in e)t+=`${n}${a}=${e[a]}`,n="&";return""===t?"":`?${t}`}(t),d=`https://codesandbox.io/embed/github/vitoke/rimbu-sandbox/tree/main${m}`,b=`https://codesandbox.io/s/github/vitoke/rimbu-sandbox/tree/main${m}`;return a.createElement(a.Fragment,null,a.createElement("a",{target:"_blank",className:"button button--secondary",href:b,style:{marginBottom:10}},"Open file below in new window with full type-check"),a.createElement("iframe",{src:d,className:"codesandbox-iframe",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}},34681:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return v}});var a=n(3905),r=n(73203),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={id:"bimap",slug:"./bimap",title:"BiMap"},b="BiMap",f={unversionedId:"collections/bimap",id:"collections/bimap",title:"BiMap",description:"A BiMap is a bidirectional Map of keys and values, where each key has exactly one value, and each value has exactly one key. Furthermore, both keys and values are unique and there is a one-to-one mapping between keys and values.",source:"@site/docs/collections/bimap.mdx",sourceDirName:"collections",slug:"/collections/bimap",permalink:"/docs/collections/bimap",draft:!1,editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/collections/bimap.mdx",tags:[],version:"current",frontMatter:{id:"bimap",slug:"./bimap",title:"BiMap"},sidebar:"sidebar",previous:{title:"Edge Valued Graph",permalink:"/docs/collections/graph/edge-valued-graph"},next:{title:"BiMultiMap",permalink:"/docs/collections/bimultimap"}},h={},v=[{value:"When to use",id:"when-to-use",level:2},{value:"Exports",id:"exports",level:2},{value:"Usage",id:"usage",level:2},{value:"Creation",id:"creation",level:3},{value:"Query",id:"query",level:3},{value:"Motivation",id:"motivation",level:3},{value:"Builder",id:"builder",level:3}],y={toc:v};function g(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},y),u),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"bimap"}),"BiMap"),(0,a.kt)("p",null,"A BiMap is a bidirectional Map of keys and values, where each key has exactly one value, and each value has exactly one key. Furthermore, both keys and values are unique and there is a one-to-one mapping between keys and values."),(0,a.kt)("h2",m({},{id:"when-to-use"}),"When to use"),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"BiMap")," can be useful when you have a domain in which there needs to be a strict one-to-one mapping between two types of entities. For example, say we have a BiMap between persons and seats in a room. A person can have only one seat, and a seat can have only one person. Using a BiMap, this restriction is guaranteed. If we assign seat 1 to person A, and then assign seat 5 to person A, seat 1 will automatically be vacant. In a similar way, if we assign seat 1 to person A, and then seat 1 to person B, person A no longer has a seat."),(0,a.kt)("div",m({},{className:"admonition admonition-info alert alert--info"}),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,a.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"The BiMap internally uses two 'normal' immutable Maps to maintain this guarantee, and therefore also provides fast look-up times both for keys and values. Insertion time and memory usage are double that of a normal Map."))),(0,a.kt)("h2",m({},{id:"exports"}),"Exports"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@rimbu/core")," package exports the following ",(0,a.kt)("em",{parentName:"p"},"concrete")," BiMap TypeScript types:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"/api/rimbu/bimap/BiMap/namespace"}),(0,a.kt)("inlineCode",{parentName:"a"},"BiMap<K, V>"))),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"a generic ",(0,a.kt)("inlineCode",{parentName:"td"},"BiMap")," between keys of type K and values of type V")))),(0,a.kt)("h2",m({},{id:"usage"}),"Usage"),(0,a.kt)("h3",m({},{id:"creation"}),"Creation"),(0,a.kt)(r.r,{path:"bimap/create.ts",mdxType:"SandBox"}),(0,a.kt)("h3",m({},{id:"query"}),"Query"),(0,a.kt)(r.r,{path:"bimap/query.ts",mdxType:"SandBox"}),(0,a.kt)("h3",m({},{id:"motivation"}),"Motivation"),(0,a.kt)(r.r,{path:"bimap/motivation.ts",mdxType:"SandBox"}),(0,a.kt)("h3",m({},{id:"builder"}),"Builder"),(0,a.kt)(r.r,{path:"bimap/build.ts",mdxType:"SandBox"}))}g.isMDXComponent=!0}}]);