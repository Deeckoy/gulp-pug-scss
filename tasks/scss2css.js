const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

module.exports = function scss2css() {
	return src('./app/assets/styles/*')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(concat('styles.min.css'))
		.pipe(sourcemaps.write('/sourcemaps'))
		.pipe(dest('./dist/assets/css'));
};