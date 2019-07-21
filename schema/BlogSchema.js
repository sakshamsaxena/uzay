/*
  Blog Post Schema
*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const blogSchema = {
  User: {
    type: ObjectId,
    ref: 'User'
  },
  Title: String,
  Tags: [{
    type: String
  }],
  Content: String,
  Views: {
    type: Number,
    default: 1
  },
  Likes: {
    type: Number,
    default: 0
  },
  Dislikes: {
    type: Number,
    default: 0
  },
  PublishDate: {
    type: Date,
    default: Date.now
  }
}

module.exports = new Schema(blogSchema)
