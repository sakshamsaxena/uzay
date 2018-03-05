/*
	Comment.js
*/

var config = require('../config/config.js');
var express = require('express');
var Comment = express.Router();

/**
	Public route to fetch a resource. 

	GET  / 

*/

Comment.get('/', function(req, res) {
	
});

module.exports = Comment;