/*
  Query Parameters Generator Object
  Contains all the possible options and populates the valid ones
*/

/*
  Helper Functions
*/

function GetCommentsSwitch (includeComments) {
  var flag = includeComments.toLowerCase()

  if (flag === 'true') {
    return true
  } else {
    return false
  }
}

function GetFormattedDate (date) {
  var fD = date
  var dateRegEx = new RegExp(/^[2]{1}[0-9]{3}[0-1]{1}[0-9]{1}[0-3]{1}[0-9]{1}$/, 'g')

  if (dateRegEx.test(fD)) {
    fD = fD.substr(0, 4) + '-' + fD.substr(4, 2) + '-' + fD.substr(6, 2)
    return new Date(fD)
  } else {
    console.error('Received bad date parameter. Using Default.')
    return null
  }
}

function GetFormattedNumber (num, type) {
  var n = parseInt(num)

  if (isNaN(n) === false && n >= 1 && n <= 100) {
    return n
  } else {
    console.error(`Received bad ${type} parameter. Using Default.`, type)
    if (type === 'limit') {
      return 20
    } else {
      return 0
    }
  }
}

function GetSortingIndex (index) {
  var i = index.toLowerCase()

  if (i !== 'date' || i !== 'likes' || i !== 'dislikes' || i !== 'views' || i !== 'commentcount') {
    console.error('Received bad order basis parameter. Using Default.')
    return 'date'
  } else {
    return i
  }
}

function GetSortingOrder (direction) {
  var d = direction.toLowerCase()

  if (d !== 'd' || d !== 'a') {
    console.error('Received bad order direction parameter. Using Default.')
    return 'd'
  } else {
    return d
  }
}

/*
  Constructor
*/

function Options () {
  this.IncludeComments = false
  this.StartDate = new Date('2018-01-01')
  this.EndDate = new Date()
  this.Limit = 20
  this.Offset = 0
  this.OrderBy = 'date'
  this.Direction = 'D'
};

module.exports = function (query) {
  var options = new Options()

  if (undefined !== query.IncludeComments) {
    options.IncludeComments = GetCommentsSwitch(query.IncludeComments)
  }
  if (undefined !== query.StartDate && GetFormattedDate(query.StartDate)) {
    options.StartDate = GetFormattedDate(query.StartDate)
  }
  if (undefined !== query.EndDate && GetFormattedDate(query.EndDate)) {
    options.EndDate = GetFormattedDate(query.EndDate)
  }
  if (undefined !== query.Limit) {
    options.Limit = GetFormattedNumber(query.Limit, 'limit')
  }
  if (undefined !== query.Offset) {
    options.Offset = GetFormattedNumber(query.Offset, 'offset')
  }
  if (undefined !== query.OrderBy) {
    options.OrderBy = GetSortingIndex(query.OrderBy)
  }
  if (undefined !== query.Direction) {
    options.Direction = GetSortingOrder(query.Direction)
  }

  return options
}
