/*
  Helper Class to invoke respective response models and return those
*/
var BlogPost = require('../presentation/BlogPost')

function FormatSingleBlogPost (data) {
  return new BlogPost(data)
}

module.exports = {
  outputBlogPostFormat: FormatSingleBlogPost
}
