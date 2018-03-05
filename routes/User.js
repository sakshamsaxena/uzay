/*
	User.js
*/

var express = require('express');
var User = express.Router();

/**
	Public route to fetch all blog posts.

	GET  /

*/

User.get('/', function(req, res) {

});

module.exports = User;
