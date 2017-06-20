/*
	BlogPost.js
	Created by Saksham Saxena (saksham_saxena@outlook.com) on 6th November 2016
*/

var fs = require('fs');
var path = require('path');
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var BlogPost = express.Router();
var config = require('../config/config.js');

var url = 'mongodb://localhost:27017/uzay';

function AuthenticateBlogger(req, res, next) {

	// Require the voodoo
	var md5 = require('blueimp-md5');
	var base64 = require('base-64');

	// Hash and encode the passphrase
	var key = md5(req.headers.key);
	var receivedKey = base64.encode(key);

	// This is the actual key
	var actualKey = config.BloggerKey;

	// Write the post to database if the keys match
	if (receivedKey === actualKey) {
		next();
	} else {
		console.error("Duck you !");
		res.status(404).end();
	}
}

function getPosts(find, sort, limit, cb) {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Connected successfully to server to get all posts");
		db.collection('blog')
			.find(find)
			.sort(sort)
			.limit(limit)
			.toArray(function(err, data) {
				if (err) throw err;
				db.close();
				cb(data);
			});
	});
}

function votePost(post, vote, cb) {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Connected successfully to server for Downvotes");
		db.collection('blog').updateOne({ "postId": post }, { $inc: { vote: 1 } }, function(err, data) {
			if (err) throw err;
			db.close();
			cb();
		})
	});
}
/**
	Public route to fetch all blog posts. 

	GET  / 

*/
BlogPost.get('/', function(req, res) {

	getPosts({}, { postId: -1 }, 0, function(data) {
		res.status(200).json(data);
	});

});

/**
	Public route to fetch blog posts, all sorts.

	GET  /posts?tag=tagName&len=howManyPostsToShow&fetch=latest|single|multiple[&id=postId,][&from=offsetCount&len=numberOfPostsToFetch]

*/
BlogPost.get('/posts', function(req, res) {

	var Q, id, offset, tag, length, latestPost, singlePost, multiplePosts;

	Q = req.query;
	tag = Q.tag;
	id = parseInt(Q.id);
	length = parseInt(Q.len);
	offset = parseInt(Q.from);

	// Checks the input against regex for words(or phrases separated by '-')
	var patternTag = /^[a-z]+$|^[a-z]+[-][a-z]+$/g;
	taggedPosts = (patternTag.test(tag) && length) ? true : false;

	latestPost = (Q.fetch === 'latest') ? true : false;
	singlePost = (Q.fetch === 'single') ? true : false;
	multiplePosts = (Q.fetch === 'multiple') ? true : false;

	if (latestPost) {
		getPosts({}, { postId: -1 }, 1, function(data) {
			res.status(200).json(data);
		});
	}

	if (singlePost) {
		getPosts({ postId: id }, { $natural: 1 }, 0, function(data) {
			res.status(200).json(data);
		});
	}

	if (multiplePosts) {
		getPosts({ postId: { $gte: offset } }, { postId: -1 }, length, , function(data) {
			res.status(200).json(data);
		});
	}

	if (taggedPosts) {
		getPosts({ tags: tag }, { postId: -1 }, length, function(data) {
			res.status(200).json(data);
		});
	} else {
		// Send a HTTP 404 Not Found Error
		res.status(404).send("ERROR: Bad URL");
	}
});

/**
	Public route to vote a blog post. 

	PUT /votePost?vote=up|down&post=postId

*/
BlogPost.put('/votePost', function(req, res) {
	var Q, postId, vote;

	Q = req.query;
	vote = Q.vote+"votes";
	postId = parseInt(Q.post);

	votePost(postId, vote, function() {
		res.status(200).end();
	});
});

/**
	Private route to publish blog post. 

	POST /new

*/
BlogPost.post('/new', AuthenticateBlogger, function(req, res) {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Connected successfully to server for blog entry");
		var collection = db.collection('blog');
		collection.count({}, function(err, count) {
			collection.insertOne({
				postId: count + 1,
				title: req.body.title,
				author: config.Author,
				date: Date(),
				tags: req.body.tags,
				content: req.body.content,
				url: req.get('host') + '/blog/posts?fetch=single&postId=' + (count + 1),
				commentCount: 0,
				upvotes: 0,
				downvotes: 0
			}, function(err, r) {
				if (err) throw err;
				console.log("Inserted !\n", r.ops);
				db.close();
				res.status(200).end();
			})
		});
	});
});

module.exports = BlogPost;
