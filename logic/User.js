/*
  Function Factory to process logic for User Route
*/

var Logic = {}

Logic.GetUserInfo = function (alias) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({})
    }, 100)
  })
}

Logic.GetVotedContent = function (alias) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({})
    }, 100)
  })
}

Logic.GetAllPostsByUser = function (alias) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({})
    }, 100)
  })
}

Logic.GetAllCommentsByUser = function (alias) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({})
    }, 100)
  })
}

Logic.CreateNewPost = function (alias) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({})
    }, 100)
  })
}

module.exports = Logic
