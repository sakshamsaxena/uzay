/*
	User Schema
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = mongoose.Schema.Types.ObjectId;

let userSchema = {
	_id: ObjectId,
	Alias: String,
	Passphrase: String,
	Email: String,
	Age: Number,
	Country: String,
	Verified: Boolean,
	VerificationToken: String
};

module.exports = new Schema(userSchema);
