/*
	JSON Response for a Blog Post
*/

const Payload = {
	Post: {
		'Title': '',
		'PublishDate': '',
		'Content': '',
		'Alias': ''
	},
	User: {
		'ID': '',
		'ProfileURL': '',
		'Bio': '',
		'Age': '',
		'Country': '',
		'IsVerified': ''
	},
	Meta: {
		'BlogID': '',
		'BlogURL': '',
		'TwitterSharer': '',
		'FaceBookSharer': '',
		'Likes': '',
		'Dislikes': '',
		'Views': '',
		'CommentsCount': ''
	},
	Tags: [{
		'TagName': '',
		'BrowseURL': ''
	}],
	Comments: [{
		/* Single Level Comment Payload */
	}]
};

module.exports = Payload;
