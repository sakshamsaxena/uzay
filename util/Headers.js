/*
  Request Header Generator Object
  Contains all the possible headers of interest and populates the valid ones
*/

/*
  Helper Functions
*/

function ValidateContentType (param) {
  // Should be only application/json
  if (param !== 'application/json') {
    return false
  } else {
    return true
  }
}

function ValidateContentLength (param) {
  // Must be under 8KB
  if (parseInt(param) <= 8192) {
    return true
  } else {
    return false
  }
}

function GetBearerToken (param) {
  // Extract the Bearer Token
}

/*
  Constructor
*/

function Headers () {
  this.HasValidContentType = true
  this.HasValidContentLength = true
  this.BearerToken = ''
};

module.exports = function (params) {
  var headers = new Headers()

  if (undefined !== params['content-type']) {
    headers.HasValidContentType = ValidateContentType(params['content-type'])
  }
  if (undefined !== params['content-length']) {
    headers.HasValidContentLength = ValidateContentLength(params['content-length'])
  }
  if (undefined !== params['authorization']) {
    headers.BearerToken = GetBearerToken(params['authorization'])
  }

  return headers
}
