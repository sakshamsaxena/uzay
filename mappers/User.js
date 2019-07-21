/*
  User Mapper
*/

const mongoose = require('mongoose')
const userSchema = require('../schema/UserSchema.js')

const User = mongoose.model('User', userSchema)
const UserMapper = {}

/**
  Public Functions
*/

UserMapper.GetUserByAlias = function (alias) {
  return User.findOne({ Alias: alias }).exec()
}

UserMapper.GetUserById = function (id) {
  return User.findById(id).exec()
}

UserMapper.createUser = function (properties) {
  const user = new User(properties)
  return user.save()
}

UserMapper.updateUser = function (properties) {
  return User.updateOne({ email: properties.email }, properties).exec()
}

module.exports = UserMapper
