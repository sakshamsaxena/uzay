/*
	Blog.js
*/

var express = require('express');
var BlogPost = express.Router();

/**
	GET  /id/:id[?params=value]

	Public route to fetch a resource by id. Options are :
	- includeComments
		Default: true
		Format: Boolean
		Options: true|false
*/

BlogPost.get('/id/:id', function(req, res) {

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

});

/**
	POST /id/:id/comment

	Posts a comment to the blog post with ID :id. Data Fields are :
	- Content
		Format: String
*/

BlogPost.post('/id/:id/comment', function(req, res) {

});

/**
	PATCH /id/:id/like

	Increments a like on the blog post with ID :id.
*/

BlogPost.patch('/id/:id/like', function(req, res) {

});

/**
	PATCH /id/:id/dislike

	Increments a dislike on the blog post with ID :id.
*/

BlogPost.patch('/id/:id/dislike', function(req, res) {

});

module.exports = BlogPost;
