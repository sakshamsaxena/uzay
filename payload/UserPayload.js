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
		CreatedAt: '',
		LastModified: ''
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
