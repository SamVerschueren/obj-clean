'use strict';
const isPlainObject = require('is-plain-obj');

const clean = (obj, options) => {
	options = Object.assign({
		preserveArrays: true
	}, options);

	return Object.keys(obj).reduce((result, key) => {
		if (obj[key] === null || obj[key] === undefined) {
			return result;
		}

		if (options.preserveArrays === false && Array.isArray(obj[key]) && obj[key].length === 0) {
			return result;
		}

		if (isPlainObject(obj[key])) {
			const res = clean(obj[key], options);

			if (Object.keys(res).length > 0) {
				result[key] = res;
			}
		} else if (obj[key] !== '') {
			result[key] = obj[key];
		}

		return result;
	}, {});
};

module.exports = clean;
