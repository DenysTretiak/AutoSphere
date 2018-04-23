const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const pug = require('gulp-pug');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');
const minifyCss = require('gulp-minify-css');
const gulpif = require('gulp-if');
const del = require('del');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
// const pngquant = require('imagemin-pngquant');

gulp.task('useref',['clean', 'pug', 'sass'], function (){
  return gulp.src('app/*.html')
  .pipe(gulpif('*.js', uglify()))
  .pipe(gulpif('*.css', minifyCss()))
  .pipe(useref())
  .pipe(gulp.dest('dist'));
});

gulp.task('img', function() {
  return gulp.src('app/images/**/*') // Берем все изображения из app
//   .pipe(cache(imagemin([
//     imagemin.gifsicle({interlaced: true}),
//     imagemin.jpegtran({progressive: true}),
//     imagemin.svgo({
//         plugins: [
//             {removeViewBox: true},
//             {cleanupIDs: false}
//         ]
//     })
// ])))
      .pipe(gulp.dest('dist/images')); // Выгружаем на продакшен
});

gulp.task('build', ['clean', 'useref', 'img'], function(){
  const buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('clean', function() {
  return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true 
       }))
});

gulp.task('pug',function() {
    return gulp.src('app/pug/*.pug')
    .pipe(pug({
       doctype: 'html',
       pretty: true
    }))
  .pipe(gulp.dest('app/'));
  }); 

gulp.task('watch', ['browserSync', 'sass', 'pug'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    gulp.watch('app/**/*.pug', ['pug'], browserSync.reload);  
})

gulp.task('browserSync', function() {
    browserSync({
    server: {
      baseDir: "app"
    },
    })
})