function cards() {
  class MenuCard {
    constructor(options, parentElement) {
      const { img, alt, title, desk, price } = options;
      this.img = img;
      this.alt = alt;
      this.title = title;
      this.desk = desk;
      this.price = price;
      this.parent = document.querySelector(parentElement);
      this.currency = '';
      this.uah = 2.2;
      this.changeToUAH();
    }

    changeToUAH() {
      try {
        const price = parseFloat(this.price);
        this.price = price * this.uah;
        this.currency = 'грн';
      } catch (error) {
        console.error(error.message);
      }
    }

    render() {
      try {
        const menuDiv = document.createElement('div');
        menuDiv.classList.add('menu__item');

        menuDiv.insertAdjacentHTML(
          'afterbegin',
          `<img src=${this.img} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.desk}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price.toFixed()}</span> ${
            this.currency
          }/день</div>
            </div>`
        );

        this.parent.append(menuDiv);
      } catch (error) {
        console.error(error.message);
      }
    }
  }

  // const getResource = async (server) => {
  //   const promise = await fetch(server);

  //   if (promise.status !== 200 || !promise.ok) {
  //     throw new Error(
  //       `Could not fetch from ${server}. Status: ${promise.status}`
  //     );
  //   }

  //   return await promise.json();
  // };

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

module.exports = cards;
