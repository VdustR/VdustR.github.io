"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19],{2597:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(t),d=r,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8744:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var a=t(9190),r=t(184),o=(t(9496),t(2597)),i=["components"],l={title:"Javascript"},s=void 0,m={unversionedId:"dev/javascript",id:"dev/javascript",title:"Javascript",description:"Coding Style",source:"@site/docs/dev/javascript.md",sourceDirName:"dev",slug:"/dev/javascript",permalink:"/docs/dev/javascript",draft:!1,tags:[],version:"current",frontMatter:{title:"Javascript"},sidebar:"myAutogeneratedSidebar",previous:{title:"Common",permalink:"/docs/dev/common"},next:{title:"VuePress",permalink:"/docs/dev/vuepress"}},p={},c=[{value:"Coding Style",id:"coding-style",level:2},{value:"Date",id:"date",level:2},{value:"Date format",id:"date-format",level:3},{value:"<code>monthIndex</code>",id:"monthindex",level:3},{value:"Date Libraries",id:"date-libraries",level:3},{value:"Equality",id:"equality",level:2},{value:"Float Precision",id:"float-precision",level:2},{value:"Interesting Encodes",id:"interesting-encodes",level:2},{value:"NodeList",id:"nodelist",level:2},{value:"Random",id:"random",level:2},{value:"RegExp",id:"regexp",level:2},{value:"RegExp.prototype\u200b.test()",id:"regexpprototypetest",level:3},{value:"SVG",id:"svg",level:2},{value:"Whitespace: <code>encodeURIComponent</code> vs <code>URLSearchParams</code>",id:"whitespace-encodeuricomponent-vs-urlsearchparams",level:2}],u={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"coding-style"},"Coding Style"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," as a formatter and use ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," as an inspector(with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prettier/eslint-config-prettier"},(0,o.kt)("inlineCode",{parentName:"a"},"eslint-config-prettier")),")."),(0,o.kt)("h2",{id:"date"},"Date"),(0,o.kt)("h3",{id:"date-format"},"Date format"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"-")," for UTC time whereas use ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," for local time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(new Date('2019-01-01'));\n/**\n * -> Tue Jan 01 2019 08:00:00 GMT+0800 (Taipei Standard Time)\n * UTC time\n */\n\nconsole.log(new Date('2019/01/01'));\n/**\n * -> Tue Jan 01 2019 00:00:00 GMT+0800 (Taipei Standard Time)\n * local time\n */\n")),(0,o.kt)("p",null,"\ud83d\udd17 reference: ",(0,o.kt)("a",{parentName:"p",href:"http://dygraphs.com/date-formats.html"},"3/14/2012 blog from danvk Comparing FF/IE/Chrome on Parsing Date Strings")),(0,o.kt)("h3",{id:"monthindex"},(0,o.kt)("inlineCode",{parentName:"h3"},"monthIndex")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"monthIndex")," is beginning with ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," for January to ",(0,o.kt)("inlineCode",{parentName:"p"},"11")," for December."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"new Date(2019, 1, 1, 0, 0, 0, 0);\n// -> Fri Feb 01 2019 00:00:00 GMT+0800 (Taipei Standard Time)\nnew Date(2019, 0, 1, 0, 0, 0, 0);\n// -> Tue Jan 01 2019 00:00:00 GMT+0800 (Taipei Standard Time)\nnew Date('1989-02-13').getMonth();\n// -> 1\n")),(0,o.kt)("p",null,"\ud83d\udd17 reference: ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date")),(0,o.kt)("h3",{id:"date-libraries"},"Date Libraries"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://date-fns.org/"},"date-fns"),"(recommended)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://momentjs.com/"},"Moment.js"))),(0,o.kt)("h2",{id:"equality"},"Equality"),(0,o.kt)("p",null,"\ud83d\udd17 reference: ",(0,o.kt)("a",{parentName:"p",href:"https://dorey.github.io/JavaScript-Equality-Table/"},"JavaScript-Equality-Table")),(0,o.kt)("h2",{id:"float-precision"},"Float Precision"),(0,o.kt)("p",null,"Solutions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/MikeMcl/big.js"},"big.js"),(0,o.kt)("img",{parentName:"li",src:"https://img.shields.io/github/stars/MikeMcl/big.js.svg",alt:"big.js"}),(0,o.kt)("img",{parentName:"li",src:"https://img.shields.io/github/license/MikeMcl/big.js.svg",alt:"big.js"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/MikeMcl/bignumber.js"},"bignumber.js"),(0,o.kt)("img",{parentName:"li",src:"https://img.shields.io/github/stars/MikeMcl/bignumber.js.svg",alt:"bignumber.js"}),(0,o.kt)("img",{parentName:"li",src:"https://img.shields.io/github/license/MikeMcl/bignumber.js.svg",alt:"bignumber.js"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/MikeMcl/decimal.js"},"decimal.js"),(0,o.kt)("img",{parentName:"li",src:"https://img.shields.io/github/stars/MikeMcl/decimal.js.svg",alt:"decimal.js"}),(0,o.kt)("img",{parentName:"li",src:"https://img.shields.io/github/license/MikeMcl/decimal.js.svg",alt:"decimal.js"}))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"big.js"),": minimalist; easy-to-use; precision specified in decimal places; precision applied to division only."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"bignumber.js"),": bases 2-64; configuration options; ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),"; ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity"),"; precision specified in decimal places; precision applied to division only; base prefixes."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"decimal.js"),": bases 2-64; configuration options; ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),"; ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity"),"; non-integer powers, ",(0,o.kt)("inlineCode",{parentName:"p"},"exp"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ln"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"log"),"; precision specified in significant digits; precision always applied; random numbers.")),(0,o.kt)("p",null,"\ud83d\udd17 reference: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MikeMcl/big.js/issues/45#issuecomment-104211175"},"big.js vs. bignumber.js vs. decimal.js? #45")),(0,o.kt)("p",null,"More info: ",(0,o.kt)("a",{parentName:"p",href:"/docs/dev/common#float-precision"},"Float Precision"),"."),(0,o.kt)("h2",{id:"interesting-encodes"},"Interesting Encodes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://utf-8.jp/public/aaencode.html"},"aaencode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://utf-8.jp/public/jjencode.html"},"jjencode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.jsfuck.com/"},"JSFuck"))),(0,o.kt)("h2",{id:"nodelist"},"NodeList"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," is live. ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll"},(0,o.kt)("inlineCode",{parentName:"a"},"document.querySelectorAll()"))," returns a static ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  const parentDom = document.createElement('div');\n  const childClass = 'testChild';\n  const { childNodes } = parentDom;\n  const appendChild = () => {\n    const children = document.createElement('div');\n    children.classList.add(childClass);\n    parentDom.appendChild(children);\n  };\n  appendChild();\n  const querySelectorAll = parentDom.querySelectorAll(`.${childClass}`);\n  const getElementsByClass = parentDom.getElementsByClassName(childClass);\n  console.log(childNodes.length); // 1\n  console.log(getElementsByClass.length); // 1\n  console.log(querySelectorAll.length); // 1\n  appendChild();\n  console.log(childNodes.length); // 2\n  console.log(getElementsByClass.length); // 2\n  console.log(querySelectorAll.length); // 1\n}\n")),(0,o.kt)("p",null,"\ud83d\udd17 reference: ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-TW/docs/Web/API/NodeList"},"Node\u200bList")),(0,o.kt)("h2",{id:"random"},"Random"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Math.random()")," does not provide cryptographically secure random numbers. Do not use them for anything related to security. Use the Web Crypto API instead, and more precisely the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues"},"window.crypto.getRandomValues()")," method.")),(0,o.kt)("p",null,"API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"getRandom(count: number): number[]\ngetRandom({\n  count?: number,\n  min?: number,\n  max?: number,\n}): number[]\n/**\n * count:\n *   browser: 1 ~ 2 ** 14\n *   node: 1 ~ Out Of Memory\n * min, max: 0 ~ 2 ** 32 - 1\n */\n")),(0,o.kt)("p",null,"Inline:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const getRandom = (() => {\n  const maxMax = 2 ** 32 - 1;\n  const getRandom = (options) => {\n    let { count = 1, min = 0, max = maxMax } =\n      typeof options === 'object' ? options : { count: options };\n    if (min < 0) throw new Error(`[getRandom] min is less than 0, min: ${min}`);\n    if (max > maxMax)\n      throw new Error(`[getRandom] max is greater than ${maxMax}, max: ${max}`);\n    if (min > max)\n      throw new Error(\n        `[getRandom] min is greater than max, min: ${min}, max: ${max}`\n      );\n    return Array.from(\n      crypto.getRandomValues(new Uint32Array(count)),\n      (v) => min + (v % (max - min + 1))\n    );\n  };\n  return getRandom;\n})();\n")),(0,o.kt)("p",null,"Module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { inspect } from 'util';\n\nconst maxMax = 2 ** 32 - 1;\n\nconst getRandom = (options) => {\n  let { count = 1, min = 0, max = maxMax } =\n    typeof options === 'object' ? options : { count: options };\n  if (min < 0)\n    throw new Error(`[getRandom] min is less than 0, min: ${inspect(min)}`);\n  if (max > maxMax)\n    throw new Error(\n      `[getRandom] max is greater than ${inspect(maxMax)}, max: ${inspect(max)}`\n    );\n  if (min > max)\n    throw new Error(\n      `[getRandom] min is greater than max, min: ${inspect(\n        min\n      )}, max: ${inspect(max)}`\n    );\n  return Array.from(\n    crypto.getRandomValues(new Uint32Array(count)),\n    (v) => min + (v % (max - min + 1))\n  );\n};\n\nexport default getRandom;\n")),(0,o.kt)("p",null,"Typescript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { inspect } from 'util';\n\nconst maxMax: number = 2 ** 32 - 1;\ninterface Options {\n  count?: number;\n  min?: number;\n  max?: number;\n}\n\nconst getRandom = (options?: number | Options): number[] => {\n  let { count = 1, min = 0, max = maxMax } =\n    typeof options === 'object' ? options : { count: options };\n  if (min < 0)\n    throw new Error(`[getRandom] min is less than 0, min: ${inspect(min)}`);\n  if (max > maxMax)\n    throw new Error(\n      `[getRandom] max is greater than ${inspect(maxMax)}, max: ${inspect(max)}`\n    );\n  if (min > max)\n    throw new Error(\n      `[getRandom] min is greater than max, min: ${inspect(\n        min\n      )}, max: ${inspect(max)}`\n    );\n  return Array.from(\n    crypto.getRandomValues(new Uint32Array(count)),\n    (v) => min + (v % (max - min + 1))\n  );\n};\n\nexport default getRandom;\n")),(0,o.kt)("p",null,"Node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const crypto = require('crypto');\nconst { inspect } = require('util');\n\nconst maxMax = 2 ** 32 - 1;\nconst byte = 32 / 8;\nconst getRandom = (options) => {\n  let { count = 1, min = 0, max = maxMax } =\n    typeof options === 'object' ? options : { count: options };\n  if (min < 0)\n    throw new Error(`[getRandom] min is less than 0, min: ${inspect(min)}`);\n  if (max > maxMax)\n    throw new Error(\n      `[getRandom] max is greater than ${inspect(maxMax)}, max: ${inspect(max)}`\n    );\n  if (min > max)\n    throw new Error(\n      `[getRandom] min is greater than max, min: ${inspect(\n        min\n      )}, max: ${inspect(max)}`\n    );\n  const random = crypto.randomBytes(count * byte);\n  return Array.from(\n    Array(count),\n    (v, i) => min + (random.readUInt32BE(i * byte) % (max - min + 1))\n  );\n};\n\nmodule.exports = getRandom;\n")),(0,o.kt)("p",null,"Node / multiple / async / thread:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const crypto = require('crypto');\nconst { inspect } = require('util');\n\nconst maxMax = 2 ** 32 - 1;\nconst getRandom = (options) =>\n  new Promise((resolve) => {\n    let { count = 1, min = 0, max = maxMax } =\n      typeof options === 'object' ? options : { count: options };\n    if (min < 0)\n      throw new Error(`[getRandom] min is less than 0, min: ${inspect(min)}`);\n    if (max > maxMax)\n      throw new Error(\n        `[getRandom] max is greater than ${inspect(maxMax)}, max: ${inspect(\n          max\n        )}`\n      );\n    if (min > max)\n      throw new Error(\n        `[getRandom] min is greater than max, min: ${inspect(\n          min\n        )}, max: ${inspect(max)}`\n      );\n    const a = new Uint32Array(count);\n    crypto.randomFill(a, (err, buf) => {\n      if (err) throw err;\n      resolve(Array.from(buf, (v) => min + (v % (max - min + 1))));\n    });\n  });\n\nmodule.exports = getRandom;\n")),(0,o.kt)("p",null,"Reference:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/dist/latest-v12.x/docs/api/crypto.html#crypto_crypto_randombytes_size_callback"},"\ud83d\udd17 crypto.randomBytes()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/dist/latest-v12.x/docs/api/crypto.html#crypto_crypto_randomfill_buffer_offset_size_callback"},"\ud83d\udd17 crypto.randomFill()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues"},"\ud83d\udd17 Crypto\u200b.get\u200bRandom\u200bValues()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random"},"\ud83d\udd17 Math\u200b.random()"))),(0,o.kt)("h2",{id:"regexp"},"RegExp"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/dev/common#regular-expression"},"More about regular expression"))),(0,o.kt)("h3",{id:"regexpprototypetest"},"RegExp.prototype\u200b.test()"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"As with ",(0,o.kt)("inlineCode",{parentName:"p"},"exec()")," (or in combination with it), ",(0,o.kt)("inlineCode",{parentName:"p"},"test()")," called multiple times on the same global regular expression instance will advance past the previous match.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var regex1 = RegExp('foo*');\nvar regex2 = RegExp('foo*', 'g');\nvar str1 = 'table football';\n\nconsole.log(regex1.test(str1));\n// expected output: true\n\nconsole.log(regex1.test(str1));\n// expected output: true\n\nconsole.log(regex2.test(str1));\n// expected output: true\n\nconsole.log(regex2.test(str1));\n// expected output: false\n")),(0,o.kt)("p",null,"\ud83d\udd17 reference: ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test"},"RegExp.prototype\u200b.test()")),(0,o.kt)("h2",{id:"svg"},"SVG"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://react-svgr.com/"},"SVGR")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Transforms SVG into React Components.")))),(0,o.kt)("h2",{id:"whitespace-encodeuricomponent-vs-urlsearchparams"},"Whitespace: ",(0,o.kt)("inlineCode",{parentName:"h2"},"encodeURIComponent")," vs ",(0,o.kt)("inlineCode",{parentName:"h2"},"URLSearchParams")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"encodeURIComponent")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"encodeURI")," encode ",(0,o.kt)("strong",{parentName:"li"},"whitespace")," into ",(0,o.kt)("inlineCode",{parentName:"li"},"%20")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"URLSearchParams")," encode ",(0,o.kt)("strong",{parentName:"li"},"whitespace")," into ",(0,o.kt)("inlineCode",{parentName:"li"},"+"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  console.log(new URLSearchParams('q=foo bar').toString()); // q=foo+bar\n  console.log(encodeURI('q=foo bar')); // q=foo%20bar\n}\n")),(0,o.kt)("p",null,"Server should decode both back to ",(0,o.kt)("strong",{parentName:"p"},"whitespace"),"."),(0,o.kt)("p",null,"Solution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ljharb/qs"},"qs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sindresorhus/query-string"},"query-string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SamVerschueren/decode-uri-component"},"decode-uri-component"))))}d.isMDXComponent=!0}}]);