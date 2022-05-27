import { tabs } from './tabs.js';
import { carousel } from './slider.js';
import { timer } from './timer.js';
import { modalWindow } from './modal.js';
import { calculate } from './calc.js';
import { cards } from './cards.js';

window.addEventListener('DOMContentLoaded', () => {
  tabs();
  carousel();
  timer();
  modalWindow();
  calculate();
  cards();
});
