import { MenuCard } from './MenuCard.js';
// import { getResource } from './ajax.js';

export function cards() {
  // getResource('http://localhost:3000/menu').then((data) => {
  //   data.forEach((card) => {
  //     new MenuCard(card, '.menu__field .container').render();
  //   });
  // });
  axios.get('http://localhost:3000/menu').then((data) => {
    data.data.forEach((card) => {
      new MenuCard(card, '.menu__field .container').render();
    });
  });
}
