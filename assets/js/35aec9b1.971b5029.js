(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[1529],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3664:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var a=n(7294),r={previewwindow:"console",view:"split",editorsize:"60",codemirror:"1",moduleview:"1"};function o(e){var t=function(e){var t="",n="";for(var a in e)t+=""+n+a+"="+e[a],n="&";return""===t?"":"?"+t}(Object.assign({},r,{module:"/src/"+e.path})),n="https://codesandbox.io/embed/github/vitoke/rimbu-sandbox/tree/main"+t,o="https://codesandbox.io/s/github/vitoke/rimbu-sandbox/tree/main"+t;return console.log({embedUrl:n}),a.createElement(a.Fragment,null,a.createElement("a",{target:"_blank",className:"button button--secondary",href:o,style:{marginBottom:10}},"Open file below in new window with full type-check"),a.createElement("iframe",{src:n,className:"codesandbox-iframe",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}},8204:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=n(3664),l=["components"],s={id:"bimap",slug:"./bimap",title:"BiMap"},p="BiMap",c={unversionedId:"collections/bimap",id:"collections/bimap",isDocsHomePage:!1,title:"BiMap",description:"A BiMap is a bidirectional Map of keys and values, where each key has exactly one value, and each value has exactly one key. Furthermore, both keys and values are unique and there is a one-to-one mapping between keys and values.",source:"@site/docs/collections/bimap.mdx",sourceDirName:"collections",slug:"/collections/bimap",permalink:"/docs/collections/bimap",editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/collections/bimap.mdx",tags:[],version:"current",frontMatter:{id:"bimap",slug:"./bimap",title:"BiMap"},sidebar:"sidebar",previous:{title:"Immutable collections",permalink:"/docs/collections/"},next:{title:"BiMultiMap",permalink:"/docs/collections/bimultimap"}},u=[{value:"When to use",id:"when-to-use",children:[]},{value:"Exports",id:"exports",children:[]},{value:"Usage",id:"usage",children:[{value:"Creation",id:"creation",children:[]},{value:"Query",id:"query",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Builder",id:"builder",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bimap"},"BiMap"),(0,o.kt)("p",null,"A BiMap is a bidirectional Map of keys and values, where each key has exactly one value, and each value has exactly one key. Furthermore, both keys and values are unique and there is a one-to-one mapping between keys and values."),(0,o.kt)("h2",{id:"when-to-use"},"When to use"),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"BiMap")," can be useful when you have a domain in which there needs to be a strict one-to-one mapping between two types of entities. For example, say we have a BiMap between persons and seats in a room. A person can have only one seat, and a seat can have only one person. Using a BiMap, this restriction is guaranteed. If we assign seat 1 to person A, and then assign seat 5 to person A, seat 1 will automatically be vacant. In a similar way, if we assign seat 1 to person A, and then seat 1 to person B, person A no longer has a seat."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The BiMap internally uses two 'normal' Maps to maintain this guarantee, and therefore also provides fast look-up times both for keys and values. Insertion time and memory usage are double that of a normal Map."))),(0,o.kt)("h2",{id:"exports"},"Exports"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@rimbu/core")," package exports the following ",(0,o.kt)("em",{parentName:"p"},"concrete")," BiMap types:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"BiMap<K, V>")),(0,o.kt)("td",{parentName:"tr",align:null},"a generic ",(0,o.kt)("inlineCode",{parentName:"td"},"BiMap")," between keys of type K and values of type V")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"creation"},"Creation"),(0,o.kt)(i.r,{path:"bimap/create.ts",mdxType:"SandBox"}),(0,o.kt)("h3",{id:"query"},"Query"),(0,o.kt)(i.r,{path:"bimap/query.ts",mdxType:"SandBox"}),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)(i.r,{path:"bimap/motivation.ts",mdxType:"SandBox"}),(0,o.kt)("h3",{id:"builder"},"Builder"),(0,o.kt)(i.r,{path:"bimap/build.ts",mdxType:"SandBox"}))}m.isMDXComponent=!0}}]);