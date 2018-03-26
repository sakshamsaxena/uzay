/*
	Blog Post Mapper
*/

let mongoose = require('mongoose');
let blogSchema = require('../schema/BlogSchema.js');

let BlogPost = mongoose.model('BlogPost', blogSchema);
let BlogPostMapper = {};

/**
	Public Functions
*/

BlogPostMapper.GetBlogByID = function(id) {

	return BlogPost.findOne({_id: id}).exec();

};

module.exports = BlogPostMapper;
