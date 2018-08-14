/* eslint-env mocha */
const request = require('supertest')
const app = require('../index')
/*
  Blog Tests
*/

describe('Public Blog API', function () {
  it('should get a single post by ID', function (done) {
    request(app)
      .get('/Blog/id/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('should get all posts by a user', function (done) {
    request(app)
      .get('/User/JohnMayer/posts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('should get all posts under a tag', function (done) {
    request(app)
      .get('/Blog/tag/4')
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
        .post('/User/JohnMayer/posts/new')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to create a comment', function (done) {
      request(app)
        .post('Blog/id/1/comment')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('interact with content', function () {
    it('should be able to like a post', function (done) {
      request(app)
        .patch('/Blog/id/1/like')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to dislike a post', function (done) {
      request(app)
        .patch('/Blog/id/1/dislike')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to like a comment', function (done) {
      request(app)
        .patch('Blog/id/1/comment/:cid/like')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to dislike a comment', function (done) {
      request(app)
        .patch('Blog/id/1/comment/:cid/dislike')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('view content', function () {
    it('should be able to view a profile page')

    it('should be able to view posts by self', function (done) {
      request(app)
        .get('/User/JohnMayer/posts')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to view comments by self', function (done) {
      request(app)
        .get('/User/JohnMayer/comments')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to view posts liked by self/user', function (done) {
      request(app)
        .get('/User/JohnMayer/liked')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('should be able to view posts disliked by self/user', function (done) {
      request(app)
        .get('/User/JohnMayer/disliked')
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
