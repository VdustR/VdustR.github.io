# Javascript

## Coding Style

Use [Prettier](https://prettier.io/) as a formatter and use [ESLint](https://eslint.org/) as an inspector(with [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)).

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

## RegExp

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

- [query-string](https://github.com/sindresorhus/query-string)
- [decode-uri-component](https://github.com/SamVerschueren/decode-uri-component)
