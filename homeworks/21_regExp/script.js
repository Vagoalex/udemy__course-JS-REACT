'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const answ = prompt('Введите Ваше имя!');

const reg = /a/gi;

// console.log(answ.match(reg));

const password = prompt('Password?');

console.log(password.replace(/./g, '*'));
console.log(password.replace(/\a/g, '*'));

console.log('12-23-434-43432-3-'.replace(/-/g, ''));

const answer = prompt('Введите Ваше имя!');

const regex = /n/gi;

console.log(regex.test(answer));

const answNum = prompt('Введите Ваше число!');
console.log(answNum.match(/\d/gi));

const stringR2D2 = 'My name is R2D2';

console.log(stringR2D2.match(/\w\d\w\d/i));
console.log(stringR2D2.match(/\W\S/gi));
