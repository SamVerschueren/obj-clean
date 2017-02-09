'use strict';
var isPlainObject = require('is-plain-object');

function clean(obj) {
	return Object.keys(obj).reduce(function (result, key) {
		if (obj[key] === null || obj[key] === undefined) {
			return result;
		}

		if (Array.isArray(obj[key]) && obj[key].length === 0) {
			return result;
		}

		if (isPlainObject(obj[key])) {
			var res = clean(obj[key]);

			if (Object.keys(res).length > 0) {
				result[key] = res;
			}
		} else if (obj[key] !== '') {
			result[key] = obj[key];
		}

		return result;
	}, {});
}

module.exports = clean;
