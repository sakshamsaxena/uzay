/*
  Blog Post Schema
*/

let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = mongoose.Schema.Types.ObjectId

let blogSchema = {
  _id: Number,
  UserID: ObjectId,
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
