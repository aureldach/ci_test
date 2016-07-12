'use strict';

var gulp = require('gulp');
var config = require('../gulp.config')();
var del = require('del');
var path = require('path');

gulp.task('clean', ['clean-dist', 'clean-ts']);

gulp.task('clean-dist', function () {
    return del(path.join(config.dist, "**"));
});

gulp.task('clean-ts', function () {
    return del(config.allGeneratedJs);
});
