"use strict";

var gulp = require("gulp");
var sass = require('gulp-sass')(require('sass'));
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
      cascade: false
    }))
    .pipe(csscombx())
    .pipe(gulp.dest("css"));
});

gulp.task("css-lint", function lintCssTask() {
  return gulp
    .src("src/css/**/*.css")
    .pipe(gulpStylelint({
      reporters: [
        {formatter: "string", console: true}
      ],
      failAfterError: false
    }));
});

gulp.task("default", gulp.series("scss-lint", "sass", "css-lint"));
