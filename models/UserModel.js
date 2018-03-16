/*
	User Model
*/

let mongoose = require('mongoose');
let userSchema = require('../schema/UserSchema.js');
const UserPayload = require('../payload/UserPayload.js');
const ErrorPayload = require('../payload/ErrorPayload.js');

let User = mongoose.model('User', userSchema);
let UserModel = {};

/**
	Public Functions
*/

UserModel.GetUserByAlias = function(alias) {

	return User.findOne({Alias: alias}).exec();

};

UserModel.GenerateUserInfoPayload = function(user) {

	let Payload = {};

	// Perform checks
	if (user === null) {
		// User does not exist
		Payload = ErrorPayload;

		// Set Payload's Error Messages
		Payload.Message = 'User does not exist';
	} else {
		// User exists, prepare payload
		Payload = UserPayload;

		// Not Sending Content
		delete Payload.Content;

		// Sending only info and liks
		Payload.Meta = {
			Alias: user.Alias,
			UserID: user._id,
			Email: user.Email,
			Bio: user.Bio,
			Age: user.Age,
			Country: user.Country,
			Verified: user.Verified,
			ProfileURL: '/User/' + user.Alias,
			BlogPostsURL: '/User/' + user.Alias + '/posts',
			CommentsURL: '/User/' + user.Alias + '/comments',
			LikedPostsURL: '/User/' + user.Alias + '/liked/posts',
			DislikedPostsURL: '/User/' + user.Alias + '/disliked/posts',
			LikedCommentsURL: '/User/' + user.Alias + '/liked/comments',
			DislikedCommentsURL: '/User/' + user.Alias + '/disliked/comments',
			CreatedOn: user.CreatedOn,
			LastModifiedOn: user.LastModifiedOn
		};
	}

	return Payload;
};

module.exports = UserModel;
