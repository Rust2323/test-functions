import { strict as assert } from 'node:assert';

import { reverse } from '../src/reverse.js';

assert.equal(reverse('hello'), 'olleh');

console.log('Все тесты пройдены!');
