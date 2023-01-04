import { capitalize } from '../src/capitalize.js';

if(capitalize('hello')!== 'Hello'){
    throw new Error('Тесты не прошли');
};
if(capitalize('')!== ''){
    throw new Error('Тесты не прошли');
};
console.log('Все тесты пройдены!');
