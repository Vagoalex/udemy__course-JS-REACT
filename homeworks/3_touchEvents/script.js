window.addEventListener('DOMContentLoaded', () => {
	const box = document.querySelector('.box');

	box.addEventListener('touchstart', event => {
		console.log('Start');
	});
	box.addEventListener('touchmove', event => {
		console.log('Moved');
	});
	box.addEventListener('touchend', event => {
		console.log('End Touch');
	});
	// box.addEventListener('touchenter', event => {
	// 	console.log('Enter');
	// });
	// box.addEventListener('touchleave', event => {
	// 	console.log('Leave');
	// });
});
