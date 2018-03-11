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
		'ProfileURL': '',
		'Bio': '',
		'Age': '',
		'Country': '',
		'IsVerified': ''
	},
	Meta: {
		'CommentID': '',
		'BlogID': '',
		'ParentCommentID': '',
		'CommentURL': '',
		'ChildrenCount': '',
		'Likes': '',
		'Dislikes': ''
	},
	Replies: [{
		/* Single Level Child Comment Payloads */
	}]
};

module.exports = Payload;
