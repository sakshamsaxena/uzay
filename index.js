/* Required modules */
var app = require('express')();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var blog = require('./routes/BlogPost.js');
var comment = require('./routes/CommentPost.js');

/* Basic Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.get('/', function(req, res) {
	res.send('Hello World')
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