/**
 * @file
 * Make facet reset checkboxes display as links
 */

(function ($, Drupal) {

  'use strict';

  Drupal.forty_acres_facets = Drupal.forty_acres_facets || {};
  Drupal.behaviors.facetsCheckboxReset = {
    attach: function (context) {
      Drupal.forty_acres_facets.prepCheckboxes(context);
    }
  };

  /**
   * Turns all facet links into checkboxes.
   */
  Drupal.forty_acres_facets.prepCheckboxes = function (context) {

    var $widgetLinks = $('.facet-item.facets-reset');
    $widgetLinks.each(Drupal.forty_acres_facets.fixCheckbox);
  };

  /**
   * Replace a link with a checked checkbox.
   */
  Drupal.forty_acres_facets.fixCheckbox = function () {
    var $label = $(this).find("label");
    var $link = $(this).find("a");
    var $input = $(this).find("input");
    $link.show();
    $input.hide();
    $link.find(".facet-item__count").hide();
    $label.hide();
  };

})(jQuery, Drupal);
