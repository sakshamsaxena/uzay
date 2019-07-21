/*
  Comment Schema
*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const commentSchema = {
  PostID: Number,
  User: {
    type: ObjectId,
    ref: 'User'
  },
  ParentCommentID: {
    type: Number,
    default: null
  },
  Children: {
    type: Number,
    default: 0
  },
  Content: String,
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

module.exports = new Schema(commentSchema)
