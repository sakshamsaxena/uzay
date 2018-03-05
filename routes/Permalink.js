/*
	Permalink.js
*/

var config = require('../config/config.js');
var express = require('express');
var Permalink = express.Router();

/**
	Public route to fetch a resource. 

	GET  / 

*/

Permalink.get('/', function(req, res) {
	
});

module.exports = Permalink;