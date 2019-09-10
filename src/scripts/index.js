import '../styles/index.scss';

// components
//----------------------------------------------
import cardSliderInit from './components/card-slider';
import historySliderInit from './components/history-slider';
import introSliderInit from './components/intro-slider';
import gallerySliderInit from './components/gallery-slider';
import catalogFilter from './components/catalog';
import navInit from './components/nav';

// libs
//----------------------------------------------
window.$ = require('jquery');

window.jQuery = window.$;

require('./libs/index');

// utils
//----------------------------------------------
require('./utils/index');

$(document).ready(() => {
  cardSliderInit();
  historySliderInit();
  introSliderInit();
  gallerySliderInit();
  navInit();
  catalogFilter.init();
});
