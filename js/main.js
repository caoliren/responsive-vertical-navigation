(function ($) {

    $.fn.verticalNav = function (options) { 
        var navContainer = $(this);
        var contentSections = options.contentSections;
        var navTtems = navContainer.find('>li');
        var advanceAmount = options.advanceAmount || 0;

      updateNavigation();
      $(window).on('scroll', function () {
        updateNavigation();
      });

      navTtems.on('click', function (event) {
        event.preventDefault();
        smoothScroll($($(this).find('a').get(0).hash));
      });


      function updateNavigation() {
        contentSections.each(function (index) {
          $this = $(this);
          if (($this.offset().top - advanceAmount < $(window).scrollTop()) && ($this.offset().top +
              $this.height() - advanceAmount > $(window).scrollTop())) {
            navTtems.eq(index).addClass('active');

          } else {
              navTtems.eq(index).removeClass('active');
          }
        });
      }

      function smoothScroll(target) {
        $('body,html').animate({
            'scrollTop': target.offset().top
          },
          600
        );
      }
    }
}( jQuery ))