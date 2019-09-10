const navInit = () => {
  const $nav = $('.nav');
  const $openBtn = $('.js-open-nav');

  $openBtn.click(() => {
    $nav.addClass('is-active');
    $openBtn.addClass('is-hide');
  });

  $('.js-close-nav').click(() => {
    $nav.removeClass('is-active');
    $openBtn.removeClass('is-hide');
  });
};

export default navInit;
