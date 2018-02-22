/*
	Comment Model
*/

let config = require('../../config/config.js');
let mongoose = require('mongoose');
let commentSchema = require('../CommentSchema.js');

mongoose.connect(config.MongoURL);

let CommentPost = mongoose.model('CommentPost', commentSchema);

// CRD Operations
function CreateComment(argument) {
	// body...
}

function ReadComment(argument) {
	// body...
}

function DeleteComment(argument) {
	// body...
}