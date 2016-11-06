/* Required modules */
var app = require('express')();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var blog = require('./routes/BlogPost.js');
var comment = require('./routes/CommentPost.js');

/* Basic Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Routes */
app.get('/', function(req, res) {
	res.send('Hello World')
});

app.use('/blog', blog);
app.use('/comment', comment);

/* Listen */
app.listen(3000, function() {
	console.log('Example app listening on port 3000!')
});