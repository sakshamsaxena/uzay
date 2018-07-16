let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userCredentialSchema = {
  Username: String,
  Email: String,
  Password: String,
  Bio: String,
  Age: Number,
  Country: String,
  VerificationToken: String,
  Verified: Boolean
};

module.exports = new Schema(userCredentialSchema);
