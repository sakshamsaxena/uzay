/*
  User Schema
*/

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = {
  Alias: String,
  Passphrase: String,
  Email: String,
  Bio: String,
  Age: Number,
  Country: String,
  Verified: Boolean,
  VerificationToken: String,
  CreatedOn: {
    type: Date,
    default: Date.now
  },
  LastModifiedOn: {
    type: Date,
    default: Date.now
  },
  LikedPosts: [{
    type: Number,
    ref: 'CommentPost'
  }],
  DislikedPosts: [{
    type: Number,
    ref: 'CommentPost'
  }],
  LikedComments: [{
    type: Number,
    ref: 'CommentPost'
  }],
  DislikedComments: [{
    type: Number,
    ref: 'CommentPost'
  }]
}

module.exports = new Schema(userSchema)
