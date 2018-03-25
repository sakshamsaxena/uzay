/*
	Blog.js
*/

var express = require('express');
var m = require('mongoose');
var config = require('../config/config.js');
var UserModel = require('../models/UserModel.js');
var BlogPostModel = require('../models/BlogModel.js');
var CommentModel = require('../models/CommentModel.js');
var QueryParams = require('../util/QueryParams.js');
var PayloadGenerator = require('../payload/generators/Blog.js');

var BlogPost = express.Router();

/**
	GET  /id/:id[?params=value]

	Public route to fetch a resource by id. Options are :
	- includeComments
		Default: true
		Format: String
		Possible Values: true|false
*/

BlogPost.get('/id/:id', function(req, res) {

	// Prepare Parameters
	var id = req.params.id;
	var opts = QueryParams(req.query);

	// Variables to persist Data
	var Payload = {};

	// Connect here
	m.connect(config.MongoURL);

	// Run Queries
	BlogPostModel.GetBlogPostByID(id)
		.then(function(blog) {
			// Got the blog post data
			Payload.blog = blog;

			// Query the user data
			return UserModel.GetUserByID(blog.UserID);
		})
		.then(function(user) {
			// Got the user data
			Payload.user = user;

			// Query the comment data
			return CommentModel.GetCommentsByPostID(id, opts.includeComments);
		})
		.then(function(commentData) {
			// Got the comment data (or empty object)
			Payload.comments = commentData;

			// Generate Payload from data
			Payload = PayloadGenerator.GenerateBlogPostPayload(Payload);

			// Close connection (important!)
			m.connection.close();

			// Send response
			res.send(Payload);
		});
});

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

BlogPost.get('/tag/:tag', function(req, res) {

});

/**
	GET /id/:id/comment/:cid

	Gets a comment with ID :cid of the blog post with ID :id.
*/

BlogPost.get('/id/:id/comment/:cid', function(req, res) {
	res.send('/Blog' + req.url);
});

/**
	POST /id/:id/comment

	Posts a comment to the blog post with ID :id. Data Fields are :
	- Content
		Format: String
*/

BlogPost.post('/id/:id/comment', function(req, res) {
	res.send('/Blog' + req.url);
});

/**
	PATCH /id/:id/like

	Increments a like on the blog post with ID :id.
*/

BlogPost.patch('/id/:id/like', function(req, res) {
	res.send('/Blog' + req.url);
});

/**
	PATCH /id/:id/dislike

	Increments a dislike on the blog post with ID :id.
*/

BlogPost.patch('/id/:id/dislike', function(req, res) {
	res.send('/Blog' + req.url);
});

module.exports = BlogPost;
