function cards(server, cardsClass, triggerSelector) {
  // getResource('http://localhost:3000/menu').then((data) => {
  //   data.forEach((card) => {
  //     new MenuCard(card, '.menu__field .container').render();
  //   });
  // });
  axios.get(server).then((data) => {
    data.data.forEach((card) => {
      new cardsClass(card, triggerSelector).render();
    });
  });
}

export default cards;
