# obj-clean [![Build Status](https://travis-ci.org/SamVerschueren/obj-clean.svg?branch=master)](https://travis-ci.org/SamVerschueren/obj-clean)

> Remove empty objects, empty strings, `null` and `undefined` values from objects.


## Install

```
$ npm install --save obj-clean
```


## Usage

```js
const objClean = require('obj-clean');

objClean({foo: ''});
//=> {}

objClean({foo: 'bar', baz: undefined});
//=> {foo: 'bar'}

objClean({foo: {bar: 'baz', baz: null}});
//=> {foo: {bar: 'baz'}}

objClean({foo: {bar: 'baz', baz: {}});
//=> {foo: {bar: 'baz'}}
```


## API

### objClean(obj)

Returns a clean object.

#### obj

Type: `Object`

The object to clean up.


## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
