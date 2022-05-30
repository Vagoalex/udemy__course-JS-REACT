'use strict';

function* generator() {
  yield 'G';
  yield 'e';
  yield 'n';
  yield 'e';
  yield 'r';
  yield 'a';
  yield 't';
  yield 'o';
  yield 'r';
}

const generateWords = generator();
for (let char of generateWords) {
  console.log(char);
}

function* count(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

const counter = count(8);
for (let num of counter) {
  console.log(num);
}
