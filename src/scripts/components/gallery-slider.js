const gallerySliderInit = () => {
  $('.js-gallery-slider').each(function init() {
    /* global Swiper */
    const swiper = new Swiper(this, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
};

export default gallerySliderInit;
