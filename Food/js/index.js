'use strict';
import 'nodelist-foreach-polyfill';
import 'promise-polyfill/src/polyfill';

import tabs from './modules/tabs';
import { modal, openModal } from './modules/modal';
import forms from './modules/forms';
import timer from './modules/timer';
import MenuCard from './services/classes';
import cards from './modules/cards';
import calc from './modules/calc';
import slider from './modules/slider';

const server = 'http://localhost:3000/menu';

window.addEventListener('DOMContentLoaded', () => {
  const timerModal = setTimeout(() => openModal('.modal', timerModal), 10000);
  const sliderData = {
    container: '.offer__slider',
    slideElements: '.offer__slide',
    wrapper: '.offer__slider-wrapper',
    next: '.offer__slider-next',
    prev: '.offer__slider-prev',
    currentCount: '#current',
    totalCount: '#total',
    dotsParent: '.carousel-indicators',
  };

  tabs(
    '.tabcontent',
    '.tabheader__item',
    '.tabheader__items',
    'tabheader__item_active'
  );
  modal('[data-modal]', '.modal');
  forms('form', timerModal);
  timer('2022-08-5', '.timer', '#days', '#hours', '#minutes', '#seconds');
  cards(server, MenuCard, '.menu__field .container');
  calc();
  slider(sliderData);
});
