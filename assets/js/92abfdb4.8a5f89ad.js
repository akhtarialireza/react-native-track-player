"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[105],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:e},s),{},{components:n})):r.createElement(g,o({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1292:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={sidebar_position:3},l="Rating",c={unversionedId:"api/constants/rating",id:"api/constants/rating",title:"Rating",description:"| Name | Description |",source:"@site/docs/api/constants/rating.md",sourceDirName:"api/constants",slug:"/api/constants/rating",permalink:"/docs/next/api/constants/rating",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/docs/api/constants/rating.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"app",previous:{title:"Capability",permalink:"/docs/next/api/constants/capability"},next:{title:"Repeat Mode",permalink:"/docs/next/api/constants/repeat-mode"}},s={},u=[],d={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rating"},"Rating"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"RatingType.Heart")),(0,i.kt)("td",{parentName:"tr",align:null},'Rating type indicating "with heart" or "without heart", its value is a ',(0,i.kt)("inlineCode",{parentName:"td"},"boolean"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"RatingType.ThumbsUpDown")),(0,i.kt)("td",{parentName:"tr",align:null},'Rating type indicating "thumbs up" or "thumbs down", its value is a ',(0,i.kt)("inlineCode",{parentName:"td"},"boolean"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"RatingType.ThreeStars")),(0,i.kt)("td",{parentName:"tr",align:null},"Rating type indicating 0 to 3 stars, its value is a ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," of stars.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"RatingType.FourStars")),(0,i.kt)("td",{parentName:"tr",align:null},"Rating type indicating 0 to 4 stars, its value is a ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," of stars.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"RatingType.FiveStars")),(0,i.kt)("td",{parentName:"tr",align:null},"Rating type indicating 0 to 5 stars, its value is a ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," of stars.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"RatingType.Percentage")),(0,i.kt)("td",{parentName:"tr",align:null},"Rating type indicating percentage, its value is a ",(0,i.kt)("inlineCode",{parentName:"td"},"number"),".")))))}m.isMDXComponent=!0}}]);