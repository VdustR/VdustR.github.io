"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[888],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8181:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(2848),o=n(9213),a=(n(9496),n(9613)),c=["components"],l={title:"Mac"},i=void 0,u={unversionedId:"tools/mac",id:"tools/mac",title:"Mac",description:"Change Dock Size From Terminal",source:"@site/docs/tools/mac.md",sourceDirName:"tools",slug:"/tools/mac",permalink:"/docs/tools/mac",draft:!1,tags:[],version:"current",frontMatter:{title:"Mac"},sidebar:"myAutogeneratedSidebar",previous:{title:"Ternary Operator",permalink:"/docs/sh/ternary"}},s={},p=[{value:"Change Dock Size From Terminal",id:"change-dock-size-from-terminal",level:2},{value:"Fix sound",id:"fix-sound",level:2},{value:"Fix Xcode",id:"fix-xcode",level:2},{value:"Rearrange Launchpad",id:"rearrange-launchpad",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"change-dock-size-from-terminal"},"Change Dock Size From Terminal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"defaults write com.apple.dock tilesize -int 32; killall Dock\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"reference: ",(0,a.kt)("a",{parentName:"li",href:"https://gist.github.com/oguzolmez/0e7120ec5de938e600b48b799b1d5c1d"},"https://gist.github.com/oguzolmez/0e7120ec5de938e600b48b799b1d5c1d"))),(0,a.kt)("h2",{id:"fix-sound"},"Fix sound"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo killall coreaudiod\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"reference: ",(0,a.kt)("a",{parentName:"li",href:"https://www.makeuseof.com/tag/sound-advice-fixing-common-mac-audio-problems-os-x/"},"https://www.makeuseof.com/tag/sound-advice-fixing-common-mac-audio-problems-os-x/"))),(0,a.kt)("h2",{id:"fix-xcode"},"Fix Xcode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm -rf $(xcode-select -print-path) # Enter root password. No output is normal.\nxcode-select --install\n")),(0,a.kt)("p",null,"reference: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-gyp/issues/1927#issuecomment-546479900"},"https://github.com/nodejs/node-gyp/issues/1927#issuecomment-546479900")),(0,a.kt)("h2",{id:"rearrange-launchpad"},"Rearrange Launchpad"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rm ~/Library/Application\\ Support/Dock/*.db; defaults write com.apple.dock ResetLaunchPad -bool true; killall Dock;\n")),(0,a.kt)("p",null,"reference: ",(0,a.kt)("a",{parentName:"p",href:"https://apple.stackexchange.com/questions/280803/how-to-remove-blank-icon-from-launchpad-after-uninstall-app"},"https://apple.stackexchange.com/questions/280803/how-to-remove-blank-icon-from-launchpad-after-uninstall-app")))}d.isMDXComponent=!0}}]);