/*
	Search.js
*/

var express = require('express');
var Search = express.Router();

/**
	GET  /

	TODO : Write this!

*/

Search.get('/', function(req, res) {
	res.send('Search team is tired.');
});

module.exports = Search;
