/*
    Auth.js
*/
var express = require('express')
var Logic = require('../logic/Authentication.js')

var Auth = express.Router()

/**
 * @api {post} /auth/signup Sign Up
 * @apiName SignUp

 * @apiGroup Authentication
 * @apiPermission Public

 * @apiParam (POST Parameters) {String=true,false} [includeComments=false]
 * Option to specifiy whether to include comments in the payload or not.

 * @apiExample {json} Sample POST Payload
 *    {
 *      "foo": "bar"
 *    }

 * @apiSuccessExample {json} Success-Response:
 *    HTTP /1.1 200 OK
 *    {
 *      "sample": true
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP /1.1 403 FORBIDDEN
 *    {
 *      "sample": false
 *    }
*/

Auth.post('/signup', function (req, res) {
  // Validate Request Body
  var User = req.body

  // Sign Up
  Logic.SignUp(User)
})

/**
 * @api {get} /Auth/verify/:verificationToken Verify User
 * @apiName VerifyUser

 * @apiGroup Authentication
 * @apiPermission Needs Authentication

 * @apiHeader (Headers) {String} Autorization:Bearer
 * Example : `Autorization: Bearer TOKEN`, where TOKEN is your Bearer Token

 * @apiParam (URL Parameters) {String=true,false} verificationToken
 * Option to specifiy whether to include comments in the payload or not.

 * @apiSuccessExample {json} Success-Response:
 *    HTTP /1.1 200 OK
 *    {
 *      "sample": true
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP /1.1 403 FORBIDDEN
 *    {
 *      "sample": false
 *    }
*/

Auth.get('/verify/:verificationToken', function (req, res) {
  // Validate Token
  var Token = req.params.verificationToken

  // Verify Token
  // Logic.Verify(Token)
  res.send({
    'Token': Token
  })
})

module.exports = Auth
