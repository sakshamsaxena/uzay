/*
	JSON Payload for a User Resource
*/

const Payload = {
	Meta: {
		Alias: '',
		UserID: '',
		Email: '',
		Bio: '',
		Age: '',
		Country: '',
		Verified: '',
		ProfileURL: '',
		BlogPostsURL: '',
		CommentsURL: '',
		LikedPostsURL: '',
		DislikedPostsURL: '',
		LikedCommentsURL: '',
		DislikedCommentsURL: '',
		CreatedOn: '',
		LastModifiedOn: ''
	},
	Content: {
		BlogPosts: '',
		Comments: '',
		LikedPosts: '',
		DislikedPosts: '',
		LikedComments: '',
		DislikedComments: ''
	}
};

module.exports = Payload;
