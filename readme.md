# obj-clean [![Build Status](https://travis-ci.org/SamVerschueren/obj-clean.svg?branch=master)](https://travis-ci.org/SamVerschueren/obj-clean)

> Remove empty objects, empty arrays, empty strings, `null` and `undefined` values from objects.


## Install

```
$ npm install --save obj-clean
```


## Usage

```js
const clean = require('obj-clean');

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

clean({foo: [{unicorn: ''}]}, {cleanArrays: false});
//=> {foo: [{unicorn: ''}]}

clean({foo: [{unicorn: ''}]}, {preserveArrays: false});
//=> {}
```


## API

### clean(obj, [options])

Returns a clean object.

#### obj

Type: `Object`

The object to clean up.

#### options

##### preserveArrays

Type: `boolean`<br>
Default: `true`

Set to `false` if you want to remove empty arrays.

##### cleanArrays

Type: `boolean`<br>
Default: `true`

Set to `false` if you don't want to iterate over arrays and clean all the objects inside the array.


## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
