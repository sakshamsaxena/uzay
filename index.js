/* Required modules */
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var blog = require('./routes/BlogPost.js');
var comment = require('./routes/CommentPost.js');

var app = express();

/* Basic Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('json spaces', 4);

/* Routes */

app.get('/', function(req, res) {
	res.render('Home');
});
app.get('/admin', function(req, res) {
	res.render('Admin');
});
app.use('/blog', blog);
app.use('/comment', comment);

/* Render all other routes as HTTP 404 Not Found Error */
app.use(function(req, res) {
	res.status(404).send({});
})

/* Listen */
app.listen(3000, function() {
	console.log('Example app listening on port 3000!')
});

module.exports = app;