let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userCredentialSchema = {
  Email: String,
  Passphrase: String,
  Token: String
};

module.exports = new Schema(userCredentialSchema);
