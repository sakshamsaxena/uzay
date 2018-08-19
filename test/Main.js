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
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to create a comment', function (done) {
      request(app)
        .post('/blog/id/1/comment')
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
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to dislike a post', function (done) {
      request(app)
        .patch('/blog/id/1/dislike')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to like a comment', function (done) {
      request(app)
        .patch('/blog/id/1/comment/1/like')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to dislike a comment', function (done) {
      request(app)
        .patch('/blog/id/1/comment/1/dislike')
        .set('Accept', 'application/json')
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
})

describe('User', function () {
  it('cannot comment to a post without authentication', function (done) {
    request(app)
      .post('/id/:id/comment')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done)
  })

  it('should not be able to like a post without authentication', function (done) {
    request(app)
      .patch('/id/:id/like')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done)
  })

  it('cannot create a post without authentication', function (done) {
    request(app)
      .post('/posts/new')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done)
  })
})

describe('Public Blog API', function () {
  it('should not return posts by user without being authenticated', function (done) {
    request(app)
      .get('/posts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done)
  })
})

/*
describe('', function () {
  it('', function (done) {

  })
})

describe('', function () {
  it('', function (done) {

  })
})
*/
