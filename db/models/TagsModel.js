/*
	Tags Model
*/

let config = require('../../config/config.js');
let mongoose = require('mongoose');
let tagsSchema = require('../TagsSchema.js');

mongoose.connect(config.MongoURL);

let TagModel = mongoose.model('Tag', tagsSchema);