(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[4173],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return a?n.createElement(f,o(o({ref:t},m),{},{components:a})):n.createElement(f,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1788:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=["components"],l={id:"main",sidebar_position:1,title:"Introduction",slug:"."},c=void 0,s={unversionedId:"main",id:"main",isDocsHomePage:!1,title:"Introduction",description:"Rimbu is a TypeScript library focused on immutable, performant, and type-safe collections and other tools. Its main aim is to allow coders to create safe and performant programs without getting in the way. It is inspired by various other collection libraries, mainly Java's Guava library, the Java 8 Collection library, and Scala's collection library plus various ideas from the Scala community.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"main",sidebar_position:1,title:"Introduction",slug:"."},sidebar:"sidebar",next:{title:"Getting Started",permalink:"/docs/getting-started"}},m=[{value:"Library contents",id:"library-contents",children:[{value:"Collections",id:"collections",children:[]},{value:"Immutable object utilities",id:"immutable-object-utilities",children:[]},{value:"Other packages",id:"other-packages",children:[]}]},{value:"Quick overview of features and benefits",id:"quick-overview-of-features-and-benefits",children:[]}],p={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rimbu is a TypeScript library focused on ",(0,i.kt)("em",{parentName:"p"},"immutable, performant, and type-safe collections")," and other tools. Its main aim is to allow coders to create safe and performant programs without getting in the way. It is inspired by various other collection libraries, mainly Java's Guava library, the Java 8 Collection library, and Scala's collection library plus various ideas from the Scala community."),(0,i.kt)("h2",{id:"library-contents"},"Library contents"),(0,i.kt)("h3",{id:"collections"},"Collections"),(0,i.kt)("p",null,"Rimbu's main package is the ",(0,i.kt)("inlineCode",{parentName:"p"},"@rimbu/core")," package that contains many commonly used collection types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"docs/collections/list"},(0,i.kt)("inlineCode",{parentName:"a"},"List")),": a block-based random-access structure akin to a ",(0,i.kt)("inlineCode",{parentName:"li"},"Vector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"docs/collections/map"},"Maps"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"HashMap"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"SortedMap"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"OrderedMap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"docs/collections/set"},"Sets"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"HashSet"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"SortedSet")," ",(0,i.kt)("inlineCode",{parentName:"li"},"OrderedSet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"docs/collections/stream"},(0,i.kt)("inlineCode",{parentName:"a"},"Stream")),": a way to create and convert streams of data")),(0,i.kt)("p",null,"It also contains less commonly used, but very useful collections, like ",(0,i.kt)("a",{parentName:"p",href:"docs/collections/multimap"},(0,i.kt)("inlineCode",{parentName:"a"},"MultiMap")),", ",(0,i.kt)("a",{parentName:"p",href:"docs/collections/bimultimap"},(0,i.kt)("inlineCode",{parentName:"a"},"BiMultiMap")),", ",(0,i.kt)("a",{parentName:"p",href:"docs/collections/multiset"},(0,i.kt)("inlineCode",{parentName:"a"},"MultiSet")),", ",(0,i.kt)("a",{parentName:"p",href:"docs/collections/table"},(0,i.kt)("inlineCode",{parentName:"a"},"Table")),", ",(0,i.kt)("a",{parentName:"p",href:"docs/collections/graph"},(0,i.kt)("inlineCode",{parentName:"a"},"Graph")),"."),(0,i.kt)("h3",{id:"immutable-object-utilities"},"Immutable object utilities"),(0,i.kt)("p",null,"Next to collections, there are also tools to treat plain JS objects as immutable objects, most notable are ",(0,i.kt)("a",{parentName:"p",href:"docs/deep/patch"},(0,i.kt)("inlineCode",{parentName:"a"},"Patch"))," ",(0,i.kt)("a",{parentName:"p",href:"docs/deep/match"},(0,i.kt)("inlineCode",{parentName:"a"},"Match")),", and ",(0,i.kt)("a",{parentName:"p",href:"docs/deep/path"},(0,i.kt)("inlineCode",{parentName:"a"},"Path")),". The"),(0,i.kt)("p",null,"All collections are designed to efficiently support data sets from small to really large (as long as it fits in memory). Persistence is maximally used to ensure that memory load is kept to a mimimum. This means that, when changing a collection instance, maximum effort is made to keep references to elements that did not change equal."),(0,i.kt)("h3",{id:"other-packages"},"Other packages"),(0,i.kt)("p",null,"Next to the ",(0,i.kt)("inlineCode",{parentName:"p"},"@rimbu/core")," package, the ",(0,i.kt)("inlineCode",{parentName:"p"},"@rimbu/actor")," package contains a library to easily create and update immutable state. For convenience there is also a library to allow for easy integration with state management in React ",(0,i.kt)("inlineCode",{parentName:"p"},"@rimbu/reactor"),"."),(0,i.kt)("h2",{id:"quick-overview-of-features-and-benefits"},"Quick overview of features and benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Extensive set of collection types to cover many problems that would otherwise require more coding to solve."),(0,i.kt)("li",{parentName:"ul"},"Advanced typing uses the TS compiler to offer strict type inference without much explicit typing."),(0,i.kt)("li",{parentName:"ul"},"No external dependencies (except for ts-lib)."),(0,i.kt)("li",{parentName:"ul"},"Provides sane defaults but allows extensive customization and configuration."),(0,i.kt)("li",{parentName:"ul"},"A unique novel and efficient immutable random-access List implementation.")))}u.isMDXComponent=!0}}]);