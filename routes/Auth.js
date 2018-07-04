let bcrypt = require('bcrypt');
let mongoose = require('mongoose');
let router = require('express').Router();
let jsonparser = require('body-parser').json();
let keys = require('../config/keys');
let auth = require('../config/auth');
let logic = require('../logic/Login');

router.post('/login', jsonparser, (req, res) => {
  mongoose.connect(keys.MongoURL);
  logic.Login(req.body.email).then(data => {
    if (data) {
      bcrypt.compare(req.body.password, data.Passphrase).then(result => {
        if (result) {
          let token = auth.generate_token(req.body.email, req.body.passhash);
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
});

router.post('/signup', jsonparser, (req, res) => {
  mongoose.connect(keys.MongoURL);
  bcrypt.hash(req.body.password, keys.SALT_ROUNDS).then(passhash => {
    let token = auth.generate_token(req.body.email, passhash);
    logic.Signup(req.body.email, passhash, token).then(result => {
      res.status(200).json({'message': 'Signup successful!',
        'Authentication Token': token});
    });
  }).catch(err => {
    res.status(500).json({'message': 'Server error!'});
  });
});

module.exports = router;
