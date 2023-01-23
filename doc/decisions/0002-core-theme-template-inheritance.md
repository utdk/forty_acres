# 2. Core theme template inheritance

Date: 2022-11-30

## Status

Accepted

## Context

Forty Acres' base theme is Stable. Stable differs from Classy by not populating Drupal CSS classes in its templates. We initially chose to use Stable as a base theme so that Forty Acres markup would render only its own CSS, not extend Drupal's. This decision was motivated in part by the expectation that it would be an implementation of the [Texas Design System](https://github.austin.utexas.edu/pres-tds/tds). Work on the Texas Design System was paused in 2020.

A consequence of this decision is that Forty Acres templates do not have CSS classes that many Drupal developers expect to be present, such as `node--type-page` or `node--unpublished`.

## Decision

Classy theme templates provide a minimal baseline without introducing more complexity than we need. Copy Classy's templates into Forty Acres on a case-by-case basis to add useful Drupal CSS classes. Omit any Classy theme dependencies in the templates, such as library attachments.

For more complex needs, create our own templates, or rely on custom modules with custom templates.

## Consequences

 - Leveraging the Classy theme `node.html.twig` should work well to bring in some needed CSS classes like `node--unpublished`.
 - More CSS classes will be present in page markup, which could be perceived by some developers as 'noise'.
