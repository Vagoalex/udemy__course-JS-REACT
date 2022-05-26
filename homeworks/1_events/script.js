'use strict';

const btns = document.querySelectorAll('button');

let count = 0;
const deleteElem = function (event) {
	console.log(event.target);
	count++;
	console.log(count);
	if (count === 4) {
		btns.forEach(button => button.removeEventListener('click', deleteElem));
	}
};

btns.forEach(button => button.addEventListener('click', deleteElem));
