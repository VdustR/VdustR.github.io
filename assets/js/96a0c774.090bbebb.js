"use strict";(self.webpackChunkVdustR=self.webpackChunkVdustR||[]).push([[2254],{2597:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=s(r),m=l,d=g["".concat(i,".").concat(m)]||g[m]||u[m]||n;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4825:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return m}});var a=r(2501),l=r(1525),n=(r(9496),r(2597)),o=["components"],p={description:"This example will show you how to dev with typescript fullstack with GraphQL Code Generator.",image:"https://vdustr.github.io/asset-2022/01-04-example-graphql-fullstack-codegen/ogimage.png",authors:["ViPro"],tags:["react","graphql","typescript","apollo","vscode","visual-studio-code","workspace","monorepo","axios","gql","fullstack","codegen","pnpm","apollo-server","fastify","ts-node","graphql-code-generator","ts-node-dev","react-query"]},i="A TypeScript Fullstack GraphQL CodeGen Example",s={permalink:"/blog/2022/01/04/example-graphql-fullstack-codegen",editUrl:"https://github.com/vdustr/vdustr.github.io/edit/main/blog/2022/01-04-example-graphql-fullstack-codegen.md",source:"@site/blog/2022/01-04-example-graphql-fullstack-codegen.md",title:"A TypeScript Fullstack GraphQL CodeGen Example",description:"This example will show you how to dev with typescript fullstack with GraphQL Code Generator.",date:"2022-01-04T00:00:00.000Z",formattedDate:"January 4, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"graphql",permalink:"/blog/tags/graphql"},{label:"typescript",permalink:"/blog/tags/typescript"},{label:"apollo",permalink:"/blog/tags/apollo"},{label:"vscode",permalink:"/blog/tags/vscode"},{label:"visual-studio-code",permalink:"/blog/tags/visual-studio-code"},{label:"workspace",permalink:"/blog/tags/workspace"},{label:"monorepo",permalink:"/blog/tags/monorepo"},{label:"axios",permalink:"/blog/tags/axios"},{label:"gql",permalink:"/blog/tags/gql"},{label:"fullstack",permalink:"/blog/tags/fullstack"},{label:"codegen",permalink:"/blog/tags/codegen"},{label:"pnpm",permalink:"/blog/tags/pnpm"},{label:"apollo-server",permalink:"/blog/tags/apollo-server"},{label:"fastify",permalink:"/blog/tags/fastify"},{label:"ts-node",permalink:"/blog/tags/ts-node"},{label:"graphql-code-generator",permalink:"/blog/tags/graphql-code-generator"},{label:"ts-node-dev",permalink:"/blog/tags/ts-node-dev"},{label:"react-query",permalink:"/blog/tags/react-query"}],readingTime:.28,truncated:!1,authors:[{name:"ViPro",title:"A lazy FE Developer \ud83d\udc08\u200d\u2b1b",url:"https://VdustR.github.io/",imageURL:"https://github.com/VdustR.png",key:"ViPro"}],nextItem:{title:"Example for Svelte + TS + Vite + MDsveX",permalink:"/blog/2021/12/25/example-vite-svelte-markdown"}},c={authorsImageUrls:[void 0]},u=[],g={toc:u};function m(e){var t=e.components,r=(0,l.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u6700\u8fd1\u8a66\u4e86\u4e00\u4e0b GraphQL CodeGen \u7522\u751f react-query \u548c resolver type, node server \u53ef\u4ee5\u4fdd\u8b49\u56de\u61c9\u7684\u578b\u614b\u6b63\u78ba, react-query functions \u66f4\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528, \u771f\u3109 4 \u8d85\u65b9\u4fbf\u7684 R~"),(0,n.kt)("p",null,"\u53ef\u4ee5\u53c3\u8003\u9019\u500b\u7c21\u55ae\u7684\u7bc4\u4f8b: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/VdustR/example-graphql-fullstack-codegen"},"https://github.com/VdustR/example-graphql-fullstack-codegen")))}m.isMDXComponent=!0}}]);