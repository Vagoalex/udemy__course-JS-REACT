const btn = document.querySelector('.btn');
let timerId,
	counter = 1;

const logger = () => {
	if (counter === 5) {
		clearInterval(timerId);
	}
	console.log('Hello!');
	counter++;
};

btn.addEventListener('click', () => {
	timerId = setInterval(logger, 2000);
});

// Рекурсивная функция setTimeout=>setInterval

let id = setTimeout(function log() {
	console.log('Hello world');
	id = setTimeout(log, 1500);
}, 1500);
