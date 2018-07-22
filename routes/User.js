/*
    User.js
*/

var m = require('mongoose')
var express = require('express')
var Logic = require('../logic/User.js')
var config = require('../config/config.js')

var User = express.Router()
var Resources = express.Router({mergeParams: true})

/**
    GET[|POST] /:alias[/liked|disliked|posts|comments][/posts/comments/new]

    User Resources Routes. Post creation and all content of a user is accessed here.
*/

User.use('/:alias', Resources)

/**
    GET /:alias

    Public route to get user information.
*/

User.get('/:alias', function (req, res) {
  // Prepare parameters
  var alias = req.params.alias

  // Presentation Variable
  var Payload = {}

  // Connect here
  m.connect(config.MongoURL, {useNewUrlParser: true})

  // Process Logic
  Logic.GetUserInfo(alias)
    .then(function (payload) {
      // TODO : Process Presentation
      Payload = payload

      // Close connection (important!)
      m.connection.close()

      // Send response
      res.send(Payload)
    })
    .catch(function (error) {
      res.status(404).send({
        Message: error,
        DocsURL: 'DocsURL'
      })
    })
})

/**
    GET  /:alias/liked[?params=value]

    Public route to fetch all liked content by a user. Filters are :
    - startDate
        Default: 01012018
        Format: YYYYMMDD
    - endDate
        Default: Current Date
        Format: YYYYMMDD
    - limit
        Default: 20
        Format: Number
    - offset
        Default: 0
        Format: Number
    - orderBy
        Default: Date
        Format: String
        Possible Values: Date|Likes|Dislikes|Views|CommentCount
    - direction
        Default: D
        Format: String
        Possible Values: D|A
*/

Resources.get('/liked', function (req, res) {

})

/**
    GET  /:alias/liked/posts[?params=value]

    Public route to fetch all liked blog posts by a user. Filters are :
    - startDate
        Default: 01012018
        Format: YYYYMMDD
    - endDate
        Default: Current Date
        Format: YYYYMMDD
    - limit
        Default: 20
        Format: Number
    - offset
        Default: 0
        Format: Number
    - orderBy
        Default: Date
        Format: String
        Possible Values: Date|Likes|Dislikes|Views|CommentCount
    - direction
        Default: D
        Format: String
        Possible Values: D|A
*/

Resources.get('/liked/posts', function (req, res) {

})

/**
    GET  /:alias/liked/comments[?params=value]

    Public route to fetch all liked comments by a user. Filters are :
    - startDate
        Default: 01012018
        Format: YYYYMMDD
    - endDate
        Default: Current Date
        Format: YYYYMMDD
    - limit
        Default: 20
        Format: Number
    - offset
        Default: 0
        Format: Number
    - orderBy
        Default: Date
        Format: String
        Possible Values: Date|Likes|Dislikes|Views|CommentCount
    - direction
        Default: D
        Format: String
        Possible Values: D|A
*/

Resources.get('/liked/comments', function (req, res) {

})

/**
    GET  /:alias/disliked[?params=value]

    Public route to fetch all disliked content by a user. Filters are :
    - startDate
        Default: 01012018
        Format: YYYYMMDD
    - endDate
        Default: Current Date
        Format: YYYYMMDD
    - limit
        Default: 20
        Format: Number
    - offset
        Default: 0
        Format: Number
    - orderBy
        Default: Date
        Format: String
        Possible Values: Date|Likes|Dislikes|Views|CommentCount
    - direction
        Default: D
        Format: String
        Possible Values: D|A
*/

Resources.get('/disliked', function (req, res) {

})

/**
    GET  /:alias/disliked/posts[?params=value]

    Public route to fetch all disliked blog posts by a user. Filters are :
    - startDate
        Default: 01012018
        Format: YYYYMMDD
    - endDate
        Default: Current Date
        Format: YYYYMMDD
    - limit
        Default: 20
        Format: Number
    - offset
        Default: 0
        Format: Number
    - orderBy
        Default: Date
        Format: String
        Possible Values: Date|Likes|Dislikes|Views|CommentCount
    - direction
        Default: D
        Format: String
        Possible Values: D|A
*/

Resources.get('/disliked/posts', function (req, res) {

})

/**
    GET  /:alias/disliked/comments[?params=value]

    Public route to fetch all disliked comments by a user. Filters are :
    - startDate
        Default: 01012018
        Format: YYYYMMDD
    - endDate
        Default: Current Date
        Format: YYYYMMDD
    - limit
        Default: 20
        Format: Number
    - offset
        Default: 0
        Format: Number
    - orderBy
        Default: Date
        Format: String
        Possible Values: Date|Likes|Dislikes|Views|CommentCount
    - direction
        Default: D
        Format: String
        Possible Values: D|A
*/

Resources.get('/disliked/comments', function (req, res) {

})

/**
    GET  /:alias/posts[?params=value]

    Public route to fetch all blog posts authored by a user. Filters are :
    - startDate
        Default: 01012018
        Format: YYYYMMDD
    - endDate
        Default: Current Date
        Format: YYYYMMDD
    - limit
        Default: 20
        Format: Number
    - offset
        Default: 0
        Format: Number
    - orderBy
        Default: Date
        Format: String
        Possible Values: Date|Likes|Dislikes|Views|CommentCount
    - direction
        Default: D
        Format: String
        Possible Values: D|A
*/

Resources.get('/posts', function (req, res) {

})

/**
    GET  /:alias/comments[?params=value]

    Public route to fetch all comments authored by a user. Filters are :
    - startDate
        Default: 01012018
        Format: YYYYMMDD
    - endDate
        Default: Current Date
        Format: YYYYMMDD
    - limit
        Default: 20
        Format: Number
    - offset
        Default: 0
        Format: Number
    - orderBy
        Default: Date
        Format: String
        Possible Values: Date|Likes|Dislikes|Views|CommentCount
    - direction
        Default: D
        Format: String
        Possible Values: D|A
*/

Resources.get('/comments', function (req, res) {

})

/**
    POST  /:alias/posts/new

    Protected route to create a blog post authored by a user. Data fields are :
    - Title
        Format: String
    - Content
        Format: String
    - Tags
        Format: String
*/

Resources.post('/posts/new', function (req, res) {

})

module.exports = User
