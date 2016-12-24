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
var config = require('../config/config.js');

var url = 'mongodb://localhost:27017/uzay';

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

	function insertPost(db, cb) {

		var collection = db.collection('blog');
		collection.count({}, function(err, count) {
			collection.insertOne({
				postId: count + 1,
				title: req.body.title,
				author: config.Author,
				date: (new Date()).getTime(),
				tags: req.body.tags,
				content: req.body.content,
				commentCount: 0,
				upvotes: 0,
				downvotes: 0
			}, function(err, res) {
				if (!err) console.log("Inserted !\n", res.ops);
			})
		});
	}

	if (receivedKey === actualKey) {

		MongoClient.connect(url, function(err, db) {
			if (err) throw err;

			console.log("Connected successfully to server for blog entry");

			insertPost(db, function() {
				db.close();
				res.status(200).end();
			});
		});
	} else {
		console.error("Duck you !");
		res.status(404).end();
	}

	next();
}

/**
	Public route to fetch first few blog posts. 

	GET  / 

*/
BlogPost.get('/', function(req, res) {

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;

		console.log("Connected successfully to server to get all posts");

		db.collection('blog').find({ $query: {}, $orderby: { postId: -1 } }).toArray(function(err, data) {
			db.close();
			res.status(200).json(data);
		})

	});
});

/**
	Public route to fetch particular blog post.

	GET  /posts/:postId

*/
BlogPost.get('/posts/:postId', function(req, res) {

	var name = req.params.postId;
	name = name.split("-");
	name = name.join("");
	var pattern = /^[a-z]+$/g;

	// Checks the input
	if (pattern.test(name)) {
		// Query the database
		res.send(req.params.postId + " is viewed here.")
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

	PUT /upvote/:postId

*/
BlogPost.put('/upvote/:postId', function(req, res) {

	var post = parseInt(req.params.postId);

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;

		console.log("Connected successfully to server for Upvotes");

		db.collection('blog').updateOne({ "postId": post }, { $inc: { "upvotes": 1 } }, function(err, data) {
			db.close();
			res.status(200).end();
		})

	});
});

/**
	Public route to upvote a blog post. 

	PUT /downvote/:postId

*/
BlogPost.put('/downvote/:postId', function(req, res) {

	var post = parseInt(req.params.postId);

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;

		console.log("Connected successfully to server for Downvotes");

		db.collection('blog').updateOne({ "postId": post }, { $inc: { "downvotes": 1 } }, function(err, data) {
			db.close();
			res.status(200).end();
		})

	});
});

/**
	Private route to publish blog post. 

	POST /new

*/
BlogPost.post('/new', AuthenticateBlogger, function(req, res) {
	res.send();
});

module.exports = BlogPost;