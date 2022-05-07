"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[71011],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),p=o,h=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29313:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return b}});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e};const d={slug:"how-it-got-started",title:"How it all got started",author:"Arvid Nicolaas",author_title:"Rimbu Author",author_url:"https://github.com/vitoke",author_image_url:"https://github.com/vitoke.png",tags:["rimbu","scala","immutability","typescript"]},p=void 0,h={permalink:"/blog/how-it-got-started",editUrl:"https://github.com/rimbu-org/rimbu/edit/master/website/blog/blog/2021-09-02-how-it-got-started.md",source:"@site/blog/2021-09-02-how-it-got-started.md",title:"How it all got started",description:"In my Scala days, I became very interested in immutable collections, especially Scala's Vector. I was watching all kinds of YouTube videos from conferences",date:"2021-09-02T00:00:00.000Z",formattedDate:"September 2, 2021",tags:[{label:"rimbu",permalink:"/blog/tags/rimbu"},{label:"scala",permalink:"/blog/tags/scala"},{label:"immutability",permalink:"/blog/tags/immutability"},{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:2.085,truncated:!1,authors:[{name:"Arvid Nicolaas",title:"Rimbu Author",url:"https://github.com/vitoke",imageURL:"https://github.com/vitoke.png"}],frontMatter:{slug:"how-it-got-started",title:"How it all got started",author:"Arvid Nicolaas",author_title:"Rimbu Author",author_url:"https://github.com/vitoke",author_image_url:"https://github.com/vitoke.png",tags:["rimbu","scala","immutability","typescript"]},prevItem:{title:"Introducing Rimbu",permalink:"/blog/introducing-rimbu"},nextItem:{title:"Introducing Myself",permalink:"/blog/introducing-myself"}},f={authorsImageUrls:[void 0]},b=[],g={toc:b};function y(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"In my Scala days, I became very interested in immutable collections, especially Scala's Vector. I was watching all kinds of YouTube videos from conferences\nthat discussed how it works, and why it offers reasonably fast random access (debatably called effectively constant time). At the same time, I discovered that the Vector did not have an ",(0,n.kt)("inlineCode",{parentName:"p"},"insert")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"remove"),"\nmethod, and I wondered why. I started investigating how the data structure works, and read papers with proposals on how to improve the structure to allow random\ninsertion. I also started getting ideas on how it could be done differently and started implementing my own structure."),(0,n.kt)("p",null,"This was going slowly but I was progressing. And while I was doing that, I also found ways to have better typed methods for collections in Scala. I thought I might\nas well create a whole collection library instead of just one collection implementation. I learned a lot from this effort about immutable data structures and\ncreating strict but useful types. However, after some time, I realized that Scala, while having a great compiler, was holding me back in writing the code I wanted\nto write. Also, it seemed the community was getting split (due to a complete rewrite of Scala), and its popularity seemed to go down. In the meantime, Scala does have\na new Vector implementation with the ",(0,n.kt)("inlineCode",{parentName:"p"},"insert")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"remove")," methods. I actually discovered this quite recently. However, I found the documentation of the structure lacking so I cannot compare it to my approach."),(0,n.kt)("p",null,"Since I was now using TypeScript at work, it seemed an interesting exercise to me to see if I could better write down my ideas in this language. It turned out\nthat this was indeed the case. And stil, I could create quite rich interfaces for the collection methods. This led me to abandon the Scala effort, and fully\nfocus on the TypeScript library (I basically ported/rewrote the Scala code to TypeScript). And now, I have (finally) released the Rimbu library."),(0,n.kt)("p",null,"There are many things still to be done, but I am satisfied with the library so far. I hope developers will find it useful for their own projects, and am\nhopeful to hear what they think of it. I hope to find time to extensively document the data structure behind Rimbu's List in the near future. I find it quite\na remarkable data structure myself. I hope to write some blogs as well on interesting use cases I found for the various collections. Stay tuned!"))}y.isMDXComponent=!0}}]);