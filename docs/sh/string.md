---
title: String
---

## Match

```sh
$ FOO=foo
# use regular expression
$ [[ $FOO =~ ^f ]] && echo matched || echo unmatched
matched
$ [[ $BAR =~ ^f ]] && echo matched || echo unmatched
unmatched
# use glob
$ [[ $FOO == f* ]] && echo matched || echo unmatched
matched
$ [[ $BAR == f* ]] && echo matched || echo unmatched
unmatched
```

- Reference: <https://stackoverflow.com/questions/17420994/how-can-i-match-a-string-with-a-regex-in-bash>

## Substring

```sh
$ STRING=string
# ${VARIABLE:START:LENGTH}
$ echo ${STRING:3}
ing
$ echo ${STRING:2:4}
ring
```

- Reference: <https://stackoverflow.com/questions/428109/extract-substring-in-bash>
