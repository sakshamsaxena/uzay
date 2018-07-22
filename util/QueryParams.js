/*
  Query Parameters Generator Object
*/

/*
  Helper Functions
*/

function GetCommentsSwitch (includeComments) {
  if (includeComments === 'true') {
    return true
  } else {
    return false
  }
}

function GetFormattedDate (date) {
  var sD = date
  sD = sD.substr(0, 4) + '-' + sD.substr(4, 2) + '-' + sD.substr(6, 2)
  return new Date(sD)
}

function GetFormattedNumber (num, type) {
  if (isNaN(parseInt(num))) {
    if (type === 'limit') {
      return 20
    } else {
      return 0
    }
  } else {
    return parseInt(num)
  }
}

function GetSortingIndex (index) {
  var i = index.toLowerCase()
  if (i !== 'date' || i !== 'likes' || i !== 'dislikes' || i !== 'views' || i !== 'commentcount') {
    return 'date'
  } else {
    return i
  }
}

function GetSortingOrder (dir) {
  var d = dir.toLowerCase()
  if (d !== 'd' || d !== 'a') {
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
  if (undefined !== query.startDate) {
    params.startDate = GetFormattedDate(query.startDate)
  }
  if (undefined !== query.endDate) {
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
