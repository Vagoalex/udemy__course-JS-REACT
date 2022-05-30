'use strict';

const form = document.querySelector('.form-signin'),
  checkbox = document.querySelector('#checkbox'),
  change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
  form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor = '#fff';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'red';
  }
});

const person = {
  name: 'John',
  age: 34,
};

const serialisedPerson = JSON.stringify(person);

localStorage.setItem('personJohn', serialisedPerson);

const somePerson = JSON.parse(localStorage.getItem('personJohn'));

console.log(somePerson);
