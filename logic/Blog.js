/*
  Function Factory to process logic for Blog Route
*/

var BlogMapper = require('../mappers/Blog.js')
var UserMapper = require('../mappers/User.js')
var CommentMapper = require('../mappers/Comment.js')

var Logic = {}

Logic.GetBlogPostById = function (id, opts) {
  var ID = id
  var options = opts
  var result = {}

  return new Promise(function (resolve, reject) {
    BlogMapper.GetBlogByID(ID)
      .then(function (blog) {
        result.blog = blog
        return UserMapper.GetUserById(blog.UserID)
      })
      .then(function (user) {
        result.user = user
        return CommentMapper.GetCommentsByPostID(ID, options.includeComments)
      })
      .then(function (comments) {
        result.comments = comments
        resolve(result)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

module.exports = Logic
