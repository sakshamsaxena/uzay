/*
	Blog.js
*/

var express = require('express');
var BlogPost = express.Router();
var BlogPostModel = require('../db/models/BlogModel.js');
var BlogPostPayload = require('../payload/BlogPayload.js');
var CommentPayload = require('../payload/CommentPayload.js');

/**
	GET  /id/:id[?params=value]

	Public route to fetch a resource by id. Options are :
	- includeComments
		Default: true
		Format: Boolean
		Options: true|false
*/

BlogPost.get('/id/:id', function(req, res) {

	var options = req.query;
	var params = req.params;
	var blogID = params.id;

	var doc = BlogPostModel.GetBlogPostByID(blogID);
	//var user = UserModel.GetUserByID(doc.UserID);
	var user = {};
	var comments = null;
	var CommentCount = 0;

	// if(options.includeComments === undefined || options.includeComments === true){
	// 	comments = CommentModel.GetCommentsByBlogPostID(blogID);
	// 	CommentCount = comments.length;
	// 	comments = ArrangeComments(comments);
	// }

	var json = BlogPostPayload;
	
	json.Post.Title = doc.Title;
	json.Post.PublishDate = doc.PublishDate;
	json.Post.Content = doc.Content;
	json.Post.Alias = user.Alias;

	json.User.ID = user._id;
	json.User.ProfileURL = '/User/' + user.Alias;
	json.User.Bio = user.Bio;
	json.User.Age = user.Age;
	json.User.Country = user.Country;
	json.User.Verified = user.Verified;

	json.Meta.BlogID = doc._id;
	json.Meta.BlogURL = '/Blog/id/' + doc._id;
	json.Meta.Likes = doc.Likes;
	json.Meta.Dislikes = doc.Dislikes;
	json.Meta.Views = doc.Views;
	json.Meta.CommentCount = CommentCount;

	json.Tags = [];
	for (var i = 0; i < doc.Tags.length; i++) {
		json.Tags.push({
			'TagName': doc.Tags[i],
			'BrowseURL': '/Blog/tags/' + doc.Tags[i]
		});
	}

	res.json(json);

});

/**
	GET  /tags/:tag[?params=value]

	Public route to fetch all posts by a tag. Filters are :
	- includeComments
		Default: false
		Format: Boolean
		Options: true|false
	- startDate
		Default: 01012018
		Format: MMDDYYYY
	- endDate
		Default: Current Date
		Format: MMDDYYYY
	- limit
		Default: 20
		Format: Number
	- offset
		Default: 0
		Format: Number
	- orderBy
		Default: Date
		Format: String
		Options: Date|Likes|Dislikes|Views|CommentCount
	- direction
		Default: D
		Format: String
		Options: D|A
*/

BlogPost.get('/tag/:tag', function(req, res) {
	res.send('/Blog' + req.url);
});

/**
	GET  /user/:alias[?params=value]

	Public route to fetch all posts by a user. Filters are :
	- includeComments
		Default: false
		Format: Boolean
		Options: true|false
	- startDate
		Default: 01012018
		Format: DDMMYYYY
	- endDate
		Default: Current Date
		Format: DDMMYYYY
	- limit
		Default: 20
		Format: Number
	- offset
		Default: 0
		Format: Number
	- orderBy
		Default: Date
		Format: String
		Options: Date|Likes|Dislikes|Views|CommentCount
	- direction
		Default: D
		Format: String
		Options: D|A
*/

BlogPost.get('/user/:alias', function(req, res) {
	res.send('/Blog' + req.url);
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
