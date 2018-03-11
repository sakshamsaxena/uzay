/*
	User  Model
*/

let config = require('../../config/config.js');
let mongoose = require('mongoose');
let userSchema = require('../schema/UserSchema.js');
let User = mongoose.model('User', userSchema);
let UserModel = {};

mongoose.connect(config.MongoURL);

function handleError(err) {
	return null;
}

UserModel.GetUserByID

module.exports = UserModel;
