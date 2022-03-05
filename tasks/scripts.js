const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps');
const eslint = require('gulp-eslint');

module.exports = function script() {
  return src('./app/scripts/**/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(eslint())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('/sourcemaps/'))
    .pipe(dest('./dist/assets/scripts'))
};