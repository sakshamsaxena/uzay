/*
	Comment.js
*/
var m = require('mongoose');
var express = require('express');
var config = require('../config/config.js');
var QueryParams = require('../util/QueryParams.js');
var Logic = require('../logic/Comment.js');
var Comment = express.Router();

Comment.patch('/id/:id/like', function(req, res) {
	res.send('/Comment' + req.url);
});

Comment.patch('/id/:id/dislike', function(req, res) {
	res.send('/Comment' + req.url);
});

module.exports = Comment;