let reg = require('express').Router()
let register = require('../logic/Registration')

reg.post('/signup', register.user_signup)
reg.get('/verify/:verificationtoken', register.verify)

module.exports = reg
