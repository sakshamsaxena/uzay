/*
  Request Body Generator Object
  Contains all the possible fields of interest and populates the valid ones
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

function Body () {
  this.ContentType = 'application/json'
  this.ContentLength = 0
  this.BearerToken = ''
};

module.exports = function (params) {
  var body = new Body()

  if (undefined !== params['content-type']) {
    body.ContentType = GetContentType(params['content-type'])
  }
  if (undefined !== params['content-length']) {
    body.ContentLength = GetContentLength(params['content-length'])
  }
  if (undefined !== params['authorization']) {
    body.BearerToken = GetBearerToken(params['authorization'])
  }

  return body
}
