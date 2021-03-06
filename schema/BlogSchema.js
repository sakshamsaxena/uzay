/*
  Blog Post Schema
*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

var blogSchema = {
  User: {
    type: ObjectId
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

blogSchema = new Schema(blogSchema, { toJSON: { virtuals: true } })

blogSchema.virtual('UserName', {
  ref: 'UserName',
  localField: 'User',
  foreignField: 'UserID',
  justOne: true
})

module.exports = blogSchema
