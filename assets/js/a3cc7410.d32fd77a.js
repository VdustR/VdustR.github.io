"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[756],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||c;return t?r.createElement(b,o(o({ref:n},p),{},{components:t})):r.createElement(b,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var r=t(665),a=(t(9496),t(9613));const c={title:"rsync"},o=void 0,l={unversionedId:"bin/rsync",id:"bin/rsync",title:"rsync",description:"Push Local Files to Remote",source:"@site/docs/bin/rsync.md",sourceDirName:"bin",slug:"/bin/rsync",permalink:"/docs/bin/rsync",draft:!1,tags:[],version:"current",frontMatter:{title:"rsync"},sidebar:"myAutogeneratedSidebar",previous:{title:"pwd",permalink:"/docs/bin/pwd"},next:{title:"Common",permalink:"/docs/dev/common"}},s={},i=[{value:"Push Local Files to Remote",id:"push-local-files-to-remote",level:2},{value:"mkdir -p",id:"mkdir--p",level:2},{value:"Delete",id:"delete",level:2},{value:"Exclude",id:"exclude",level:2}],p={toc:i};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"push-local-files-to-remote"},"Push Local Files to Remote"),(0,a.kt)("p",null,"Push files under a directory to a directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# local       remote\n# /a/b/c/1    /x/\n# /a/b/c/2\n# /a/b/c/3\nrsync -av -e ssh /a/b/c/ root@172.17.0.2:/x/\n# local       remote\n# /a/b/c/1    /x/1\n# /a/b/c/2    /x/2\n# /a/b/c/3    /x/3\n")),(0,a.kt)("p",null,"Push a folder to a directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# local       remote\n# /a/b/c/1    /x/\n# /a/b/c/2\n# /a/b/c/3\nrsync -av -e ssh /a/b/c root@172.17.0.2:/x/\n# local       remote\n# /a/b/c/1    /x/c/1\n# /a/b/c/2    /x/c/2\n# /a/b/c/3    /x/c/3\n")),(0,a.kt)("p",null,"Push a file to a directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# local       remote\n# /a/b/c/1    /x/\nrsync -av -e ssh /a/b/c/1 root@172.17.0.2:/x/2/\n# local       remote\n# /a/b/c/1    /x/2/1\n")),(0,a.kt)("p",null,"Push a file to a path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# local       remote\n# /a/b/c/1    /x/\nrsync -av -e ssh /a/b/c/1 root@172.17.0.2:/x/2\n# local       remote\n# /a/b/c/1    /x/2\n")),(0,a.kt)("h2",{id:"mkdir--p"},"mkdir -p"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rsync")," doesn't create directory tree. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"--rsync-path")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"--rsync-path=PROGRAM Use this to specify what program is to be run on the remote machine to start-up rsync.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# local       remote\n# /a/b/c/1    /x/\n# /a/b/c/2\n# /a/b/c/3\n$ rsync -av -e ssh /a/b/c/ root@172.17.0.2:/x/y/z/\nsending incremental file list\nrsync: mkdir "/x/y/z" failed: No such file or directory (2)\nrsync error: error in file IO (code 11) at main.c(675) [Receiver=3.1.2]\n$ rsync -av -e ssh --rsync-path="mkdir -p /x/y/z && rsync" /a/b/c/ root@172.17.0.2:/x/y/z/\n# local       remote\n# /a/b/c/1    /x/y/z/1\n# /a/b/c/2    /x/y/z/2\n# /a/b/c/3    /x/y/z/3\n')),(0,a.kt)("p",null,"Notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"mkdir -p")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rsync")," should works on remote."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reference: ",(0,a.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/561212/rsync-throwing-mkdir-cannot-create-directory-data-dir-1-dir-2-dir-3-no-suc"},"https://askubuntu.com/questions/561212/rsync-throwing-mkdir-cannot-create-directory-data-dir-1-dir-2-dir-3-no-suc"))),(0,a.kt)("h2",{id:"delete"},"Delete"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# local       remote\n# /a/b/c/1    /x/y/z/1\n# /a/b/c/2    /x/y/z/3\n# /a/b/c/3\n$ rsync -av -e ssh /a/b/c/ root@172.17.0.2:/x/y/z/\n# local       remote\n# /a/b/c/1    /x/y/z/1\n# /a/b/c/2    /x/y/z/3\n# /a/b/c/3\nrsync -av -e ssh --delete /a/b/c/ root@172.17.0.2:/x/y/z/\n# local       remote\n# /a/b/c/1    /x/y/z/1\n# /a/b/c/3    /x/y/z/3\n")),(0,a.kt)("h2",{id:"exclude"},"Exclude"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# local       remote\n# /a/b/c/1    /x/\n# /a/b/c/2\n# /a/b/c/3\nrsync -av -e ssh /a/b/c/ root@172.17.0.2:/x/ --exclude 2\n# local       remote\n# /a/b/c/1    /x/1\n# /a/b/c/2    /x/3\n# /a/b/c/3\n")),(0,a.kt)("p",null,"Multiple:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# local       remote\n# /a/b/c/1    /x/\n# /a/b/c/2\n# /a/b/c/3\nrsync -av -e ssh /a/b/c/ root@172.17.0.2:/x/ --exclude 2 --exclude 3\n# local       remote\n# /a/b/c/1    /x/1\n# /a/b/c/2\n# /a/b/c/3\n")),(0,a.kt)("p",null,"Wildcard:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# local          remote\n# /a/b/c/1       /x/\n# /a/b/c/2\n# /a/b/c/3\n# /a/b/c/4.md\n# /a/b/c/5.md\n# /a/b/c/6.md\nrsync -av -e ssh /a/b/c/ root@172.17.0.2:/x/ --exclude "*.md"\n# local       remote\n# /a/b/c/1    /x/1\n# /a/b/c/2\n# /a/b/c/3\n')))}u.isMDXComponent=!0}}]);