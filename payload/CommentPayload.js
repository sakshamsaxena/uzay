/*
	JSON Payload for a Comment
*/

const Payload = {
	Post: {
		'Alias': '',
		'PublishDate': '',
		'Content': ''
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
		'CommentID': '',
		'BlogID': '',
		'ParentCommentID': '',
		'ChildrenCount': '',
		'Permalink': '',
		'Likes': '',
		'Dislikes': ''
	},
	Replies: [{
		/* Single Level Child Comment Payloads */
	}]
};

module.exports = Payload;
