import { tabs } from './tabs.js';
import { carousel } from './slider.js';
import { timer } from './timer.js';
import { modalWindow } from './modal.js';
import { cards } from './cards.js';

window.addEventListener('DOMContentLoaded', () => {
  tabs();
  carousel();
  timer();
  modalWindow();
  cards();
});
