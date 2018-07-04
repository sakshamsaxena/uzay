const bcrypt = require('bcrypt')
const moment = require('moment')
const jwt_simple = require('jwt-simple')
const keys = require('./keys')

let authenticate = {
  generate_token: (email, password) => {
    let token = jwt_simple.encode({
      email: email,
      passphrase: password,
      expires: moment().utc().add({days: 1}).unix()
    }, keys.JWT_SECRET)
    return token
  },

  decode_token: (token) => {
    return jwt_simple.decode(token, keys.JWT_SECRET)
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
