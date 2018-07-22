const jwt = require('jsonwebtoken')
const config = require('../config/config')

let authenticate = {
  generateToken: (email, password, cb) => {
    let payload = {
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
    let token = req.get('AuthToken')
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

module.exports = authenticate
