var gulp = require('gulp')
  , sass = require('gulp-sass')
  , nodemon = require('gulp-nodemon')

// Plugins
var livereload = require('gulp-livereload')

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/**/*.scss', ['sass'])
})

gulp.task('sass', function() {
  gulp.src('./src/stylesheets/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/stylesheets'))
    .pipe(livereload())
})

gulp.task('default', ['watch', 'sass'], function() {
  nodemon()
})
