"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[64348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=m(n),s=i,c=u["".concat(o,".").concat(s)]||u[s]||k[s]||r;return n?a.createElement(c,l(l({ref:t},p),{},{components:n})):a.createElement(c,l({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=s;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[u]="string"==typeof e?e:i,l[1]=d;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},46946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>N,default:()=>b,frontMatter:()=>c,metadata:()=>f,toc:()=>h});var a=n(3905),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&p(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&p(e,n,t[n]);return e},k=(e,t)=>r(e,l(t)),s=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n};const c={title:"SortedSetEmpty<T>",slug:"/rimbu/sorted/set-custom/SortedSetEmpty/class"},N="class SortedSetEmpty<T>",f={unversionedId:"rimbu_sorted/set-custom/SortedSetEmpty.class",id:"rimbu_sorted/set-custom/SortedSetEmpty.class",title:"SortedSetEmpty<T>",description:"undocumented",source:"@site/api/rimbu_sorted/set-custom/SortedSetEmpty.class.mdx",sourceDirName:"rimbu_sorted/set-custom",slug:"/rimbu/sorted/set-custom/SortedSetEmpty/class",permalink:"/api/rimbu/sorted/set-custom/SortedSetEmpty/class",draft:!1,tags:[],version:"current",frontMatter:{title:"SortedSetEmpty<T>",slug:"/rimbu/sorted/set-custom/SortedSetEmpty/class"},sidebar:"defaultSidebar",previous:{title:"SortedSetCreators",permalink:"/api/rimbu/sorted/set-custom/SortedSetCreators/interface"},next:{title:"SortedSetInner<T>",permalink:"/api/rimbu/sorted/set-custom/SortedSetInner/class"}},v={},h=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>add</code>",id:"add",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>addAll</code>",id:"addall",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>difference</code>",id:"difference",level:3},{value:"Definition",id:"definition-3",level:4},{value:"<code>drop</code>",id:"drop",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>getAtIndex</code>",id:"getatindex",level:3},{value:"Definitions",id:"definitions",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>has</code>",id:"has",level:3},{value:"Definition",id:"definition-5",level:4},{value:"<code>intersect</code>",id:"intersect",level:3},{value:"Definition",id:"definition-6",level:4},{value:"<code>max</code>",id:"max",level:3},{value:"Definitions",id:"definitions-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>min</code>",id:"min",level:3},{value:"Definitions",id:"definitions-2",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>remove</code>",id:"remove",level:3},{value:"Definition",id:"definition-7",level:4},{value:"<code>removeAll</code>",id:"removeall",level:3},{value:"Definition",id:"definition-8",level:4},{value:"<code>slice</code>",id:"slice",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"<code>sliceIndex</code>",id:"sliceindex",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition-11",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>streamRange</code>",id:"streamrange",level:3},{value:"Definition",id:"definition-12",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>streamSliceIndex</code>",id:"streamsliceindex",level:3},{value:"Definition",id:"definition-13",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"<code>symDifference</code>",id:"symdifference",level:3},{value:"Definition",id:"definition-14",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"<code>take</code>",id:"take",level:3},{value:"Definition",id:"definition-15",level:4},{value:"Parameters",id:"parameters-7",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"<code>toBuilder</code>",id:"tobuilder",level:3},{value:"Definition",id:"definition-16",level:4},{value:"<code>toJSON</code>",id:"tojson",level:3},{value:"Definition",id:"definition-17",level:4},{value:"<code>toString</code>",id:"tostring",level:3},{value:"Definition",id:"definition-18",level:4},{value:"<code>union</code>",id:"union",level:3},{value:"Definition",id:"definition-19",level:4},{value:"Parameters",id:"parameters-8",level:4}],S={toc:h},g="wrapper";function b(e){var t=e,{components:n}=t,i=s(t,["components"]);return(0,a.kt)(g,k(u(u({},S),i),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"class-sortedsetemptyt"}),(0,a.kt)("inlineCode",{parentName:"h1"},"class SortedSetEmpty<T>")),(0,a.kt)("p",null,"undocumented"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implements:")," ",(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet<T>"))),(0,a.kt)("h2",u({},{id:"type-parameters"}),"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Default"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"any")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"undocumented")))),(0,a.kt)("h2",u({},{id:"properties"}),"Properties"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"context"}),(0,a.kt)("inlineCode",{parentName:"h3"},"context")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set-custom/SortedSetContext/class"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSetContext")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;")))),(0,a.kt)("h2",u({},{id:"methods"}),"Methods"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"add"}),(0,a.kt)("inlineCode",{parentName:"h3"},"add")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-1"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"add(value: T): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet.NonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h4",u({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"value")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",u({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"addall"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addAll")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-2"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"addAll(values: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/NonEmpty/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet.NonEmpty")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h4",u({},{id:"parameters-1"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"values")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"td"},"<T>")),(0,a.kt)("td",u({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"difference"}),(0,a.kt)("inlineCode",{parentName:"h3"},"difference")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-3"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"difference(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"drop"}),(0,a.kt)("inlineCode",{parentName:"h3"},"drop")),(0,a.kt)("p",null,"Returns a SortedSet containing all but the the first ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," of value of this SortedSet.")),(0,a.kt)("h4",u({},{id:"definition-4"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"drop(amount: number): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h4",u({},{id:"parameters-2"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"amount")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the amount of elements to keep")))),(0,a.kt)("admonition",u({},{title:"note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"a negative ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," drops the last values instead of the first, e.g. -2 is the last 2 elements")),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m = SortedSet.of('b', 'd', 'a', 'c').asNormal();\nconsole.log(m.drop(2).toArray())\n// => ['c', 'd']\nconsole.log(m.drop(-2).toArray())\n// => ['a', 'b']\n"))),(0,a.kt)("h4",u({},{id:"overrides"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface#drop"}),"SortedSet.drop"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"getatindex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getAtIndex")),(0,a.kt)("p",null,"Returns the value at the given index of the value sort order of the SortedSet, or a fallback value (default: undefined) if the index is out of bounds.")),(0,a.kt)("h4",u({},{id:"definitions"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getAtIndex(index: number): T "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getAtIndex<O>(index: number, otherwise: OptLazy<O>): T "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("h4",u({},{id:"parameters-3"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"index")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the index in the key sort order")))),(0,a.kt)("admonition",u({},{title:"note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"negative index values will retrieve the values from the end of the sort order, e.g. -1 is the last value")),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m = SortedSet.of('b', 'd', 'a', 'c').asNormal();\nconsole.log(m.getAtIndex(1))\n// => 'b'\nconsole.log(m.getAtIndex(-1))\n// => 'd'\nconsole.log(m.getAtIndex(10))\n// => undefined\nconsole.log(m.getAtIndex(10, 'q'))\n// => 'q'\n"))),(0,a.kt)("h4",u({},{id:"overrides-1"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface#getAtIndex"}),"SortedSet.getAtIndex"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"has"}),(0,a.kt)("inlineCode",{parentName:"h3"},"has")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-5"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"has(): false;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"intersect"}),(0,a.kt)("inlineCode",{parentName:"h3"},"intersect")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-6"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"intersect(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"max"}),(0,a.kt)("inlineCode",{parentName:"h3"},"max")),(0,a.kt)("p",null,"Returns the maximum value of the SortedSet, or a fallback value (default: undefined) if the SortedSet is empty.")),(0,a.kt)("h4",u({},{id:"definitions-1"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"max(): T "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"max<O>(otherwise: OptLazy<O>): T "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m = SortedSet.of('b', 'd', 'a', 'c').asNormal();\nconsole.log(m.max())\n// => 'a'\nconsole.log(m.max('q'))\n// => 'a'\nconsole.log(SortedSet.empty().max())\n// => undefined\nconsole.log(SortedSet.empty().max('q'))\n// => 'q'\n"))),(0,a.kt)("h4",u({},{id:"overrides-2"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface#max"}),"SortedSet.max"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"min"}),(0,a.kt)("inlineCode",{parentName:"h3"},"min")),(0,a.kt)("p",null,"Returns the minimum value of the SortedSet, or a fallback value (default: undefined) if the SortedSet is empty.")),(0,a.kt)("h4",u({},{id:"definitions-2"}),"Definitions"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"min(): T "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"min<O>(otherwise: OptLazy<O>): T "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," O;"))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m = SortedSet.of('b', 'd', 'a', 'c').asNormal();\nconsole.log(m.min())\n// => 'a'\nconsole.log(m.min('q'))\n// => 'a'\nconsole.log(SortedSet.empty().min())\n// => undefined\nconsole.log(SortedSet.empty().min('q'))\n// => 'q'\n"))),(0,a.kt)("h4",u({},{id:"overrides-3"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface#min"}),"SortedSet.min"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"remove"}),(0,a.kt)("inlineCode",{parentName:"h3"},"remove")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-7"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"remove(): this;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"removeall"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeAll")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-8"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"removeAll(): this;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"slice"}),(0,a.kt)("inlineCode",{parentName:"h3"},"slice")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-9"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"slice(): this;"))),(0,a.kt)("h4",u({},{id:"overrides-4"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface#slice"}),"SortedSet.slice"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"sliceindex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"sliceIndex")),(0,a.kt)("p",null,"Returns a SortedSet containing only those values that are within the given ",(0,a.kt)("inlineCode",{parentName:"p"},"range")," index range of the value sort order.")),(0,a.kt)("h4",u({},{id:"definition-10"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sliceIndex(range: IndexRange): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h4",u({},{id:"parameters-4"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"range")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"IndexRange")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"an ",(0,a.kt)("inlineCode",{parentName:"td"},"IndexRange")," defining the sort order indices to include.")))),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m = SortedSet.of('b', 'd', 'a', 'c').asNormal();\nconsole.log(m.sliceIndex({ start: 1, amount: 2 }).toArray())\n// => ['b', 'c']\n"))),(0,a.kt)("h4",u({},{id:"overrides-5"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface#sliceIndex"}),"SortedSet.sliceIndex"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"stream"}),(0,a.kt)("inlineCode",{parentName:"h3"},"stream")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-11"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stream(reversed?: boolean): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h4",u({},{id:"parameters-5"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"reversed")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",u({parentName:"tr"},{align:null}))))),(0,a.kt)("h4",u({},{id:"overrides-6"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface#stream"}),"SortedSet.stream"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"streamrange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"streamRange")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-12"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"streamRange(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h4",u({},{id:"overrides-7"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface#streamRange"}),"SortedSet.streamRange"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"streamsliceindex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"streamSliceIndex")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-13"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"streamSliceIndex(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/Stream/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"Stream")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h4",u({},{id:"overrides-8"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface#streamSliceIndex"}),"SortedSet.streamSliceIndex"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"symdifference"}),(0,a.kt)("inlineCode",{parentName:"h3"},"symDifference")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-14"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"symDifference(other: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h4",u({},{id:"parameters-6"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"other")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"td"},"<T>")),(0,a.kt)("td",u({parentName:"tr"},{align:null})))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"take"}),(0,a.kt)("inlineCode",{parentName:"h3"},"take")),(0,a.kt)("p",null,"Returns a SortedSet containing the the first ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," of value of this SortedSet.")),(0,a.kt)("h4",u({},{id:"definition-15"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"take(amount: number): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;"))),(0,a.kt)("h4",u({},{id:"parameters-7"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"amount")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"the amount of elements to keep")))),(0,a.kt)("admonition",u({},{title:"note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"a negative ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," takes the last values instead of the first, e.g. -2 is the last 2 elements")),(0,a.kt)("admonition",u({},{title:"example",type:"note"}),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"const m = SortedSet.of('b', 'd', 'a', 'c').asNormal();\nconsole.log(m.take(2).toArray())\n// => ['a', 'b']\nconsole.log(m.take(-2).toArray())\n// => ['c', 'd']\n"))),(0,a.kt)("h4",u({},{id:"overrides-9"}),"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface#take"}),"SortedSet.take"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"tobuilder"}),(0,a.kt)("inlineCode",{parentName:"h3"},"toBuilder")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-16"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"toBuilder(): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/Builder/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet.Builder")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"tojson"}),(0,a.kt)("inlineCode",{parentName:"h3"},"toJSON")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-17"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"toJSON(): ToJSON<T[]>;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"tostring"}),(0,a.kt)("inlineCode",{parentName:"h3"},"toString")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-18"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"toString(): string;")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",u({},{id:"union"}),(0,a.kt)("inlineCode",{parentName:"h3"},"union")),(0,a.kt)("p",null,"undocumented")),(0,a.kt)("h4",u({},{id:"definition-19"}),"Definition"),(0,a.kt)("code",null,(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"union(other: "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"p"},"<T>): "),(0,a.kt)("a",u({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/interface"}),(0,a.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,a.kt)("inlineCode",{parentName:"p"},"<T> "),(0,a.kt)("code",null,"|"),(0,a.kt)("inlineCode",{parentName:"p"}," any;"))),(0,a.kt)("h4",u({},{id:"parameters-8"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"other")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,a.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,a.kt)("inlineCode",{parentName:"td"},"<T>")),(0,a.kt)("td",u({parentName:"tr"},{align:null})))))))}b.isMDXComponent=!0}}]);