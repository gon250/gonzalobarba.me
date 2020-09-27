---
title: Getting started with sailsjs
slug: getting-started-with-sailsjs
date: '2014-07-18'
---

Sails.js make it easy to build custom, enterprise-grade Node.js apps. It is designed to mimic the MVC pattern of frameworks like Ruby on Rails, but with support for the requirements of modern apps: data-driven APIs with scalable, service-oriented architecture

## Installation

To install the latest stable release with the command-line tool:

`sudo npm -g install sails`

Create a new app:

`sails new newProject`

Now lift the server:

    $ cd newProject
    $ sails lift

you will see the default home page [http://localhost:1337/](http://localhost:1337/)

## Assets Folder

Assets refer to anything (js, css, html, images, etc) that needs to be accessible to the outside world. The assets folder is where all of your assets will go, and will be served as static assets

## Config

Sails allows the developer to change the way Sails configures the created app to fit the project's needs

## Views

There are three kinds of views in Sails. There are traditional view partials, view templates, and the layout.

> More info [here](http://sailsjs.org/#!documentation/views)

## Routes

Application routes are defined in the `config/routes.js` file. As you'd expect, this file will be the one that you will most often work with as you add new controllers to the application.

The routes are exported as follows, in the configuration file:

```js
module.exports.routes = {
  // To route the home page to the "index" action of the "home" controller:
  '/': {
    controller: 'home',
  },

  // Additional routes might look like:
  '/whateverYouWant': {
    controller: 'someController',
    action: 'someAction',
  },

  // If you want to set up a route only for a particular HTTP method/verb
  // (GET, POST, PUT, DELETE) you can specify the verb before the path:
  'post /signup': {
    controller: 'auth',
    action: 'signup',
  },

  // Keep in mind default routes exist for each of your controllers
  // So if you have a UserController with an action called "juggle"
  // a route will be automatically exist mapping it to /user/juggle.
  //
  // Additionally, unless you override them, new controllers will have
  // create(), find(), update(), and destroy() actions,
  // and routes will exist for them as follows:

  /*

    // Standard RESTful routing

    // If no id is given, an array of all users will be returned
    'get /user/:id?': {
        controller    : 'user',
        action        : 'find'
    }
    'post /user': {
        controller    : 'user',
        action        : 'create'
    }
    'put /user/:id': {
        controller    : 'user',
        action        : 'update'
    }
    'delete /user/:id': {
        controller    : 'user',
        action        : 'destroy'
    },

    // Override the default index action (find) by declaring an "index" method in your controller
    'get /user': {
        controller    : 'user',
        action        : 'index'
    }
    */
}
```

## Models

Models are a representation of the application data stored in a database. Models are defined by using attributes and associations. For instance, the definition of a `Person` model might look like this:

```js
    // Person.js
    var Person = {
    attributes: {
        firstName: 'STRING',
        lastName: 'STRING',
        age: {
        type: 'INTEGER',
        max: 150,
        required: true
        }
        birthDate: 'DATE',
        phoneNumber: {
        type: 'STRING',
        defaultsTo: '111-222-3333'
        }
        emailAddress: {
        type: 'email', // Email type will get validated by the ORM
        required: true
        }
    }
    };
    module.exports = Person;
```

## Controllers

Sails controllers work very similarly to controllers in other MVC frameworks. Think of controllers as being the middleman between your model and your views

Controllers are placed in `api/controllers`. A controller is created using the following command:

      $ sails generate controller comment

generates:

```js
// Home controller with generated actions.
var HomeController = {
  create: function (req, res) {},

  destroy: function (req, res) {},

  tag: function (req, res) {},

  like: function (req, res) {},
}
module.exports = HomeController
```

---

That's it, in the next post I'm going to show you how create a simple rest API with Sailsjs in no more than 20 minutes.

- [Original post](https://gon250.svbtle.com/getting-started-with-sailsjs)
