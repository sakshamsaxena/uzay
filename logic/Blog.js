/*
  Function Factory to process logic for Blog Route
*/

require('../mappers/User')
require('../mappers/UserName')
var blog = require('../mappers/Blog')
var comments = require('../mappers/Comment')
var messages = require('../util/Messages')

var Logic = {}

Logic.GetBlogPostByID = function (params, opts) {
  return new Promise(function (resolve, reject) {
    // Skip running Promises if id is invalid
    if (params.BlogPostID === -1) {
      reject(messages.INVALID_BLOG_POST_ID)
      return
    }

    // Fetch a single blog post
    var blogPost = {}
    blog.GetBlogPostByID(params.BlogPostID)
      .then(function (result) {
        blogPost = result
        if (opts.IncludeComments) {
          return comments.GetCommentsByPostID(blogPost._id)
        }
        resolve(blogPost)
      })
      .then(function (result) {
        blogPost.Comments = result
        resolve(blogPost)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

Logic.GetBlogPostsByTagName = function (params, opts) {
  var blogPost = {}
  return new Promise(function (resolve, reject) {
    blog.GetBlogPostByTag(params.TagName, opts)
      .then(function (result) {
        if (result) {
          blogPost = result
          resolve(blogPost)
        }
      })
      .catch(function (err) {
        reject(err)
      })
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
