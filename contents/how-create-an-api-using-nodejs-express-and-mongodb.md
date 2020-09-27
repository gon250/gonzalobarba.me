---
title: How to create a REST API using Node.js, express and mongodb
slug: how-create-an-api-using-nodejs-express-and-mongodb
date: '2014-02-11'
---

Here is a guide showing how to build an API using Node.js, Express, and MongoDB.

## What do we need?

- Install [node.js](http://nodejs.org/).
- Install Mongo DB [mongodb](http://docs.mongodb.org/manual/installation/)

There are different solutions installing the MongoDB Driver for Node.js ( ex. [Mongoose](http://mongoosejs.com/) and [Mongolia](https://github.com/masylum/mongolia))

## Getting started

1. Create a folder named nodegames anywhere on your file system
2. In the nodegames folder, create a file named app.js.

### Installing Express

> [Express](http://expressjs.com/) is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.
> With a myriad of HTTP utility methods and Connect middleware at your disposal, creating a robust user-friendly API is quick and easy.

To install Express in our application:

- In the nodegames folder, create a file named package.json defined as follows:

```js
  {
      "name": "game-repository",
      "description": "Game Repository Application",
      "version": "0.0.1",
      "private": true,
      "dependencies": {
          "express": "3.x"
      }
  }
```

- Open a terminal, cd to the nodegames directory, and execute the following command. `npm install`

Now that Express is installed. A node_modules folder is created in the nodegames folder, and the Express module is installed in a subfolder of node_modules.

## Using Modules

1. In the nodegames folder, create a subfolder called routes.
2. In the routes folder create a file named games.js and defined as follows:

```js
exports.findAll = function (req, res) {
  res.send([{ name: 'Game_1' }, { name: 'Game_2' }])
}

exports.findById = function (req, res) {
  res.send({ id: req.params.id, name: 'The Name', description: 'description' })
}
```

3. Modify app.js as follows to delegate the routes implementation to the games module:

```js
var express = require('express'),
  games = require('./routes/games')

var app = express()

app.get('/games', games.findAll)
app.get('/games/:id', games.findById)

app.listen(3000)
```

4. To start the server, open a terminal, cd to your nodegames directory, and start your server as follows: `node app.js`

5. To test the application, open a browser and access [http://localhost:3000](http://localhost:3000).
   > <table>
      <tr>
          <td>Get all the games in the database</td>
          <td>
   <a href="http://localhost:3000/games">http://localhost:3000/games</a>
   </td>
      </tr>
      <tr>
          <td>Get game with a specific id</td>
          <td>
     <a href="http://localhost:3000/games/1">http://localhost:3000/games/1</a>
         </td>
      </tr>
   </table>

## Implementing the REST API

To implement all the routes required by the API, modify app.js as follows:

```js
var express = require('express'),
  game = require('./routes/games')

var app = express()

app.configure(function () {
  app.use(express.bodyParser())
})

app.get('/games', game.findAll)
app.get('/games/:id', game.findById)
app.post('/games', game.addGame)
app.put('/games/:id', game.updateGame)
app.delete('/games/:id', game.deleteGame)

app.listen(3000)
```

To provide the data access logic for each route, modify games.js as follows:

```js
var mongo = require('mongodb')
var Server = mongo.Server,
  Db = mongo.Db,
  BSON = mongo.BSONPure

var server = new Server('localhost', 27017, { auto_reconnect: true })
db = new Db('gamedb', server)

db.open(function (err, db) {
  if (!err) {
    console.log("Connected to 'gamedb' database")
    db.collection('games', { strict: true }, function (err, collection) {
      if (err) {
        console.log("The 'games' collection doesn't exist.")
      }
    })
  }
})
```

Now I'm going to show you below how implement all the functions we have called in the app.js file.

We have done the functions to search by id and get all of them.

```js
exports.findById = function (req, res) {
  var id = req.params.id
  db.collection('games', function (err, collection) {
    collection.findOne({ _id: new BSON.ObjectID(id) }, function (err, item) {
      res.send(item)
    })
  })
}

exports.findAll = function (req, res) {
  db.collection('games', function (err, collection) {
    collection.find().toArray(function (err, items) {
      res.send(items)
    })
  })
}
```

Adding a new game

```js
exports.addGame = function (req, res) {
  var game = req.body
  db.collection('games', function (err, collection) {
    collection.insert(game, { safe: true }, function (err, result) {
      if (err) {
        res.send({ error: 'An error has occurred' })
      } else {
        res.send(result[0])
      }
    })
  })
}
```

Updating a game

```js
exports.updateGame = function (req, res) {
  var id = req.params.id
  var game = req.body
  console.log('Updating game: ' + id)
  db.collection('games', function (err, collection) {
    collection.update(
      { _id: new BSON.ObjectID(id) },
      game,
      { safe: true },
      function (err, result) {
        if (err) {
          res.send({ error: 'An error has occurred' })
        } else {
          res.send(game)
        }
      }
    )
  })
}
```

Deleting a game

```js
exports.deleteGame = function (req, res) {
  var id = req.params.id
  db.collection('games', function (err, collection) {
    collection.remove({ _id: new BSON.ObjectID(id) }, { safe: true }, function (
      err,
      result
    ) {
      if (err) {
        res.send({ error: 'An error has occurred - ' + err })
      } else {
        res.send(req.body)
      }
    })
  })
}
```

I leave you here all the methods we have implemented:

<table>
<thead>
<tr>
<th>Method</th>
<th>URL</th>
</tr>
</thead>
<tbody>
<tr><td>GET</td><td>./Games</td></tr>
<tr><td>GET</td><td>./Games/specified:id</td></tr>
<tr><td>POST</td><td>./Games</td></tr>
<tr><td>PUT</td><td>./Games/specified:id</td></tr>
<tr><td>DELETE</td><td>./Games/specified:id</td></tr>
</tbody>
</table>

---

And that's all, I hope you enjoy it.

> Code: [https://github.com/gon250/nodegames](https://github.com/gon250/nodegames)

- [Original post](https://gon250.svbtle.com/how-create-an-api-using-nodejs-express-and-mongodb)
