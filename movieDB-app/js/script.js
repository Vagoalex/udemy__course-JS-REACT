/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: ['Логан', 'Лига справедливости', 'Ла-ла лэнд', 'Одержимость', 'Скотт Пилигрим против...'],
};

// TASK 1 ==================================
const adb = document.querySelectorAll('.promo__adv img');
adb.forEach(img => img.remove());

// TASK 2 ==================================
const poster = document.querySelector('.promo__bg'),
	genre = poster.querySelector('.promo__genre');

genre.textContent = 'драма';
// TASK 3 ==================================
const urlBG = 'url("../../../udemy__course-JS-REACT/movieDB/img/bg.jpg")';
poster.style.backgroundImage = urlBG;

// TASK 4,5 ==================================
const films = document.querySelector('.promo__interactive-list');
films.innerHTML = '';

movieDB.movies.sort();

// function createMovie(div, arr) {
// 	return arr.forEach((movie, index) => {
// 		const li = document.createElement('li');
// 		li.classList.add('promo__interactive-item');
// 		li.innerHTML = `${index + 1}. ${movie}<div class="delete"></div>`;
// 		div.append(li);
// 	});
// }
// createMovie(films, movieDB.movies);

// или

movieDB.movies.forEach((movie, index) => {
	films.innerHTML += `
    <li class="promo__interactive-item">${index + 1}. ${movie}
        <div class="delete"></div>
    </li>
    `;
});
