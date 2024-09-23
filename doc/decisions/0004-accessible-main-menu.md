# 3. Accessible Main Menu

Date: 2024-07-18

## Status

Accepted

## Context

- As with accessibility for the Drupal Kit in general, we place a high value on making the menu navigation fully accessible
- We are a small team with limited time for -- and limited expertise in -- accessibility navigation rules and implementations
- To our knowledge, there are no alternatives to the [Accessible Mega Menu](https://adobe-accessibility.github.io/Accessible-Mega-Menu/) that similarly provide all the requirements we have identified (mobile/desktop display, keyboard/mouse/touch navigable, aria-accessible)

## Decision

Use Adobe's model of the Accessible Mega Menu for main navigation.

## Consequences

- By choosing to use a proof-of-concept, rather than a maintained library, we are largely responsible for fixing problems and requirements the original proof-of-concept did not address.
- The business logic for a mega menu that provides mobile AND desktop displays AND is fully accessible by mouse, keyboard, and touch screen is necessarily complicated. Using the best-at-time solution instead of trying to implement our own solution was a necessary reality for us being a small team of developers. We cannot realistically build and maintain a custom solution, given our other work priorities and constraints.
