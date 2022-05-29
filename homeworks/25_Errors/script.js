'use strict';

class ValidationObjectError extends Error {
  constructor(index) {
    super();
    this.index = index;
    this.name = '---ValidationObjectError---';
    this.message = `Block № ${this.index + 1} don't have id!`;
    this.stack = `${this.name}\nATTENTION!\n${this.message}`;
  }
}

const data = [
  {
    id: 'box',
    tag: 'div',
  },
  {
    id: '',
    tag: 'nav',
  },
  {
    id: 'circle',
    tag: 'span',
  },
];

data.forEach((blockObj, index) => {
  try {
    if (!blockObj.id) {
      throw new ValidationObjectError(index);
    } else {
      const block = document.createElement(blockObj.tag);
      block.setAttribute('id', blockObj.id);
      block.textContent = `Block number ${index + 1}`;
      document.body.append(block);
    }
  } catch (error) {
    console.log(error);
  }
});
