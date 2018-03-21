/*
	User Model
*/

let mongoose = require('mongoose');
let userSchema = require('../schema/UserSchema.js');

let User = mongoose.model('User', userSchema);
let UserModel = {};

/**
	Public Functions
*/

UserModel.GetUserByAlias = function(alias) {

	return User.findOne({Alias: alias}).exec();

};

module.exports = UserModel;
