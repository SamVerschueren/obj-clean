'use strict';
const isPlainObject = require('is-plain-obj');

const cleanArray = (input, options, level) => {
	let result = input;

	if (options.cleanArrays === true) {
		result = input.map(item => cleaner(item, options, level + 1)).filter(Boolean);
	}

	if (level === 0 || options.preserveArrays === true || result.length > 0) {
		return result;
	}

	return null;
};

const cleaner = (input, options, level) => {
	const result = {};

	if (!isPlainObject(input)) {
		if (Array.isArray(input)) {
			return cleanArray(input, options, level);
		}

		return input;
	}

	for (const key of Object.keys(input)) {
		if (input[key] === null || input[key] === undefined) {
			continue;
		}

		if (Array.isArray(input[key])) {
			const cleanedArray = cleanArray(input[key], options, level + 1);

			if (cleanedArray !== null) {
				result[key] = cleanedArray;
			}
		} else if (isPlainObject(input[key])) {
			const res = cleaner(input[key], options, level + 1);

			if (res !== null && Object.keys(res).length > 0) {
				result[key] = res;
			}
		} else if (input[key] !== '') {
			result[key] = input[key];
		}
	}

	if (level > 0 && Object.keys(result).length === 0) {
		return null;
	}

	return result;
};

const clean = (input, options) => {
	const opts = {
		preserveArrays: true,
		cleanArrays: true,
		...options
	};

	return cleaner(input, opts, 0);
};

module.exports = clean;
