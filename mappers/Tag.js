/*
	Tags Mapper
*/

let mongoose = require('mongoose');
let tagsSchema = require('../schema/TagsSchema.js');

let Tag = mongoose.model('Tag', tagsSchema);
let TagMapper = {};

/**
	Public Functions
*/

TagMapper.GetBlogPostsByTag = function(tag) {

	return Tag.find({}).exec();
};

module.exports = TagMapper;
