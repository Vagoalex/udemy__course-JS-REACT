/* Задание на урок 2:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const isNotValidNumber = numberOfFilms === 0 || typeof numberOfFilms === 'string' || numberOfFilms == false || numberOfFilms === undefined;
if (isNotValidNumber) {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
}
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

if (personalMovieDB.count < 10) {
	alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
	alert('Вы киноман!');
} else {
	alert('Произошла ошибка!');
}

for (let i = 0; i < 2; i++) {
	const watchedFilms = prompt('Один из последних просмотренных фильмов?', '');
	const ratingWatchedFilms = prompt('На сколько оцените его', '');

	const isNotValidText = watchedFilms != null && ratingWatchedFilms != null && watchedFilms != '' && ratingWatchedFilms != '' && watchedFilms.length < 50;
	if (isNotValidText) {
		personalMovieDB.movies[watchedFilms] = ratingWatchedFilms;
	} else {
		i--;
	}
}

console.log(personalMovieDB);
