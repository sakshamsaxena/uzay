/*
  User Mapper
*/

let mongoose = require('mongoose')
let userSchema = require('../schema/UserSchema.js')

let User = mongoose.model('User', userSchema)
let UserMapper = {}

/**
  Public Functions
*/

UserMapper.GetUserByAlias = function (alias) {
  return User.findOne({Alias: alias}).exec()
}

UserMapper.GetUserById = function (id) {
  return User.findById(id).exec()
}

UserMapper.createUser = function (properties) {
  let user = new User(properties)
  return user.save()
}

UserMapper.updateUser = function (properties) {
  return User.updateOne({email: properties.email}, properties).exec()
}

module.exports = UserMapper
