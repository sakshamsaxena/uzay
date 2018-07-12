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

TagMapper.createTag = function(properties) {
	let tag = new Tag(properties);
	return tag.save();
};

TagMapper.updateTag = function(properties) {
	return Tag.updateOne({Tag: properties.Tag}, properties).exec();
};

module.exports = TagMapper;
