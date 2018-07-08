const bcrypt = require('bcrypt');
const jsonparser = require('body-parser').json();
const moment = require('moment');
const mongoose = require('mongoose');
const jwt_simple = require('jwt-simple');
const config = require('../config/config');
const userCredentialSchema = require('../schema/userCredentialSchema');
const UserCredential = mongoose.model('UserCredential', userCredentialSchema);

let authenticate = {
  user_login: (req, res) => {
    mongoose.connect(config.MongoURL, {useNewUrlParser: true});
    UserCredential.findOne({Email: req.body.email}).exec().then(data => {
      if (data) {
        bcrypt.compare(req.body.password, data.Passphrase).then(result => {
          if (result) {
            let token = authenticate.generate_token(req.body.email, req.body.passhash);
            res.status(200).json({'message': 'Login successful!',
              'Authentication Token': token});
          } else {
            res.status(401).json({'message': 'Incorrect password!'});
          }
        });
      } else {
        res.status(401).json({'message': 'Email not registered!'});
      }
    }).catch(err => {
      res.status(500).json({'message': 'Server error!'});
    });
  },

  user_signup: (req, res) => {
    mongoose.connect(config.MongoURL, {useNewUrlParser: true});
    UserCredential.find({Email: req.body.email}).exec().then(data => {
      if (data.length === 1)  {
        bcrypt.hash(req.body.password, config.SALT_ROUNDS).then(passhash => {
          let token = authenticate.generate_token(req.body.email, passhash);
          var data = new UserCredential({Email: req.body.email,
            Passphrase: passhash,
            Token: token
          })
          data.save().then(result => {
            res.status(200).json({'message': 'Signup successful!',
              'Authentication Token': token});
          }).catch(err => {
            res.status(500).json({'message': 'Server error!', 'error': err});
          })
        }).catch(err => {
          res.status(500).json({'message': 'Server error!'});
        });
      } else {
        res.status(401).json({'message': 'Email already exists! Try another email!'})
      }
    }).catch(err => {
      res.status(500).json({'message': 'Server error!'});
    });
  },

  generate_token: (email, password) => {
    let token = jwt_simple.encode({
      email: email,
      passphrase: password,
      expires: moment().utc().add({days: 1}).unix()
    }, config.JWT_SECRET)
    return token
  },

  decode_token: (token) => {
    return jwt_simple.decode(token, config.JWT_SECRET)
  },

  allow: (token) => {
    let time_now = moment().utc().unix()
    let decoded = authenticate.decode_token(token)
    if (decoded.expires >= time_now) {
      return true
    } else {
      return false
    }
  }
}

module.exports = authenticate
