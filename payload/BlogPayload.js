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
		/* Comment Payload */
	}]
};

module.exports = Payload;
