---
title: 2. Learning ES6 - Modules
slug: 2-learning-es6-modules
date: '2015-10-25'
---

# Description

The name parameter is the name of the object that will receive the exported members. The member parameters specify individual members, while the name parameter imports all of them. name may also be a function if the module exports a single default parameter rather than a series of members. Below are examples.

# Coding

Let's do something easy. Below you can see a simple `SayHello` function:

```js
function SayHello(name) {
  return 'Hello ' + name
}
console.log('result: ', SayHello('Gonzalo'))
```

## 1 Move the function to a new module

Now we are going to move the function to a new file, for example to [welcome.js](https://github.com/gon250/Learning-ES6/blob/master/Modules/welcome.js)

```js
function SayHello(name) {
  return 'Hello ' + name
}

//We need a way to export the module.
export { SayHellon }
```

Now in our main js file, we have to import the new module from `welcome.js`

```js
import { SayHello } from './welcome'

console.log('result: ', SayHello('Gonzalo'))
```

## 2 Create a new function

For this example we are going to create 2 functions in our welcome.js file and we need export both to use in our main class.
So the code should look like below:

```js
    function SayHello(name){
      return 'Hello ' + name;
    }

    function SayGoodBy(name){
      return 'Bay ' + name;
    }

    export { SayHellon SayGoodBy }; //Lets set the name of the function.
```

## 3 Ways to export modules

We can implement diferents ways to export modules, lets see how we can do it.

### 3.1 At the end of the file as we saw already

```js
    function SayHello(name){
      return 'Hello ' + name;
    }

    function SayGoodBy(name){
      return 'see you ' + name;
    }

    export { SayHellon SayGoodBy };
```

### 3.2 Directly on the function

We can export it directly on the function

```js
export function SayHello(name) {
  return 'Hello ' + name
}

export function SayGoodBy(name) {
  return 'Bay ' + name
}
```

## 4 Ways to import modules

Now we are going to see how to import.

### 4.1 As we saw already

```js
import { SayHello, SayGoodBy } from './welcome'
```

### 4.2 Providing an alias

We can provide an alias.

```js
import { SayHello as hello, SayGoodBy as goodBy } from './welcome'
```

When we assign an alias we must use the alias.

```js
console.log('result: ', hello('Gonzalo'))
console.log('result: ', goodBy('Gonzalo'))
```

### 4.3 All together

We can import all at once.

```js
import * as welcome from './welcome' // * -> means everything.

console.log('result: ', welcome.SayHello('Gonzalo'))
console.log('result: ', welcome.SayGoodBy('Gonzalo'))
```

# Syntax

```js
> import name from "module-name";
> import * as name from "module-name";
> import { member } from "module-name";
> import { member as alias } from "module-name";
> import { member1 , member2 } from "module-name";
> import { member1 , member2 as alias2 , [...] } from "module-name";
> import defaultMember, { member [ , [...] ] } from "module-name";
> import defaultMember, * as alias from "module-name";
> import defaultMember from "module-name";
> import "module-name";
```

## You can take a look the code [here](https://github.com/gon250/Learning-ES6/tree/master/Modules)

**Source:**

- [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [Babel](https://babeljs.io/docs/usage/modules/)

* [Original post](https://gon250.svbtle.com/2-learning-es6-modules)
