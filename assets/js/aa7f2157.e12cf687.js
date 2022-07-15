"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57],{7942:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(959);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(665),o=(r(959),r(7942));const i={title:"7z"},l=void 0,a={unversionedId:"bin/7z",id:"bin/7z",title:"7z",description:"Compress Without Root Folder",source:"@site/docs/bin/7z.md",sourceDirName:"bin",slug:"/bin/7z",permalink:"/docs/bin/7z",draft:!1,tags:[],version:"current",frontMatter:{title:"7z"},sidebar:"myAutogeneratedSidebar",next:{title:"date",permalink:"/docs/bin/date"}},s={},p=[{value:"Compress Without Root Folder",id:"compress-without-root-folder",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"compress-without-root-folder"},"Compress Without Root Folder"),(0,o.kt)("p",null,"This will compress with root folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Compress ./relative/dir/myFile\n7z a -r my7z.7z relative/dir/*\n# Uncompress to ./relative/dir/myFile\n7z x my7z.7z\n")),(0,o.kt)("p",null,"This will compress without root folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Compress ./relative/dir/myFile\n7z a -r my7z.7z ./relative/dir/*\n# Uncompress to ./my7z/myFile\n7z x -omy7z my7z.7z\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reference: ",(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/10753667/compressing-only-files-using-7z-without-preserving-the-path"},"https://stackoverflow.com/questions/10753667/compressing-only-files-using-7z-without-preserving-the-path"))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# archive only to .zip\n7z a -tzip -mx=0 myzip.zip\n# level-9 compress to .zip\n7z a -tzip -mx=9 myzip.zip\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reference: ",(0,o.kt)("a",{parentName:"li",href:"https://sevenzip.osdn.jp/chm/cmdline/switches/method.htm"},"https://sevenzip.osdn.jp/chm/cmdline/switches/method.htm"))))}m.isMDXComponent=!0}}]);