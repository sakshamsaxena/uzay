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

UserModel.GetUserByID = function(id) {

	return User.findById(id).exec();

};

module.exports = UserModel;
