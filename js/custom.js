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

    }
  };

})(jQuery, Drupal);