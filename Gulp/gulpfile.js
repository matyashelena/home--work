const {
  src,
  dest,
  watch
} = require('gulp');
const { post } = require('jquery');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const postcss= require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// styles
function styles() {
  const pligins = [
    autoprefixer()
  ];

  return src('app/styles/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss(plugins))
  .pipe(dest('build'))
}
// local server
function serve() {
  browserSync.init({
    baseDir: "./build/"
  });
  watch('app/index.html', moveHtml).on('change', browserSync.reload);
  watch('app/**/*.scss', styles).on('change', browserSync.reload);
}
exports.serve = serve;

function moveHtml() {
  return src('app/index.html')
    .pipe(dest('build/'))
}
exports.moveHtml = moveHtml;