"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[6833],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8354:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var o=n(3117),i=n(102),a=(n(7294),n(3905)),r=["components"],s={id:"advanced-concepts",slug:"./in-depth",title:"Collections in-depth"},c=void 0,l={unversionedId:"advanced/advanced-concepts",id:"advanced/advanced-concepts",isDocsHomePage:!1,title:"Collections in-depth",description:"Collection Context",source:"@site/docs/advanced/advanced-concepts.mdx",sourceDirName:"advanced",slug:"/advanced/in-depth",permalink:"/docs/advanced/in-depth",editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/docs/advanced/advanced-concepts.mdx",tags:[],version:"current",frontMatter:{id:"advanced-concepts",slug:"./in-depth",title:"Collections in-depth"},sidebar:"sidebar",previous:{title:"Tuple",permalink:"/docs/deep/tuple"},next:{title:"List Advanced topics",permalink:"/docs/advanced/list"}},d=[{value:"Collection Context",id:"collection-context",children:[{value:"The default context",id:"the-default-context",children:[],level:3},{value:"Custom context",id:"custom-context",children:[],level:3},{value:"Context references",id:"context-references",children:[],level:3},{value:"The singleton empty instance",id:"the-singleton-empty-instance",children:[],level:3}],level:2},{value:"Builders in-depth",id:"builders-in-depth",children:[{value:"No iterators",id:"no-iterators",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"collection-context"},"Collection Context"),(0,a.kt)("p",null,"To understand how immutable collections in Rimbu for TypeScript are stuctured, it is needed to understand the concept of Contexts. A Context in Rimbu is an object that can create instances and builders of a certain collection. It usually contains some configuration that is uses to create collection instances. For example, for block-based data structures, it might contain a specific block-size."),(0,a.kt)("h3",{id:"the-default-context"},"The default context"),(0,a.kt)("p",null,"All non-abstract collection types have default constructors that use the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultContext")," to construct instances."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { List } from '@rimbu/core';\n\nList.of(1, 2, 3);\n// is equivalent to:\nList.defaultContext().of(1, 2, 3);\n")),(0,a.kt)("h3",{id:"custom-context"},"Custom context"),(0,a.kt)("p",null,"All Rimbu collections are configurable. To create a custom configured collection, there is the ",(0,a.kt)("inlineCode",{parentName:"p"},".createContext()")," method, e.g. for Lists:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { List } from '@rimbu/core';\n\n// create a context to create Lists with block sizes of maximum size 2^7 = 128 elements\nconst MyList = List.createContext({ blockSizeBits: 7 });\n\n// we can now use MyList to construct custom instances.\nconst list = MyList.of(1, 2, 3);\n")),(0,a.kt)("h3",{id:"context-references"},"Context references"),(0,a.kt)("p",null,"Every collection or builder instance that a Context creates will have a reference to that Context. In this way, the configuration can be preserved."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { List } from '@rimbu/core';\n\nconsole.log(List.of(1, 2, 3).context === List.defaultContext());\n// => true\n\nconst MyList = List.createContext({ blockSizeBits: 3 });\nconsole.log(MyList.of(1, 2, 3).context === List.of(1, 2, 3).context);\n// => false\n")),(0,a.kt)("h3",{id:"the-singleton-empty-instance"},"The singleton empty instance"),(0,a.kt)("p",null,"Every Context has a singleton empty value, which is the only empty collection that the specific Context will ever produce. The singleton is context specific because it needs a reference to the context that created it to maintain its configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { List } from '@rimbu/core';\n\nconsole.log(List.empty<number>() === List.empty<string>());\n// => true\n\nconst MyList = List.createContext({ blockSizeBits: 3 });\nconsole.log(MyList.empty() === List.empty());\n// => false\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"At first it may seem strange that a context can use the same object to represent empty collections of all types. From a philosophical perspective however, it can be compared as follows:"),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("em",{parentName:"p"},"If I gave you an empty basket of apples, or an empty basket of oranges, would you see the difference?")))),(0,a.kt)("h2",{id:"builders-in-depth"},"Builders in-depth"),(0,a.kt)("p",null,"All immutable collections have a corresponding mutable Builder. The builder can be used when many mutations need to happen at one time, or when the immutable methods do not have enough expression power to perform the mutation. Rimbu tries to keep the conversion to and from a builder as efficient as possible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { List } from '@rimbu/core';\n\nconst list = List.of(1, 2, 3);\n\nconst builder = list.toBuilder();\n\nconsole.log(builder.get(1));\n// => 2\n\nbuilder.append(4);\nconst list2 = builder.build();\n\nbuilder.append(5);\nconst list3 = builder.build();\n")),(0,a.kt)("p",null,"In this example, until the first ",(0,a.kt)("inlineCode",{parentName:"p"},"append")," function, the builder did not copy any data, but referenced the source immutable List. For a large List, the builder would only copy and update the last block. When re-building the immutable list, it can then still share many blocks with the original list, saving time and memory."),(0,a.kt)("p",null,"The example also shows that a builder build intermediate instances as well, so it is safe to re-use the same builder."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The Rimbu Builder API's are generally not as expressive as the immutable ones, since this is not the focus of the library. It is purely aimed at building immutable instances and not as a replacement for a mutable collection library."))),(0,a.kt)("h3",{id:"no-iterators"},"No iterators"),(0,a.kt)("p",null,"Rimbu Builders are not iterable. Iterating over a mutable object is inherantly unsafe, since in the iteration it is possible to mutate the object, causing all kinds of nasty side-effects."),(0,a.kt)("p",null,"The only way to perform logic on all the elements in a builder, is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},".forEach(...)")," methods. When performing a ",(0,a.kt)("inlineCode",{parentName:"p"},"forEach")," on a builder, performing any mutation on the builder will throw a runtime error. This is to protect against unpredictable behaviors."))}p.isMDXComponent=!0}}]);