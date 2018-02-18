/*
	Blog Post Schema
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

let blogSchema = {
	_id : ObjectId,
	UserID : ObjectId,
	Title : String,
	Tags : [{type : String}],
	Views : Number,
	Permalink : String,
	Content: String,
	Likes : Number,
	Dislikes : Number,
	PublishDate : {
		type : Date,
		default : Date.now
	}
};

module.exports = new Schema(blogSchema);