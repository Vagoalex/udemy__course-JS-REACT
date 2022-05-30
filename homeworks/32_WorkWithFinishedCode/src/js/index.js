'use strict';

import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

tns({
  container: '.my-slider',
  mode: 'carousel',
  items: 1,
  slideBy: 'page',
  autoplay: true,
});
