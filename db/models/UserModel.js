/*
	User  Model
*/

let config = require('../../config/config.js');
let mongoose = require('mongoose');
let userSchema = require('../UserSchema.js');

mongoose.connect(config.MongoURL);

let User = mongoose.model('User', userSchema);

// CRD Operations
function CreateUser(argument) {
	// body...
}

function ReadUser(argument) {
	// body...
}

function DeleteUser(argument) {
	// body...
}