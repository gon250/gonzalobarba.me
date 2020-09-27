---
title: 3. Learning ES6 - Variables (let)
slug: 3-learning-es6-variables-let
date: '2015-11-11'
---

In this post we are going to see how the variables works in `ES6`

### Description

`let` allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the `var` keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

### Block scope

First let see how works the variables in `ES5`

```javascript
var message = 'hello'
{
  var message = 'bye'
}
console.log(message) // output: bye
```

In the case above the variable message is the same in both cases, so is reassigned in the second message(`var message = 'bye'`).

Now let see what happens when we add the second message inside a function.

```javascript
var message = 'hello'

function test() {
  var message = 'bye'
}
console.log(message) // output: hello;
```

It does not have any impact because is inside the function.
Let see what happens in `ES6`

```javascript
let message = 'hello'
{
  let message = 'bye'
}
console.log(message) // output: hello
```

In this case the output is different as in `ES5` because:

> ES6 allow us to use block scoping

### Working with loops

Let see a simple example

```javascript
// ES5
var fs = []
for (var i = 0; i < 10; i++) {
  fs.push(function () {
    console.log(i)
  })
}
fs.forEach(function (f) {
  f()
})
// output:
// 10
// 10
// 10
// ..
```

it's happening because is reassigning the variable. Now let see what happens with ES6

```javascript
// ES6
var fs = []
for (let i = 0; i < 10; i++) {
  fs.push(function () {
    console.log(i)
  })
}
fs.forEach(function (f) {
  f()
})
// output:
// 0
// 1
// 2
// ...
```

In this case let is creating a new `i` per each iteration, so we can see the output is different.

- [Original post](https://gon250.svbtle.com/3-learning-es6-variables-let)
