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
BlogPost.get('/:page', function(req, res) {
	res.send('You are on Page ' + req.params.page);
});

/**
	Public route to fetch all blog posts tagged under specific tag.
	Uses pagination. 
	Can additionally mention page to fetch from specific page.
*/
BlogPost.get('/:tag/:page', function(req, res) {
	res.send('You are browsing "' + req.params.tag + '" tagged posts on Page ' + req.params.page)
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