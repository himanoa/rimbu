"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[11445],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,f=s["".concat(a,".").concat(m)]||s[m]||y[m]||i;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=s;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var l=2;l<i;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},29607:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return d}});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&u(e,r,t[r]);return e};const s={title:"WithRow",slug:"/rimbu/collection-types/map-custom/WithRow/type"},m="type WithRow<Tp,R,C,V>",f={unversionedId:"rimbu_collection-types/map-custom/WithRow.type",id:"rimbu_collection-types/map-custom/WithRow.type",title:"WithRow",description:"A utility type to set the row type to given type R, the column type to given type C, and the value type to given type V.",source:"@site/api/rimbu_collection-types/map-custom/WithRow.type.mdx",sourceDirName:"rimbu_collection-types/map-custom",slug:"/rimbu/collection-types/map-custom/WithRow/type",permalink:"/api/rimbu/collection-types/map-custom/WithRow/type",draft:!1,tags:[],version:"current",frontMatter:{title:"WithRow",slug:"/rimbu/collection-types/map-custom/WithRow/type"},sidebar:"defaultSidebar",previous:{title:"WithKeyValue",permalink:"/api/rimbu/collection-types/map-custom/WithKeyValue/type"},next:{title:"@rimbu/collection-types/set",permalink:"/api/rimbu/collection-types/set"}},b={},d=[{value:"Definition",id:"definition",level:2}],v={toc:d};function h(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)a.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=y(y({},v),u),i(t,p({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",y({},{id:"type-withrowtprcv"}),(0,n.kt)("inlineCode",{parentName:"h1"},"type WithRow<Tp,R,C,V>")),(0,n.kt)("p",null,"A utility type to set the row type to given type R, the column type to given type C, and the value type to given type V."),(0,n.kt)("h2",y({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"export declare type WithRow<Tp, R, C, V> = Tp & "),(0,n.kt)("a",y({parentName:"p"},{href:"/api/rimbu/collection-types/map-custom/Row/interface"}),(0,n.kt)("inlineCode",{parentName:"a"},"Row")),(0,n.kt)("inlineCode",{parentName:"p"},"<R, C, V>;")))}h.isMDXComponent=!0}}]);