const blockBtns = document.querySelector('.btn-block');
const btns = document.querySelectorAll('button');
console.log(btns);

btns[0].addEventListener('click', () => {
	// if (!btns[1].contains('red')) {
	// 	btns[1].classList.add('red');
	// } else {
	// 	btns[1].classList.remove('red');
	// }
	btns[1].classList.toggle('red');
});

blockBtns.addEventListener('click', (event) => {
	if (event.target && event.target.tagName === 'BUTTON') {
		console.log('button');
	}
});
