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

	it('should get the latest post', function(done) {
		request(app)
			.get('/blog/posts?fetch=latest')
			.expect(200, done);
	});

	it('should get a particular post', function(done) {
		request(app)
			.get('/blog/posts?fetch=single&postId=1')
			.expect(200, done);
	});

	it('should get a range of posts', function(done) {
		request(app)
			.get('/blog/posts?fetch=multiple&from=1&len=2')
			.expect(200, done);
	});

	it('should get few posts of a certain tag', function(done) {
		request(app)
			.get('/blog/posts?tag=foo&len=2')
			.expect(200, done);
	});

	it('should get all posts of a certain tag', function(done) {
		request(app)
			.get('/blog/posts?tag=foo')
			.expect(200, done);
	});

	it('should upvote a post', function(done) {
		request(app)
			.get('/blog/votePost?postId=1&vote=up')
			.expect(200, done);
	});

	it('should downvote a post', function(done) {
		request(app)
			.get('/blog/votePost?postId=1&vote=down')
			.expect(200, done);
	});
});
