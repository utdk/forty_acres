// /**
//  * @file
//  * Placeholder file for custom theme behaviors.
//  *
//  */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.headerBehavior = {
    attach: function (context, settings) {

      // Enable main menu dropdown trigger.
      var menuToggler = $('#js-nav-toggle');
      var togglerTarget = $('#ut-main_menu-wrapper');
      menuToggler.on('click', function () {
        togglerTarget.toggleClass('active');
        togglerTarget.hasClass('active') ? menuToggler.html('CLOSE') : menuToggler.html('MENU');
      });

      // Initialize megamenu library on main menu.
      $('nav#block-main-navigation').accessibleMegaMenu({
          uuidPrefix: "accessible-megamenu",
          menuClass: "nav-menu",
          topNavItemClass: "main-menu__list-item",
          panelClass: "sub-nav",
          panelGroupClass: "sub-nav-wrapper",
          hoverClass: "hover",
          focusClass: "focus",
          openClass: "open",
          openDelay: 100,
          closeDelay: 100
		  });

      // Adding columns to the navigation dynamically.
      $('nav#block-main-navigation .sub-nav').each(function(i, el){
        var $el = $(el),
            $main = $('.main-menu__list'),
            children = $el.find('.main-menu__list-item--sub-menu'),
            containerWidth;
          // Get the max row width.
          containerWidth = $el.parent().parent().width();
          // Still in Mobile View.
          if (!containerWidth) { return; }
          // Add column classes based on number of submenu items.
          var numColumns = (children.length % 3 === 0) ? 'three-columns' : 'two-columns';
          if (children.length === 1) {
              numColumns = 'one-column';
          }
          $el.addClass(numColumns);
          // Insure subnavs don't open to the right of the viewport.
          var numChildren = $main.children();
          numChildren.each(function(e) {
            if (e >= (numChildren.length / 2)) {
              $(this).find('.sub-nav').addClass('overflowing');
            }
          })
      });

      // Make click event on L2 links on mobile menu trigger.
      $('.icon.subnav-trigger').on('click', function() {
        $(this).toggleClass('icon-open');
        $(this).siblings('.sub-nav-wrapper').find('.main-menu__list--sub-menu').toggleClass('open');
        $(this).parent('.main-menu__list-item').siblings().find('.main-menu__list--sub-menu').removeClass('open');
      });

    }
  };

})(jQuery, Drupal);