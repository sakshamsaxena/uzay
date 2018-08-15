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
 * @api {get} /blog/id/:id Fetch a particular blog post
 * @apiName GetBlogPostByID

 * @apiGroup Blog
 * @apiPermission Public

 * @apiParam (URL Parameters) {Number} id Blog Post ID

 * @apiParam (Query String) {String=true,false} [includeComments=false]
 * Option to specifiy whether to include comments in the payload or not.
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
 * @api {get} /blog/tag/:tag Fetch all Blog Posts by Tag Name
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
 * @apiParam (Query String) {Number} [offset=0]
 * Option to specifiy which page of results to return.
 * @apiParam (Query String) {String=date,likes,dislikes,views,commentcount} [orderby=date]
 * Option to specifiy the order basis of the returned posts.
 * @apiParam (Query String) {String=d,a} [direction=d]
 * Option to specifiy whether to display results in increasing or decreasing order of order basis.
*/

BlogPost.get('/tag/:tag', function (req, res) {
  res.send('/Blog' + req.url)
})

/**
 * @api {get} /blog/id/:id/comment/:cid Fetch a particular comment of a particular blog post
 * @apiName GetCommentByID

 * @apiGroup Blog
 * @apiPermission Public

 * @apiParam (URL Parameter) {Number} id Blog Post ID
 * @apiParam (URL Parameter) {Number} cid Comment ID
*/

BlogPost.get('/id/:id/comment/:cid', function (req, res) {
  res.send('/Blog' + req.url)
})

/**
 * @api {post} /blog/id/:id/comment Post a comment to a particular blog post
 * @apiName PostCommentToBlogPost

 * @apiGroup Blog
 * @apiPermission Needs Authentication

 * @apiParam (URL Parameter) {Number} id Blog Post ID
*/

BlogPost.post('/id/:id/comment', function (req, res) {
  res.send('/Blog' + req.url)
})

/**
 * @api {patch} /blog/id/:id/like Like a particular blog post
 * @apiName PatchLikeOnBlogPost

 * @apiGroup Blog
 * @apiPermission Needs Authentication

 * @apiParam (URL Parameter) {Number} id Blog Post ID
*/

BlogPost.patch('/id/:id/like', function (req, res) {
  res.send('/Blog' + req.url)
})

/**
 * @api {patch} /blog/id/:id/dislike Dislike a particular blog post
 * @apiName PatchDislikeOnBlogPost

 * @apiGroup Blog
 * @apiPermission Needs Authentication

 * @apiParam (URL Parameter) {Number} id Blog Post ID
*/

BlogPost.patch('/id/:id/dislike', function (req, res) {
  res.send('/Blog' + req.url)
})

/**
 * @api {patch} /blog/id/:id/comment/:cid/like Like a particular comment on a particular blog post
 * @apiName PatchLikeOnBlogPostComment

 * @apiGroup Blog
 * @apiPermission Needs Authentication

 * @apiParam (URL Parameter) {Number} id Blog Post ID
 * @apiParam (URL Parameter) {Number} cid Comment ID
*/

BlogPost.patch('/id/:id/comment/:cid/like', function (req, res) {
  res.send('/Blog' + req.url)
})

/**
 * @api {patch} /blog/id/:id/comment/:cid/dislike Dislike a particular comment on a particular blog post
 * @apiName PatchDislikeOnBlogPostComment

 * @apiGroup Blog
 * @apiPermission Needs Authentication

 * @apiParam (URL Parameter) {Number} id Blog Post ID
 * @apiParam (URL Parameter) {Number} cid Comment ID
*/

BlogPost.patch('/id/:id/comment/:cid/dislike', function (req, res) {
  res.send('/Blog' + req.url)
})

module.exports = BlogPost
