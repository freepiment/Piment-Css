const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('compilescss', function() {
    gulp.src('./piment/**/*.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(minify())
        .pipe(rename(function (path) {
            return {
            dirname: path.dirname + "",
            basename: path.basename + ".min",
            extname: ".css"
            };
        }))
        .pipe(gulp.dest('./public/assets/css'))
});
