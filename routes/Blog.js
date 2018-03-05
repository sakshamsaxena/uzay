/*
	Blog.js
*/

var express = require('express');
var BlogPost = express.Router();

/**
	Public route to fetch a resource.

	GET  /

*/

BlogPost.get('/', function(req, res) {

});

module.exports = BlogPost;
