/*
	User Schema
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

let userSchema = {
	_id : ObjectId,
	CanBlog : Boolean,
	CanComment : Boolean,
	Alias : String,
	Passphrase : String
};

module.exports = new Schema(userSchema);