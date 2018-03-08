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
		'Permalink': '',
		'Bio': '',
		'Age': '',
		'Country': '',
		'IsVerified': ''
	},
	Meta: {
		'BlogID': '',
		'Permalink': '',
		'TwitterSharer': '',
		'FaceBookSharer': '',
		'Likes': '',
		'Dislikes': '',
		'Views': '',
		'CommentsCount': ''
	},
	Tags: [{
		'TagName': '',
		'Permalink': ''
	}],
	Comments: [{
		/* Single Level Comment Payload */
	}]
};

module.exports = Payload;
