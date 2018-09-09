/*
  Request Header Generator Object
  Contains all the possible headers of interest and populates the valid ones
*/

/*
  Helper Functions
*/

function GetContentType (param) {
  // Should be only application/json
}

function GetContentLength (param) {
  // Must be under X
}

function GetBearerToken (param) {
  // Extract the Bearer Token
}

/*
  Constructor
*/

function Headers () {
  this.ContentType = 'application/json'
  this.ContentLength = 0
  this.BearerToken = ''
};

module.exports = function (params) {
  var headers = new Headers()

  if (undefined !== params['content-type']) {
    headers.ContentType = GetContentType(params['content-type'])
  }
  if (undefined !== params['content-length']) {
    headers.ContentLength = GetContentLength(params['content-length'])
  }
  if (undefined !== params['authorization']) {
    headers.BearerToken = GetBearerToken(params['authorization'])
  }

  return headers
}
