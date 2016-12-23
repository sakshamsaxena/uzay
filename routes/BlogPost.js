/*
	BlogPost.js
	Created by Saksham Saxena (saksham_saxena@outlook.com) on 6th November 2016
	If you're seeing a more updated version, then this must probably be live on the internet!
	* Look Ma! More than 1 viewers! *
*/

var fs = require('fs');
var path = require('path');
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var BlogPost = express.Router();
const config = require('../config/config.js');

/* Route specific Middlewares */
function AuthenticateBlogger(req, res, next) {
	// Require the voodoo
	var md5 = require('blueimp-md5');
	var base64 = require('base-64');

	// Hash and encode the passphrase
	var key = md5(req.headers.key);
	var receivedKey = base64.encode(key);

	var actualKey = config.BloggerKey;

	// The database part
	var url = 'mongodb://localhost:27017/uzay';

	function insertPost(db, cb) {
		
		var collection = db.collection('blog');

		collection.insertOne({
			title			: req.body.title,
			author			: config.Author,
			date			: (new Date()).getTime(),
			tags			: req.body.tags,
			content			: req.body.content,
			commentCount	: 0,
			upvotes			: 0,
			downvotes		: 0
		}, function (err, res) {
			if (!err) console.log("Inserted !", res.ops);
		})
	}

	if (receivedKey === actualKey) {
		
		MongoClient.connect(url, function(err, db) {
			if (err) throw err;

			console.log("Connected successfully to server");

			insertPost(db, function() {
				db.close();
				res.status(200);
			});
		});
	} else {
		console.error("Duck you !");
		res.status(404);
	}

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
	Public route to fetch particular blog post.

	GET  /posts/:postName

*/
BlogPost.get('/posts/:postName', function(req, res) {

	var name = req.params.postName;
	name = name.split("-");
	name = name.join("");
	var pattern = /^[a-z]+$/g;

	// Checks the input
	if (pattern.test(name)) {
		// Query the database
		res.send(req.params.postName + " is viewed here.")
	} else {
		// Send a HTTP 404 Not Found Error
		res.status(404).send("ERROR : Bad Post Name.");
	}
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
		} else {
			// Send a HTTP 404 Not Found Error
			res.status(404).send("ERROR: Bad Page Number.");
		}
	} else {
		// Send a HTTP 404 Not Found Error
		res.status(404).send("ERROR: Bad Tag Name.");
	}

});

/**
	Public route to upvote a blog post. 

	PUT /upvote/:postName

*/
BlogPost.put('/upvote/:postName', function(req, res) {
	res.send('Upvoted !');
});

/**
	Public route to upvote a blog post. 

	PUT /downvote/:postName

*/
BlogPost.put('/downvote/:postName', function(req, res) {
	res.send('Downvoted !');
});

/**
	Private route to publish blog post. 

	POST /new

*/
BlogPost.post('/new', AuthenticateBlogger, function(req, res) {
	res.send();
});

module.exports = BlogPost;