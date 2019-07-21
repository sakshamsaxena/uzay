/*
  Blog Post Mapper
*/

const mongoose = require('mongoose')
const blogSchema = require('../schema/BlogSchema.js')
const autoIncrement = require('mongoose-plugin-autoinc')

// Add autoincrement plugin
blogSchema.plugin(autoIncrement.plugin, 'BlogPost')

const BlogPost = mongoose.model('BlogPost', blogSchema)
const BlogPostMapper = {}

/**
  Public Functions
  Assume Sanitized Parameters
*/

BlogPostMapper.GetBlogPostByID = function (id, opts) {
  return BlogPost.findById(id).lean().exec()
}

BlogPostMapper.GetBlogPostByTag = function (tag, opts) {
  return BlogPost.find({ Tag: tag }).exec()
}

BlogPostMapper.CreateBlogPost = function (data, opts) {
  const post = new BlogPost(data)
  return post.save()
}

BlogPostMapper.UpdateBlogPost = function (id, data, opts) {
  return BlogPost.updateOne({ _id: id }, data).exec()
}

BlogPostMapper.DeleteBlogPost = function (id, opts) {
  return BlogPost.deleteOne({ _id: id }).exec()
}

module.exports = BlogPostMapper
