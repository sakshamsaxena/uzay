/*
  Blog Post Mapper
*/

let mongoose = require('mongoose')
let blogSchema = require('../schema/BlogSchema.js')
let autoIncrement = require('mongoose-plugin-autoinc')

// Add autoincrement plugin
blogSchema.plugin(autoIncrement.plugin, 'BlogPost')

let BlogPost = mongoose.model('BlogPost', blogSchema)
let BlogPostMapper = {}

/**
  Public Functions
  Assume Sanitized Parameters
*/

BlogPostMapper.GetBlogPostByID = function (id) {
  return BlogPost.findOne({_id: id}).exec()
}

BlogPostMapper.CreateBlogPost = function (properties) {
  let post = new BlogPost(properties)
  return post.save()
}

BlogPostMapper.UpdateBlogPost = function (properties) {
  return BlogPost.updateOne({_id: properties.id}, properties).exec()
}

BlogPostMapper.DeleteBlogPost = function (id) {
  return BlogPost.deleteOne({_id: id}).exec()
}

module.exports = BlogPostMapper
