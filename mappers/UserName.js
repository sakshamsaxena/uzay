/*
  User Name Mapper
*/

const mongoose = require('mongoose')
const userNameSchema = require('../schema/UserNameSchema.js')

const UserName = mongoose.model('UserName', userNameSchema)
const UserNameMapper = {}

/**
  Public Functions
*/

UserNameMapper.GetUserByAlias = function (alias) {
  return UserName.findOne({ Alias: alias }).exec()
}

module.exports = UserNameMapper
