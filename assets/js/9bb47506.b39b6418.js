"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[48187],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>f});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),N=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=N(e.components);return r.createElement(o.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),d=N(t),h=n,f=d["".concat(o,".").concat(h)]||d[h]||u[h]||p;return t?r.createElement(f,i(i({ref:a},l),{},{components:t})):r.createElement(f,i({ref:a},l))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=h;var m={};for(var o in a)hasOwnProperty.call(a,o)&&(m[o]=a[o]);m.originalType=e,m[d]="string"==typeof e?e:n,i[1]=m;for(var N=2;N<p;N++)i[N]=t[N];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6189:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>E,contentTitle:()=>y,default:()=>V,frontMatter:()=>f,metadata:()=>c,toc:()=>k});var r=t(3905),n=Object.defineProperty,p=Object.defineProperties,i=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,l=(e,a,t)=>a in e?n(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&l(e,t,a[t]);if(m)for(var t of m(a))N.call(a,t)&&l(e,t,a[t]);return e},u=(e,a)=>p(e,i(a)),h=(e,a)=>{var t={};for(var r in e)o.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&m)for(var r of m(e))a.indexOf(r)<0&&N.call(e,r)&&(t[r]=e[r]);return t};const f={title:"Streamable.NonEmpty<T>",slug:"/rimbu/stream/Streamable/NonEmpty/interface"},y="interface Streamable.NonEmpty<T>",c={unversionedId:"rimbu_stream/Streamable/NonEmpty.interface",id:"rimbu_stream/Streamable/NonEmpty.interface",title:"Streamable.NonEmpty<T>",description:"An object that can create a non-empty Stream of elements of type T.",source:"@site/api/rimbu_stream/Streamable/NonEmpty.interface.mdx",sourceDirName:"rimbu_stream/Streamable",slug:"/rimbu/stream/Streamable/NonEmpty/interface",permalink:"/api/rimbu/stream/Streamable/NonEmpty/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"Streamable.NonEmpty<T>",slug:"/rimbu/stream/Streamable/NonEmpty/interface"},sidebar:"defaultSidebar",previous:{title:"Streamable (namespace)",permalink:"/api/rimbu/stream/Streamable/namespace"},next:{title:"Streamable<T>",permalink:"/api/rimbu/stream/Streamable/interface"}},E={},k=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>stream</code>",id:"stream",level:3},{value:"Definition",id:"definition",level:4}],s={toc:k},b="wrapper";function V(e){var a=e,{components:t}=a,n=h(a,["components"]);return(0,r.kt)(b,u(d(d({},s),n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"interface-streamablenonemptyt"}),(0,r.kt)("inlineCode",{parentName:"h1"},"interface Streamable.NonEmpty<T>")),(0,r.kt)("p",null,"An object that can create a non-empty Stream of elements of type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implemented by:")," ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/BiMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"BiMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/VariantMapBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMapBase.NonEmpty<K,V,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/EdgeGraphHashed/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeGraphHashed.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/bimultimap/SortedBiMultiMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedBiMultiMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/EdgeValuedGraph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraph.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/EdgeGraph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeGraph.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multiset/SortedMultiSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedMultiSet.NonEmpty<T>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/table/VariantTable/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantTable.NonEmpty<R,C,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/VariantGraph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantGraph.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/VariantMultiMapBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMultiMapBase.NonEmpty<K,V,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/ordered/set/OrderedHashSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedHashSet.NonEmpty<T>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/sorted/map/SortedMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/custom/EdgeValuedGraphBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraphBase.NonEmpty<N,V,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/custom/VariantValuedGraphBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantValuedGraphBase.NonEmpty<N,V,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/hashed/map/HashMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedSetBase.NonEmpty<T,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/table/Table/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Table.NonEmpty<R,C,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/ValuedGraph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ValuedGraph.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/Graph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Graph.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/EdgeValuedGraphSorted/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraphSorted.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/EdgeGraphSorted/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeGraphSorted.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/ArrowGraph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowGraph.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/HashBiMultiMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashBiMultiMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/HashMultiSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashMultiSet.NonEmpty<T>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/custom/ValuedGraphBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ValuedGraphBase.NonEmpty<N,V,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multiset/VariantMultiSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMultiSet.NonEmpty<T>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RSetBase.NonEmpty<T,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/EdgeValuedGraphHashed/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraphHashed.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/custom/ArrowValuedGraphBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphBase.NonEmpty<N,V,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/SortedMultiMapSortedValue/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedMultiMapSortedValue.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/VariantValuedGraph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantValuedGraph.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/ArrowGraphSorted/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowGraphSorted.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/ordered/map/OrderedHashMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedHashMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/ordered/map-custom/OrderedMapBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedMapBase.NonEmpty<K,V,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/HashMultiMapHashValue/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashMultiMapHashValue.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/SortedMultiMapSortedValue/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedMultiMapSortedValue.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/ArrowGraphHashed/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowGraphHashed.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/ArrowValuedGraphHashed/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphHashed.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/ArrowValuedGraph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraph.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/custom/MultiMapBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"MultiMapBase.NonEmpty<K,V,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/HashMultiMapHashValue/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashMultiMapHashValue.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/RMapBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"RMapBase.NonEmpty<K,V,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/bimultimap/custom/BiMultiMapBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"BiMultiMapBase.NonEmpty<K,V,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multiset/custom/MultiSetBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"MultiSetBase.NonEmpty<T,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/EdgeGraph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeGraph.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/table/sorted-row/SortedTableSortedColumn/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedTableSortedColumn.NonEmpty<R,C,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/ArrowValuedGraphSorted/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphSorted.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/table/hash-row/HashTableHashColumn/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashTableHashColumn.NonEmpty<R,C,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/custom/EdgeGraphBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeGraphBase.NonEmpty<N,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multiset/HashMultiSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashMultiSet.NonEmpty<T>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/table/custom/VariantTableBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantTableBase.NonEmpty<R,C,V,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/custom/VariantGraphBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantGraphBase.NonEmpty<N,V,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/bimultimap/HashBiMultiMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashBiMultiMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/ordered/set/OrderedSortedSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedSortedSet.NonEmpty<T>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/EdgeGraphSorted/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeGraphSorted.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/Table/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Table.NonEmpty<R,C,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/VariantMultiSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMultiSet.NonEmpty<T>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/Graph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Graph.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/BiMultiMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"BiMultiMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/VariantMultiMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMultiMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/table/custom/TableBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"TableBase.NonEmpty<R,C,V,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/custom/GraphBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"GraphBase.NonEmpty<N,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/EdgeValuedGraphHashed/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraphHashed.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/ordered/set/OrderedSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedSet.NonEmpty<T>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/EdgeGraphHashed/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeGraphHashed.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/MultiSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"MultiSet.NonEmpty<T>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/EdgeValuedGraph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraph.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/VariantGraph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantGraph.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/VariantValuedGraph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantValuedGraph.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/custom/ArrowGraphBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowGraphBase.NonEmpty<N,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/VariantTable/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantTable.NonEmpty<R,C,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multiset/custom/VariantMultiSetBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMultiSetBase.NonEmpty<T,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/bimap/BiMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"BiMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/SortedBiMultiMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedBiMultiMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/SortedMultiSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedMultiSet.NonEmpty<T>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/ordered/map/OrderedSortedMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedSortedMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/VariantMultiMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantMultiMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/ValuedGraph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ValuedGraph.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/EdgeValuedGraphSorted/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"EdgeValuedGraphSorted.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/ArrowGraphHashed/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowGraphHashed.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/ArrowValuedGraph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraph.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/HashMultiMapSortedValue/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashMultiMapSortedValue.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/SortedMultiMapHashValue/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedMultiMapHashValue.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/ArrowGraph/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowGraph.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/VariantSetBase/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"VariantSetBase.NonEmpty<T,Tp>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/ordered/map/OrderedMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"OrderedMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/MultiMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"MultiMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/graph/ArrowValuedGraphSorted/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphSorted.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/ArrowGraphSorted/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowGraphSorted.NonEmpty<N>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/SortedMultiMapHashValue/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedMultiMapHashValue.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/sorted/set/SortedSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedSet.NonEmpty<T>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/HashMultiMapSortedValue/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashMultiMapSortedValue.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/table/sorted-row/SortedTableHashColumn/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"SortedTableHashColumn.NonEmpty<R,C,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/hashed/set/HashSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashSet.NonEmpty<T>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/stream/Stream/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty<T>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multimap/MultiMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"MultiMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/proximity/map/ProximityMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ProximityMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/list/List/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"List.NonEmpty<T>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/bimultimap/BiMultiMap/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"BiMultiMap.NonEmpty<K,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/multiset/MultiSet/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"MultiSet.NonEmpty<T>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/ArrowValuedGraphHashed/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"ArrowValuedGraphHashed.NonEmpty<N,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/table/hash-row/HashTableSortedColumn/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"HashTableSortedColumn.NonEmpty<R,C,V>")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/core/List/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"List.NonEmpty<T>"))),(0,r.kt)("h2",d({},{id:"type-parameters"}),"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"T"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"the element type")))),(0,r.kt)("h2",d({},{id:"methods"}),"Methods"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",d({},{id:"stream"}),(0,r.kt)("inlineCode",{parentName:"h3"},"stream")),(0,r.kt)("p",null,"Returns a non-empty ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," of the elements in this collection.")),(0,r.kt)("h4",d({},{id:"definition"}),"Definition"),(0,r.kt)("code",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stream(): "),(0,r.kt)("a",d({parentName:"p"},{href:"/api/rimbu/stream/Stream/NonEmpty/interface"}),(0,r.kt)("inlineCode",{parentName:"a"},"Stream.NonEmpty")),(0,r.kt)("inlineCode",{parentName:"p"},"<T>;")))))}V.isMDXComponent=!0}}]);