---
title: Ternary Operator
---

In js:

```js
FOO === 'foo' ? (BAR = 'bar1') : (BAR = 'bar2');
```

In bash:

```sh
[[ $FOO = foo ]] && BAR=bar1 || BAR=bar2
```

---

In js:

```js
FOO === 'foo1' ? (BAR = 'bar1') : (BAR = 'bar2');
```

In bash:

```sh
[[ $FOO = foo1 ]] && BAR=bar1 || BAR=bar2
```

---

In js:

```js
BAR = FOO === 'foo1' ? 'bar1' : FOO === 'foo2' ? 'bar2' : 'bar3';
```

In bash:

```sh
BAR=$(echo $([[ $FOO = foo1 ]] && echo bar1 || ([[ $FOO = foo2 ]] && echo bar2 || echo bar3)))
```

---

- Reference: <https://stackoverflow.com/questions/3953645/ternary-operator-in-bash>
