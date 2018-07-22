/*
  Function Factory to process all Authentication
*/

var uuid = require('uuid/v4')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var mongoose = require('mongoose')
var config = require('../config/config.js')
var UserSchema = require('../schema/UserSchema.js')
var UserCredential = mongoose.model('User', UserSchema)

var Authentication = {
  SignUp: (req, res) => {
    mongoose.connect(config.MongoURL, {useNewUrlParser: true})
    UserCredential.find({$or: [
      {Email: req.body.Email},
      {Alias: req.body.Alias}
    ]}).exec().then(data => {
      if (data.length === 0) {
        bcrypt.hash(req.body.Password, config.SALT_ROUNDS).then(passhash => {
          var userdata = new UserCredential({
            Alias: req.body.Alias,
            Email: req.body.Email,
            Passphrase: passhash,
            Age: req.body.Age,
            Country: req.body.Country,
            VerificationToken: uuid(),
            Verified: false
          })
          console.log(userdata)
          userdata.save().then(result => {
            res.status(200).json({
              message: 'Signup successful! Proceed to verification.',
              AuthToken: userdata.VerificationToken
            })
          })
        })
      } else {
        if (data[0].Alias === req.body.Alias) {
          res.status(401).json({
            message: 'Alias already taken! Try another alias.'
          })
        } else {
          res.status(401).json({
            message: 'Email already exists! Try another email!'
          })
        }
      }
    }).catch(err => {
      res.status(500).json({message: 'Server error : \n' + err})
    })
  },

  Verify: (req, res) => {
    mongoose.connect(config.MongoURL, {useNewUrlParser: true})
    UserCredential.findOne({
      VerificationToken: req.params.verificationtoken
    }).exec().then(data => {
      if (data) {
        if (data.Verified === true) {
          res.status(200).json({
            message: 'Already verified!'
          })
        } else {
          UserCredential.update(
            {VerificationToken: req.params.verificationtoken},
            {$set: {Verified: true}}
          ).then(result => {
            res.status(200).json({
              message: 'Verification successful!'
            })
          })
        }
      } else {
        res.status(401).json({
          message: 'Invalid verification token!'
        })
      }
    }).catch(err => {
      res.status(500).json({message: 'Server error : \n' + err})
    })
  },
  generateToken: (email, password, cb) => {
    var payload = {
      Email: email,
      Password: password
    }
    jwt.sign(payload, config.JWT_SECRET, (err, token) => {
      if (err) {
        cb(err, null)
      } else {
        cb(null, token)
      }
    })
  },

  allow: (req, res, next) => {
    var token = req.get('AuthToken')
    if (token === undefined) {
      res.status(401).json({
        message: 'AuthToken header not found! Resend request with AuthToken header'
      })
    } else {
      jwt.verify(token, config.JWT_SECRET, (err, payload) => {
        if (err) {
          res.status(401).json({
            message: 'Verification failed!',
            error: err
          })
        } else {
          return next()
        }
      })
    }
  }
}

module.exports = Authentication
