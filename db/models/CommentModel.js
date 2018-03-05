/*
	Comment Model
*/

let config = require('../../config/config.js');
let mongoose = require('mongoose');
let commentSchema = require('../CommentSchema.js');

mongoose.connect(config.MongoURL);

let CommentModel = mongoose.model('CommentPost', commentSchema);

module.exports = CommentModel;
