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

module.exports = CommentMapper;
