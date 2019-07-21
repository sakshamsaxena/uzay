/* Require Modules */
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')

/* Require Routes */
const auth = require('./routes/Auth.js')
const blog = require('./routes/Blog.js')
const user = require('./routes/User.js')

/* Our App! */
const app = express()

/* Basic Middlewares */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('json spaces', 4)

/* Use Logging */
const validEnvForLogger = [
  'DEBUG',
  'STAGING',
  'PRODUCTION'
]
if (validEnvForLogger.indexOf(process.env.NODE_ENV) !== -1) {
  app.use(logger('dev'))
}

/* Routes */

// Enable CORS, Set Response Type as JSON
app.use(function (_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Content-Type', 'application/json; charset=utf-8')
  next()
})

// Application Routes
app.use('/Auth', auth)
app.use('/Blog', blog)
app.use('/User', user)

// Render any other route than the ones defined anywhere in app as HTTP 404
app.use(function (_req, res) {
  res.status(404).send({
    Message: '',
    DocsURL: 'DocsURL'
  })
})

/* Listen only when not running Tests */
if (process.env.NODE_ENV !== 'TESTING') {
  app.listen(3000, function () {
    console.log('Uzay live on port 3000!')
  })
}

module.exports = app
