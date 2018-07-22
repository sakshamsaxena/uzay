/*
    Auth.js
*/
var express = require('express')
var Logic = require('../logic/Authentication.js')

var Auth = express.Router()

Auth.post('/signup', function (req, res) {
  // Validate Request Body
  var User = req.body

  // Sign Up
  Logic.SignUp(User)
})

Auth.get('/verify/:verificationToken', function (req, res) {
  // Validate Token
  var Token = req.params.verificationToken

  // Verify Token
  Logic.Verify(Token)
})

module.exports = Auth
