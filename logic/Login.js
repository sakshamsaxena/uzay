var UserCredentialMapper = require('../mappers/UserCredentials.js')

var Logic = {}

Logic.Login = (email) => {
  return UserCredentialMapper.Login(email)
}

Logic.Signup = (email, passhash, token) => {
  return UserCredentialMapper.Signup(email, passhash, token)
  // console.log("Logic.Signup: " + data)
}

module.exports = Logic
