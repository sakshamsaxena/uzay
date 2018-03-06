/*
	JSON Payload for a Blog Post(s) Resource
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
	}]
};

module.exportd = Payload;
