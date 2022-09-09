const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('piment/**/*.scss')
        .pipe(sass(), 'compressed')
        .pipe(dest('public/assets/css'))
}

function watchTask() {
    watch(['piment/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)