/*
  Function Factory to process logic for User Route
*/

var UserMapper = require('../mappers/User.js')

var Logic = {}

Logic.GetUserInfo = function (alias) {
  return new Promise(function (resolve, reject) {
    UserMapper.GetUserByAlias(alias)
      .then(function (user) {
        resolve(user)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

Logic.GetLikedPosts = function (alias) {
  var _this = this

  _this.GetUserInfo(alias)
    .then(function (user) {
      // TODO
      return user
    })
    .catch(function (err) {
      // TODO
      return err
    })
}

module.exports = Logic
