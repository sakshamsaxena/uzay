const bcrypt = require('bcrypt');
const jsonparser = require('body-parser').json()
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const uuid = require('uuid/v4');
const config = require('../config/config');
const userCredentialSchema = require('../schema/userCredentialSchema');
const UserCredential = mongoose.model('UserCredential', userCredentialSchema);

let register = {
  user_signup: (req, res) => {
    mongoose.connect(config.MongoURL, {useNewUrlParser: true});
    UserCredential.find({$or: [
      {Email: req.body.Email},
      {Username: req.body.Username}
    ]}).exec().then(data => {
      if (data.length === 0) {
        bcrypt.hash(req.body.Password, config.SALT_ROUNDS).then(passhash => {
          var userdata = new UserCredential({
            Username: req.body.Username,
            Email: req.body.Email,
            Passphrase: passhash,
            Age: req.body.Age,
            Country: req.body.Country,
            VerificationToken: uuid(),
            Verified: false
          });
          userdata.save().then(result => {
            res.status(200).json({
              message: 'Signup successful! Proceed to verification.',
              AuthToken: userdata.VerificationToken
            });
          });
        });
      } else {
        if (data[0].Username === req.body.Username) {
          res.status(401).json({
            message: 'Username already taken! Try another username.'
          });
        } else {
          res.status(401).json({
            message: 'Email already exists! Try another email!'
          });
        }
      }
    }).catch(err => {
      res.status(500).json({message: 'Server error!'});
    });
  },

  verify: (req, res) => {
    mongoose.connect(config.MongoURL, {useNewUrlParser: true});
    UserCredential.findOne({
      VerificationToken: req.params.verificationtoken
    }).exec().then(data => {
      if (data) {
        if (data.Verified === true) {
          res.status(200).json({
            message: 'Already verified!'
          });
        } else {
          UserCredential.update(
            {_id: data.id},
            {$set: {Verified: true}}
          ).then(result => {
            res.status(200).json({
              message: 'Verification successful!'
            });
          });
        }
      } else {
        res.status(401).json({
          message: 'Invalid verification token!'
        });
      }
    }).catch(err => {
      res.status(500).json({message: 'Server error!'});
    });
  }
};

module.exports = register;
