const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const prefix = require('gulp-autoprefixer')
const minify = require('gulp-clean-css')
const rename = require('gulp-rename')

gulp.task('dev', function () {
    return gulp
        .src('./piment/**/*.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(gulp.dest('public/assets/css')) // .css
})

gulp.task('build', function () {
    return gulp
        .src('./piment/**/*.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(gulp.dest('public/assets/css')) // .css
        .pipe(minify())
        .pipe(
            rename(function (path) {
                return {
                    dirname: path.dirname + '',
                    basename: path.basename + '.min',
                    extname: '.css',
                }
            })
        )
        .pipe(gulp.dest('public/assets/css')) // .min.css
})

gulp.task('watch', function () {
    gulp.watch(['piment/**/*.scss'], gulp.series('dev'))
})
