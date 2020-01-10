(function ($) {
  $.fn.verticalNav = function (options) {
    var navContainer = $(this);
    var contentSections = options.contentSections;
    var navTtems = navContainer.find('>li');
    var advanceAmount = options.advanceAmount || 0;
    var timer = null;

    updateNavigation();
    $(window).on('scroll', function () {
      if (!timer) {
        timer = setTimeout(function () {
          updateNavigation(timer);
        }, 100);
      }
    });

    navTtems.on('click', function (event) {
      event.preventDefault();
      smoothScroll($($(this).find('a').get(0).hash));
    });


    function updateNavigation() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > displayHeight) {
        if (!floatNavOnoff) {
          floatNavOnoff = true;
          gNav.addClass('f-float');
        }

      } else {
        if (floatNavOnoff) {
          floatNavOnoff = false;
          gNav.removeClass('f-float');
        }
      }
      contentSections.each(function (index) {

        $this = $(this);
        if (($this.offset().top - advanceAmount < scrollTop) && ($this.offset()
            .top +
            $this.height() - advanceAmount > scrollTop)) {
          navTtems.eq(index).addClass('active');


        } else {
          navTtems.eq(index).removeClass('active');
        }
      });

      timer = null
    }

    function smoothScroll(target) {
      var offset = options.clickDotOffset || 100
      $('body,html').animate({
          'scrollTop': target.offset().top - offset
        },
        600
      );
    }
  }
}(jQuery))