import { tabs } from './tabs.js';
import { simpleSlider } from './slider.js';
import { timer } from './timer.js';
import { modalWindow } from './modal.js';
import { cards } from './cards.js';

window.addEventListener('DOMContentLoaded', () => {
  tabs();
  simpleSlider();
  timer();
  modalWindow();
  cards();
});
