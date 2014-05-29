'use strict';

var browserify = require('gulp-browserify');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');


module.exports = function(options) {

    options = options || {};
    var debug = options.debug || false;

    var plugin = function(inputPath, outputPath) {
        return function() {
            return gulp.src(inputPath + '/js/app.js')
                .pipe(browserify({
                    debug : debug
                }))
                .on('error', gutil.log)
                .pipe(gulpif(debug, uglify()))
                .pipe(gulp.dest(outputPath + '/js/'));
        };
    };

    return {
        js: plugin
    };
};
