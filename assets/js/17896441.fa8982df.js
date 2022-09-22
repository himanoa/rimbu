"use strict";(self.webpackChunkrimbu_docs=self.webpackChunkrimbu_docs||[]).push([[27918],{20392:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ke});var a=n(67294),r=n(94469),l=n(21651);const o=a.createContext(null);function c({children:e,content:t}){const n=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return a.createElement(o.Provider,{value:n},e)}function s(){const e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocProvider");return e}function i(){var e;const{metadata:t,frontMatter:n,assets:l}=s();return a.createElement(r.d,{title:t.title,description:t.description,keywords:n.keywords,image:null!=(e=l.image)?e:n.image})}var d=n(34334),m=n(89078),u=n(33084),b=n(31961),p=Object.defineProperty,f=Object.defineProperties,v=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,O=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&y(e,n,t[n]);if(h)for(var n of h(t))E.call(t,n)&&y(e,n,t[n]);return e},L=(e,t)=>f(e,v(t));function N(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(b.Z,L(O({},t),{subLabel:a.createElement(u.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(b.Z,L(O({},n),{subLabel:a.createElement(u.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function w(){const{metadata:e}=s();return a.createElement(N,{previous:e.previous,next:e.next})}var k=n(11368),_=n(39130),x=n(2686),j=n(83631),C=n(74742),P=n(92879),Z=Object.defineProperty,H=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,A=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const I={unreleased:function({siteTitle:e,versionMetadata:t}){return a.createElement(u.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return a.createElement(u.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function M(e){const t=I[e.versionMetadata.banner];return a.createElement(t,((e,t)=>{for(var n in t||(t={}))T.call(t,n)&&A(e,n,t[n]);if(H)for(var n of H(t))U.call(t,n)&&A(e,n,t[n]);return e})({},e))}function S({versionLabel:e,to:t,onClick:n}){return a.createElement(u.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:a.createElement("b",null,a.createElement(_.Z,{to:t,onClick:n},a.createElement(u.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function B({className:e,versionMetadata:t}){const{siteConfig:{title:n}}=(0,k.Z)(),{pluginId:r}=(0,x.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,C.J)(r),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,x.Jo)(r),s=null!=o?o:(i=c).docs.find((e=>e.id===i.mainDocId));var i;return a.createElement("div",{className:(0,d.Z)(e,j.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(M,{siteTitle:n,versionMetadata:t})),a.createElement("div",{className:"margin-top--md"},a.createElement(S,{versionLabel:c.label,to:s.path,onClick:()=>l(c.name)})))}function D({className:e}){const t=(0,P.E)();return t.banner?a.createElement(B,{className:e,versionMetadata:t}):null}function V({className:e}){const t=(0,P.E)();return t.badge?a.createElement("span",{className:(0,d.Z)(e,j.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(u.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}function R({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return a.createElement(u.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function z({lastUpdatedBy:e}){return a.createElement(u.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,e)}}," by {user}")}function F({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:n}){return a.createElement("span",{className:j.k.common.lastUpdated},a.createElement(u.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?a.createElement(R,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:n?a.createElement(z,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)}var q=n(97090),$=n(24329);const G="lastUpdated_vwxv";var J=Object.defineProperty,K=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,X=(e,t,n)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function Y(e){return a.createElement("div",{className:(0,d.Z)(j.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement($.Z,((e,t)=>{for(var n in t||(t={}))Q.call(t,n)&&X(e,n,t[n]);if(K)for(var n of K(t))W.call(t,n)&&X(e,n,t[n]);return e})({},e))))}function ee({editUrl:e,lastUpdatedAt:t,lastUpdatedBy:n,formattedLastUpdatedAt:r}){return a.createElement("div",{className:(0,d.Z)(j.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},e&&a.createElement(q.Z,{editUrl:e})),a.createElement("div",{className:(0,d.Z)("col",G)},(t||n)&&a.createElement(F,{lastUpdatedAt:t,formattedLastUpdatedAt:r,lastUpdatedBy:n})))}function te(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l,tags:o}=e,c=o.length>0,i=!!(t||n||l);return c||i?a.createElement("footer",{className:(0,d.Z)(j.k.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(Y,{tags:o}),i&&a.createElement(ee,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var ne=n(65897),ae=n(27377);const re="tocCollapsibleButton_TO0P",le="tocCollapsibleButtonExpanded_MG3E";var oe=Object.defineProperty,ce=Object.defineProperties,se=Object.getOwnPropertyDescriptors,ie=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,ue=(e,t,n)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function be(e){var t,n,r=e,{collapsed:l}=r,o=((e,t)=>{var n={};for(var a in e)de.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&ie)for(var a of ie(e))t.indexOf(a)<0&&me.call(e,a)&&(n[a]=e[a]);return n})(r,["collapsed"]);return a.createElement("button",(t=((e,t)=>{for(var n in t||(t={}))de.call(t,n)&&ue(e,n,t[n]);if(ie)for(var n of ie(t))me.call(t,n)&&ue(e,n,t[n]);return e})({type:"button"},o),n={className:(0,d.Z)("clean-btn",re,!l&&le,o.className)},ce(t,se(n))),a.createElement(u.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const pe="tocCollapsible_ETCw",fe="tocCollapsibleContent_vkbj",ve="tocCollapsibleExpanded_sAul";function he({toc:e,className:t,minHeadingLevel:n,maxHeadingLevel:r}){const{collapsed:l,toggleCollapsed:o}=(0,ne.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(pe,!l&&ve,t)},a.createElement(be,{collapsed:l,onClick:o}),a.createElement(ne.z,{lazy:!0,className:fe,collapsed:l},a.createElement(ae.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:r})))}const ge="tocMobile_ITEo";function Ee(){const{toc:e,frontMatter:t}=s();return a.createElement(he,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(j.k.docs.docTocMobile,ge)})}var ye=n(7157);function Oe(){const{toc:e,frontMatter:t}=s();return a.createElement(ye.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.k.docs.docTocDesktop})}var Le=n(55199),Ne=n(47918);function we({children:e}){const t=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(j.k.docs.docMarkdown,"markdown")},t&&a.createElement("header",null,a.createElement(Le.Z,{as:"h1"},t)),a.createElement(Ne.Z,null,e))}var ke=n(99492),_e=n(3044),xe=n(25026),je=Object.defineProperty,Ce=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,He=(e,t,n)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function Te(e){return a.createElement("svg",((e,t)=>{for(var n in t||(t={}))Pe.call(t,n)&&He(e,n,t[n]);if(Ce)for(var n of Ce(t))Ze.call(t,n)&&He(e,n,t[n]);return e})({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const Ue={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};var Ae=Object.defineProperty,Ie=Object.defineProperties,Me=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,Ve=(e,t,n)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function Re({children:e,href:t,isLast:n}){const r="breadcrumbs__link";return n?a.createElement("span",{className:r,itemProp:"name"},e):t?a.createElement(_.Z,{className:r,href:t,itemProp:"item"},a.createElement("span",{itemProp:"name"},e)):a.createElement("span",{className:r},e)}function ze({children:e,active:t,index:n,addMicrodata:r}){return a.createElement("li",(l=((e,t)=>{for(var n in t||(t={}))Be.call(t,n)&&Ve(e,n,t[n]);if(Se)for(var n of Se(t))De.call(t,n)&&Ve(e,n,t[n]);return e})({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"}),o={className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t})},Ie(l,Me(o))),e,a.createElement("meta",{itemProp:"position",content:String(n+1)}));var l,o}function Fe(){const e=(0,xe.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(_.Z,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",Ue.breadcrumbsItemLink),href:e},a.createElement(Te,{className:Ue.breadcrumbHomeIcon})))}function qe(){const e=(0,ke.s1)(),t=(0,_e.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(j.k.docs.docBreadcrumbs,Ue.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(Fe,null),e.map(((t,n)=>{const r=n===e.length-1;return a.createElement(ze,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(Re,{href:t.href,isLast:r},t.label))})))):null}const $e="docItemContainer_Djhp",Ge="docItemCol_VOVn";function Je({children:e}){const t=function(){const{frontMatter:e,toc:t}=s(),n=(0,m.i)(),r=e.hide_table_of_contents,l=!r&&t.length>0;return{hidden:r,mobile:l?a.createElement(Ee,null):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(Oe,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!t.hidden&&Ge)},a.createElement(D,null),a.createElement("div",{className:$e},a.createElement("article",null,a.createElement(qe,null),a.createElement(V,null),t.mobile,a.createElement(we,null,e),a.createElement(te,null)),a.createElement(w,null))),t.desktop&&a.createElement("div",{className:"col col--3"},t.desktop))}function Ke(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(c,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(i,null),a.createElement(Je,null,a.createElement(n,null))))}},7157:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),r=n(34334),l=n(27377);const o="tableOfContents_bqdL";var c=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p(e){var t,n=e,{className:c}=n,p=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["className"]);return a.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",c)},a.createElement(l.Z,(t=((e,t)=>{for(var n in t||(t={}))m.call(t,n)&&b(e,n,t[n]);if(d)for(var n of d(t))u.call(t,n)&&b(e,n,t[n]);return e})({},p),s(t,i({linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))))}},27377:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(67294),r=n(57343),l=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&m(e,n,t[n]);return e},b=(e,t)=>o(e,c(t));function p(e){const t=e.map((e=>b(u({},e),{parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const n=e,{parentIndex:r}=n,l=((e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["parentIndex"]);r>=0?t[r].children.push(l):a.push(l)})),a}function f({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const a=f({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[b(u({},e),{children:a})]:a}))}function v(e){const t=e.getBoundingClientRect();return t.top===t.bottom?v(e.parentNode):t}function h(e,{anchorTopOffset:t}){var n,a;const r=e.find((e=>v(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(v(r))?r:null!=(n=e[e.indexOf(r)-1])?n:null}return null!=(a=e[e.length-1])?a:null}function g(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function E(e){const t=(0,a.useRef)(void 0),n=g();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let a=e;a<=t;a+=1)n.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),s=h(c,{anchorTopOffset:n.current}),i=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}const y=a.memo((function e({toc:t,className:n,linkClassName:r,isChild:l}){return t.length?a.createElement("ul",{className:l?void 0:n},t.map((t=>a.createElement("li",{key:t.id},a.createElement("a",{href:`#${t.id}`,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:t.value}}),a.createElement(e,{isChild:!0,toc:t.children,className:n,linkClassName:r}))))):null}));var O=Object.defineProperty,L=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function _(e){var t=e,{toc:n,className:l="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:s,maxHeadingLevel:i}=t,d=((e,t)=>{var n={};for(var a in e)N.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&L)for(var a of L(e))t.indexOf(a)<0&&w.call(e,a)&&(n[a]=e[a]);return n})(t,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const m=(0,r.L)(),u=null!=s?s:m.tableOfContents.minHeadingLevel,b=null!=i?i:m.tableOfContents.maxHeadingLevel,v=function({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,a.useMemo)((()=>f({toc:p(e),minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}({toc:n,minHeadingLevel:u,maxHeadingLevel:b});return E((0,a.useMemo)((()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:u,maxHeadingLevel:b}}),[o,c,u,b])),a.createElement(y,((e,t)=>{for(var n in t||(t={}))N.call(t,n)&&k(e,n,t[n]);if(L)for(var n of L(t))w.call(t,n)&&k(e,n,t[n]);return e})({toc:v,className:l,linkClassName:o},d))}},92879:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>o});var a=n(67294),r=n(21651);const l=a.createContext(null);function o({children:e,version:t}){return a.createElement(l.Provider,{value:t},e)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);