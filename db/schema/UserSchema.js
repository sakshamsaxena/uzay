/*
	User Schema
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

let userSchema = {
	_id : ObjectId,
	Alias : String,
	Passphrase : String,
	Email : String,
	VerificationToken : String,
	Verified : Boolean
};

module.exports = new Schema(userSchema);