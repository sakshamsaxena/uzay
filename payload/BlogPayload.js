/*
	JSON Response for a Blog Post
*/

const Payload = {
	BlogPost: {
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
	Misc: {
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

module.exportd = Payload;
