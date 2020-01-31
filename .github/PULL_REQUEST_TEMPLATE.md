<!--- Title format : ISSUE # : Action-verb driven description-->

## Motivation/Purpose of Changes
<!--- Why is this change needed? Links to existing issues are great. -->
See #

## Proposed Resolution/Implementation
<!--- Describe any implementation choices you made that are noteworthy -->
<!--- or may require discussion. -->

## Screenshot(s)
<!--- (If relevant) -->

## Types of changes
<!--- Put an `x` in all the boxes that apply: -->
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)

## Checklist
<!--- Go over all the following points, and put an `x` in all the boxes that apply. -->
<!--- If you're unsure about any of these, don't hesitate to ask. We're here to help! -->
- [ ] Code follows the coding style of this project.
- [ ] Change requires a change to the documentation.
- [ ] I have updated the documentation accordingly.
- [ ] I have added tests to cover my changes.
- [ ] All new and existing tests passed.

## Evaluation Steps
<!--- Include notes for both functional testing & code review -->

0. See 'installing a site with this branch,' below.
0.

## Reference: installing a site with this branch
<!--- Include notes for both functional testing & code review -->

1. `git clone git@github.austin.utexas.edu:eis1-wcs/utdk_scaffold.git && cd utdk_scaffold`
2. `composer require utexas/utdk_profile:dev-develop`
3. `cd web/themes/contrib/`
4. `rm -rf forty_acres && git clone --branch <branchname> git@github.austin.utexas.edu:eis1-wcs/forty_acres.git`
5. `composer run-script dev-scaffold`
6. `fin init && fin init-site --wcs`

## Potential Reviewers

@eis1-wcs/drupal-utdk
