const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const pug = require('gulp-pug');
   
gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true 
       }))
  });

gulp.task('pug',function() {
    return gulp.src('app/*.pug')
    .pipe(pug({
       doctype: 'html',
       pretty: false
    }))
  .pipe(gulp.dest('app/'));
  }); 

gulp.task('watch', ['browserSync', 'sass', 'pug'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    gulp.watch('app/**/*.pug', ['pug'], browserSync);  
})

gulp.task('browserSync', function() {
    
    browserSync({
    server: {
      baseDir: "app"
    },
    })
})