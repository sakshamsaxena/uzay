/*
  User Schema
*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = {
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
    ref: 'BlogPost'
  }],
  DislikedPosts: [{
    type: Number,
    ref: 'BlogPost'
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
