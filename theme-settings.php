<?php

/**
 * @file
 * Theme settings which allow for configuration settings through the theme UI.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function forty_acres_form_system_theme_settings_alter(&$form, FormStateInterface $form_state, $form_id = NULL) {

  // Forty Acres custom settings.
  $form['utexas_custom_section'] = [
    '#type' => 'markup',
    '#markup' => '<h2><small>Forty Acres Custom Settings</small></h2>',
  ];
  $form['ut_vertical_tabs'] = [
    '#type' => 'vertical_tabs',
  ];
  // Header settings.
  $form['header_theme_settings'] = [
    '#type' => 'details',
    '#title' => t('Header settings'),
    '#collapsible' => TRUE,
    '#group' => 'ut_vertical_tabs',
  ];
  $setting = theme_get_setting('logo_height');
  $form['logo']['logo_height'] = [
    '#type' => 'radios',
    '#title' => t('Logo Height'),
    '#description' => t("Most UT Austin logos will work with the 'short' option, but logos that are taller or wider than normal may need to use the 'tall' setting in order to not appear too small. For best results, use an image that is twice as large as the desired display size, for higher pixel density screens."),
    '#options' => [
      'short_logo' => t('Short'),
      'tall_logo' => t('Tall'),
    ],
    '#default_value' => isset($setting) ? $setting : 'short_logo',
  ];
  // Header settings subsections.
  $form['header_theme_settings']['parent_entity_fieldset'] = [
    '#type' => 'fieldset',
    '#title' => t('Parent entity settings'),
  ];
  $form['header_theme_settings']['parent_entity_fieldset']['parent_link_title'] = [
    '#type' => 'textfield',
    '#title' => t('Parent Entity Name'),
    '#description' => t("OPTIONAL - Enter the name of the site's parent college or office, if providing a link to the parent unit in the orange University Brand Bar. This will appear as a link at the left of the Brand Bar."),
    '#default_value' => theme_get_setting('parent_link_title'),
    '#maxlength' => 256,
  ];
  $form['header_theme_settings']['parent_entity_fieldset']['parent_link'] = [
    '#type' => 'url',
    '#title' => t('Parent Entity Website'),
    '#description' => t("If providing a parent entity link in the brand bar above, enter the URL of the site's parent college or office. This is required if you have entered a Parent Entity Name."),
    '#default_value' => theme_get_setting('parent_link'),
    '#maxlength' => 256,
    '#attributes'    => [
      'placeholder' => t('https://'),
    ],
    '#element_validate' => ['_forty_acres_parent_link_validate'],
  ];
  $form['header_theme_settings']['region_display_fieldset'] = [
    '#type' => 'fieldset',
    '#title' => t('Region display settings'),
  ];
  $header_secondary_display_setting = theme_get_setting('header_secondary_display');
  $form['header_theme_settings']['region_display_fieldset']['header_secondary_display'] = [
    '#type' => 'radios',
    '#title' => t('Header Secondary display'),
    '#description' => t('Display blocks placed in the Header Secondary region as side-by-side or stacked.'),
    '#options' => [
      'side_by_side' => t('Side-by-side'),
      'stacked' => t('Stacked'),
    ],
    '#default_value' => $header_secondary_display_setting ?? 'stacked',
  ];
  // Bootstrap settings.
  $form['bootstrap'] = [
    '#type' => 'details',
    '#title' => t('Bootstrap settings'),
    '#collapsible' => TRUE,
    '#group' => 'ut_vertical_tabs',
  ];
  // Bootstrap settings subsections.
  $form['bootstrap']['bootstrap_settings'] = [
    '#type' => 'fieldset',
    '#title' => t('Bootstrap component settings'),
  ];
  $form['bootstrap']['bootstrap_settings']['bootstrap_components'] = [
    '#type' => 'checkboxes',
    '#title' => t('Select additional Bootstrap elements to load their CSS and JavaScript files.'),
    '#description' => t('Note: this is an experimental feature.  We do not guarantee these elements will work correctly with Drupal.'),
    '#options' => [
      'collapse' => t('Collapse <a href="@bootstrap-accordion" target="_blank">see here for more information</a>. For Forty Acres specific usage of accordions, see the  <a href="@utdk-docs-accordion" target="_blank">documentation page for this component</a>.', [
        '@bootstrap-accordion' => 'https://getbootstrap.com/docs/4.0/components/collapse/',
        '@utdk-docs-accordion' => 'https://drupalkit.its.utexas.edu/docs/forty_acres/theme_settings.html#collapse-accordion',
      ]),
      'alert' => t('Alerts <a href="@bootstrap-alerts" target="_blank">see here for more information</a>.', [
        '@bootstrap-alerts' => 'https://getbootstrap.com/docs/4.0/components/alerts/',
      ]),
      'modal' => t('Modal <a href="@bootstrap-modal" target="_blank">see here for more information</a>. For Forty Acres specific usage of modals, see the  <a href="@utdk-docs-modal" target="_blank">documentation page for this component</a>.', [
        '@bootstrap-modal' => 'https://getbootstrap.com/docs/4.0/components/modal/',
        '@utdk-docs-modal' => 'https://drupalkit.its.utexas.edu/docs/forty_acres/theme_settings.html#modal',
      ]),
      'tab' => t('Navs/Tabs <a href="@bootstrap-navs" target="_blank">see here for more information</a>. This component is required by the Profile add-on and disabling it will result in unexpected behaviors.', [
        '@bootstrap-navs' => 'https://getbootstrap.com/docs/4.0/components/navs/',
      ]),
      'tooltip' => t('Tooltips <a href="@bootstrap-tooltips" target="_blank">see here for more information</a>.', [
        '@bootstrap-tooltips' => 'https://getbootstrap.com/docs/4.0/components/tooltips/',
      ]),
    ],
    '#default_value' => theme_get_setting('bootstrap_components') ? theme_get_setting('bootstrap_components') :
    [
      "collapse" => "collapse",
      "tab" => "tab",
      "alert" => 0,
      "dropdown" => 0,
      "modal" => 0,
      "tooltip" => 0,
    ],
  ];

  $form['#submit'][] = 'forty_acres_form_system_theme_settings_submit';
}

/**
 * Helper function to provide validation on Parent Entity Website.
 */
function _forty_acres_parent_link_validate($element, FormStateInterface &$form_state) {
  $parent_title = $form_state->getValue('parent_link_title');
  $parent_link = $form_state->getValue('parent_link');
  if (!empty($parent_title) && empty($parent_link)) {
    $form_state->setError($element, t('Please enter a link for the Parent Entity Website.  A link is required if you have entered a Parent Entity Name.'));
  }
}

/**
 * Theme Settings Submit Callback.
 */
function forty_acres_form_system_theme_settings_submit($form, FormStateInterface &$form_state) {
  drupal_flush_all_caches();
}
