/*
    Blog.js
*/

var express = require('express')
var m = require('mongoose')
var config = require('../config/config.js')
var QueryParams = require('../util/QueryParams.js')
var Logic = require('../logic/Blog.js')

var BlogPost = express.Router()

/**
    GET  /id/:id[?params=value]

    Public route to fetch a resource by id. Options are :
    - includeComments
        Default: false
        Format: String
        Possible Values: true|false
*/

BlogPost.get('/id/:id', function (req, res) {
  // Prepare Parameters
  var id = req.params.id
  var opts = QueryParams(req.query)

  // Presentation Variable
  var Payload = {}

  // Connect here
  m.connect(config.MongoURL, {useNewUrlParser: true})

  // Process Logic
  Logic.GetBlogPostById(id, opts)
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
    GET  /tag/:tag[?params=value]

    Public route to fetch all posts by a tag. Filters are :
    - includeComments
        Default: false
        Format: String
        Possible Values: true|false
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

BlogPost.get('/tag/:tag', function (req, res) {
  res.send('/Blog' + req.url)
})

/**
    GET /id/:id/comment/:cid

    Gets a comment with ID :cid of the blog post with ID :id.
*/

BlogPost.get('/id/:id/comment/:cid', function (req, res) {
  res.send('/Blog' + req.url)
})

/**
    POST /id/:id/comment

    Posts a comment to the blog post with ID :id. Data Fields are :
    - Content
        Format: String
*/

BlogPost.post('/id/:id/comment', function (req, res) {
  res.send('/Blog' + req.url)
})

/**
    PATCH /id/:id/like

    Increments a like on the blog post with ID :id.
*/

BlogPost.patch('/id/:id/like', function (req, res) {
  res.send('/Blog' + req.url)
})

/**
    PATCH /id/:id/dislike

    Increments a dislike on the blog post with ID :id.
*/

BlogPost.patch('/id/:id/dislike', function (req, res) {
  res.send('/Blog' + req.url)
})

/**
    PATCH /id/:id/comment/:cid/like

    Increments a like on the blog post comment with ID :id and CID :cid.
*/

BlogPost.patch('/id/:id/comment/:cid/like', function (req, res) {
  res.send('/Blog' + req.url)
})

/**
    PATCH /id/:id/comment/:cid/dislike

    Increments a dislike on the blog post comment with ID :id and CID :cid.
*/

BlogPost.patch('/id/:id/comment/:cid/dislike', function (req, res) {
  res.send('/Blog' + req.url)
})

module.exports = BlogPost
