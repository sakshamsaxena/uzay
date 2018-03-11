/*
	Blog Post Model
*/

let config = require('../../config/config.js');
let mongoose = require('mongoose');
let blogSchema = require('../schema/BlogSchema.js');
let BlogPost = mongoose.model('BlogPost', blogSchema);
let BlogPostModel = {};

mongoose.connect(config.MongoURL);

function handleError(err) {
	console.log("Here");
	return "Error";
}

BlogPostModel.GetBlogPostByID = function(id) {

	BlogPost.findById(id, function(err, doc) {
		console.log("Checking");
		console.log(doc);
		if (err) {
			return handleError(err);
		} else {
			return doc;
		}
		mongoose.connection.close();
	});
};

BlogPostModel.GetBlogPostsByTagName = function(tag, params) {
	var posts = null;
	var offset = (page - 1) * 20;

	BlogPost.find({Tags: tag}, function(err, doc) {
		if (err) {
			handleError(err);
		} else {
			post = doc;
		}
	}).skip(offset).limit(20);

	return post;
};

BlogPostModel.GetBlogPostsByAlias = function(alias, params) {
	var posts = null;
	var offset = (page - 1) * 20;

	BlogPost.find({Tags: tag}, function(err, doc) {
		if (err) {
			handleError(err);
		} else {
			post = doc;
		}
	}).skip(offset).limit(20);

	return post;
};

module.exports = BlogPostModel;
