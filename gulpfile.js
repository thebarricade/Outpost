var gulp = require('gulp');


var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./style/less/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    // .pipe(minifyCSS())
    .pipe(gulp.dest('./style'));
});

gulp.task('default', function() {
  // place code for your default task here
});