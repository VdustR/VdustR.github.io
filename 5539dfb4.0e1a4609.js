(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),l=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},h=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(o,".").concat(h)]||p[h]||b[h]||a;return n?c.a.createElement(m,i(i({ref:t},u),{},{components:n})):c.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),c=n(7),a=(n(0),n(109)),o={title:"String"},i={unversionedId:"sh/string",id:"sh/string",isDocsHomePage:!1,title:"String",description:"Match",source:"@site/docs/sh/string.md",slug:"/sh/string",permalink:"/docs/sh/string",editUrl:"https://github.com/vdustr/vdustr.github.io/edit/main/docs/sh/string.md",version:"current",sidebar:"docs",previous:{title:"fish",permalink:"/docs/sh/fish"},next:{title:"Ternary Operator",permalink:"/docs/sh/ternary"}},s=[{value:"Match",id:"match",children:[]},{value:"Substring",id:"substring",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"match"},"Match"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ FOO=foo\n# use regular expression\n$ [[ $FOO =~ ^f ]] && echo matched || echo unmatched\nmatched\n$ [[ $BAR =~ ^f ]] && echo matched || echo unmatched\nunmatched\n# use glob\n$ [[ $FOO == f* ]] && echo matched || echo unmatched\nmatched\n$ [[ $BAR == f* ]] && echo matched || echo unmatched\nunmatched\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Reference: ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/17420994/how-can-i-match-a-string-with-a-regex-in-bash"}),"https://stackoverflow.com/questions/17420994/how-can-i-match-a-string-with-a-regex-in-bash"))),Object(a.b)("h2",{id:"substring"},"Substring"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ STRING=string\n# ${VARIABLE:START:LENGTH}\n$ echo ${STRING:3}\ning\n$ echo ${STRING:2:4}\nring\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Reference: ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/428109/extract-substring-in-bash"}),"https://stackoverflow.com/questions/428109/extract-substring-in-bash"))))}l.isMDXComponent=!0}}]);