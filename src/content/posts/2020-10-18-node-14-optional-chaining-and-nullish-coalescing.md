---
template: 'post'
path: '/2020/10/18/node-14-optional-chaining-and-nullish-coalescing/'
title: 'Node 14 - Optional chaining and nullish coalescing'
date: '2020-10-18'
---

### Node 14

Node 14 is already released and will become the [next LTS version](https://nodejs.org/en/about/releases/) during the last week of October 2020.

Node 14 is coming with two long awaited JS features, optional chaining and nullish coalescing. Let's check them out!

### Optional chaining

Long gone will be the days of checking for the existence of a deeply nested property using the `&&` operator or [lodash.get](https://lodash.com/docs/4.17.15#get).

The optional chaining operator is `?.` and it permits accessing any nested property in a safe way with a single expression.

Example:

```
// Using the && operator
if (foo && foo.bar && foo.bar.baz) {
  // do something with foo.bar.baz
}

// Using the ?. operator
if (foo?.bar?.baz) {
  // do something with foo.bar.baz
}
```

### Nullish coalescing

The nullish coalescing logical operator is `??` and it returns the right-hand side operand only if the left-hand side operand is `null` or `undefined`.

This sounds similar to the logical `OR (||)` operator, however the `||` operator returns the right-hand side operand when the left-hand side is any `falsy` value.

Thus for many cases that a default value has to be assigned only when a value is `null` or `undefined`, the nullish coalescing operator comes in handy.

Example:

```
const foo = 0;
console.log(foo || 10); // 10
console.log(foo ?? 10); // 0

const bar = false;
console.log(bar || true); // true
console.log(bar ?? true); // false

const baz = '';
console.log(baz || 'default'); // 'default'
console.log(baz ?? 'default'); // ''
```
