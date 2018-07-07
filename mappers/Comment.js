/*
	Comment Mapper
*/

let mongoose = require('mongoose');
let commentSchema = require('../schema/CommentSchema.js');

let Comment = mongoose.model('CommentPost', commentSchema);
let CommentMapper = {};

/**
	Public Functions
*/

CommentMapper.GetChildComments = function(parentID) {

	return Comment.find({}).exec();
};

CommentMapper.GetCommentsByPostID = function(id, includeComments) {

	if (includeComments) {
		return Comment.find({PostID: id}).exec();
	} else {
		return new Promise(function(resolve, reject) {
			resolve({});
		});
	}
};

CommentMapper.createComment = function(properties) {
	let comment = new Comment(properties);
	return comment.save();
};

CommentMapper.updateComment = function(properties) {
	return Comment.updateOne({_id: properties.id}, properties).exec();
};

CommentMapper.deleteComment = function(id) {
	return Comment.deleteOne({_id: id}).exec();
};

module.exports = CommentMapper;
