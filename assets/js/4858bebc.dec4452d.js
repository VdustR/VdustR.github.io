"use strict";(self.webpackChunkVdustR=self.webpackChunkVdustR||[]).push([[1497],{2597:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},i={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(t),m=a,b=f["".concat(u,".").concat(m)]||f[m]||i[m]||o;return t?n.createElement(b,l(l({ref:r},s),{},{components:t})):n.createElement(b,l({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5595:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var n=t(2501),a=t(1525),o=(t(9496),t(2597)),l=["components"],c={title:"Ternary Operator"},u=void 0,p={unversionedId:"sh/ternary",id:"sh/ternary",title:"Ternary Operator",description:"In js:",source:"@site/docs/sh/ternary.md",sourceDirName:"sh",slug:"/sh/ternary",permalink:"/docs/sh/ternary",tags:[],version:"current",frontMatter:{title:"Ternary Operator"},sidebar:"myAutogeneratedSidebar",previous:{title:"String",permalink:"/docs/sh/string"},next:{title:"Mac",permalink:"/docs/tools/mac"}},s=[],i={toc:s};function f(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOO === 'foo' ? (BAR = 'bar1') : (BAR = 'bar2');\n")),(0,o.kt)("p",null,"In bash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"[[ $FOO = foo ]] && BAR=bar1 || BAR=bar2\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOO === 'foo1' ? (BAR = 'bar1') : (BAR = 'bar2');\n")),(0,o.kt)("p",null,"In bash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"[[ $FOO = foo1 ]] && BAR=bar1 || BAR=bar2\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"BAR = FOO === 'foo1' ? 'bar1' : FOO === 'foo2' ? 'bar2' : 'bar3';\n")),(0,o.kt)("p",null,"In bash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"BAR=$(echo $([[ $FOO = foo1 ]] && echo bar1 || ([[ $FOO = foo2 ]] && echo bar2 || echo bar3)))\n")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reference: ",(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/3953645/ternary-operator-in-bash"},"https://stackoverflow.com/questions/3953645/ternary-operator-in-bash"))))}f.isMDXComponent=!0}}]);