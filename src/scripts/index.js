import '../styles/index.scss';

// components
//----------------------------------------------
import cardSliderInit from './components/card-slider';

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
});
