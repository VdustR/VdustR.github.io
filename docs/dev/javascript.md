---
title: Javascript
---

## Coding Style

Use [Prettier](https://prettier.io/) as a formatter and use [ESLint](https://eslint.org/) as an inspector(with [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)).

## Date

### Date format

Use `-` for UTC time whereas use `/` for local time.

```javascript
console.log(new Date('2019-01-01'));
/**
 * -> Tue Jan 01 2019 08:00:00 GMT+0800 (Taipei Standard Time)
 * UTC time
 */

console.log(new Date('2019/01/01'));
/**
 * -> Tue Jan 01 2019 00:00:00 GMT+0800 (Taipei Standard Time)
 * local time
 */
```

🔗 reference: [3/14/2012 blog from danvk Comparing FF/IE/Chrome on Parsing Date Strings](http://dygraphs.com/date-formats.html)

### `monthIndex`

`monthIndex` is beginning with `0` for January to `11` for December.

```javascript
new Date(2019, 1, 1, 0, 0, 0, 0);
// -> Fri Feb 01 2019 00:00:00 GMT+0800 (Taipei Standard Time)
new Date(2019, 0, 1, 0, 0, 0, 0);
// -> Tue Jan 01 2019 00:00:00 GMT+0800 (Taipei Standard Time)
new Date('1989-02-13').getMonth();
// -> 1
```

🔗 reference: [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

### Date Libraries

- [date-fns](https://date-fns.org/)(recommended)
- [Moment.js](https://momentjs.com/)

## Equality

<!-- TODO: Table component -->

🔗 reference: [JavaScript-Equality-Table](https://dorey.github.io/JavaScript-Equality-Table/)

## Float Precision

Solutions:

- [big.js](https://github.com/MikeMcl/big.js)![big.js](https://img.shields.io/github/stars/MikeMcl/big.js.svg)![big.js](https://img.shields.io/github/license/MikeMcl/big.js.svg)
- [bignumber.js](https://github.com/MikeMcl/bignumber.js)![bignumber.js](https://img.shields.io/github/stars/MikeMcl/bignumber.js.svg)![bignumber.js](https://img.shields.io/github/license/MikeMcl/bignumber.js.svg)
- [decimal.js](https://github.com/MikeMcl/decimal.js)![decimal.js](https://img.shields.io/github/stars/MikeMcl/decimal.js.svg)![decimal.js](https://img.shields.io/github/license/MikeMcl/decimal.js.svg)

> **big.js**: minimalist; easy-to-use; precision specified in decimal places; precision applied to division only.
>
> **bignumber.js**: bases 2-64; configuration options; `NaN`; `Infinity`; precision specified in decimal places; precision applied to division only; base prefixes.
>
> **decimal.js**: bases 2-64; configuration options; `NaN`; `Infinity`; non-integer powers, `exp`, `ln`, `log`; precision specified in significant digits; precision always applied; random numbers.

🔗 reference: [big.js vs. bignumber.js vs. decimal.js? #45](https://github.com/MikeMcl/big.js/issues/45#issuecomment-104211175)

More info: [Float Precision](/dev/common.html#float-precision).

## Interesting Encodes

- [aaencode](http://utf-8.jp/public/aaencode.html)
- [jjencode](http://utf-8.jp/public/jjencode.html)
- [JSFuck](http://www.jsfuck.com/)

## NodeList

`NodeList` is live. [`document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) returns a static `NodeList`.

```javascript
{
  const parentDom = document.createElement('div');
  const childClass = 'testChild';
  const { childNodes } = parentDom;
  const appendChild = () => {
    const children = document.createElement('div');
    children.classList.add(childClass);
    parentDom.appendChild(children);
  };
  appendChild();
  const querySelectorAll = parentDom.querySelectorAll(`.${childClass}`);
  const getElementsByClass = parentDom.getElementsByClassName(childClass);
  console.log(childNodes.length); // 1
  console.log(getElementsByClass.length); // 1
  console.log(querySelectorAll.length); // 1
  appendChild();
  console.log(childNodes.length); // 2
  console.log(getElementsByClass.length); // 2
  console.log(querySelectorAll.length); // 1
}
```

🔗 reference: [Node​List](https://developer.mozilla.org/zh-TW/docs/Web/API/NodeList)

## Random

> `Math.random()` does not provide cryptographically secure random numbers. Do not use them for anything related to security. Use the Web Crypto API instead, and more precisely the [window.crypto.getRandomValues()](https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues) method.

API:

```ts
getRandom(count: number): number[]
getRandom({
  count?: number,
  min?: number,
  max?: number,
}): number[]
/**
 * count:
 *   browser: 1 ~ 2 ** 14
 *   node: 1 ~ Out Of Memory
 * min, max: 0 ~ 2 ** 32 - 1
 */
```

Inline:

```js
const getRandom = (() => {
  const maxMax = 2 ** 32 - 1;
  const getRandom = (options) => {
    let { count = 1, min = 0, max = maxMax } =
      typeof options === 'object' ? options : { count: options };
    if (min < 0) throw new Error(`[getRandom] min is less than 0, min: ${min}`);
    if (max > maxMax)
      throw new Error(`[getRandom] max is greater than ${maxMax}, max: ${max}`);
    if (min > max)
      throw new Error(
        `[getRandom] min is greater than max, min: ${min}, max: ${max}`
      );
    return Array.from(
      crypto.getRandomValues(new Uint32Array(count)),
      (v) => min + (v % (max - min + 1))
    );
  };
  return getRandom;
})();
```

Module:

```js
import { inspect } from 'util';

const maxMax = 2 ** 32 - 1;

const getRandom = (options) => {
  let { count = 1, min = 0, max = maxMax } =
    typeof options === 'object' ? options : { count: options };
  if (min < 0)
    throw new Error(`[getRandom] min is less than 0, min: ${inspect(min)}`);
  if (max > maxMax)
    throw new Error(
      `[getRandom] max is greater than ${inspect(maxMax)}, max: ${inspect(max)}`
    );
  if (min > max)
    throw new Error(
      `[getRandom] min is greater than max, min: ${inspect(
        min
      )}, max: ${inspect(max)}`
    );
  return Array.from(
    crypto.getRandomValues(new Uint32Array(count)),
    (v) => min + (v % (max - min + 1))
  );
};

export default getRandom;
```

Typescript:

```ts
import { inspect } from 'util';

const maxMax: number = 2 ** 32 - 1;
interface Options {
  count?: number;
  min?: number;
  max?: number;
}

const getRandom = (options?: number | Options): number[] => {
  let { count = 1, min = 0, max = maxMax } =
    typeof options === 'object' ? options : { count: options };
  if (min < 0)
    throw new Error(`[getRandom] min is less than 0, min: ${inspect(min)}`);
  if (max > maxMax)
    throw new Error(
      `[getRandom] max is greater than ${inspect(maxMax)}, max: ${inspect(max)}`
    );
  if (min > max)
    throw new Error(
      `[getRandom] min is greater than max, min: ${inspect(
        min
      )}, max: ${inspect(max)}`
    );
  return Array.from(
    crypto.getRandomValues(new Uint32Array(count)),
    (v) => min + (v % (max - min + 1))
  );
};

export default getRandom;
```

Node:

```js
const crypto = require('crypto');
const { inspect } = require('util');

const maxMax = 2 ** 32 - 1;
const byte = 32 / 8;
const getRandom = (options) => {
  let { count = 1, min = 0, max = maxMax } =
    typeof options === 'object' ? options : { count: options };
  if (min < 0)
    throw new Error(`[getRandom] min is less than 0, min: ${inspect(min)}`);
  if (max > maxMax)
    throw new Error(
      `[getRandom] max is greater than ${inspect(maxMax)}, max: ${inspect(max)}`
    );
  if (min > max)
    throw new Error(
      `[getRandom] min is greater than max, min: ${inspect(
        min
      )}, max: ${inspect(max)}`
    );
  const random = crypto.randomBytes(count * byte);
  return Array.from(
    Array(count),
    (v, i) => min + (random.readUInt32BE(i * byte) % (max - min + 1))
  );
};

module.exports = getRandom;
```

Node / multiple / async / thread:

```js
const crypto = require('crypto');
const { inspect } = require('util');

const maxMax = 2 ** 32 - 1;
const getRandom = (options) =>
  new Promise((resolve) => {
    let { count = 1, min = 0, max = maxMax } =
      typeof options === 'object' ? options : { count: options };
    if (min < 0)
      throw new Error(`[getRandom] min is less than 0, min: ${inspect(min)}`);
    if (max > maxMax)
      throw new Error(
        `[getRandom] max is greater than ${inspect(maxMax)}, max: ${inspect(
          max
        )}`
      );
    if (min > max)
      throw new Error(
        `[getRandom] min is greater than max, min: ${inspect(
          min
        )}, max: ${inspect(max)}`
      );
    const a = new Uint32Array(count);
    crypto.randomFill(a, (err, buf) => {
      if (err) throw err;
      resolve(Array.from(buf, (v) => min + (v % (max - min + 1))));
    });
  });

module.exports = getRandom;
```

Reference:

- [🔗 crypto.randomBytes()](https://nodejs.org/dist/latest-v12.x/docs/api/crypto.html#crypto_crypto_randombytes_size_callback)
- [🔗 crypto.randomFill()](https://nodejs.org/dist/latest-v12.x/docs/api/crypto.html#crypto_crypto_randomfill_buffer_offset_size_callback)
- [🔗 Crypto​.get​Random​Values()](https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues)
- [🔗 Math​.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

## RegExp

- [More about regular expression](./common.md#regular-expression)

### RegExp.prototype​.test()

> As with `exec()` (or in combination with it), `test()` called multiple times on the same global regular expression instance will advance past the previous match.

```javascript
var regex1 = RegExp('foo*');
var regex2 = RegExp('foo*', 'g');
var str1 = 'table football';

console.log(regex1.test(str1));
// expected output: true

console.log(regex1.test(str1));
// expected output: true

console.log(regex2.test(str1));
// expected output: true

console.log(regex2.test(str1));
// expected output: false
```

🔗 reference: [RegExp.prototype​.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

## SVG

- [SVGR](https://react-svgr.com/)

  > Transforms SVG into React Components.

## Whitespace: `encodeURIComponent` vs `URLSearchParams`

- `encodeURIComponent` / `encodeURI` encode **whitespace** into `%20`
- `URLSearchParams` encode **whitespace** into `+`.

```js
{
  console.log(new URLSearchParams('q=foo bar').toString()); // q=foo+bar
  console.log(encodeURI('q=foo bar')); // q=foo%20bar
}
```

Server should decode both back to **whitespace**.

Solution:

- [qs](https://github.com/ljharb/qs)
- [query-string](https://github.com/sindresorhus/query-string)
- [decode-uri-component](https://github.com/SamVerschueren/decode-uri-component)
