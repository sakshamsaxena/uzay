/*
  Function Factory to process logic for Blog Route
*/

var Logic = {}

Logic.GetBlogPostByID = function (params, opts) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({})
    }, 100)
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
