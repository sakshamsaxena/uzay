/*
	Tags Model
*/

let mongoose = require('mongoose');
let tagsSchema = require('../schema/TagsSchema.js');

let TagModel = mongoose.model('Tag', tagsSchema);

module.exports = TagModel;
