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

/* Routes goes here*/
/**
	Public route to fetch first few blog posts. 
*/
BlogPost.get('/', function(req, res) {
	res.send('You are viewing the blog.');
});

/**
	Public route to fetch blog posts of a particular page.
*/
BlogPost.get('/pages/:page', function(req, res) {

	var page = req.params.page;

	// Checks the input against regex for 1-9999
	var pattern = /^([1-9][0-9]{0,3})$/g;

	if (pattern.test(page)) {
		// Query the database
		res.send({
			data: page
		})
	} else {
		// Send a HTTP 404 Not Found Error
		res.status(404).send("page error");
	}

});

/**
	Public route to fetch all blog posts tagged under specific tag.
	Uses pagination. 
	Can additionally mention page to fetch from specific page.
*/
BlogPost.get('/tags/:tag/:page', function(req, res) {

	var tag = req.params.tag;
	var page = req.params.page;

	// Checks the input against regex for 1-9999
	var patternPage = /^([1-9][0-9]{0,3})$/g;
	// Checks the input against regex for words(or phrases separated by '-')
	var patternTag = /^[a-z]+$|^[a-z]+[-][a-z]+$/g;

	if (patternPage.test(page) && patternTag.test(tag)) {
		// Query the database
		res.send({
			"page": page,
			"tag": tag
		})
	} else {
		// Send a HTTP 404 Not Found Error
		res.status(404).send("tag error");
	}

});

/**
	Public route to fetch all blog posts. 
	Uses pagination. 
	Can additionally mention page to fetch from specific page.
*/
BlogPost.post('/new', AuthenticateBlogger, function(req, res) {
	res.send('Published yay!');
});


module.exports = BlogPost;