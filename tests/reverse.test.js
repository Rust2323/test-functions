import { reverse } from '../src/reverse.js';

if(reverse('hello')!== 'olleh'){
    throw new Error ('Тесты не прошли');
};

console.log('Все тесты пройдены!');
