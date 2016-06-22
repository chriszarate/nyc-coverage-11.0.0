import add from '../src';
import test from 'ava';

test('1 + 1', (t) => {
  t.is(add(1, 1), 2);
});
