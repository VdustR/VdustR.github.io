(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{110:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var t=r(0),c=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function b(e,n){if(null==e)return{};var r,t,c=function(e,n){if(null==e)return{};var r,t,c={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(c[r]=e[r]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),i=function(e){var n=c.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=i(e.components);return c.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=i(r),d=t,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||a;return r?c.a.createElement(m,l(l({ref:n},s),{},{components:r})):c.a.createElement(m,l({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return b})),r.d(n,"default",(function(){return i}));var t=r(3),c=r(7),a=(r(0),r(110)),o={title:"rsync"},l={unversionedId:"bin/rsync",id:"bin/rsync",isDocsHomePage:!1,title:"rsync",description:"Push Local Files to Remote",source:"@site/docs/bin/rsync.md",slug:"/bin/rsync",permalink:"/docs/bin/rsync",editUrl:"https://github.com/vdustr/vdustr.github.io/edit/main/docs/bin/rsync.md",version:"current",sidebar:"docs",previous:{title:"pwd",permalink:"/docs/bin/pwd"},next:{title:"Generator",permalink:"/docs/bookmarks/generator"}},b=[{value:"Push Local Files to Remote",id:"push-local-files-to-remote",children:[]},{value:"mkdir -p",id:"mkdir--p",children:[]},{value:"Delete",id:"delete",children:[]},{value:"Exclude",id:"exclude",children:[]}],s={toc:b};function i(e){var n=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"push-local-files-to-remote"},"Push Local Files to Remote"),Object(a.b)("p",null,"Push files under a directory to a directory:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# local       remote\n# /a/b/c/1    /x/\n# /a/b/c/2\n# /a/b/c/3\nrsync -av -e ssh /a/b/c/ root@172.17.0.2:/x/\n# local       remote\n# /a/b/c/1    /x/1\n# /a/b/c/2    /x/2\n# /a/b/c/3    /x/3\n")),Object(a.b)("p",null,"Push a folder to a directory:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# local       remote\n# /a/b/c/1    /x/\n# /a/b/c/2\n# /a/b/c/3\nrsync -av -e ssh /a/b/c root@172.17.0.2:/x/\n# local       remote\n# /a/b/c/1    /x/c/1\n# /a/b/c/2    /x/c/2\n# /a/b/c/3    /x/c/3\n")),Object(a.b)("p",null,"Push a file to a directory:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# local       remote\n# /a/b/c/1    /x/\nrsync -av -e ssh /a/b/c/1 root@172.17.0.2:/x/2/\n# local       remote\n# /a/b/c/1    /x/2/1\n")),Object(a.b)("p",null,"Push a file to a path:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# local       remote\n# /a/b/c/1    /x/\nrsync -av -e ssh /a/b/c/1 root@172.17.0.2:/x/2\n# local       remote\n# /a/b/c/1    /x/2\n")),Object(a.b)("h2",{id:"mkdir--p"},"mkdir -p"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"rsync")," doesn't create directory tree. Use ",Object(a.b)("inlineCode",{parentName:"p"},"--rsync-path")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"--rsync-path=PROGRAM Use this to specify what program is to be run on the remote machine to start-up rsync.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},'# local       remote\n# /a/b/c/1    /x/\n# /a/b/c/2\n# /a/b/c/3\n$ rsync -av -e ssh /a/b/c/ root@172.17.0.2:/x/y/z/\nsending incremental file list\nrsync: mkdir "/x/y/z" failed: No such file or directory (2)\nrsync error: error in file IO (code 11) at main.c(675) [Receiver=3.1.2]\n$ rsync -av -e ssh --rsync-path="mkdir -p /x/y/z && rsync" /a/b/c/ root@172.17.0.2:/x/y/z/\n# local       remote\n# /a/b/c/1    /x/y/z/1\n# /a/b/c/2    /x/y/z/2\n# /a/b/c/3    /x/y/z/3\n')),Object(a.b)("p",null,"Notice that ",Object(a.b)("inlineCode",{parentName:"p"},"mkdir -p")," and ",Object(a.b)("inlineCode",{parentName:"p"},"rsync")," should works on remote."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Reference: ",Object(a.b)("a",{parentName:"li",href:"https://askubuntu.com/questions/561212/rsync-throwing-mkdir-cannot-create-directory-data-dir-1-dir-2-dir-3-no-suc"},"https://askubuntu.com/questions/561212/rsync-throwing-mkdir-cannot-create-directory-data-dir-1-dir-2-dir-3-no-suc"))),Object(a.b)("h2",{id:"delete"},"Delete"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# local       remote\n# /a/b/c/1    /x/y/z/1\n# /a/b/c/2    /x/y/z/3\n# /a/b/c/3\n$ rsync -av -e ssh /a/b/c/ root@172.17.0.2:/x/y/z/\n# local       remote\n# /a/b/c/1    /x/y/z/1\n# /a/b/c/2    /x/y/z/3\n# /a/b/c/3\nrsync -av -e ssh --delete /a/b/c/ root@172.17.0.2:/x/y/z/\n# local       remote\n# /a/b/c/1    /x/y/z/1\n# /a/b/c/3    /x/y/z/3\n")),Object(a.b)("h2",{id:"exclude"},"Exclude"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# local       remote\n# /a/b/c/1    /x/\n# /a/b/c/2\n# /a/b/c/3\nrsync -av -e ssh /a/b/c/ root@172.17.0.2:/x/ --exclude 2\n# local       remote\n# /a/b/c/1    /x/1\n# /a/b/c/2    /x/3\n# /a/b/c/3\n")),Object(a.b)("p",null,"Multiple:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# local       remote\n# /a/b/c/1    /x/\n# /a/b/c/2\n# /a/b/c/3\nrsync -av -e ssh /a/b/c/ root@172.17.0.2:/x/ --exclude 2 --exclude 3\n# local       remote\n# /a/b/c/1    /x/1\n# /a/b/c/2\n# /a/b/c/3\n")),Object(a.b)("p",null,"Wildcard:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},'# local          remote\n# /a/b/c/1       /x/\n# /a/b/c/2\n# /a/b/c/3\n# /a/b/c/4.md\n# /a/b/c/5.md\n# /a/b/c/6.md\nrsync -av -e ssh /a/b/c/ root@172.17.0.2:/x/ --exclude "*.md"\n# local       remote\n# /a/b/c/1    /x/1\n# /a/b/c/2\n# /a/b/c/3\n')))}i.isMDXComponent=!0}}]);