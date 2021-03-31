(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,u=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.a.createElement(u,c(c({ref:t},b),{},{components:n})):r.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(109)),i={title:"Javascript"},c={unversionedId:"dev/javascript",id:"dev/javascript",isDocsHomePage:!1,title:"Javascript",description:"Coding Style",source:"@site/docs/dev/javascript.md",slug:"/dev/javascript",permalink:"/docs/dev/javascript",editUrl:"https://github.com/vdustr/vdustr.github.io/edit/main/docs/dev/javascript.md",version:"current",sidebar:"docs",previous:{title:"Common",permalink:"/docs/dev/common"},next:{title:"React",permalink:"/docs/dev/react"}},l=[{value:"Coding Style",id:"coding-style",children:[]},{value:"Date",id:"date",children:[{value:"Date format",id:"date-format",children:[]},{value:"<code>monthIndex</code>",id:"monthindex",children:[]},{value:"Date Libraries",id:"date-libraries",children:[]}]},{value:"Equality",id:"equality",children:[]},{value:"Float Precision",id:"float-precision",children:[]},{value:"Interesting Encodes",id:"interesting-encodes",children:[]},{value:"NodeList",id:"nodelist",children:[]},{value:"Random",id:"random",children:[]},{value:"RegExp",id:"regexp",children:[{value:"RegExp.prototype\u200b.test()",id:"regexpprototypetest",children:[]}]},{value:"SVG",id:"svg",children:[]},{value:"Whitespace: <code>encodeURIComponent</code> vs <code>URLSearchParams</code>",id:"whitespace-encodeuricomponent-vs-urlsearchparams",children:[]}],b={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"coding-style"},"Coding Style"),Object(o.b)("p",null,"Use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://prettier.io/"}),"Prettier")," as a formatter and use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://eslint.org/"}),"ESLint")," as an inspector(with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/prettier/eslint-config-prettier"}),Object(o.b)("inlineCode",{parentName:"a"},"eslint-config-prettier")),")."),Object(o.b)("h2",{id:"date"},"Date"),Object(o.b)("h3",{id:"date-format"},"Date format"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"-")," for UTC time whereas use ",Object(o.b)("inlineCode",{parentName:"p"},"/")," for local time."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"console.log(new Date('2019-01-01'));\n/**\n * -> Tue Jan 01 2019 08:00:00 GMT+0800 (Taipei Standard Time)\n * UTC time\n */\n\nconsole.log(new Date('2019/01/01'));\n/**\n * -> Tue Jan 01 2019 00:00:00 GMT+0800 (Taipei Standard Time)\n * local time\n */\n")),Object(o.b)("p",null,"\ud83d\udd17 reference: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://dygraphs.com/date-formats.html"}),"3/14/2012 blog from danvk Comparing FF/IE/Chrome on Parsing Date Strings")),Object(o.b)("h3",{id:"monthindex"},Object(o.b)("inlineCode",{parentName:"h3"},"monthIndex")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"monthIndex")," is beginning with ",Object(o.b)("inlineCode",{parentName:"p"},"0")," for January to ",Object(o.b)("inlineCode",{parentName:"p"},"11")," for December."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"new Date(2019, 1, 1, 0, 0, 0, 0);\n// -> Fri Feb 01 2019 00:00:00 GMT+0800 (Taipei Standard Time)\nnew Date(2019, 0, 1, 0, 0, 0, 0);\n// -> Tue Jan 01 2019 00:00:00 GMT+0800 (Taipei Standard Time)\nnew Date('1989-02-13').getMonth();\n// -> 1\n")),Object(o.b)("p",null,"\ud83d\udd17 reference: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"}),"Date")),Object(o.b)("h3",{id:"date-libraries"},"Date Libraries"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://date-fns.org/"}),"date-fns"),"(recommended)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://momentjs.com/"}),"Moment.js"))),Object(o.b)("h2",{id:"equality"},"Equality"),Object(o.b)("p",null,"\ud83d\udd17 reference: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dorey.github.io/JavaScript-Equality-Table/"}),"JavaScript-Equality-Table")),Object(o.b)("h2",{id:"float-precision"},"Float Precision"),Object(o.b)("p",null,"Solutions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/MikeMcl/big.js"}),"big.js"),Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"https://img.shields.io/github/stars/MikeMcl/big.js.svg",alt:"big.js"})),Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"https://img.shields.io/github/license/MikeMcl/big.js.svg",alt:"big.js"}))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/MikeMcl/bignumber.js"}),"bignumber.js"),Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"https://img.shields.io/github/stars/MikeMcl/bignumber.js.svg",alt:"bignumber.js"})),Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"https://img.shields.io/github/license/MikeMcl/bignumber.js.svg",alt:"bignumber.js"}))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/MikeMcl/decimal.js"}),"decimal.js"),Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"https://img.shields.io/github/stars/MikeMcl/decimal.js.svg",alt:"decimal.js"})),Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"https://img.shields.io/github/license/MikeMcl/decimal.js.svg",alt:"decimal.js"})))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"big.js"),": minimalist; easy-to-use; precision specified in decimal places; precision applied to division only."),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"bignumber.js"),": bases 2-64; configuration options; ",Object(o.b)("inlineCode",{parentName:"p"},"NaN"),"; ",Object(o.b)("inlineCode",{parentName:"p"},"Infinity"),"; precision specified in decimal places; precision applied to division only; base prefixes."),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"decimal.js"),": bases 2-64; configuration options; ",Object(o.b)("inlineCode",{parentName:"p"},"NaN"),"; ",Object(o.b)("inlineCode",{parentName:"p"},"Infinity"),"; non-integer powers, ",Object(o.b)("inlineCode",{parentName:"p"},"exp"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ln"),", ",Object(o.b)("inlineCode",{parentName:"p"},"log"),"; precision specified in significant digits; precision always applied; random numbers.")),Object(o.b)("p",null,"\ud83d\udd17 reference: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/MikeMcl/big.js/issues/45#issuecomment-104211175"}),"big.js vs. bignumber.js vs. decimal.js? #45")),Object(o.b)("p",null,"More info: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/dev/common#float-precision"}),"Float Precision"),"."),Object(o.b)("h2",{id:"interesting-encodes"},"Interesting Encodes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://utf-8.jp/public/aaencode.html"}),"aaencode")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://utf-8.jp/public/jjencode.html"}),"jjencode")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.jsfuck.com/"}),"JSFuck"))),Object(o.b)("h2",{id:"nodelist"},"NodeList"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"NodeList")," is live. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll"}),Object(o.b)("inlineCode",{parentName:"a"},"document.querySelectorAll()"))," returns a static ",Object(o.b)("inlineCode",{parentName:"p"},"NodeList"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"{\n  const parentDom = document.createElement('div');\n  const childClass = 'testChild';\n  const { childNodes } = parentDom;\n  const appendChild = () => {\n    const children = document.createElement('div');\n    children.classList.add(childClass);\n    parentDom.appendChild(children);\n  };\n  appendChild();\n  const querySelectorAll = parentDom.querySelectorAll(`.${childClass}`);\n  const getElementsByClass = parentDom.getElementsByClassName(childClass);\n  console.log(childNodes.length); // 1\n  console.log(getElementsByClass.length); // 1\n  console.log(querySelectorAll.length); // 1\n  appendChild();\n  console.log(childNodes.length); // 2\n  console.log(getElementsByClass.length); // 2\n  console.log(querySelectorAll.length); // 1\n}\n")),Object(o.b)("p",null,"\ud83d\udd17 reference: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/zh-TW/docs/Web/API/NodeList"}),"Node\u200bList")),Object(o.b)("h2",{id:"random"},"Random"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"Math.random()")," does not provide cryptographically secure random numbers. Do not use them for anything related to security. Use the Web Crypto API instead, and more precisely the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues"}),"window.crypto.getRandomValues()")," method.")),Object(o.b)("p",null,"API:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"getRandom(count: number): number[]\ngetRandom({\n  count?: number,\n  min?: number,\n  max?: number,\n}): number[]\n/**\n * count:\n *   browser: 1 ~ 2 ** 14\n *   node: 1 ~ Out Of Memory\n * min, max: 0 ~ 2 ** 32 - 1\n */\n")),Object(o.b)("p",null,"Inline:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const getRandom = (() => {\n  const maxMax = 2 ** 32 - 1;\n  const getRandom = (options) => {\n    let { count = 1, min = 0, max = maxMax } =\n      typeof options === 'object' ? options : { count: options };\n    if (min < 0) throw new Error(`[getRandom] min is less than 0, min: ${min}`);\n    if (max > maxMax)\n      throw new Error(`[getRandom] max is greater than ${maxMax}, max: ${max}`);\n    if (min > max)\n      throw new Error(\n        `[getRandom] min is greater than max, min: ${min}, max: ${max}`\n      );\n    return Array.from(\n      crypto.getRandomValues(new Uint32Array(count)),\n      (v) => min + (v % (max - min + 1))\n    );\n  };\n  return getRandom;\n})();\n")),Object(o.b)("p",null,"Module:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { inspect } from 'util';\n\nconst maxMax = 2 ** 32 - 1;\n\nconst getRandom = (options) => {\n  let { count = 1, min = 0, max = maxMax } =\n    typeof options === 'object' ? options : { count: options };\n  if (min < 0)\n    throw new Error(`[getRandom] min is less than 0, min: ${inspect(min)}`);\n  if (max > maxMax)\n    throw new Error(\n      `[getRandom] max is greater than ${inspect(maxMax)}, max: ${inspect(max)}`\n    );\n  if (min > max)\n    throw new Error(\n      `[getRandom] min is greater than max, min: ${inspect(\n        min\n      )}, max: ${inspect(max)}`\n    );\n  return Array.from(\n    crypto.getRandomValues(new Uint32Array(count)),\n    (v) => min + (v % (max - min + 1))\n  );\n};\n\nexport default getRandom;\n")),Object(o.b)("p",null,"Typescript:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { inspect } from 'util';\n\nconst maxMax: number = 2 ** 32 - 1;\ninterface Options {\n  count?: number;\n  min?: number;\n  max?: number;\n}\n\nconst getRandom = (options?: number | Options): number[] => {\n  let { count = 1, min = 0, max = maxMax } =\n    typeof options === 'object' ? options : { count: options };\n  if (min < 0)\n    throw new Error(`[getRandom] min is less than 0, min: ${inspect(min)}`);\n  if (max > maxMax)\n    throw new Error(\n      `[getRandom] max is greater than ${inspect(maxMax)}, max: ${inspect(max)}`\n    );\n  if (min > max)\n    throw new Error(\n      `[getRandom] min is greater than max, min: ${inspect(\n        min\n      )}, max: ${inspect(max)}`\n    );\n  return Array.from(\n    crypto.getRandomValues(new Uint32Array(count)),\n    (v) => min + (v % (max - min + 1))\n  );\n};\n\nexport default getRandom;\n")),Object(o.b)("p",null,"Node:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const crypto = require('crypto');\nconst { inspect } = require('util');\n\nconst maxMax = 2 ** 32 - 1;\nconst byte = 32 / 8;\nconst getRandom = (options) => {\n  let { count = 1, min = 0, max = maxMax } =\n    typeof options === 'object' ? options : { count: options };\n  if (min < 0)\n    throw new Error(`[getRandom] min is less than 0, min: ${inspect(min)}`);\n  if (max > maxMax)\n    throw new Error(\n      `[getRandom] max is greater than ${inspect(maxMax)}, max: ${inspect(max)}`\n    );\n  if (min > max)\n    throw new Error(\n      `[getRandom] min is greater than max, min: ${inspect(\n        min\n      )}, max: ${inspect(max)}`\n    );\n  const random = crypto.randomBytes(count * byte);\n  return Array.from(\n    Array(count),\n    (v, i) => min + (random.readUInt32BE(i * byte) % (max - min + 1))\n  );\n};\n\nmodule.exports = getRandom;\n")),Object(o.b)("p",null,"Node / multiple / async / thread:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const crypto = require('crypto');\nconst { inspect } = require('util');\n\nconst maxMax = 2 ** 32 - 1;\nconst getRandom = (options) =>\n  new Promise((resolve) => {\n    let { count = 1, min = 0, max = maxMax } =\n      typeof options === 'object' ? options : { count: options };\n    if (min < 0)\n      throw new Error(`[getRandom] min is less than 0, min: ${inspect(min)}`);\n    if (max > maxMax)\n      throw new Error(\n        `[getRandom] max is greater than ${inspect(maxMax)}, max: ${inspect(\n          max\n        )}`\n      );\n    if (min > max)\n      throw new Error(\n        `[getRandom] min is greater than max, min: ${inspect(\n          min\n        )}, max: ${inspect(max)}`\n      );\n    const a = new Uint32Array(count);\n    crypto.randomFill(a, (err, buf) => {\n      if (err) throw err;\n      resolve(Array.from(buf, (v) => min + (v % (max - min + 1))));\n    });\n  });\n\nmodule.exports = getRandom;\n")),Object(o.b)("p",null,"Reference:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/dist/latest-v12.x/docs/api/crypto.html#crypto_crypto_randombytes_size_callback"}),"\ud83d\udd17 crypto.randomBytes()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/dist/latest-v12.x/docs/api/crypto.html#crypto_crypto_randomfill_buffer_offset_size_callback"}),"\ud83d\udd17 crypto.randomFill()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues"}),"\ud83d\udd17 Crypto\u200b.get\u200bRandom\u200bValues()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random"}),"\ud83d\udd17 Math\u200b.random()"))),Object(o.b)("h2",{id:"regexp"},"RegExp"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/dev/common#regular-expression"}),"More about regular expression"))),Object(o.b)("h3",{id:"regexpprototypetest"},"RegExp.prototype\u200b.test()"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"As with ",Object(o.b)("inlineCode",{parentName:"p"},"exec()")," (or in combination with it), ",Object(o.b)("inlineCode",{parentName:"p"},"test()")," called multiple times on the same global regular expression instance will advance past the previous match.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var regex1 = RegExp('foo*');\nvar regex2 = RegExp('foo*', 'g');\nvar str1 = 'table football';\n\nconsole.log(regex1.test(str1));\n// expected output: true\n\nconsole.log(regex1.test(str1));\n// expected output: true\n\nconsole.log(regex2.test(str1));\n// expected output: true\n\nconsole.log(regex2.test(str1));\n// expected output: false\n")),Object(o.b)("p",null,"\ud83d\udd17 reference: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test"}),"RegExp.prototype\u200b.test()")),Object(o.b)("h2",{id:"svg"},"SVG"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://react-svgr.com/"}),"SVGR")),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Transforms SVG into React Components.")))),Object(o.b)("h2",{id:"whitespace-encodeuricomponent-vs-urlsearchparams"},"Whitespace: ",Object(o.b)("inlineCode",{parentName:"h2"},"encodeURIComponent")," vs ",Object(o.b)("inlineCode",{parentName:"h2"},"URLSearchParams")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"encodeURIComponent")," / ",Object(o.b)("inlineCode",{parentName:"li"},"encodeURI")," encode ",Object(o.b)("strong",{parentName:"li"},"whitespace")," into ",Object(o.b)("inlineCode",{parentName:"li"},"%20")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"URLSearchParams")," encode ",Object(o.b)("strong",{parentName:"li"},"whitespace")," into ",Object(o.b)("inlineCode",{parentName:"li"},"+"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  console.log(new URLSearchParams('q=foo bar').toString()); // q=foo+bar\n  console.log(encodeURI('q=foo bar')); // q=foo%20bar\n}\n")),Object(o.b)("p",null,"Server should decode both back to ",Object(o.b)("strong",{parentName:"p"},"whitespace"),"."),Object(o.b)("p",null,"Solution:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ljharb/qs"}),"qs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/sindresorhus/query-string"}),"query-string")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/SamVerschueren/decode-uri-component"}),"decode-uri-component"))))}s.isMDXComponent=!0}}]);