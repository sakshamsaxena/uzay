/*
    User.js
*/

var m = require('mongoose')
var express = require('express')
var Logic = require('../logic/User.js')
var config = require('../config/config.js')
var Body = require('../util/Body.js')
var Options = require('../util/Options.js')
var Headers = require('../util/Headers.js')
var Parameters = require('../util/Parameters.js')

var User = express.Router()
var Resources = express.Router({ mergeParams: true })

User.use('/:alias', Resources)

/**
 * @api {get} /user/:alias Get User Information
 * @apiName GetUserInfo

 * @apiGroup User
 * @apiPermission Public

 * @apiParam (URL Parameters) {String} alias User Alias

 * @apiSuccessExample {json} Success-Response:
 *    HTTP /1.1 200 OK
 *    {
 *      "sample": true
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP /1.1 404 NOT FOUND
 *    {
 *      "sample": false
 *    }
*/

User.get('/:alias', function (req, res) {
  // Prepare parameters
  var params = Parameters(req.params)

  // Presentation Variable
  var Payload = {}

  // Connect here
  m.connect(config.MongoURL, { useNewUrlParser: true })
    .then(function () {
      // Process Logic
      return Logic.GetUserInfo(params)
    })
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
 * @api {get} /user/:alias/liked Get User's Liked Content
 * @apiName GetAllLikedContentByUser

 * @apiGroup User
 * @apiPermission Public

 * @apiParam (URL Parameters) {String} alias User Alias

 * @apiParam (Query String) {String=all,posts,comments} [type=all]
 * Option to specifiy whether to include comments in the payload or not.
 * @apiParam (Query String) {Number=YYYYMMDD} [startDate]
 * Option to specifiy the date from when the blog posts should be searched.
 * @apiParam (Query String) {Number=YYYYMMDD} [endDate]
 * Option to specifiy the date till when the blog posts should be searched.
 * @apiParam (Query String) {Number=1-100} [limit=20]
 * Option to specifiy how many results should be returned in one request.
 * @apiParam (Query String) {Number=1-100} [offset=0]
 * Option to specifiy which page of results to return.
 * @apiParam (Query String) {String=date,likes,dislikes,views,commentcount} [orderby=date]
 * Option to specifiy the order basis of the returned posts.
 * @apiParam (Query String) {String=d,a} [direction=d]
 * Option to specifiy whether to display results in increasing or decreasing order of order basis.

 * @apiSuccessExample {json} Success-Response:
 *    HTTP /1.1 200 OK
 *    {
 *      "sample": true
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP /1.1 404 NOT FOUND
 *    {
 *      "sample": false
 *    }
*/

Resources.get('/liked', function (req, res) {
  // Prepare parameters
  var params = Parameters(req.params)
  var opts = Options(req.query)
  var vote = 'like'

  // Presentation Variable
  var Payload = {}

  // Connect here
  m.connect(config.MongoURL, { useNewUrlParser: true })
    .then(function () {
      // Process Logic
      return Logic.GetVotedContent(params, opts, vote)
    })
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
 * @api {get} /user/:alias/disliked Get User's Disliked Content
 * @apiName GetAllDislikedContentByUser

 * @apiGroup User
 * @apiPermission Public

 * @apiParam (URL Parameters) {String} alias User Alias

 * @apiParam (Query String) {String=all,posts,comments} [type=all]
 * Option to specifiy whether to include comments in the payload or not.
 * @apiParam (Query String) {Number=YYYYMMDD} [startDate]
 * Option to specifiy the date from when the blog posts should be searched.
 * @apiParam (Query String) {Number=YYYYMMDD} [endDate]
 * Option to specifiy the date till when the blog posts should be searched.
 * @apiParam (Query String) {Number=1-100} [limit=20]
 * Option to specifiy how many results should be returned in one request.
 * @apiParam (Query String) {Number=1-100} [offset=0]
 * Option to specifiy which page of results to return.
 * @apiParam (Query String) {String=date,likes,dislikes,views,commentcount} [orderby=date]
 * Option to specifiy the order basis of the returned posts.
 * @apiParam (Query String) {String=d,a} [direction=d]
 * Option to specifiy whether to display results in increasing or decreasing order of order basis.

 * @apiSuccessExample {json} Success-Response:
 *    HTTP /1.1 200 OK
 *    {
 *      "sample": true
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP /1.1 404 NOT FOUND
 *    {
 *      "sample": false
 *    }
*/

Resources.get('/disliked', function (req, res) {
  // Prepare parameters
  var params = Parameters(req.params)
  var opts = Options(req.query)
  var vote = 'dislike'

  // Presentation Variable
  var Payload = {}

  // Connect here
  m.connect(config.MongoURL, { useNewUrlParser: true })
    .then(function () {
      // Process Logic
      return Logic.GetVotedContent(params, opts, vote)
    })
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
 * @api {get} /user/:alias/posts Get User's Authored Posts
 * @apiName GetAllPostsByUser

 * @apiGroup User
 * @apiPermission Public

 * @apiParam (URL Parameters) {String} alias User Alias

 * @apiParam (Query String) {Number=YYYYMMDD} [startDate]
 * Option to specifiy the date from when the blog posts should be searched.
 * @apiParam (Query String) {Number=YYYYMMDD} [endDate]
 * Option to specifiy the date till when the blog posts should be searched.
 * @apiParam (Query String) {Number=1-100} [limit=20]
 * Option to specifiy how many results should be returned in one request.
 * @apiParam (Query String) {Number=1-100} [offset=0]
 * Option to specifiy which page of results to return.
 * @apiParam (Query String) {String=date,likes,dislikes,views,commentcount} [orderby=date]
 * Option to specifiy the order basis of the returned posts.
 * @apiParam (Query String) {String=d,a} [direction=d]
 * Option to specifiy whether to display results in increasing or decreasing order of order basis.

 * @apiSuccessExample {json} Success-Response:
 *    HTTP /1.1 200 OK
 *    {
 *      "sample": true
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP /1.1 404 NOT FOUND
 *    {
 *      "sample": false
 *    }
*/

Resources.get('/posts', function (req, res) {
  // Prepare parameters
  var params = Parameters(req.params)
  var opts = Options(req.query)

  // Presentation Variable
  var Payload = {}

  // Connect here
  m.connect(config.MongoURL, { useNewUrlParser: true })
    .then(function () {
      // Process Logic
      return Logic.GetAllPostsByUser(params, opts)
    })
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
 * @api {get} /user/:alias/comments Get User's Authored Comments
 * @apiName GetAllCommentsByUser

 * @apiGroup User
 * @apiPermission Public

 * @apiParam (URL Parameters) {String} alias User Alias

 * @apiParam (Query String) {Number=YYYYMMDD} [startDate]
 * Option to specifiy the date from when the blog posts should be searched.
 * @apiParam (Query String) {Number=YYYYMMDD} [endDate]
 * Option to specifiy the date till when the blog posts should be searched.
 * @apiParam (Query String) {Number=1-100} [limit=20]
 * Option to specifiy how many results should be returned in one request.
 * @apiParam (Query String) {Number=1-100} [offset=0]
 * Option to specifiy which page of results to return.
 * @apiParam (Query String) {String=date,likes,dislikes,views,commentcount} [orderby=date]
 * Option to specifiy the order basis of the returned posts.
 * @apiParam (Query String) {String=d,a} [direction=d]
 * Option to specifiy whether to display results in increasing or decreasing order of order basis.

 * @apiSuccessExample {json} Success-Response:
 *    HTTP /1.1 200 OK
 *    {
 *      "sample": true
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP /1.1 404 NOT FOUND
 *    {
 *      "sample": false
 *    }
*/

Resources.get('/comments', function (req, res) {
  // Prepare parameters
  var params = Parameters(req.params)
  var opts = Options(req.query)

  // Presentation Variable
  var Payload = {}

  // Connect here
  m.connect(config.MongoURL, { useNewUrlParser: true })
    .then(function () {
      // Process Logic
      return Logic.GetAllCommentsByUser(params, opts)
    })
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
 * @api {post} /user/:alias/posts/new Author A Post
 * @apiName PostNewPostByUser

 * @apiGroup User
 * @apiPermission Needs Authentication

 * @apiHeader (Headers) {String} Autorization:Bearer
 * Example : `Autorization: Bearer TOKEN`, where TOKEN is your Bearer Token

 * @apiParam (URL Parameters) {String} alias User Alias

 * @apiParam (POST Parameters) {String=true,false} [includeComments=false]
 * Option to specifiy whether to include comments in the payload or not.

 * @apiExample {json} Sample POST Payload
 *    {
 *      "foo": "bar"
 *    }

 * @apiSuccessExample {json} Success-Response:
 *    HTTP /1.1 200 OK
 *    {
 *      "sample": true
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP /1.1 404 NOT FOUND
 *    {
 *      "sample": false
 *    }
*/

Resources.post('/posts/new', function (req, res) {
  // Prepare parameters
  var params = Parameters(req.params)
  var body = Body(req.body)
  var headers = Headers(req.headers)

  // Presentation Variable
  var Payload = {}

  // Connect here
  m.connect(config.MongoURL, { useNewUrlParser: true })
    .then(function () {
      // Process Logic
      return Logic.CreateNewPost(params, body, headers)
    })
    .then(function (payload) {
      // TODO : Process Presentation
      Payload = payload

      // Close connection (important!)
      m.connection.close()

      // Send response
      res.status(201).send(Payload)
    })
    .catch(function (error) {
      res.status(404).send({
        Message: error,
        DocsURL: 'DocsURL'
      })
    })
})

module.exports = User
