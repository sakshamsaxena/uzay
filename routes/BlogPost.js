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
				url: req.get('host') + '/blog/posts/' + parseInt(count + 1),
				commentCount: 0,
				upvotes: 0,
				downvotes: 0
			}, function(err, res) {
				if (err) throw err;
				console.log("Inserted !\n", res.ops);
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
	Public route to fetch first 5 blog posts. 

	GET  / 

*/
BlogPost.get('/', function(req, res) {

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;

		console.log("Connected successfully to server to get all posts");

		db.collection('blog').find({}).sort({ postId: -1 }).limit(5)
			.toArray(function(err, data) {
				if (err) throw err;
				db.close();
				res.status(200).json(data);
			})

	});
});

/**
	Public route to fetch latest blog post. 

	GET  /latest 

*/
BlogPost.get('/latest', function(req, res) {

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;

		console.log("Connected successfully to server to get latest post");

		db.collection('blog').find({}).sort({ postId: -1 }).limit(1)
			.toArray(function(err, data) {
				if (err) throw err;
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

	var id = parseInt(req.params.postId);
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;

		console.log("Connected successfully to server to get " + id + " post");

		db.collection('blog').find({ postId: id })
			.toArray(function(err, data) {
				if (err) throw err;
				db.close();
				res.status(200).json(data);
			})
	})

});

/**
	Public route to fetch blog posts. Uses pagination.

	GET  /pages/:page

*/
BlogPost.get('/pages/:page', function(req, res) {

	var page = parseInt(req.params.page);
	var cursor = (page - 1) * 5;

	// Checks the input against regex for 1-9999
	var pattern = /^([1-9][0-9]{0,3})$/g;

	if (pattern.test(page)) {
		MongoClient.connect(url, function(err, db) {
			if (err) throw err;

			console.log("Connected successfully to server to get " + page + " of post");

			db.collection('blog').find({}).sort({ postId: -1 }).skip(cursor).limit(5)
				.toArray(function(err, data) {
					if (err) throw err;
					db.close();
					res.status(200).json(data);
				})
		})
	} else {
		// Send a HTTP 404 Not Found Error
		res.status(404).send("ERROR : Bad Page Number.");
	}

});

/**
	Public route to fetch blog posts tagged under specific tag

	GET  /tags/:tag

*/
BlogPost.get('/tags/:tag', function(req, res) {

	var tag = req.params.tag;

	// Checks the input against regex for words(or phrases separated by '-')
	var patternTag = /^[a-z]+$|^[a-z]+[-][a-z]+$/g;

	if (patternTag.test(tag)) {
		MongoClient.connect(url, function(err, db) {
			if (err) throw err;

			console.log("Connected successfully to server to get " + tag + " tag");

			db.collection('blog').find({ tags: tag }).sort({ postId: -1 })
				.toArray(function(err, data) {
					if (err) throw err;
					db.close();
					res.status(200).json(data);
				})
		})
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
			if (err) throw err;
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
			if (err) throw err;
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