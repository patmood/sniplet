var gulp = require('gulp')
  , sass = require('gulp-sass')

gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', ['sass'])
})

gulp.task('sass', function() {
  gulp.src('./src/stylesheets/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/stylesheets'))
})

gulp.task('default', ['watch', 'sass'])
