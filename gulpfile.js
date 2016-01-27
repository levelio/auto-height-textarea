/**
 * Created by hezhiqiang on 16/1/28.
 */
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint');


gulp.task('lint', function () {
    gulp.src('./src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('build-script',['lint'], function(){
   gulp.src('./src/*.js')
       .pipe(gulp.dest('./dist/'))
       .pipe(uglify())
       .pipe(rename({suffix:'.min'}))
       .pipe(gulp.dest('./dist/'));
});