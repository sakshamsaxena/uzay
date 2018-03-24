/*
	Tags Model
*/

let mongoose = require('mongoose');
let tagsSchema = require('../schema/TagsSchema.js');

let Tag = mongoose.model('Tag', tagsSchema);
let TagModel = {};

/**
	Public Functions
*/

TagModel.GetBlogPostsByTag = function(tag) {

	return Tag.find({}).exec();
};

module.exports = TagModel;
