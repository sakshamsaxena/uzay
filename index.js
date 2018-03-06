/* Require Modules */
const express = require('express');
const bodyParser = require('body-parser');

/* Require Routes */
const blog = require('./routes/Blog.js');
const comment = require('./routes/Comment.js');
const permalink = require('./routes/Permalink.js');
const search = require('./routes/Search.js');
const user = require('./routes/User.js');

/* Our App! */
const app = express();

/* Basic Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('json spaces', 4);

/* Routes */

// Render all other routes as HTTP 404 Not Found Error
app.use(function(req, res) {
	res.status(404).send({});
});

// Enable CORS
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

// Application Routes
app.use('/Blog', blog);
app.use('/Comment', comment);
app.use('/Permalink', permalink);
app.use('/Search', search);
app.use('/User', user);

/* Listen */
app.listen(3000, function() {
	console.log('Uzay live on port 3000!');
});

module.exports = app;
