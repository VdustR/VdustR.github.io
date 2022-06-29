"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[189],{9613:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(9496);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?t.createElement(g,a(a({ref:r},u),{},{components:n})):t.createElement(g,a({ref:r},u))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3942:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=n(665),i=(n(9496),n(9613));const o={title:"pwd",description:"Print Working Directory"},a=void 0,l={unversionedId:"bin/pwd",id:"bin/pwd",title:"pwd",description:"Print Working Directory",source:"@site/docs/bin/pwd.md",sourceDirName:"bin",slug:"/bin/pwd",permalink:"/docs/bin/pwd",draft:!1,tags:[],version:"current",frontMatter:{title:"pwd",description:"Print Working Directory"},sidebar:"myAutogeneratedSidebar",previous:{title:"date",permalink:"/docs/bin/date"},next:{title:"rsync",permalink:"/docs/bin/rsync"}},c={},p=[{value:"Nginx Quick Test With Docker",id:"nginx-quick-test-with-docker",level:2}],u={toc:p};function s(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Print Working Directory")),(0,i.kt)("h2",{id:"nginx-quick-test-with-docker"},"Nginx Quick Test With Docker"),(0,i.kt)("p",null,"Any unix shells:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm -v $PWD:/usr/share/nginx/html:ro -p 5000:80 nginx\n")),(0,i.kt)("p",null,"bash:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm -v $(pwd):/usr/share/nginx/html:ro -p 5000:80 nginx\ndocker run -it --rm -v $(pwd)/build:/usr/share/nginx/html/subfolder:ro -p 5000:80 nginx\n")),(0,i.kt)("p",null,"fish:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm -v (pwd):/usr/share/nginx/html:ro -p 5000:80 nginx\ndocker run -it --rm -v (pwd)/build:/usr/share/nginx/html/subfolder:ro -p 5000:80 nginx\n")),(0,i.kt)("p",null,"cmd:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm -v %CD%:/usr/share/nginx/html:ro -p 5000:80 nginx\ndocker run -it --rm -v %CD%/build:/usr/share/nginx/html/sub-folder:ro -p 5000:80 nginx\n")),(0,i.kt)("p",null,"powershell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'docker run -it --rm -v "$pwd\\:/usr/share/nginx/html\\:ro" -p 5000:80 nginx\ndocker run -it --rm -v "$pwd/build\\:/usr/share/nginx/html/sub-folder\\:ro" -p 5000:80 nginx\n')))}s.isMDXComponent=!0}}]);