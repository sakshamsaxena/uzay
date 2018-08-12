/*
  Tags Schema
*/

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let tagsSchema = {
  Tag: String,
  Posts: [{
    type: Number,
    ref: 'BlogPost'
  }]
}

module.exports = new Schema(tagsSchema)
