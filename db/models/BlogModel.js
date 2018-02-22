/*
	Blog Post Model
*/

let config = require('../../config/config.js');
let mongoose = require('mongoose');
let blogSchema = require('../BlogSchema.js');

mongoose.connect(config.MongoURL);

let BlogPost = mongoose.model('BlogPost', blogSchema);

// CRD Operations
function CreateBlogPost(argument) {
	// body...
}

function ReadBlogPost(argument) {
	// body...
}

function DeleteBlogPost(argument) {
	// body...
}