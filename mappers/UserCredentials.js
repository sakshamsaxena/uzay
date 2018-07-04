/*
  Login & Signup Mapper
*/

const mongoose = require('mongoose')
const userCredentialSchema = require('../schema/userCredentialSchema')

const UserCredential = mongoose.model('UserCredential', userCredentialSchema)

let UserAuthStatus = {}

UserAuthStatus.Login = (email) => {
  return UserCredential.findOne({Email: email}).exec()
  // return UserCredentials.findOne({email: email}).exec()
}

UserAuthStatus.Signup = (email, passhash, token) => {
  var data = new UserCredential({Email: email,
    Passphrase: passhash,
    Token: token
  })
  console.log(data)
  return data.save()
}

module.exports = UserAuthStatus
