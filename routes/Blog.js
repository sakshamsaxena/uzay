/*
    Blog.js
*/

var m = require('mongoose')
var express = require('express')
var Logic = require('../logic/Blog.js')
var config = require('../config/config.js')
var Errors = require('../util/Errors')
var Body = require('../util/Body.js')
var Options = require('../util/Options.js')
var Headers = require('../util/Headers.js')
var Parameters = require('../util/Parameters.js')

var BlogPost = express.Router()

/**
 * @api {get} /blog/id/:id Get a Blog Post
 * @apiName GetBlogPostByID

 * @apiGroup Blog
 * @apiPermission Public

 * @apiParam (URL Parameters) {Number} id Blog Post ID

 * @apiParam (Query String) {String=true,false} [includeComments=false]
 * Option to specifiy whether to include comments in the payload or not.

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

BlogPost.get('/id/:id', function (req, res) {
  // Prepare Parameters
  var params = Parameters(req.params)
  var opts = Options(req.query)

  // Connect here
  m.connect(config.MongoURL, { useNewUrlParser: true })
    .then(function () {
      // Process Logic
      return Logic.GetBlogPostByID(params, opts)
    })
    .then(function (payload) {
      // Close connection (important!)
      m.connection.close()

      // Send response
      res.send(payload)
    })
    .catch(function (error) {
      Errors.handleErrors(error, res)
    })
})

/**
 * @api {get} /blog/tag/:tag Get Posts By Tag Name
 * @apiName GetBlogPostsByTagName

 * @apiGroup Blog
 * @apiPermission Public

 * @apiParam (URL Parameters) {String} tag Tag Name

 * @apiParam (Query String) {String=true,false} [includeComments=false]
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

BlogPost.get('/tag/:tag', function (req, res) {
  // Prepare Parameters
  var params = Parameters(req.params)
  var opts = Options(req.query)

  // Connect here
  m.connect(config.MongoURL, { useNewUrlParser: true })
    .then(function () {
      // Process Logic
      return Logic.GetBlogPostsByTagName(params, opts)
    })
    .then(function (payload) {
      // Close connection (important!)
      m.connection.close()

      // Send response
      res.send(payload)
    })
    .catch(function (error) {
      res.status(404).send({
        Message: error,
        DocsURL: 'DocsURL'
      })
    })
})

/**
 * @api {get} /blog/id/:id/comment/:cid Get a Comment
 * @apiName GetCommentByID

 * @apiGroup Blog
 * @apiPermission Public

 * @apiParam (URL Parameter) {Number} id Blog Post ID
 * @apiParam (URL Parameter) {Number} cid Comment ID

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

BlogPost.get('/id/:id/comment/:cid', function (req, res) {
  // Prepare Parameters
  var params = Parameters(req.params)
  var opts = Options(req.query)

  // Connect here
  m.connect(config.MongoURL, { useNewUrlParser: true })
    .then(function () {
      // Process Logic
      return Logic.GetCommentByID(params, opts)
    })
    .then(function (payload) {
      // Close connection (important!)
      m.connection.close()

      // Send response
      res.send(payload)
    })
    .catch(function (error) {
      res.status(404).send({
        Message: error,
        DocsURL: 'DocsURL'
      })
    })
})

/**
 * @api {post} /blog/id/:id/comment Post a New Comment
 * @apiName PostCommentToBlogPost

 * @apiGroup Blog
 * @apiPermission Needs Authentication

 * @apiHeader (Headers) {String} Autorization:Bearer
 * Example : `Autorization: Bearer TOKEN`, where TOKEN is your Bearer Token

 * @apiParam (URL Parameter) {Number} id Blog Post ID

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

BlogPost.post('/id/:id/comment', function (req, res) {
  // Prepare Parameters
  var params = Parameters(req.params)
  var body = Body(req.body)
  var headers = Headers(req.headers)

  // Connect here
  m.connect(config.MongoURL, { useNewUrlParser: true })
    .then(function () {
      // Process Logic
      return Logic.PostCommentToBlogPost(params, body, headers)
    })
    .then(function (payload) {
      // Close connection (important!)
      m.connection.close()

      // Send response
      res.status(201).send(payload)
    })
    .catch(function (error) {
      res.status(404).send({
        Message: error,
        DocsURL: 'DocsURL'
      })
    })
})

/**
 * @api {patch} /blog/id/:id/like Like a Blog Post
 * @apiName PatchLikeOnBlogPost

 * @apiGroup Blog
 * @apiPermission Needs Authentication

 * @apiHeader (Headers) {String} Autorization:Bearer
 * Example : `Autorization: Bearer TOKEN`, where TOKEN is your Bearer Token

 * @apiParam (URL Parameter) {Number} id Blog Post ID

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

BlogPost.patch('/id/:id/like', function (req, res) {
  // Prepare Parameters
  var params = Parameters(req.params)
  var headers = Headers(req.headers)
  const vote = 'like'

  // Connect here
  m.connect(config.MongoURL, { useNewUrlParser: true })
    .then(function () {
      // Process Logic
      return Logic.PatchVoteOnBlogPost(params, headers, vote)
    })
    .then(function (payload) {
      // Close connection (important!)
      m.connection.close()

      // Send response
      res.send(payload)
    })
    .catch(function (error) {
      res.status(404).send({
        Message: error,
        DocsURL: 'DocsURL'
      })
    })
})

/**
 * @api {patch} /blog/id/:id/dislike Dislike a Blog Post
 * @apiName PatchDislikeOnBlogPost

 * @apiGroup Blog
 * @apiPermission Needs Authentication

 * @apiHeader (Headers) {String} Autorization:Bearer
 * Example : `Autorization: Bearer TOKEN`, where TOKEN is your Bearer Token

 * @apiParam (URL Parameter) {Number} id Blog Post ID

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

BlogPost.patch('/id/:id/dislike', function (req, res) {
  // Prepare Parameters
  var params = Parameters(req.params)
  var headers = Headers(req.headers)
  const vote = 'dislike'

  // Connect here
  m.connect(config.MongoURL, { useNewUrlParser: true })
    .then(function () {
      // Process Logic
      return Logic.PatchVoteOnBlogPost(params, headers, vote)
    })
    .then(function (payload) {
      // Close connection (important!)
      m.connection.close()

      // Send response
      res.send(payload)
    })
    .catch(function (error) {
      res.status(404).send({
        Message: error,
        DocsURL: 'DocsURL'
      })
    })
})

/**
 * @api {patch} /blog/id/:id/comment/:cid/like Like a Comment
 * @apiName PatchLikeOnBlogPostComment

 * @apiGroup Blog
 * @apiPermission Needs Authentication

 * @apiHeader (Headers) {String} Autorization:Bearer
 * Example : `Autorization: Bearer TOKEN`, where TOKEN is your Bearer Token

 * @apiParam (URL Parameter) {Number} id Blog Post ID
 * @apiParam (URL Parameter) {Number} cid Comment ID

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

BlogPost.patch('/id/:id/comment/:cid/like', function (req, res) {
  // Prepare Parameters
  var params = Parameters(req.params)
  var headers = Headers(req.headers)
  const vote = 'like'

  // Connect here
  m.connect(config.MongoURL, { useNewUrlParser: true })
    .then(function () {
      // Process Logic
      Logic.PatchVoteOnBlogPostComment(params, headers, vote)
    })
    .then(function (payload) {
      // Close connection (important!)
      m.connection.close()

      // Send response
      res.send(payload)
    })
    .catch(function (error) {
      res.status(404).send({
        Message: error,
        DocsURL: 'DocsURL'
      })
    })
})

/**
 * @api {patch} /blog/id/:id/comment/:cid/dislike Dislike a Comment
 * @apiName PatchDislikeOnBlogPostComment

 * @apiGroup Blog
 * @apiPermission Needs Authentication

 * @apiHeader (Headers) {String} Autorization:Bearer
 * Example : `Autorization: Bearer TOKEN`, where TOKEN is your Bearer Token

 * @apiParam (URL Parameter) {Number} id Blog Post ID
 * @apiParam (URL Parameter) {Number} cid Comment ID

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

BlogPost.patch('/id/:id/comment/:cid/dislike', function (req, res) {
  // Prepare Parameters
  var params = Parameters(req.params)
  var headers = Headers(req.headers)
  const vote = 'dislike'

  // Connect here
  m.connect(config.MongoURL, { useNewUrlParser: true })
    .then(function () {
      // Process Logic
      return Logic.PatchVoteOnBlogPostComment(params, headers, vote)
    })
    .then(function (payload) {
      // Close connection (important!)
      m.connection.close()

      // Send response
      res.send(payload)
    })
    .catch(function (error) {
      res.status(404).send({
        Message: error,
        DocsURL: 'DocsURL'
      })
    })
})

module.exports = BlogPost
