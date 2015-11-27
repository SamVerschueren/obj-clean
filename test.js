import test from 'ava';
import fn from './';

test('shallow', t => {
	t.same(fn({}), {});
	t.same(fn({foo: undefined}), {});
	t.same(fn({foo: null}), {});
	t.same(fn({foo: 'bar', baz: undefined}), {foo: 'bar'});
	t.same(fn({foo: 'bar', baz: null}), {foo: 'bar'});
	t.same(fn({foo: ''}), {});
	t.same(fn({foo: 'bar', baz: ''}), {foo: 'bar'});
	t.end();
});

test('deep', t => {
	t.same(fn({foo: {}}), {});
	t.same(fn({foo: {bar: undefined}}), {});
	t.same(fn({foo: {bar: null}}), {});
	t.same(fn({foo: {bar: {}}}), {});
	t.same(fn({foo: {bar: 'baz', baz: null}}), {foo: {bar: 'baz'}});
	t.same(fn({foo: {bar: 'baz', baz: undefined}}), {foo: {bar: 'baz'}});
	t.same(fn({foo: {bar: 'baz', baz: ''}}), {foo: {bar: 'baz'}});
	t.same(fn({foo: {bar: 'baz', baz: {}}}), {foo: {bar: 'baz'}});
	t.same(fn({foo: {bar: 'baz', baz: {bar: 'baz', baz: ''}}}), {foo: {bar: 'baz', baz: {bar: 'baz'}}});
	t.end();
});
