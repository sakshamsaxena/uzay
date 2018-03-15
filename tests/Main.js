/*
	Testing Suite
*/

var request = require('supertest');
var app = require('../index.js');

/*
	Blog Route Tests
*/

describe('Blog Route Tests', function() {

	it('should get all posts from /blog', function(done) {
		request(app)
			.get('/blog/')
			.expect(200, done);
	});

});
