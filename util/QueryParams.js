/*
  Query Parameters Generator Object
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

function DefaultParameters () {
  this.includeComments = false
  this.startDate = new Date('2018-01-01')
  this.endDate = new Date()
  this.limit = 20
  this.offset = 0
  this.orderBy = 'date'
  this.direction = 'D'
};

module.exports = function (query) {
  var params = new DefaultParameters()

  if (undefined !== query.includeComments) {
    params.includeComments = GetCommentsSwitch(query.includeComments)
  }
  if (undefined !== query.startDate && GetFormattedDate(query.startDate)) {
    params.startDate = GetFormattedDate(query.startDate)
  }
  if (undefined !== query.endDate && GetFormattedDate(query.endDate)) {
    params.endDate = GetFormattedDate(query.endDate)
  }
  if (undefined !== query.limit) {
    params.limit = GetFormattedNumber(query.limit, 'limit')
  }
  if (undefined !== query.offset) {
    params.offset = GetFormattedNumber(query.offset, 'offset')
  }
  if (undefined !== query.orderBy) {
    params.orderBy = GetSortingIndex(query.orderBy)
  }
  if (undefined !== query.direction) {
    params.direction = GetSortingOrder(query.direction)
  }

  return params
}
