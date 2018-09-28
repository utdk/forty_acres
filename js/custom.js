// /**
//  * @file
//  * Placeholder file for custom theme behaviors.
//  *
//  */
(function ($, Drupal, debounce) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.headerBehavior = {
    attach: function (context, settings) {

      // Initialize megamenu library on main menu.
      $('nav#block-accessible-main-menu').accessibleMegaMenu({
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

      // Enable main menu dropdown trigger and set aria-expanded attribute.
      var menuToggler = $('#js-nav-toggle');
      var togglerTarget = $('#ut-main_menu-wrapper');
      menuToggler.on('click', function () {
        togglerTarget.toggleClass('active');
        togglerTarget.hasClass('active') ? menuToggler.html('CLOSE') : menuToggler.html('MENU');
        menuToggler.attr('aria-expanded', function(index, attr) {
          return (attr == 'true') ? 'false' : 'true';
        });
      });

      // Adding columns to the navigation dynamically.
      $('nav#block-accessible-main-menu .sub-nav').each(function(i, el){
        var $el = $(el),
            $main = $('.main-menu__list'),
            children = $el.find('.main-menu__list-item--subnav'),
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
      var iconClick = function() {
        $('i.subnav-trigger').off('click').on('click', function() {
          $(this).toggleClass('icon--open');
          // Add 'open' class to subnav associated with icon.
          $(this).siblings('.sub-nav-wrapper').find('.main-menu__list--subnav').toggleClass('open');
          // Remove 'open' class from all other subnavs.
          $(this).parent('.main-menu__list-item').siblings().find('.main-menu__list--subnav').removeClass('open');
          // Remove 'icon--open' class from all other icons.
          $(this).parent('.main-menu__list-item').siblings().find('i.subnav-trigger').removeClass('icon--open');
          // Toggle aria attributes.
          $(this).siblings('.main-menu__link').attr('aria-expanded', function(index, attr) {
            return (attr == 'true') ? 'false' : 'true';
          });
          $(this).siblings('.sub-nav-wrapper').attr('aria-hidden', function(index, attr) {
            return (attr == 'true') ? 'false' : 'true';
          });
          $(this).siblings('.sub-nav-wrapper').attr('aria-expanded', function(index, attr) {
            return (attr == 'true') ? 'false' : 'true';
          });
          // Reset aria attributes of the clicked item's siblings.
          $(this).parent('.main-menu__list-item').siblings().find('.sub-nav-wrapper').attr('aria-expanded', 'false').attr('aria-hidden', 'true');
          $(this).parent('.main-menu__list-item').siblings().find('.main-menu__link').attr('aria-expanded', 'false');
        });
      }

      // Reset aria attributes and remove dynamic classes from main menu list items.
      var resetDefaults = function() {
        $('ul.main-menu__list.nav-menu .sub-nav-wrapper').removeClass('open hover focus').attr('aria-expanded', 'false').attr('aria-hidden', 'true');
        $('ul.main-menu__list.nav-menu .main-menu__link').removeClass('open').attr('aria-expanded', 'false');
        $('ul.main-menu__list.nav-menu .main-menu__list--subnav').removeClass('open');
        $('#js-nav-toggle').html('MENU').attr('aria-expanded', 'false');
        $('#ut-main_menu-wrapper').removeClass('active');
        $('i.subnav-trigger').removeClass('icon--open');
      }

      // Undo preventDefault called on L1 links so they are clickable.
      $('.menu-item-has-children > .main-menu__link').on('touchstart', function(){
        window.location.href = $(this).attr('href');
      });

      var resizeEvent = debounce(function() {
        // Reset to defaults
        resetDefaults();
        // Attach click event to chevron on mobile.
        if (window.innerWidth < 900) {
          iconClick();
        }
        // Disable click event on chevron on desktop.
        else {
          $('i.subnav-trigger').off('click');
        }
      }, 100);
      $(window).on('load resize', resizeEvent);

    }
  };

})(jQuery, Drupal, Drupal.debounce);