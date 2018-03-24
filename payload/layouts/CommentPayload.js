/*
	JSON Payload for a Comment
*/

const Payload = {
	Post: {
		Alias: '',
		PublishDate: '',
		Content: ''
	},
	User: {
		ID: '',
		ProfileURL: '',
		Age: '',
		Country: '',
		IsVerified: ''
	},
	Meta: {
		CommentID: '',
		BlogID: '',
		ParentCommentID: '',
		ChildrenCount: '',
		Likes: '',
		Dislikes: ''
	},
	Replies: [{
		/* Single Level Child Comment Payloads */
	}]
};

module.exports = Payload;
