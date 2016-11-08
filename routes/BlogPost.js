/*
	BlogPost.js
	Created by Saksham Saxena (saksham_saxena@outlook.com) on 6th November 2016
	If you're seeing a more updated version, then this must probably be live on the internet!
	* Look Ma! More than 1 viewers! *
*/

var express = require('express');
var BlogPost = express.Router();

/* Route specific Middlewares */
function AuthenticateBlogger(req, res, next) {
	next();
}

/**
	Public route to fetch first few blog posts. 

	GET  / 

*/
BlogPost.get('/', function(req, res) {
	res.send('You are viewing the blog.');
});

/**
	Public route to fetch blog posts. Uses pagination.

	GET  /pages/:page

*/
BlogPost.get('/pages/:page', function(req, res) {

	var page = req.params.page;

	// Checks the input against regex for 1-9999
	var pattern = /^([1-9][0-9]{0,3})$/g;

	if (pattern.test(page)) {
		// Query the database
		res.send("You are viewing the blog on it's " + page + " page.")
	} else {
		// Send a HTTP 404 Not Found Error
		res.status(404).send("ERROR : Bad Page Number.");
	}

});

/**
	Public route to fetch blog posts tagged under specific tag. Uses pagination.

	GET  /tags/:tag/:page

*/
BlogPost.get('/tags/:tag/:page', function(req, res) {

	var tag = req.params.tag;
	var page = req.params.page;

	// Checks the input against regex for 1-9999
	var patternPage = /^([1-9][0-9]{0,3})$/g;
	// Checks the input against regex for words(or phrases separated by '-')
	var patternTag = /^[a-z]+$|^[a-z]+[-][a-z]+$/g;

	if (patternTag.test(tag)) {
		if (patternPage.test(page)) {
			// Query the database
			res.send("You are viewing the blog posts tagged under '" + tag + "' on it's " + page + " page.");
		}
		else {
			// Send a HTTP 404 Not Found Error
			res.status(404).send("ERROR: Bad Page Number.");
		}
	} else {
		// Send a HTTP 404 Not Found Error
		res.status(404).send("ERROR: Bad Tag Name.");
	}

});

/**
	Private route to publish blog post. 

	POST /new

*/
BlogPost.post('/new', AuthenticateBlogger, function(req, res) {
	res.send('Published yay!');
});

module.exports = BlogPost;