"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[65990],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>N});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),d=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=d(a),s=l,N=k["".concat(m,".").concat(s)]||k[s]||u[s]||r;return a?n.createElement(N,i(i({ref:t},o),{},{components:a})):n.createElement(N,i({ref:t},o))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=s;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[k]="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},73134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>f,frontMatter:()=>N,metadata:()=>c,toc:()=>b});var n=a(3905),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&o(e,a,t[a]);if(p)for(var a of p(t))d.call(t,a)&&o(e,a,t[a]);return e},u=(e,t)=>r(e,i(t)),s=(e,t)=>{var a={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a};const N={title:"BiMap.Builder<K,V>",slug:"/rimbu/bimap/BiMap/Builder/interface"},h="interface BiMap.Builder<K,V>",c={unversionedId:"rimbu_bimap/BiMap/Builder.interface",id:"rimbu_bimap/BiMap/Builder.interface",title:"BiMap.Builder<K,V>",description:"A mutable BiMap builder used to efficiently create new immutable instances. See the BiMap documentation and the BiMap.Builder API documentation",source:"@site/api/rimbu_bimap/BiMap/Builder.interface.mdx",sourceDirName:"rimbu_bimap/BiMap",slug:"/rimbu/bimap/BiMap/Builder/interface",permalink:"/api/rimbu/bimap/BiMap/Builder/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"BiMap.Builder<K,V>",slug:"/rimbu/bimap/BiMap/Builder/interface"},sidebar:"defaultSidebar",previous:{title:"BiMap (namespace)",permalink:"/api/rimbu/bimap/BiMap/namespace"},next:{title:"BiMap.Context<UK,UV,Tp>",permalink:"/api/rimbu/bimap/BiMap/Context/interface"}},y={},b=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>isEmpty</code>",id:"isempty",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>size</code>",id:"size",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>addEntries</code>",id:"addentries",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>addEntry</code>",id:"addentry",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>build</code>",id:"build",level:3},{value:"Definition",id:"definition-4",level:4},{value:"<code>forEach</code>",id:"foreach",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>getKey</code>",id:"getkey",level:3},{value:"Definitions",id:"definitions",level:4},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>getValue</code>",id:"getvalue",level:3},{value:"Definitions",id:"definitions-1",level:4},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"<code>hasKey</code>",id:"haskey",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"<code>hasValue</code>",id:"hasvalue",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"<code>removeKey</code>",id:"removekey",level:3},{value:"Definitions",id:"definitions-2",level:4},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Parameters",id:"parameters-7",level:4},{value:"<code>removeKeys</code>",id:"removekeys",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Type parameters",id:"type-parameters-6",level:4},{value:"Parameters",id:"parameters-8",level:4},{value:"<code>removeValue</code>",id:"removevalue",level:3},{value:"Definitions",id:"definitions-3",level:4},{value:"Type parameters",id:"type-parameters-7",level:4},{value:"Parameters",id:"parameters-9",level:4},{value:"<code>removeValues</code>",id:"removevalues",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Type parameters",id:"type-parameters-8",level:4},{value:"Parameters",id:"parameters-10",level:4},{value:"<code>set</code>",id:"set",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Parameters",id:"parameters-11",level:4}],v={toc:b},g="wrapper";function f(e){var t=e,{components:a}=t,l=s(t,["components"]);return(0,n.kt)(g,u(k(k({},v),l),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",k({},{id:"interface-bimapbuilderkv"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface BiMap.Builder<K,V>")),(0,n.kt)("p",null,"A mutable ",(0,n.kt)("inlineCode",{parentName:"p"},"BiMap")," builder used to efficiently create new immutable instances. See the ",(0,n.kt)("a",k({parentName:"p"},{href:"https://rimbu.org/docs/collections/bimap"}),"BiMap documentation")," and the ",(0,n.kt)("a",k({parentName:"p"},{href:"https://rimbu.org/api/rimbu/bimap/BiMap/Builder/interface"}),"BiMap.Builder API documentation")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,n.kt)("a",k({parentName:"p"},{href:"/api/rimbu/bimap/custom/BiMapBuilder/class"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMapBuilder<K,V>"))),(0,n.kt)("h2",k({},{id:"type-parameters"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"K"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"the key type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"V"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"the value type")))),(0,n.kt)("h2",k({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",k({},{id:"isempty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"isEmpty")),(0,n.kt)("p",null,"Returns true if there are no entries in the builder.")),(0,n.kt)("h4",k({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly isEmpty: boolean;"))),(0,n.kt)("admonition",k({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"BiMap.of([[1, 'a'], [2, 'b']]).toBuilder().isEmpty\n// => false\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",k({},{id:"size"}),(0,n.kt)("inlineCode",{parentName:"h3"},"size")),(0,n.kt)("p",null,"Returns the amount of entries in the builder.")),(0,n.kt)("h4",k({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly size: number;"))),(0,n.kt)("admonition",k({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"BiMap.of([[1, 'a'], [2, 'b']]).toBuilder().size\n// => 2\n")))),(0,n.kt)("h2",k({},{id:"methods"}),"Methods"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",k({},{id:"addentries"}),(0,n.kt)("inlineCode",{parentName:"h3"},"addEntries")),(0,n.kt)("p",null,"Adds given ",(0,n.kt)("inlineCode",{parentName:"p"},"entries")," to the builder.")),(0,n.kt)("h4",k({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"addEntries(entries: "),(0,n.kt)("a",k({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<readonly [K, V]>): boolean;"))),(0,n.kt)("h4",k({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"entries")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"td"},"<readonly [K, V]>")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",k({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = BiMap.of([1, 'a'], [2, 'b']).toBuilder()\nm.addEntries([1, 'a'], [3, 'c']])   // => true\nm.addEntries([])                    // => false\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",k({},{id:"addentry"}),(0,n.kt)("inlineCode",{parentName:"h3"},"addEntry")),(0,n.kt)("p",null,"Adds the given ",(0,n.kt)("inlineCode",{parentName:"p"},"entry")," to the builder, where the entry key is associated with the entry value.")),(0,n.kt)("h4",k({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"addEntry(entry: readonly [K, V]): boolean;"))),(0,n.kt)("h4",k({},{id:"parameters-1"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"entry")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"readonly [K, V]")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",k({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = BiMap.of([1, 'a'], [2, 'b']).toBuilder()\nm.addEntry([1, 'a'])   // => false\nm.addEntry([1, 'b'])   // => true\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",k({},{id:"build"}),(0,n.kt)("inlineCode",{parentName:"h3"},"build")),(0,n.kt)("p",null,"Returns an immutable collection instance containing the entries in this builder.")),(0,n.kt)("h4",k({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"build(): "),(0,n.kt)("a",k({parentName:"p"},{href:"/api/rimbu/bimap/BiMap/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"BiMap")),(0,n.kt)("inlineCode",{parentName:"p"},"<K, V>;"))),(0,n.kt)("admonition",k({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = BiMap.of([1, 'a'], [2, 'b']).toBuilder()\nconst m2: BiMap<number, string> = m.build()\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",k({},{id:"foreach"}),(0,n.kt)("inlineCode",{parentName:"h3"},"forEach")),(0,n.kt)("p",null,"Performs given function ",(0,n.kt)("inlineCode",{parentName:"p"},"f")," for each entry of the builder.")),(0,n.kt)("h4",k({},{id:"definition-5"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"forEach(f: (entry: readonly [K, V], index: number, halt: () => void) => void, state?: TraverseState): void;"))),(0,n.kt)("h4",k({},{id:"parameters-2"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"f")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(entry: readonly [K, V], index: number, halt: () => void) => void")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"the function to perform for each element, receiving:",(0,n.kt)("br",null)," - ",(0,n.kt)("inlineCode",{parentName:"td"},"entry"),": the next key-value entry",(0,n.kt)("br",null)," - ",(0,n.kt)("inlineCode",{parentName:"td"},"index"),": the index of the element",(0,n.kt)("br",null)," - ",(0,n.kt)("inlineCode",{parentName:"td"},"halt"),": a function that, if called, ensures that no new elements are passed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"state")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"TraverseState")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",k({},{title:"throws",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"RibuError.ModifiedBuilderWhileLoopingOverItError if the builder is modified while looping over it")),(0,n.kt)("admonition",k({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"BiMap.of([1, 'a'], [2, 'b'], [3, 'c']).toBuilder().forEach((entry, i, halt) => {\nconsole.log([entry[1], entry[0]]);\nif (i >= 1) halt();\n})\n// => logs ['a', 1]  ['b', 2]\n"))),(0,n.kt)("admonition",k({},{title:"note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"O(N)"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",k({},{id:"getkey"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getKey")),(0,n.kt)("p",null,"Returns the key associated with the given ",(0,n.kt)("inlineCode",{parentName:"p"},"value"),", or given ",(0,n.kt)("inlineCode",{parentName:"p"},"otherwise")," value if the value is not in the collection.")),(0,n.kt)("h4",k({},{id:"definitions"}),"Definitions"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"getKey<UV = V>(value: RelatedTo<V, UV>): K "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"getKey<UV, O>(value: RelatedTo<V, UV>, otherwise: OptLazy<O>): K "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," O;"))),(0,n.kt)("h4",k({},{id:"type-parameters-1"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"UV"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"V")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",k({},{id:"parameters-3"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"RelatedTo<V, UV>")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"the value to look for")))),(0,n.kt)("admonition",k({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = BiMap.of([1, 'a'], [2, 'b']).toBuilder()\nm.getKey('b')          // => 2\nm.getKey('z')          // => undefined\nm.getKey('b', 'none')  // => 2\nm.getKey('z', 'none')  // => 'none'\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",k({},{id:"getvalue"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getValue")),(0,n.kt)("p",null,"Returns the value associated with the given ",(0,n.kt)("inlineCode",{parentName:"p"},"key"),", or given ",(0,n.kt)("inlineCode",{parentName:"p"},"otherwise")," value if the key is not in the collection.")),(0,n.kt)("h4",k({},{id:"definitions-1"}),"Definitions"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"getValue<UK = K>(key: RelatedTo<K, UK>): V "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"getValue<UK, O>(key: RelatedTo<K, UK>, otherwise: OptLazy<O>): V "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," O;"))),(0,n.kt)("h4",k({},{id:"type-parameters-2"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"UK"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"K")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",k({},{id:"parameters-4"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"key")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"RelatedTo<K, UK>")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"the key to look for")))),(0,n.kt)("admonition",k({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = BiMap.of([1, 'a'], [2, 'b']).toBuilder()\nm.getValue(2)          // => 'b'\nm.getValue(3)          // => undefined\nm.getValue(2, 'none')  // => 'b'\nm.getValue(3, 'none')  // => 'none'\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",k({},{id:"haskey"}),(0,n.kt)("inlineCode",{parentName:"h3"},"hasKey")),(0,n.kt)("p",null,"Returns true if the given ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is present in the builder.")),(0,n.kt)("h4",k({},{id:"definition-6"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"hasKey<UK = K>(key: RelatedTo<K, UK>): boolean;"))),(0,n.kt)("h4",k({},{id:"type-parameters-3"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"UK"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"K")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",k({},{id:"parameters-5"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"key")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"RelatedTo<K, UK>")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"the key to look for")))),(0,n.kt)("admonition",k({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = BiMap.of([1, 'a'], [2, 'b']).toBuilder()\nm.hasKey(2)    // => true\nm.hasKey(3)    // => false\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",k({},{id:"hasvalue"}),(0,n.kt)("inlineCode",{parentName:"h3"},"hasValue")),(0,n.kt)("p",null,"Returns true if the given ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," is present in the builder.")),(0,n.kt)("h4",k({},{id:"definition-7"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"hasValue<UV = V>(value: RelatedTo<V, UV>): boolean;"))),(0,n.kt)("h4",k({},{id:"type-parameters-4"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"UV"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"V")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",k({},{id:"parameters-6"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"RelatedTo<V, UV>")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"the value to look for")))),(0,n.kt)("admonition",k({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = BiMap.of([1, 'a'], [2, 'b']).toBuilder()\nm.hasValue('a')    // => true\nm.hasValue('z')    // => false\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",k({},{id:"removekey"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeKey")),(0,n.kt)("p",null,"Removes the entries related to given ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," from the builder.")),(0,n.kt)("h4",k({},{id:"definitions-2"}),"Definitions"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"removeKey<UK = K>(key: RelatedTo<K, UK>): V "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"removeKey<UK, O>(key: RelatedTo<K, UK>, otherwise: OptLazy<O>): V "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," O;"))),(0,n.kt)("h4",k({},{id:"type-parameters-5"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"UK"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"K")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",k({},{id:"parameters-7"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"key")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"RelatedTo<K, UK>")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"the key to remove")))),(0,n.kt)("admonition",k({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = BiMap.of([1, 'a'], [2, 'b']).toBuilder()\nm.removeKey(2)        // => 'b'\nm.removeKey(3)        // => undefined\nm.removeKey(3, 'c')   // => 'c'\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",k({},{id:"removekeys"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeKeys")),(0,n.kt)("p",null,"Removes the entries related to the given ",(0,n.kt)("inlineCode",{parentName:"p"},"keys")," ",(0,n.kt)("inlineCode",{parentName:"p"},"StreamSource")," from the builder.")),(0,n.kt)("h4",k({},{id:"definition-8"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"removeKeys<UK = K>(keys: "),(0,n.kt)("a",k({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<RelatedTo<K, UK>>): boolean;"))),(0,n.kt)("h4",k({},{id:"type-parameters-6"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"UK"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"K")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",k({},{id:"parameters-8"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"keys")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"td"},"<RelatedTo<K, UK>>")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",k({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = BiMap.of([1, 'a'], [2, 'b']).toBuilder()\nm.removeKeys([3, 4, 5])  // => false\nm.removeKeys([1, 10])    // => true\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",k({},{id:"removevalue"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeValue")),(0,n.kt)("p",null,"Removes the entries related to given ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," from the builder.")),(0,n.kt)("h4",k({},{id:"definitions-3"}),"Definitions"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"removeValue<UV = V>(value: RelatedTo<V, UV>): K "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," undefined;"))),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"removeValue<UV, O>(value: RelatedTo<V, UV>, otherwise: OptLazy<O>): K "),(0,n.kt)("code",null,"|"),(0,n.kt)("inlineCode",{parentName:"p"}," O;"))),(0,n.kt)("h4",k({},{id:"type-parameters-7"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"UV"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"V")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",k({},{id:"parameters-9"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"RelatedTo<V, UV>")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"the value to remove")))),(0,n.kt)("admonition",k({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = BiMap.of([1, 'a'], [2, 'b']).toBuilder()\nm.removeValue('b')        // => 2\nm.removeValue('c')        // => undefined\nm.removeValue('c', 0)     // => 0\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",k({},{id:"removevalues"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeValues")),(0,n.kt)("p",null,"Removes the entries related to the given ",(0,n.kt)("inlineCode",{parentName:"p"},"values")," ",(0,n.kt)("inlineCode",{parentName:"p"},"StreamSource")," from the builder.")),(0,n.kt)("h4",k({},{id:"definition-9"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"removeValues<UV = V>(values: "),(0,n.kt)("a",k({parentName:"p"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"p"},"<RelatedTo<V, UV>>): boolean;"))),(0,n.kt)("h4",k({},{id:"type-parameters-8"}),"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"UV"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"V")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("h4",k({},{id:"parameters-10"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"values")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"/api/rimbu/stream/StreamSource/type"}),(0,n.kt)("inlineCode",{parentName:"a"},"StreamSource")),(0,n.kt)("inlineCode",{parentName:"td"},"<RelatedTo<V, UV>>")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",k({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = BiMap.of([1, 'a'], [2, 'b']).toBuilder()\nm.removeValues(['c', 'd', 'e'])  // => false\nm.removeValues(['a', 'e'])       // => true\n")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",k({},{id:"set"}),(0,n.kt)("inlineCode",{parentName:"h3"},"set")),(0,n.kt)("p",null,"Associates given ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," with given ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," in the builder.")),(0,n.kt)("h4",k({},{id:"definition-10"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"set(key: K, value: V): boolean;"))),(0,n.kt)("h4",k({},{id:"parameters-11"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"key")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"K")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"the entry key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"V")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("admonition",k({},{title:"example",type:"note"}),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",k({parentName:"pre"},{className:"language-ts"}),"const m = BiMap.of([1, 'a'], [2, 'b']).toBuilder()\nm.set(1, 'a')   // => false\nm.set(1, 'b')   // => true\n")))))}f.isMDXComponent=!0}}]);