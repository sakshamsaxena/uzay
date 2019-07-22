/*
  User Name Schema
*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userNameSchema = {
  UserID: mongoose.Schema.Types.ObjectId,
  Alias: String
}

module.exports = new Schema(userNameSchema)
