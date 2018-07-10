"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var del = require("del");
var sequence = require("gulp-sequence");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function () {
  return gulp.src("./src/scss/build/**/*.scss")
    .pipe(sass({outputStyle: 'expanded'}).on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ["last 2 versions"],
      cascade: false
    }))
    .pipe(gulp.dest("css"));
});

gulp.task("default", sequence("sass"));
