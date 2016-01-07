# obj-clean [![Build Status](https://travis-ci.org/SamVerschueren/obj-clean.svg?branch=master)](https://travis-ci.org/SamVerschueren/obj-clean)

> Remove empty objects, empty strings, `null` and `undefined` values from objects.


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
```


## API

### clean(obj)

Returns a clean object.

#### obj

Type: `Object`

The object to clean up.


## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
