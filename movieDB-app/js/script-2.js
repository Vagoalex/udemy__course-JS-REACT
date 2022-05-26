/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики [script.js]

document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: ['Логан', 'Лига справедливости', 'Ла-ла-лэнд', 'Одержимость', 'Скотт Пилигрим против...'],
	};
	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		urlBG = 'url("../../../udemy__course-JS-REACT/movieDB/img/bg.jpg")',
		form = document.querySelector('form.add'),
		input = form.querySelector('input.adding__input'),
		checkbox = form.querySelector('input[type=checkbox]'),
		filmsList = document.querySelector('.promo__interactive-list');

	const deleteAdv = arr => {
		arr.forEach(img => img.remove());
	};

	const makeChanges = () => {
		genre.textContent = 'драма';
		poster.style.backgroundImage = urlBG;
	};

	const sortArr = arr => {
		arr.sort();
	};

	const deleteLi = (obj, parent) => {
		parent.querySelectorAll('.delete').forEach((btn, index) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				obj.splice(index, 1);

				createFilmsList(obj, parent);
			});
		});
	};

	const createFilmsList = (objFilms, parent) => {
		parent.innerHTML = '';
		sortArr(objFilms);

		objFilms.forEach((movie, index) => {
			parent.innerHTML += `
    <li class="promo__interactive-item">${index + 1}. ${movie.toLowerCase()}
        <div class="delete"></div>
    </li>
    `;
		});

		deleteLi(objFilms, parent);
	};

	form.addEventListener('submit', e => {
		e.preventDefault();
		let newFilm = input.value;
		const favorite = checkbox.checked;

		if (newFilm) {
			if (newFilm.length > 21) {
				newFilm = `${newFilm.substring(0, 22)}...`;
			}
			if (favorite) {
				console.log('Добавляем любимый фильм');
			}

			movieDB.movies.push(newFilm);
			sortArr(movieDB.movies);

			createFilmsList(movieDB.movies, filmsList);
		}

		e.target.reset();
	});

	deleteAdv(adv);
	makeChanges();
	createFilmsList(movieDB.movies, filmsList);
});
