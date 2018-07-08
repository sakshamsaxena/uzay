let bcrypt = require('bcrypt');
let mongoose = require('mongoose');
let router = require('express').Router();
let auth = require('../logic/Authentication');
// let logic = require('../logic/Login');

router.post('/login', auth.user_login);
router.post('/signup', auth.user_signup);

module.exports = router;
