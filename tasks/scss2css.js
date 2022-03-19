const { src, dest } = require('gulp')

const plumber = require('gulp-plumber')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')

module.exports = function scss2css() {
  var config = [
    autoprefixer({
      overrideBrowserslist: ['last 8 versions'],
      browsers: [
        'Android >= 4',
        'Chrome >= 20',
        'Firefox >= 24',
        'Explorer >= 11',
        'iOS >= 6',
        'Opera >= 12',
        'Safari >= 6',
      ],
    }),
  ]

  return src('./app/assets/styles/*')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(postcss(config))
    .pipe(concat('styles.min.css'))
    .pipe(sourcemaps.write('/sourcemaps'))
    .pipe(dest('./dist/assets/css'))
}
