/*
	Testing Suite
*/

var request = require('supertest');
//var express = require('express');
var app = require('../index.js');

/*
	Blog Route Tests
*/

describe('Blog Route Tests', function() {

	it('one', function(done) {
		request(app)
			.get('/blog/')
			.expect(200, done);
	});

	it('two', function(done) {
		request(app)
			.get('/blog/posts/foo-bar-baz')
			.expect(200, done);
	});

	it('three', function(done) {
		request(app)
			.get('/blog/pages/27')
			.expect(200, done);
	});
});
