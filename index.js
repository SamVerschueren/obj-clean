'use strict';
var isPlainObject = require('is-plain-object');
function clean(obj) {
	if (obj && isPlainObject(obj)) {
		return Object.keys(obj).reduce(function (result, key) {
			if (obj[key] === null || obj[key] === undefined) {
				return result;
			}

			if (isPlainObject(obj[key])) {
				var res = clean(obj[key]);

				if (Object.keys(res).length > 0) {
					result[key] = res;
				}
			} else if (obj[key].constructor === Array) {
				var cleanedArray = obj[key].map(function (el) {
					return clean(el);
				}).filter(function (ea) {
					return ea !== undefined;
				});
				if (cleanedArray.length) {
					result[key] = cleanedArray;
				}
			} else if (obj[key] !== '') {
				result[key] = obj[key];
			}

			return result;
		}, {});
	} else if (obj.constructor === Array) {
		return obj.map(function (ea) {
			return clean(ea);
		}).filter(function (ea) {
			return ea !== undefined;
		});
	} else if (typeof obj === 'string') {
		if (obj.length) {
			return obj;
		}
	} else if (typeof obj === 'number' && !isNaN(obj)) {
		return obj;
	}
}

module.exports = clean;
