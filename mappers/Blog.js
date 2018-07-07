/*
	Blog Post Mapper
*/

let mongoose = require('mongoose');
let blogSchema = require('../schema/BlogSchema.js');
let autoIncrement = require('mongoose-plugin-autoinc');

// Add autoincrement plugin
blogSchema.plugin(autoIncrement.plugin, 'BlogPost');

let BlogPost = mongoose.model('BlogPost', blogSchema);
let BlogPostMapper = {};



/**
	Public Functions
*/

BlogPostMapper.GetBlogByID = function(id) {

	return BlogPost.findOne({_id: id}).exec();

};


BlogPostMapper.createBlogPost = function(properties) {
	let post = new BlogPost(properties);
	post.save();
};

BlogPostMapper.updateBlogPost = function(properties) {
	BlogPost.updateOne({_id: properties.id}, properties).exec();
};

BlogPostMapper.deleteBlogPost = function(id) {
	BlogPost.deleteOne({_id: id}).exec();
}

module.exports = BlogPostMapper;
