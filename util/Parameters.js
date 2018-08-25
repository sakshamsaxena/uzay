/*
  URL Parameters Generator Object
  Contains all the possible parameters and populates the valid ones
*/

/*
  Helper Functions
*/

function GetNumericID (param) {
  // ID Range is 1-9999999999
  var id = param.toString()
  var regex = new RegExp(/^[1-9]{1}[0-9]{0,9}$/i)

  if (regex.test(id)) {
    return parseInt(id)
  } else {
    return -1
  }
}

function GetAlphaNumericString (param) {
  // Alias or TagName Range is 3-30 Character String
  var string = param.toString()
  var regex = new RegExp(/^[0-9a-zA-Z]{3,30}$/i)

  if (regex.test(string)) {
    return string
  } else {
    return ''
  }
}

function GetVerificationToken (param) {
  // ToDo
  return param.toString()
}

/*
  Constructor
*/

function Parameters () {
  this.BlogPostID = -1
  this.CommentID = -1
  this.Alias = ''
  this.TagName = ''
  this.VerificationToken = ''
};

module.exports = function (params) {
  var parameters = new Parameters()

  if (undefined !== params.id) {
    parameters.BlogPostID = GetNumericID(params.id)
  }
  if (undefined !== params.cid) {
    parameters.CommentID = GetNumericID(params.cid)
  }
  if (undefined !== params.tag) {
    parameters.TagName = GetAlphaNumericString(params.tag)
  }
  if (undefined !== params.alias) {
    parameters.Alias = GetAlphaNumericString(params.alias)
  }
  if (undefined !== params.verificationToken) {
    parameters.VerificationToken = GetVerificationToken(params.verificationToken)
  }

  return parameters
}
