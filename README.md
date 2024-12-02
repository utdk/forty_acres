# Forty Acres

This is a Drupal theme maintained by the University of Texas at Austin for use with the UT Drupal Kit. It is based on the Bootstrap library v5.

Full documentation can be found at https://drupalkit.its.utexas.edu/docs/forty_acres/index.html

## Frontend build notes

The following is the standard way to rebuild the frontend assets as of 2024:

```
nvm use 20
npm install
npm run gulp
```

Output should show the following, ideally without any linting warnings:

```
> ./node_modules/gulp/bin/gulp.js default

[12:36:38] Using gulpfile web/themes/custom/forty_acres/gulpfile.js
[12:36:38] Starting 'default'...
[12:36:38] Starting 'scss-lint'...
[12:36:39] Finished 'scss-lint' after 885 ms
[12:36:39] Starting 'sass'...
[12:36:40] Finished 'sass' after 625 ms
[12:36:40] Starting 'copy-js'...
[12:36:40] Finished 'copy-js' after 244 ms
[12:36:40] Starting 'copy-css'...
[12:36:40] Finished 'copy-css' after 2.65 ms
[12:36:40] Finished 'default' after 1.76 s
```
