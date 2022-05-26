/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство private. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания

'use strict';

let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: false,

	start: () => {
		let { count } = personalMovieDB;
		count = +prompt('Сколько фильмов вы уже посмотрели?', '');

		while (count == '' || count == null || isNaN(count)) {
			count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}

		personalMovieDB.count = count;
	},

	detectPersonalLevel: () => {
		const { count } = personalMovieDB;

		if (count < 10) {
			alert('Просмотрено довольно мало фильмов');
		} else if (count >= 10 && count <= 30) {
			alert('Вы классический зритель');
		} else if (count > 30) {
			alert('Вы киноман!');
		} else {
			alert('Произошла ошибка!');
		}
	},

	rememberMyFilms: () => {
		const { movies } = personalMovieDB;

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
	},

	writeYourGenres: () => {
		let { genres } = personalMovieDB;

		for (let i = 1; i <= 1; i++) {
			const genre = prompt('Введите Ваши любимые жанры через запятую:', '').toLowerCase();
			if (genre === '' || genre === null) {
				i--;
			} else {
				genres = genre.split(', ');
				genres.sort();
			}
		}
		genres.forEach((item, index) => {
			console.log(`Любимый жанр #${index + 1} - это ${item}`);
		});
		personalMovieDB.genres = genres;
	},

	toggleVisibleMyDB: () => {
		if (personalMovieDB.private) {
			personalMovieDB.private = false;
		} else {
			personalMovieDB.private = true;
		}
	},

	showMyDB: hidden => {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB(personalMovieDB.private);
console.log(personalMovieDB);
