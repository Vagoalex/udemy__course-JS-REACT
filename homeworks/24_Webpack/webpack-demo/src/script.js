'use strict';

function myModule() {
  const hello = function () {
    console.log('hello!');
  };
  const goodbye = function () {
    console.log('bye!');
  };

  hello();
  goodbye();
}
// Синтаксис common js
module.exports = myModule;
