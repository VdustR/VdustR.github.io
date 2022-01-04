"use strict";(self.webpackChunkVdustR=self.webpackChunkVdustR||[]).push([[6463],{2597:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6509:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2501),a=n(1525),o=(n(9496),n(2597)),i=["components"],p={title:"VuePress"},u=void 0,l={unversionedId:"dev/vuepress",id:"dev/vuepress",title:"VuePress",description:"last-updated with Local Time",source:"@site/docs/dev/vuepress.md",sourceDirName:"dev",slug:"/dev/vuepress",permalink:"/docs/dev/vuepress",editUrl:"https://github.com/vdustr/vdustr.github.io/edit/main/docs/dev/vuepress.md",tags:[],version:"current",frontMatter:{title:"VuePress"},sidebar:"docs",previous:{title:"React",permalink:"/docs/dev/react"},next:{title:"Poi",permalink:"/docs/dev/poi"}},s=[{value:"<code>last-updated</code> with Local Time",id:"last-updated-with-local-time",children:[],level:2}],d={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"last-updated-with-local-time"},(0,o.kt)("inlineCode",{parentName:"h2"},"last-updated")," with Local Time"),(0,o.kt)("p",null,"Tested modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vuepress@1.0.0-alpha.47")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"date-fns@2.0.0-alpha.27"))),(0,o.kt)("p",null,"Pass timestamp instead of formatted time string in ",(0,o.kt)("inlineCode",{parentName:"p"},".vuepress/config.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"  module.exports = {\n    plugins: {\n      '@vuepress/last-updated': {\n+       transformer: timestamp => timestamp || new Date(),\n      },\n    },\n  };\n")),(0,o.kt)("p",null,"Modify your theme(for example. If you have your own extend, skip it):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// .vuepress/config\nmodule.exports = {\n  extend: '@vuepress/theme-default',\n};\n")),(0,o.kt)("p",null,"Find ",(0,o.kt)("inlineCode",{parentName:"p"},"this.$page.lastUpdated")," and format it."),(0,o.kt)("p",null,"For example, if you extended ",(0,o.kt)("inlineCode",{parentName:"p"},"@vuepress/theme-default"),", you could create ",(0,o.kt)("inlineCode",{parentName:"p"},".vuepress/theme/components/PageEdit.vue"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vue"},"<script>\nimport format from 'date-fns/format';\nimport PageEdit from '@vuepress/theme-default/components/PageEdit';\n\nexport default {\n  ...PageEdit,\n  computed: {\n    ...PageEdit.computed,\n    lastUpdated() {\n      return (\n        this.$page.lastUpdated &&\n        format(this.$page.lastUpdated, 'yyyy/MM/dd HH:mm:ss')\n      );\n    },\n  },\n};\n<\/script>\n")))}c.isMDXComponent=!0}}]);