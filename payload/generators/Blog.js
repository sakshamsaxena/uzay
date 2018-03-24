/*
	Generate BloPost Payload from ResultSets
*/

const BlogPayload = require('../layouts/BlogPayload.js');
const ErrorPayload = require('../layouts/ErrorPayload.js');

var GeneratePayload = {};

GeneratePayload.GetBlogPost = function(blog, includeComments) {

	let Payload = {};

	// Perform checks
	if (blog === null) {
		// User does not exist
		Payload = ErrorPayload;

		// Set Payload's Error Messages
		Payload.Message = 'User does not exist';
	} else {
		Payload = BlogPayload;
	}

	return Payload;
};

module.exports = GeneratePayload;
