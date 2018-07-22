/*
	User Schema
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = {
	Alias: String,
	Passphrase: String,
	Email: String,
	Bio: String,
	Age: Number,
	Country: String,
	Verified: Boolean,
	VerificationToken: String,
	CreatedOn: {
		type: Date,
		default: Date.now
	},
	LastModifiedOn: {
		type: Date,
		default: Date.now
	},
	LikedPosts: [{
		type: Number
	}],
	DislikedPosts: [{
		type: Number
	}],
	LikedComments: [{
		type: Number
	}],
	DislikedComments: [{
		type: Number
	}]
};

module.exports = new Schema(userSchema);
