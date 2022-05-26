/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let personalMovieDB = {
	count: '',
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

let numberOfFilms;

function startApp() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
	personalMovieDB.count = numberOfFilms;
}

function detectPersonalLevel(obj) {
	const { count } = obj;

	if (count < 10) {
		alert('Просмотрено довольно мало фильмов');
	} else if (count >= 10 && count <= 30) {
		alert('Вы классический зритель');
	} else if (count > 30) {
		alert('Вы киноман!');
	} else {
		alert('Произошла ошибка!');
	}
}

function rememberMyFilms(obj) {
	const { movies } = obj;

	for (let i = 0; i < 2; i++) {
		const watchedFilms = prompt('Один из последних просмотренных фильмов?', '').trim();
		const ratingWatchedFilms = prompt('На сколько оцените его', '');

		const isNotValidText = watchedFilms != null && ratingWatchedFilms != null && watchedFilms != '' && ratingWatchedFilms != '' && watchedFilms.length < 50;
		if (isNotValidText) {
			movies[watchedFilms] = ratingWatchedFilms;
		} else {
			i--;
		}
	}
}

function showMyDB(obj) {
	const { privat } = obj;
	if (!privat) {
		console.log(obj);
	}
}

function writeYourGenres(n) {
	const { genres } = personalMovieDB;

	for (let i = 1; i <= n; i++) {
		genres.push(prompt(`Ваш любимый жанр под номером ${i}`, '').trim());
	}
}

// startApp();
// detectPersonalLevel(personalMovieDB);
// rememberMyFilms(personalMovieDB);
// showMyDB(personalMovieDB);
// writeYourGenres(3);
