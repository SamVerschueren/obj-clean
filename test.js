import test from 'ava';
import clean from '.';

test('shallow', t => {
	t.deepEqual(clean({}), {});
	t.deepEqual(clean({foo: undefined}), {});
	t.deepEqual(clean({foo: null}), {});
	t.deepEqual(clean({foo: 'bar', baz: undefined}), {foo: 'bar'});
	t.deepEqual(clean({foo: 'bar', baz: null}), {foo: 'bar'});
	t.deepEqual(clean({foo: 'bar', baz: null, bax: true}), {foo: 'bar', bax: true});
	t.deepEqual(clean({foo: 'bar', baz: null, bax: false}), {foo: 'bar', bax: false});
	t.deepEqual(clean({foo: ''}), {});
	t.deepEqual(clean({foo: 'bar', baz: ''}), {foo: 'bar'});
	t.deepEqual(clean({foo: 'bar'}), {foo: 'bar'});
	t.deepEqual(clean({foo: 'bar', baz: []}, {preserveArrays: false}), {foo: 'bar'});
});

test('deep', t => {
	t.deepEqual(clean({foo: {}}), {});
	t.deepEqual(clean({foo: {bar: undefined}}), {});
	t.deepEqual(clean({foo: {bar: null}}), {});
	t.deepEqual(clean({foo: {bar: {}}}), {});
	t.deepEqual(clean({foo: {bar: 'baz', baz: null}}), {foo: {bar: 'baz'}});
	t.deepEqual(clean({foo: {bar: 'baz', baz: undefined}}), {foo: {bar: 'baz'}});
	t.deepEqual(clean({foo: {bar: 'baz', baz: null, bax: true}}), {foo: {bar: 'baz', bax: true}});
	t.deepEqual(clean({foo: {bar: 'baz', baz: undefined, bax: false}}), {foo: {bar: 'baz', bax: false}});
	t.deepEqual(clean({foo: {bar: 'baz', baz: ''}}), {foo: {bar: 'baz'}});
	t.deepEqual(clean({foo: {bar: 'baz', baz: {}}}), {foo: {bar: 'baz'}});
	t.deepEqual(clean({foo: {bar: 'baz', baz: {bar: 'baz', baz: ''}}}), {foo: {bar: 'baz', baz: {bar: 'baz'}}});
	t.deepEqual(clean({foo: 'bar', bar: {baz: []}}), {foo: 'bar', bar: {baz: []}});
	t.deepEqual(clean({foo: 'bar', bar: {baz: []}}, {preserveArrays: false}), {foo: 'bar'});
});

test('clean arrays', t => {
	t.deepEqual(clean({foo: [{bar: ''}]}), {foo: []});
	t.deepEqual(clean({foo: [{bar: ''}]}, {preserveArrays: false}), {});
	t.deepEqual(clean({foo: [{bar: ''}, {unicorn: [{rainbow: ''}]}]}, {}), {foo: [{unicorn: []}]});
	t.deepEqual(clean({foo: [{bar: ''}, {unicorn: [{rainbow: ''}]}]}, {preserveArrays: false}), {});
});
