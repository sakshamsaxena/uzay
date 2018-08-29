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
  return BlogPost.findById(id).exec()
}

BlogPostMapper.GetBlogPostByTag = function (tag, opts) {
  return BlogPost.find({'Tag': tag}).exec()
}

BlogPostMapper.CreateBlogPost = function (data) {
  let post = new BlogPost(data)
  return post.save()
}

BlogPostMapper.UpdateBlogPost = function (id, data) {
  return BlogPost.updateOne({_id: id}, data).exec()
}

BlogPostMapper.DeleteBlogPost = function (id) {
  return BlogPost.deleteOne({_id: id}).exec()
}

module.exports = BlogPostMapper
