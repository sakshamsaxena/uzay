/*
  Function Factory to process logic for Blog Route
*/
var blog = require('../mappers/Blog')
var user = require('../mappers/User')
var Logic = {}

Logic.GetBlogPostByID = function (params, opts) {
  var blogPost = {}
  return new Promise(function (resolve, reject) {
    blog.GetBlogPostByID(params.BlogPostID, opts)
      .then(function (result) {
        blogPost = result
        return user.GetUserById(result.User)
      })
      .then(function (result) {
        blogPost.User = result.Alias
        resolve(blogPost)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

Logic.GetBlogPostsByTagName = function (params, opts) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({})
    }, 100)
  })
}

Logic.GetCommentByID = function (params, opts) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({})
    }, 100)
  })
}

Logic.PostCommentToBlogPost = function (params, body, headers) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({})
    }, 100)
  })
}

Logic.PatchVoteOnBlogPost = function (params, headers, vote) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({})
    }, 100)
  })
}

Logic.PatchVoteOnBlogPostComment = function (params, headers, vote) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({})
    }, 100)
  })
}

module.exports = Logic
