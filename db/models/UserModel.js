/*
	User  Model
*/

let config = require('../../config/config.js');
let mongoose = require('mongoose');
let userSchema = require('../UserSchema.js');

mongoose.connect(config.MongoURL);

let UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
