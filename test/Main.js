/* eslint-env mocha */

const request = require('supertest')
const app = require('../index.js')

describe('Blog API', function () {
  describe('should get', function () {
    it('a single post by ID', function (done) {
      request(app)
        .get('/blog/id/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('all posts by a user', function (done) {
      request(app)
        .get('/user/JohnMayer/posts')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('all posts under a tag', function (done) {
      request(app)
        .get('/blog/tag/tag_01')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('all posts for a public feed')
  })

  describe('should not get', function () {
    it('blog post by invalid id', function (done) {
      request(app)
        .get('/blog/id/abc')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })

    it('comment by invalid id', function (done) {
      request(app)
        .get('/blog/id/abc/comment/xyz')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })
  })
})

describe('User API', function () {
  describe('for creating content', function () {
    describe('should be able to', function () {
      it('create a post', function (done) {
        request(app)
          .post('/user/JohnMayer/posts/new')
          .set('Authentication', 'Bearer TEST_TOKEN')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done)
      })

      it('create a comment', function (done) {
        request(app)
          .post('/blog/id/1/comment')
          .set('Authentication', 'Bearer TEST_TOKEN')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done)
      })
    })
    describe('should not be able to', function () {})
  })

  describe('for interacting with content', function () {
    describe('should be able to', function () {
      it('like a post', function (done) {
        request(app)
          .patch('/blog/id/1/like')
          .set('Accept', 'application/json')
          .set('Authentication', 'Bearer TEST_TOKEN')
          .expect('Content-Type', /json/)
          .expect(200, done)
      })

      it('dislike a post', function (done) {
        request(app)
          .patch('/blog/id/1/dislike')
          .set('Accept', 'application/json')
          .set('Authentication', 'Bearer TEST_TOKEN')
          .expect('Content-Type', /json/)
          .expect(200, done)
      })

      it('like a comment', function (done) {
        request(app)
          .patch('/blog/id/1/comment/1/like')
          .set('Accept', 'application/json')
          .set('Authentication', 'Bearer TEST_TOKEN')
          .expect('Content-Type', /json/)
          .expect(200, done)
      })

      it('dislike a comment', function (done) {
        request(app)
          .patch('/blog/id/1/comment/1/dislike')
          .set('Accept', 'application/json')
          .set('Authentication', 'Bearer TEST_TOKEN')
          .expect('Content-Type', /json/)
          .expect(200, done)
      })
    })
    describe('should not be able to', function () {})
  })

  describe('for viewing content', function () {
    describe('should be able to', function () {
      it('view a profile page')

      it('view posts by self', function (done) {
        request(app)
          .get('/user/JohnMayer/posts')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done)
      })

      it('view comments by self', function (done) {
        request(app)
          .get('/user/JohnMayer/comments')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done)
      })

      it('view posts liked by self/user', function (done) {
        request(app)
          .get('/user/JohnMayer/liked')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done)
      })

      it('view posts disliked by self/user', function (done) {
        request(app)
          .get('/user/JohnMayer/disliked')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done)
      })

      it('view posts for a personalised feed')
    })
    describe('should not be able to', function () {})
  })

  describe('for doing misc stuff', function () {
    describe('should be able to', function () {
      it('register')

      it('login')
    })
    describe('should not be able to', function () {
      it('verify account with bad credentials', function (done) {
        request(app)
          .get('/auth/verify/VERIFICATION_TOKEN')
          .set('Authentication', 'Bearer INVALID_TOKEN')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(404, done)
      })
    })
  })

  describe('without authentication', function () {
    describe('should be able to', function () {})
    describe('should not be able to', function () {
      it('comment to a post', function (done) {
        request(app)
          .post('/blog/id/1/comment')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(404, done)
      })

      it('like a post', function (done) {
        request(app)
          .patch('/blog/id/1/like')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(404, done)
      })

      it('create a post', function (done) {
        request(app)
          .post('/user/JohnMayer/posts/new')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(404, done)
      })
    })
  })
})
