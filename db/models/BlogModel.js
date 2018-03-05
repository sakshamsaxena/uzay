/*
	Blog Post Model
*/

let config = require('../../config/config.js');
let mongoose = require('mongoose');
let blogSchema = require('../BlogSchema.js');

mongoose.connect(config.MongoURL);

let BlogPostModel = mongoose.model('BlogPost', blogSchema);

module.exports = BlogPostModel;
