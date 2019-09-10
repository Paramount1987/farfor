const catalogFilter = {
  $titles: null,

  init() {
    this.$titles = $('.js-ctlg-title');
    this.clickTitleHandler();
  },

  clickTitleHandler() {
    const self = this;

    this.$titles.click(function init() {
      const $this = $(this);
      const rel = $this.data('rel');
      const $target = $(`[data-target='${rel}']`);

      if (!self.isMobile()) {
        return;
      }

      if ($this.hasClass('is-active')) {
        $this.removeClass('is-active');

        self.hideFilter($target);
      } else {
        self.$titles.removeClass('is-active');
        $this.addClass('is-active');

        self.hideFilter();
        self.showFilter($target);
      }
    });
  },

  showFilter($container) {
    $container.slideDown(200);
  },

  hideFilter($container) {
    if ($container) {
      $container.slideUp(200);
    } else {
      $('[data-target').slideUp();
    }
  },

  isMobile() {
    return window.matchMedia('(max-width: 767px)').matches;
  },
};

export default catalogFilter;
