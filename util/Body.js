/*
  Request Body Generator Object
  Contains all the possible fields of interest for BlogPost and Comment
*/

/*
  Helper Functions
*/

function GetAlphaNumericString (param, start, end) {
  // Extract Title and Tags of mentioned range
  var string = param.toString()
  var pattern = '^[0-9a-zA-Z]{' + start + ',' + end + '}$'
  var regex = new RegExp(pattern, 'i')

  if (regex.test(string)) {
    return string
  } else {
    return ''
  }
}

function ValidateMarkdown (param) {
  // Validate the Markdown Body
}

/*
  Constructor
*/

function Body () {
  this.Title = ''
  this.Tags = []
  this.Content = ''
  this.PublishDate = new Date()
};

module.exports = function (params) {
  var body = new Body()

  if (undefined !== params['title']) {
    body.Title = GetAlphaNumericString(params['title'], 2, 100)
  }
  if (undefined !== params['tags']) {
    for (var i = 0; i < params['tags'].length; i++) {
      var e = params['tags'][i]
      var tag = GetAlphaNumericString(e, 3, 30)
      if (tag !== '') {
        body.Tags.push(tag)
      }
    }
  }
  if (undefined !== params['content']) {
    body.Content = ValidateMarkdown(params['content'])
  }

  return body
}
