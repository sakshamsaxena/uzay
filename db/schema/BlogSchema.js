/*
	Blog Post Schema
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = mongoose.Schema.Types.ObjectId;

let blogSchema = {
	_id : ObjectId,
	UserID : ObjectId,
	Title : String,
	Tags : [{type : String}],
	Views : {type : Number, default : 1},
	Permalink : String,
	Content: String,
	Likes : {type : Number, default : 0},
	Dislikes : {type : Number, default : 0},
	PublishDate : {
		type : Date,
		default : Date.now
	}
};

module.exports = new Schema(blogSchema);