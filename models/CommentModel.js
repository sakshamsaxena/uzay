/*
	Comment Model
*/

let mongoose = require('mongoose');
let commentSchema = require('../schema/CommentSchema.js');

let Comment = mongoose.model('CommentPost', commentSchema);
let CommentModel = {};

/**
	Public Functions
*/

CommentModel.GetChildComments = function(parentID) {

	return Comment.find({}).exec();
};

module.exports = CommentModel;
