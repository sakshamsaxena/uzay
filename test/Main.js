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
    it('should be able to create a post')

    it('should be able to create a comment')
  })

  describe('interact with content', function () {
    it('should be able to like a post')

    it('should be able to dislike a post')

    it('should be able to like a comment')

    it('should be able to dislike a comment')
  })

  describe('view content', function () {
    it('should be able to view a profile page')

    it('should be able to view posts by self')

    it('should be able to view comments by self')

    it('should be able to view posts liked by self/user')

    it('should be able to view posts disliked by self/user')

    it('should be able to view posts for a personalised feed')
  })

  describe('do misc stuff', function () {
    it('should be able to register')

    it('should be able to login')

    it('should be rejected on bad credentials')
  })
})
