/*
	Comment Schema
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

let commentSchema = {
	_id : ObjectId,
	PostID : ObjectId,
	UserID : ObjectId,
	ParentCommentID : ObjectId,
	Children : Number,
	Permalink : String,
	Content: String,
	Likes : Number,
	Dislikes : Number,
	PublishDate : {
		type : Date,
		default : Date.now
	}
};

module.exports = new Schema(commentSchema);