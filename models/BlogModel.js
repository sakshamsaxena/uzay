/*
	Blog Post Model
*/

let mongoose = require('mongoose');
let blogSchema = require('../schema/BlogSchema.js');

let BlogPost = mongoose.model('BlogPost', blogSchema);
let BlogPostModel = {};

/**
	Public Functions
*/

BlogPostModel.GetBlogPostByID = function(id) {

	return BlogPost.findById(id).exec();

};

module.exports = BlogPostModel;
