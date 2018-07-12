let authenticator = require('express').Router();
let auth = require('../logic/Authentication');

authenticator.post('/login', auth.user_login);
authenticator.post('/signup', auth.user_signup);

module.exports = authenticator;
