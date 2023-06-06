"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[96573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(n),y=a,s=d["".concat(p,".").concat(y)]||d[y]||c[y]||i;return n?r.createElement(s,o(o({ref:t},u),{},{components:n})):r.createElement(s,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},29644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>v,frontMatter:()=>s,metadata:()=>k,toc:()=>b});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))m.call(t,n)&&u(e,n,t[n]);return e},c=(e,t)=>i(e,o(t)),y=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n};const s={title:"ProximityMap.Context<UK>",slug:"/rimbu/proximity/ProximityMap/Context/interface"},f="interface ProximityMap.Context<UK>",k={unversionedId:"rimbu_proximity/ProximityMap/Context.interface",id:"rimbu_proximity/ProximityMap/Context.interface",title:"ProximityMap.Context<UK>",description:"A context instance for a ProximityMap that acts as a factory for every instance of this type of collection.",source:"@site/api/rimbu_proximity/ProximityMap/Context.interface.mdx",sourceDirName:"rimbu_proximity/ProximityMap",slug:"/rimbu/proximity/ProximityMap/Context/interface",permalink:"/api/rimbu/proximity/ProximityMap/Context/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"ProximityMap.Context<UK>",slug:"/rimbu/proximity/ProximityMap/Context/interface"},sidebar:"defaultSidebar",previous:{title:"ProximityMap.Builder<K,V>",permalink:"/api/rimbu/proximity/ProximityMap/Builder/interface"},next:{title:"ProximityMap.NonEmpty<K,V>",permalink:"/api/rimbu/proximity/ProximityMap/NonEmpty/interface"}},h={},b=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>distanceFunction</code>",id:"distancefunction",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>hashMapContext</code>",id:"hashmapcontext",level:3},{value:"Definition",id:"definition-1",level:4},{value:"<code>typeTag</code>",id:"typetag",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>createBuilder</code>",id:"createbuilder",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4}],x={toc:b},N="wrapper";function v(e){var t=e,{components:n}=t,a=y(t,["components"]);return(0,r.kt)(N,c(d(d({},x),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"interface-proximitymapcontextuk"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface ProximityMap.Context<UK>")),(0,r.kt)("p",null,"A context instance for a ",(0,r.kt)("inlineCode",{parentName:"p"},"ProximityMap")," that acts as a factory for every instance of this type of collection."),(0,r.kt)("h2",d({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"UK"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"the upper key type bound for which the context can be used")))),(0,r.kt)("h2",d({},{id:"properties"}),"Properties"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",d({},{id:"distancefunction"}),(0,r.kt)("inlineCode",{parentName:"h3"},"distanceFunction")),(0,r.kt)("p",null,"The function used to compute the distance between stored keys and any research key")),(0,r.kt)("h4",d({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly distanceFunction: DistanceFunction<UK>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",d({},{id:"hashmapcontext"}),(0,r.kt)("inlineCode",{parentName:"h3"},"hashMapContext")),(0,r.kt)("p",null,"The context used by the internal HashMap")),(0,r.kt)("h4",d({},{id:"definition-1"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly hashMapContext: HashMap.Context<UK>;")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",d({},{id:"typetag"}),(0,r.kt)("inlineCode",{parentName:"h3"},"typeTag")),(0,r.kt)("p",null,"undocumented")),(0,r.kt)("h4",d({},{id:"definition-2"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readonly typeTag: 'ProximityMap';")))),(0,r.kt)("h2",d({},{id:"methods"}),"Methods"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",d({},{id:"createbuilder"}),(0,r.kt)("inlineCode",{parentName:"h3"},"createBuilder")),(0,r.kt)("p",null,"Creates a builder given the optional non-empty source map")),(0,r.kt)("h4",d({},{id:"definition-3"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createBuilder<K extends UK, V>(source?: "),(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/proximity/map/ProximityMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ProximityMap.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<K, V>): "),(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/proximity/map/ProximityMap/Builder/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ProximityMap.Builder")),(0,r.kt)("inlineCode",{parentName:"p"},"<K, V>;"))),(0,r.kt)("h4",d({},{id:"type-parameters-1"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Constraints"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"K"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"UK")),(0,r.kt)("td",d({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"V"),(0,r.kt)("td",d({parentName:"tr"},{align:null})),(0,r.kt)("td",d({parentName:"tr"},{align:null}))))),(0,r.kt)("h4",d({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("a",d({parentName:"td"},{href:"/api/rimbu/proximity/map/ProximityMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ProximityMap.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"td"},"<K, V>")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Optional non-empty map used to fill the builder"))))))}v.isMDXComponent=!0}}]);