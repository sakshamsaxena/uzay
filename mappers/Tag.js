/*
  Tags Mapper
*/

const mongoose = require('mongoose')
const tagsSchema = require('../schema/TagsSchema.js')

const Tag = mongoose.model('Tag', tagsSchema)
const TagMapper = {}

/**
  Public Functions
*/

TagMapper.GetBlogPostsByTag = function (tag) {
  return Tag.find({}).exec()
}

TagMapper.createTag = function (properties) {
  const tag = new Tag(properties)
  return tag.save()
}

TagMapper.updateTag = function (properties) {
  return Tag.updateOne({ Tag: properties.Tag }, properties).exec()
}

module.exports = TagMapper
