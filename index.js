/* Require Modules */
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

/* Require Routes */
const blog = require('./routes/Blog.js');
const user = require('./routes/User.js');
const auth = require('./routes/Auth.js');
const authenticate = require('./logic/Authentication.js');

/* Our App! */
const app = express();

/* Basic Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.set('json spaces', 4);

/* Routes */

// Enable CORS
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Content-Type', 'application/json; charset=utf-8');
	next();
});

app.all("/" + "*", (req, res, next) => {
  if (req.path == '/Auth' || req.path == '/Auth/login' || req.path == '/Auth/signup') {
    return next();
  }
	else if (req.get('AuthToken') === undefined) {
		res.status(403).json({message: "AuthToken not found! Resend request with AuthToken!"})
	} else {
	  let token = authenticate.allow(req.get('AuthToken'))
	  if (token) {
			next();
	  } else {
			res.status(403).send('Token expired! Login again.');
		}
	}
})

// Application Routes
app.use('/Blog', blog);
app.use('/User', user);
app.use('/Auth', auth);

// Render any other route than the ones defined anywhere in app as HTTP 404
app.use(function(req, res) {
	res.status(404).send('Ain\'t no path like this.');
});

/* Listen */
app.listen(3000, function() {
	console.log('Uzay live on port 3000!');
});

module.exports = app;
