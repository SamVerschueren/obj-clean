import test from 'ava';
import fn from './';

test('shallow', t => {
	t.deepEqual(fn({}), {});
	t.deepEqual(fn({foo: undefined}), {});
	t.deepEqual(fn({foo: null}), {});
	t.deepEqual(fn({foo: 'bar', baz: undefined}), {foo: 'bar'});
	t.deepEqual(fn({foo: 'bar', baz: null}), {foo: 'bar'});
	t.deepEqual(fn({foo: 'bar', baz: null, bax: true}), {foo: 'bar', bax: true});
	t.deepEqual(fn({foo: 'bar', baz: null, bax: false}), {foo: 'bar', bax: false});
	t.deepEqual(fn({foo: ''}), {});
	t.deepEqual(fn({foo: 'bar', baz: ''}), {foo: 'bar'});
	t.deepEqual(fn({foo: 'bar', baz: []}), {foo: 'bar'});
});

test('deep', t => {
	t.deepEqual(fn({foo: {}}), {});
	t.deepEqual(fn({foo: {bar: undefined}}), {});
	t.deepEqual(fn({foo: {bar: null}}), {});
	t.deepEqual(fn({foo: {bar: {}}}), {});
	t.deepEqual(fn({foo: {bar: 'baz', baz: null}}), {foo: {bar: 'baz'}});
	t.deepEqual(fn({foo: {bar: 'baz', baz: undefined}}), {foo: {bar: 'baz'}});
	t.deepEqual(fn({foo: {bar: 'baz', baz: null, bax: true}}), {foo: {bar: 'baz', bax: true}});
	t.deepEqual(fn({foo: {bar: 'baz', baz: undefined, bax: false}}), {foo: {bar: 'baz', bax: false}});
	t.deepEqual(fn({foo: {bar: 'baz', baz: ''}}), {foo: {bar: 'baz'}});
	t.deepEqual(fn({foo: {bar: 'baz', baz: {}}}), {foo: {bar: 'baz'}});
	t.deepEqual(fn({foo: {bar: 'baz', baz: {bar: 'baz', baz: ''}}}), {foo: {bar: 'baz', baz: {bar: 'baz'}}});
	t.deepEqual(fn({foo: 'bar', bar: {baz: []}}), {foo: 'bar'});
});
