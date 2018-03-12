/*
	Tags Model
*/

let config = require('../config/config.js');
let mongoose = require('mongoose');
let tagsSchema = require('../schema/TagsSchema.js');

mongoose.connect(config.MongoURL);

let TagModel = mongoose.model('Tag', tagsSchema);

module.exports = TagModel;
