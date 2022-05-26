'use strict';

// TASK 1 =========================================
function amountOfPages(summary) {
	let sumStr = '';
	let num = 0;
	for (let i = 1; i <= summary; i++) {
		sumStr += i;
		if (sumStr.length === summary) {
			num = i;
			break;
		}
	}
	return num;
}

console.log(amountOfPages(25)); // 1234567891011121314151617 => 17
// 1+2+3+4+5+6+7+8+9+1+0+1+1+1+2+1+3+1+4+1+5+1+6+1+7 => 25 summary

// TASK 2 =========================================

function isPangram(string) {
	const lowerStr = string.toLowerCase();
	const str = 'abcdefghijklmnopqrstuvwxyz';
	return str.split('').every((x) => {
		return lowerStr.indexOf(x) !== -1;
	});
}

console.log(isPangram('abcdefghijklmnopqrstuvwxyz'));
