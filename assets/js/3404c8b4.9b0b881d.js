"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[874],{3576:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(959);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5878:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(6600),a=(t(959),t(3576));const o={},l="fnm",s={unversionedId:"tools/fnm",id:"tools/fnm",title:"fnm",description:"\ud83d\ude80 Fast and simple Node.js version manager, built in Rust",source:"@site/docs/tools/fnm.md",sourceDirName:"tools",slug:"/tools/fnm",permalink:"/docs/tools/fnm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Ternary Operator",permalink:"/docs/sh/ternary"},next:{title:"Mac",permalink:"/docs/tools/mac"}},i={},c=[{value:"Install",id:"install",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fnm"},"fnm"),(0,a.kt)("p",null,"\ud83d\ude80 Fast and simple Node.js version manager, built in Rust"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Schniz/fnm"},"https://github.com/Schniz/fnm")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://fnm.vercel.app/install | bash\n")),(0,a.kt)("p",null,"Auto switch to the specified version described in ",(0,a.kt)("inlineCode",{parentName:"p"},".nvmrc")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".node-version"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="~/.bashrc"',title:'"~/.bashrc"'},'  # fnm\n  export PATH=/home/v/.fnm:$PATH\n- eval "`fnm env`"\n+ eval "$(fnm env --use-on-cd)"\n')),(0,a.kt)("p",null,"Setup completions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"fnm completions --shell bash >> ~/.bashrc\n")),(0,a.kt)("p",null,"Fish shell:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Setup fish:\necho "fish_add_path $HOME/.fnm" >> ~/.config/fish/conf.d/fnm.fish\n# Setup auto switch version:\necho "fnm env --use-on-cd | source" >> ~/.config/fish/conf.d/fnm.fish\n# Setup completions:\nfnm completions --shell fish >> ~/.config/fish/conf.d/fnm.fish\n')),(0,a.kt)("p",null,"Husky(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Schniz/fnm/issues/428#issuecomment-819439988"},"workaround"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="~/.huskyrc"',title:'"~/.huskyrc"'},'export PATH="$HOME"/.fnm:"$PATH"\neval "$(fnm env --log-level=quiet | sed -e \'s/PATH="\\(.*\\)":\\$PATH/PATH="\\1:$PATH"/g\')"\n')),(0,a.kt)("p",null,"Upgrade:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Mac OS:\nbrew upgrade fnm\n\n# Others:\ncurl -fsSL https://fnm.vercel.app/install | bash -s -- --skip-shell\n")))}u.isMDXComponent=!0}}]);