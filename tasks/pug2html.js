const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const pug = require('gulp-pug')

module.exports = function pug2html() {
  return src('./app/views/pages/**/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(dest('./dist'))
}