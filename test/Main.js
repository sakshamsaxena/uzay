/* eslint-env mocha */
const request = require('supertest')
const app = require('../index')
/*
  Blog Tests
*/

describe('Public Blog API', function () {
  it('should get a single post by ID', function (done) {
    request(app)
      .get('/blog/id/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('should get all posts by a user', function (done) {
    request(app)
      .get('/user/johnmayer/posts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('should get all posts under a tag', function (done) {
    request(app)
      .get('/blog/tag/tag_01')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('should get all posts for a public feed')
})

/*
  User Tests
*/

describe('User who wants to', function () {
  describe('create content', function () {
    it('should be able to create a post', function (done) {
      request(app)
        .post('/user/johnmayer/posts/new')
        .set('Authentication', 'Bearer TEST_TOKEN')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to create a comment', function (done) {
      request(app)
        .post('/blog/id/1/comment')
        .set('Authentication', 'Bearer TEST_TOKEN')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('interact with content', function () {
    it('should be able to like a post', function (done) {
      request(app)
        .patch('/blog/id/1/like')
        .set('Accept', 'application/json')
        .set('Authentication', 'Bearer TEST_TOKEN')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to dislike a post', function (done) {
      request(app)
        .patch('/blog/id/1/dislike')
        .set('Accept', 'application/json')
        .set('Authentication', 'Bearer TEST_TOKEN')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to like a comment', function (done) {
      request(app)
        .patch('/blog/id/1/comment/1/like')
        .set('Accept', 'application/json')
        .set('Authentication', 'Bearer TEST_TOKEN')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to dislike a comment', function (done) {
      request(app)
        .patch('/blog/id/1/comment/1/dislike')
        .set('Accept', 'application/json')
        .set('Authentication', 'Bearer TEST_TOKEN')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('view content', function () {
    it('should be able to view a profile page')

    it('should be able to view posts by self', function (done) {
      request(app)
        .get('/user/johnmayer/posts')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to view comments by self', function (done) {
      request(app)
        .get('/user/johnmayer/comments')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to view posts liked by self/user', function (done) {
      request(app)
        .get('/user/johnmayer/liked')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to view posts disliked by self/user', function (done) {
      request(app)
        .get('/user/johnmayer/disliked')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to view posts for a personalised feed')
  })

  describe('do misc stuff', function () {
    it('should be able to register')

    it('should be able to login')

    it('should be rejected on bad credentials')
  })

  describe('without authentication', function () {
    it('user cannot comment to a post', function (done) {
      request(app)
        .post('/auth/verify/abc')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })

    it('user should not be able to like a post', function (done) {
      request(app)
        .patch('/auth/verify/abc')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })

    it('user cannot create a post', function (done) {
      request(app)
        .post('/auth/verify/abc')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })
  })

  describe('Blog Post API', function () {
    it('should return error when fetching a blog post by invalid id', function (done) {
      request(app)
        .get('/blog/id/abc')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })

    it('should return error when posting comment to invalid blog id', function (done) {
      request(app)
        .post('/blog/id/abc/comment')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })

    it('should return error when username is not valid', function (done) {
      request(app)
        .get('/user/abc')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })
  })
})
