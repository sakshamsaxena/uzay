const bcrypt = require('bcrypt');
const jsonparser = require('body-parser').json();
const moment = require('moment');
const mongoose = require('mongoose');
const jwt_simple = require('jwt-simple');
const config = require('../config/config');
const userCredentialSchema = require('../schema/userCredentialSchema');
const UserCredential = mongoose.model('UserCredential', userCredentialSchema);

let authenticate = {
  allow: (req, res, next) => {
    let token = req.get('AuthToken')
    console.log(token)
    if (token === undefined) {
      res.status(403).json({
        message: 'AuthToken header not found! Resend request with AuthToken header'
      })
    } else {
      let time_now = moment().utc().unix()
      let decoded = authenticate.decode_token(token)
      if (decoded.expires >= time_now) {
        return next();
      } else {
        res.status(403).json({message: 'Token expired! Login again.'});
      }
    }
  },

  decode_token: (token) => {
    return jwt_simple.decode(token, config.JWT_SECRET)
  },

  generate_token: (email, password) => {
    let token = jwt_simple.encode({
      email: email,
      passphrase: password,
      expires: moment().utc().add({days: 1}).unix()
    }, config.JWT_SECRET)
    return token
  },

  user_login: (req, res) => {
    mongoose.connect(config.MongoURL, {useNewUrlParser: true});
    UserCredential.findOne({Email: req.body.email}).exec().then(data => {
      if (data) {
        bcrypt.compare(req.body.password, data.Passphrase).then(result => {
          if (result) {
            let token = authenticate.generate_token(req.body.email, req.body.passhash);
            res.status(200).json({message: 'Login successful!',
              AuthToken: token});
          } else {
            res.status(401).json({message: 'Incorrect password!'});
          }
        });
      } else {
        res.status(401).json({message: 'Email not registered!'});
      }
    }).catch(err => {
      res.status(500).json({message: 'Server error!'});
    });
  },

  user_signup: (req, res) => {
    mongoose.connect(config.MongoURL, {useNewUrlParser: true});
    UserCredential.find({Email: req.body.email}).exec().then(data => {
      if (data.length === 0)  {
        bcrypt.hash(req.body.password, config.SALT_ROUNDS).then(passhash => {
          let token = authenticate.generate_token(req.body.email, passhash);
          var data = new UserCredential({Email: req.body.email,
            Passphrase: passhash,
            Token: token
          })
          data.save().then(result => {
            res.status(200).json({message: 'Signup successful!',
              AuthToken: token});
          }).catch(err => {
            console.log("SHIT1")
            res.status(500).json({message: 'Server error!', error: err});
          })
        }).catch(err => {
          res.status(500).json({message: 'Server error!', error: err});
        });
      } else {
        res.status(401).json({message: 'Email already exists! Try another email!'})
      }
    }).catch(err => {
      res.status(500).json({message: 'Server error!'});
    });
  }
}

module.exports = authenticate;
