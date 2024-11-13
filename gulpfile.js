"use strict";

var gulp = require("gulp");
var sass = require('gulp-sass')(require('sass'));
var uglify = require("gulp-uglify");
var autoprefixer = require("gulp-autoprefixer");
var gulpStylelint = require("gulp-stylelint");

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

gulp.task('copy-js', function () {
  return gulp
    .src([
      './node_modules/accessible-mega-menu/js/jquery-accessibleMegaMenu.js'
    ])
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

gulp.task('copy-css', function () {
  return gulp
    .src([
      './node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
    .pipe(gulp.dest('css/bootstrap'));
});

gulp.task("sass", function () {
  return gulp.src("./src/scss/build/**/*.scss")
    .pipe(sass({
      outputStyle: "expanded",
      quietDeps: true
    }).on("error", sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest("css"));
});

gulp.task("default", gulp.series("scss-lint", "sass", "copy-js", "copy-css"));
