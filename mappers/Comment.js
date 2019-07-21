/*
  Comment Mapper
*/

const mongoose = require('mongoose')
const commentSchema = require('../schema/CommentSchema.js')
const autoIncrement = require('mongoose-plugin-autoinc')

// Add autoincrement plugin
commentSchema.plugin(autoIncrement.plugin, 'CommentPost')

const Comment = mongoose.model('CommentPost', commentSchema)
const CommentMapper = {}

/**
  Public Functions
*/

CommentMapper.GetChildComments = function (parentID) {
  return Comment.find({}).exec()
}

CommentMapper.GetCommentsByPostID = function (id, includeComments) {
  if (includeComments) {
    return Comment.find({ PostID: id }).exec()
  } else {
    return new Promise(function (resolve, reject) {
      resolve({})
    })
  }
}

CommentMapper.createComment = function (properties) {
  const comment = new Comment(properties)
  return comment.save()
}

CommentMapper.updateComment = function (properties) {
  return Comment.updateOne({ _id: properties.id }, properties).exec()
}

CommentMapper.deleteComment = function (id) {
  return Comment.deleteOne({ _id: id }).exec()
}

module.exports = CommentMapper
