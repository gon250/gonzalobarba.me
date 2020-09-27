---
title: 1. Learning ES6 - Const-Declarations
slug: 1-learning-es6-constdeclarations-modules
date: '2015-10-23'
---

# ES6 Introduction

ECMAScript 6 is the newest version of the ECMAScript standard. This standard was ratified in June 2015. ES2015 is a significant update to the language, and the first major update to the language since ES5 was standardized in 2009. Implementation of these features in major JavaScript engines is [underway now](http://kangax.github.io/compat-table/es6/).

#Const Declarations

This declaration creates a constant that can be global or local to the function in which it is declared. Constants are block-scoped. The value of a constant cannot change through re-assignment, and a constant cannot be re-declared. An initializer for a constant is required. A constant cannot share its name with a function or a variable in the same scope.

Let's do some code:

**Note:** Constants can be declared with uppercase or lowercase, but just by convention, we are using uppercase.

Basic example:

```js
const MY_VAL = 2
console.log('value: ' + MY_VAL)
//output: value: 2
```

> Trying to re-declare a constant throws an error.

```js
const MY_VAL = 20
//output: Identifier 'MY_VAL' has already been declared
```

The name MY_VAL is reserved for constant above, so this will also fail.

```js
var MY_VAL = 20
```

> Const requires an initializer.

```js
    const MY_VAL ;
    //output: SyntaxError: missing = in const declaration
```

> Const also works on objects.

```js
const MY_OBJECT = { key: 'value' }
```

Overwriting the object fails as above (in Firefox and Chrome but not in Safari).

```js
MY_OBJECT = { OTHER_KEY: 'value' }
```

However, object attributes are not protected, so the following statement is executed without problems.

```js
MY_OBJECT.key = 'otherValue'
```

> An important thing you have to know is it's `block scope`, take a look the example below.

```js
if (true) {
  const temp = 'test'
}
console.log('temp value: ', temp)
//output:  temp is not defined.
```

The right way would be like:

```js
if (true) {
  const temp = 'test'
  console.log('temp value: ', temp)
}
```

### Examples

It has multiples usages as for example for your API credentials.

```js
const API_KEY = 'xxxxxxx'
const API_SECRET = 'xxxxxxx'
```

Or Also for a port.

```js
const port = 8080
```

## You can download the code [here](https://github.com/gon250/Learning-ES6/blob/master/Const-Declaration/example.js)

**Source:**

- [babel](https://babeljs.io/docs/learn-es2015/)
- [mozilla] (https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/const)

* [Original post](https://gon250.svbtle.com/1-learning-es6-constdeclarations-modules)
