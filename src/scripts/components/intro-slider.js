const introSliderInit = () => {
  $('.js-intro-slider').each(function init() {
    const $this = $(this);
    const $wrapper = $this.closest('.intro-slider-wrapper');
    const $arrowsWrapper = $wrapper.find('.js-intro-arrows');

    /* global Swiper */
    const swiper = new Swiper(this, {
      slidesPerView: 5,
      spaceBetween: 20,
      // Responsive breakpoints
      breakpoints: {
        // when window width is <= 320px
        1023: {
          slidesPerView: 2,
        },
        // when window width is <= 1440
        1440: {
          slidesPerView: 3,
        },
        // when window width is <= 1900px
        1900: {
          slidesPerView: 4,
        },
      },
    });

    // const $arrows = $this.find('.js-intro-arrow');
    // $arrowsWrapper.append($arrows);
  });
};

export default introSliderInit;
