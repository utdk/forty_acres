// /**
//  * @file
//  * Placeholder file for custom sub-theme behaviors.
//  *
//  */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.headerBehavior = {
    attach: function (context, settings) {

      var menuToggler = $('#js-nav-toggle');
      var togglerTarget = $('#ut-main_menu-wrapper');
      menuToggler.on('click', function () {
        togglerTarget.toggleClass('active');
        togglerTarget.hasClass('active') ? menuToggler.html('CLOSE') : menuToggler.html('MENU');
      });

    }
  };

})(jQuery, Drupal);

