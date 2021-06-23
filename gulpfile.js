"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var autoprefixer = require("gulp-autoprefixer");
var gulpStylelint = require("gulp-stylelint");
var csscombx = require("gulp-csscombx");

gulp.task("scss-lint", function lintCssTask() {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(gulpStylelint({
      reporters: [
        {formatter: "string", console: true}
      ],
      failAfterError: false
    }));
});

gulp.task("sass", function () {
  return gulp.src("./src/scss/build/**/*.scss")
    .pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ["last 2 versions"],
      cascade: false
    }))
    .pipe(csscombx())
    .pipe(gulp.dest("css"));
});

gulp.task('copy-js', function () {
  return gulp
    .src([
      './node_modules/accessible-mega-menu/js/jquery-accessibleMegaMenu.js',
      './node_modules/bootstrap/js/dist/tab.js',
      './node_modules/bootstrap/js/dist/util.js',
      './node_modules/bootstrap/js/dist/collapse.js',
      './node_modules/bootstrap/js/dist/alert.js',
      './node_modules/bootstrap/js/dist/dropdown.js',
      './node_modules/bootstrap/js/dist/modal.js',
      './node_modules/bootstrap/js/dist/tooltip.js',
      './node_modules/popper.js/dist/umd/popper.js'
    ])
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

gulp.task("default", gulp.series("scss-lint", "sass", "copy-js"));
