/*
  Model for a Blog Post
*/
function BlogPost (post) {
  this.id = post._id
  this.userAlias = post.UserName.Alias
  this.userId = post.UserName.UserID
  this.title = post.Title
  this.date = post.PublishDate
  this.tags = post.Tags
  this.views = post.Views
  this.likes = post.Likes
  this.body = post.Content
}

module.exports = BlogPost
