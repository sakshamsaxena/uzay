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
    type: mongoose.Schema.Types.Number,
    ref: 'BlogPost'
  }],
  DislikedPosts: [{
    type: mongoose.Schema.Types.Number,
    ref: 'BlogPost'
  }],
  LikedComments: [{
    type: mongoose.Schema.Types.Number,
    ref: 'BlogPost'
  }],
  DislikedComments: [{
    type: mongoose.Schema.Types.Number,
    ref: 'BlogPost'
  }]
}

module.exports = new Schema(userSchema)
