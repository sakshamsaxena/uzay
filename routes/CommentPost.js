/*
	CommentPost.js
	Created by Saksham Saxena (saksham_saxena@outlook.com) on 6th November 2016
	If you're seeing a more updated version, then this must probably be live on the internet!
	* Look Ma! More than 1 viewers! *
*/

var express = require('express');
var CommentPost = express.Router();

/* Route specific Middlewares */
function AuthenticateVisitor(req, res, next) {

	// Get the basic stuff.
	var alias = req.body.alias;
	var ipAddress = req.ip;
	var email = (req.body.email === undefined) ? false : req.body.email;

	// Run alias through DB
	// (in the callback)
			// (alias exists) Check the IP of that alias. On false match, Respond with a request for email.
			// (alias absent) Respond with a request for email.
	next();
}

/* Routes goes here*/

/**
	Public route to fetch all comments of a certain blog post.

	GET /:postID

*/
CommentPost.get('/:postID', function(req, res) {
	res.send('You are on viewing comments of Post ' + req.params.postID);
});

/**
	Public route to upvote a comment. 

	PUT /upvote/:commentID

*/
CommentPost.put('/upvote/:commentID', function(req, res) {
	res.send('Comment Upvoted !');
});

/**
	Public route to upvote a comment.

	PUT /downvote/:commentID

*/
CommentPost.put('/downvote/:commentID', function(req, res) {
	res.send('Comment Downvoted !');
});

/**
	Private route to post a comment to a certain blog post.

	POST /new
*/
CommentPost.post('/new', AuthenticateVisitor, function(req, res) {
	// Need postID
	res.send('Comment published successfullt on post ' + req.params.postID);
});

/**
	Private route to post a reply to a comment on a certain blog post.

	POST /reply
*/
CommentPost.post('/reply', AuthenticateVisitor, function(req, res) {
	// Need postID and CommentID (of existing parent)
	res.send('Comment published successfullt on post ' + req.body.postID);
});

module.exports = CommentPost;