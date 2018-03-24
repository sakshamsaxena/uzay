/*
	JSON Response for a Blog Post
*/

const Payload = {
	Post: {
		Title: '',
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
		BlogID: '',
		BlogURL: '',
		Likes: '',
		Dislikes: '',
		Views: '',
		CommentsCount: ''
	},
	Tags: [{
		TagName: '',
		BrowseURL: ''
	}],
	Comments: [{
		/* Comment Payload */
	}]
};

module.exports = Payload;
