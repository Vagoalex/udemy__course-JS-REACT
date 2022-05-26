'use strict';

const seconds = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  nine: 9,
};
const { one, two, three, four, five, nine } = seconds;

const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time * 1000);
  });
};

test(four).then(() => console.log(`Событие сработало через ${four} секунд`));
test(one).then(() => console.log(`Событие сработало через ${one} секунд`));
test(five).then(() => console.log(`Событие сработало через ${five} секунд`));
test(three).then(() => console.log(`Событие сработало через ${three} секунд`));
test(two).then(() => console.log(`Событие сработало через ${two} секунд`));

Promise.all([
  test(nine),
  test(8),
  test(7),
  test(6),
  test(five),
  test(four),
  test(three),
  test(two),
  test(one),
]).then(() => {
  console.log(`Promised All for "${nine}" seconds`);
});

Promise.race([
  test(nine),
  test(four),
  test(6),
  test(8),
  test(five),
  test(two),
  test(7),
  test(one),
  test(three),
]).then(() => {
  console.log(`Promised raced for "hz" seconds`);
});
