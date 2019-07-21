/*
  Tags Schema
*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagsSchema = {
  Tag: String,
  Posts: [{
    type: Number,
    ref: 'BlogPost'
  }]
}

module.exports = new Schema(tagsSchema)
