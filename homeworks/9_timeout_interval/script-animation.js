const btn = document.querySelector('.btn');
let position = 0;

function animationBottom() {
	const element = document.querySelector('.box');

	const timerId = setInterval(frame, 10);

	function frame() {
		if (position === 300) {
			clearInterval(timerId);
		} else {
			position++;
			element.style.top = position + 'px';
			element.style.left = position + 'px';
		}
	}
}

function animationTop() {
	const element = document.querySelector('.box');

	const timerId = setInterval(frame, 10);

	function frame() {
		if (position === 0) {
			clearInterval(timerId);
		} else {
			position--;
			element.style.top = position + 'px';
			element.style.left = position + 'px';
		}
	}
}

btn.addEventListener('click', (e) => {
	if (position === 0) {
		animationBottom();
	} else if (position === 300) {
		animationTop();
	}
});
