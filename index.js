/* Require Modules */
const express = require('express')
const bParser = require('body-parser')
const morgan = require('morgan')
const util = require('./util/Util')

/* Require Routes */
const auth = require('./routes/Auth.js')
const blog = require('./routes/Blog.js')
const user = require('./routes/User.js')

/* Our App! */
const app = express()

/* Basic Middlewares */
app.use(bParser.json())
app.use(bParser.urlencoded({ extended: true }))
app.set('json spaces', 4)

/* Logging */
const loggerMode = util.useLogger(process.env.NODE_ENV)
if (loggerMode) {
  app.use(morgan(loggerMode))
}

/* Routes */

// Enable CORS, Set Response Type as JSON
app.use(function (_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Content-Type', 'application/json; charset=utf-8')
  next()
})

// Attach Mongo URLs to req object
app.use(function (_req, res, next) {
  res.locals.mongoUri = util.getMongoUrl(process.env.NODE_ENV)
  next()
})

// Application Routes
app.use('/auth', auth)
app.use('/blog', blog)
app.use('/user', user)

// Render any other route than the ones defined anywhere in app as HTTP 404
app.use(function (_req, res) {
  res.status(404).send({
    Message: '',
    DocsURL: 'https://sakshamsaxena.github.io/uzay'
  })
})

/* Listen only when not running Tests */
if (util.startServer(process.env.NODE_ENV)) {
  app.listen(3000, function () {
    console.log('Uzay live on port 3000!')
  })
}

module.exports = app
