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

	return BlogPost.findOne({_id: id}).exec();

};

module.exports = BlogPostModel;
