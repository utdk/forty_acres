#!/usr/bin/env bash

# The following assumes that this repository's package.json includes
# "stylelint", that the node packages have been installed, and that
# the git commit command is being run from the repository root.
STYLELINTER="$PWD/node_modules/stylelint/bin/stylelint.js"

echo 
if [ ! -f $STYLELINTER ];
  then
    echo "WARNING: Stylelint was not found at $STYLELINTER. This commit might include coding standards violations. You can fix this by running `npm install` in the repository root, and running your git commit command from that directory."
    exit 1
  else
    echo "Checking staged files for CSS code..."
fi
echo
CSS_LIST=$( git diff --name-only --cached --diff-filter=ACM -- '*.css' '*.scss')
if [ ! -z "$CSS_LIST" ];
  then
    $STYLELINTER ${CSS_LIST}
  else
    echo "No CSS-related files staged."
fi