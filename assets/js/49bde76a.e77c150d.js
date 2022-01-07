"use strict";(self.webpackChunkVdustR=self.webpackChunkVdustR||[]).push([[2421],{2597:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2807:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(2501),a=n(1525),o=(n(9496),n(2597)),i=["components"],c={title:"date"},l=void 0,u={unversionedId:"bin/date",id:"bin/date",title:"date",description:"Format",source:"@site/docs/bin/date.md",sourceDirName:"bin",slug:"/bin/date",permalink:"/docs/bin/date",tags:[],version:"current",frontMatter:{title:"date"},sidebar:"docs",previous:{title:"7z",permalink:"/docs/bin/7z"},next:{title:"pwd",permalink:"/docs/bin/pwd"}},p=[{value:"Format",id:"format",children:[],level:2},{value:"Timezone",id:"timezone",children:[],level:2}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"format"},"Format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ date '+%Y-%m-%d %H:%M:%S.%N'\n2019-12-04 14:27:59.372201900\n")),(0,o.kt)("p",null,"Some OS like alpine does not support milliseconds"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reference: ",(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/1401482/yyyy-mm-dd-format-date-in-shell-script/47216077"},"https://stackoverflow.com/questions/1401482/yyyy-mm-dd-format-date-in-shell-script/47216077"))),(0,o.kt)("h2",{id:"timezone"},"Timezone"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ TZ=Asia/Taipei date '+%Y-%m-%d %H:%M:%S'\n2019-12-04 14:27:59\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reference: ",(0,o.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/48101/how-can-i-have-date-output-the-time-from-a-different-timezone"},"https://unix.stackexchange.com/questions/48101/how-can-i-have-date-output-the-time-from-a-different-timezone")),(0,o.kt)("li",{parentName:"ul"},"Timezone List: ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones")," (check TZ database name column)")),(0,o.kt)("p",null,"If TZ not works, install ",(0,o.kt)("inlineCode",{parentName:"p"},"tzdata")))}m.isMDXComponent=!0}}]);