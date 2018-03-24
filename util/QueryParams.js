/*
	Query Parameters Object
*/

var DefaultParameters = {
	includeComments: false,
	startDate: new Date('2018-01-01'),
	endDate: new Date(),
	limit: 20,
	offset: 0,
	orderBy: 'date',
	direction: 'D'
};

function GetCommentsSwitch(includeComments) {

	if (includeComments === 'true') {
		return true;
	} else {
		return false;
	}
}

function GetFormattedDate(date) {

	var sD = date;
	sD = sD.substr(0, 4) + '-' + sD.substr(4, 2) + '-' + sD.substr(6, 2);
	return new Date(sD);
}

function GetFormattedNumber(num, type) {

	if (isNaN(parseInt(num))) {
		if (type === 'limit') {
			return 20;
		} else {
			return 0;
		}
	} else {
		return parseInt(num);
	}
}

function GetSortingIndex(index) {

	var i = index.toLowerCase();
	if (i !== 'date' || i !== 'likes' || i !== 'dislikes' || i !== 'views' || i !== 'commentcount') {
		return 'date';
	} else {
		return i;
	}
}

function GetSortingOrder(dir) {

	var d = dir.toLowerCase();
	if (d !== 'd' || d !== 'a') {
		return 'd';
	} else {
		return d;
	}
}

function GetParameters(query) {

	if (undefined !== query.includeComments) {
		DefaultParameters.includeComments = GetCommentsSwitch(query.includeComments);
	}

	if (undefined !== query.startDate) {
		DefaultParameters.startDate = GetFormattedDate(query.startDate);
	}

	if (undefined !== query.endDate) {
		DefaultParameters.endDate = GetFormattedDate(query.endDate);
	}

	if (undefined !== query.limit) {
		DefaultParameters.limit = GetFormattedNumber(query.limit, 'limit');
	}

	if (undefined !== query.offset) {
		DefaultParameters.offset = GetFormattedNumber(query.offset, 'offset');
	}

	if (undefined !== query.orderBy) {
		DefaultParameters.orderBy = GetSortingIndex(query.orderBy);
	}

	if (undefined !== query.direction) {
		DefaultParameters.direction = GetSortingOrder(query.direction);
	}

	return DefaultParameters;
}

module.exports = GetParameters;
