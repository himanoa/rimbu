"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[85594],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},d=Object.keys(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,d=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,k=c["".concat(a,".").concat(m)]||c[m]||s[m]||d;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var d=r.length,o=new Array(d);o[0]=c;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<d;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},23693:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>O,frontMatter:()=>c,metadata:()=>k,toc:()=>v});var n=r(3905),i=Object.defineProperty,d=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e};const c={title:"OrderedSortedSet.Types",slug:"/rimbu/ordered/OrderedSortedSet/Types/interface"},m="interface OrderedSortedSet.Types",k={unversionedId:"rimbu_ordered/OrderedSortedSet/Types.interface",id:"rimbu_ordered/OrderedSortedSet/Types.interface",title:"OrderedSortedSet.Types",description:"Utility interface that provides higher-kinded types for this collection.",source:"@site/api/rimbu_ordered/OrderedSortedSet/Types.interface.mdx",sourceDirName:"rimbu_ordered/OrderedSortedSet",slug:"/rimbu/ordered/OrderedSortedSet/Types/interface",permalink:"/api/rimbu/ordered/OrderedSortedSet/Types/interface",draft:!1,tags:[],version:"current",frontMatter:{title:"OrderedSortedSet.Types",slug:"/rimbu/ordered/OrderedSortedSet/Types/interface"},sidebar:"defaultSidebar",previous:{title:"OrderedSortedSet.NonEmpty<T>",permalink:"/api/rimbu/ordered/OrderedSortedSet/NonEmpty/interface"},next:{title:"OrderedSortedSet<T>",permalink:"/api/rimbu/ordered/OrderedSortedSet/interface"}},f={},v=[{value:"Properties",id:"properties",level:2},{value:"<code>_T</code>",id:"_t",level:3},{value:"Definition",id:"definition",level:4},{value:"Overrides",id:"overrides",level:4},{value:"<code>builder</code>",id:"builder",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"<code>context</code>",id:"context",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"<code>nonEmpty</code>",id:"nonempty",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"<code>normal</code>",id:"normal",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"<code>sourceBuilder</code>",id:"sourcebuilder",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"<code>sourceContext</code>",id:"sourcecontext",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"<code>sourceSet</code>",id:"sourceset",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"<code>sourceSetNonEmpty</code>",id:"sourcesetnonempty",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Overrides",id:"overrides-8",level:4}],y={toc:v};function O(e){var t,r=e,{components:i}=r,u=((e,t)=>{var r={};for(var n in e)a.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},y),u),d(t,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"interface-orderedsortedsettypes"}),(0,n.kt)("inlineCode",{parentName:"h1"},"interface OrderedSortedSet.Types")),(0,n.kt)("p",null,"Utility interface that provides higher-kinded types for this collection."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Types/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSetBase.Types"))),(0,n.kt)("h2",s({},{id:"properties"}),"Properties"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"_t"}),(0,n.kt)("inlineCode",{parentName:"h3"},"_T")),(0,n.kt)("p",null,"The element type.")),(0,n.kt)("h4",s({},{id:"definition"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly _T: T;"))),(0,n.kt)("h4",s({},{id:"overrides"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/Elem/interface#_T"}),"Elem._T"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"builder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"builder")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-1"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly builder: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/OrderedSortedSet/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSortedSet.Builder")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,n.kt)("h4",s({},{id:"overrides-1"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Types/interface#builder"}),"Types.builder"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"context"}),(0,n.kt)("inlineCode",{parentName:"h3"},"context")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-2"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly context: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/OrderedSortedSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSortedSet.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,n.kt)("h4",s({},{id:"overrides-2"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Types/interface#context"}),"Types.context"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"nonempty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nonEmpty")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-3"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly nonEmpty: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/OrderedSortedSet/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSortedSet.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,n.kt)("h4",s({},{id:"overrides-3"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Types/interface#nonEmpty"}),"Types.nonEmpty"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"normal"}),(0,n.kt)("inlineCode",{parentName:"h3"},"normal")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-4"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly normal: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/OrderedSortedSet/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"OrderedSortedSet")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,n.kt)("h4",s({},{id:"overrides-4"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Types/interface#normal"}),"Types.normal"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"sourcebuilder"}),(0,n.kt)("inlineCode",{parentName:"h3"},"sourceBuilder")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-5"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly sourceBuilder: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/collection-types/set-custom/RSetBase/Builder/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"RSetBase.Builder")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,n.kt)("h4",s({},{id:"overrides-5"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Types/interface#sourceBuilder"}),"Types.sourceBuilder"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"sourcecontext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"sourceContext")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-6"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly sourceContext: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/sorted/SortedSet/Context/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet.Context")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,n.kt)("h4",s({},{id:"overrides-6"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Types/interface#sourceContext"}),"Types.sourceContext"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"sourceset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"sourceSet")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-7"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly sourceSet: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/sorted/SortedSet/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,n.kt)("h4",s({},{id:"overrides-7"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Types/interface#sourceSet"}),"Types.sourceSet"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("h3",s({},{id:"sourcesetnonempty"}),(0,n.kt)("inlineCode",{parentName:"h3"},"sourceSetNonEmpty")),(0,n.kt)("p",null,"undocumented")),(0,n.kt)("h4",s({},{id:"definition-8"}),"Definition"),(0,n.kt)("code",null,(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readonly sourceSetNonEmpty: "),(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/sorted/SortedSet/NonEmpty/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"SortedSet.NonEmpty")),(0,n.kt)("inlineCode",{parentName:"p"},"<this['_T']>;"))),(0,n.kt)("h4",s({},{id:"overrides-8"}),"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"/api/rimbu/ordered/set-custom/OrderedSetBase/Types/interface#sourceSetNonEmpty"}),"Types.sourceSetNonEmpty"))))}O.isMDXComponent=!0}}]);