import {Primitive} from 'type-fest';

type PartialDeep<T> = {
	[P in keyof T]?: T[P] extends Array<infer U>
		? Array<PartialDeep<U>>
		: T[P] extends ReadonlyArray<infer U>
		? ReadonlyArray<PartialDeep<U>>
		: PartialDeep<T[P]>;
  };

declare namespace clean {
	interface Options {
		/**
		Keep empty arrays.

		@default true
		*/
		preserveArrays?: boolean;
		/**
		Deeply clean arrays.

		@default true
		*/
		cleanArrays?: boolean;
	}
}

declare const clean: {
	/**
	Deeply remove empty objects, empty arrays, empty strings, `null` and `undefined` values from the `input` object.

	@param input - Object to be cleaned.
	@returns A cleaned up object.
	@example
	```
	import clean = require('clean');

	clean({foo: ''});
	//=> {}

	clean({foo: 'bar', baz: undefined});
	//=> {foo: 'bar'}

	clean({foo: {bar: 'baz', baz: null, bax: false}});
	//=> {foo: {bar: 'baz', bax: false}}

	clean({foo: {bar: 'baz', baz: {}});
	//=> {foo: {bar: 'baz'}}

	clean({foo: 'bar', baz: []});
	//=> {foo: 'bar', baz: []}

	clean({foo: [{unicorn: ''}]});
	//=> {foo: []}

	clean({foo: [{unicorn: '', rainbow: '🌈'}]});
	//=> {foo: [{rainbow: '🌈'}]}
	```
	*/
	<T>(input: T): PartialDeep<T>;

	/**
	Remove empty objects, empty arrays, empty strings, `null` and `undefined` values from the `input` object depending on the `options` provided.

	@param input - Object to be cleaned.
	@param options - Clean up options.
	@returns A cleaned up object.
	@example
	```
	import clean = require('clean');

	clean({foo: [{unicorn: ''}]}, {cleanArrays: false});
	//=> {foo: [{unicorn: ''}]}

	clean({foo: [{unicorn: ''}]}, {preserveArrays: true});
	//=> {foo: []}
	```
	*/
	<T>(input: T, options: clean.Options): PartialDeep<T>;
};

export = clean;
