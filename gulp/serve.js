'use strict';

var gulp = require('gulp');
var config = require('../gulp.config')();
var del = require('del');
var browserSync = require('browser-sync');
var superstatic = require('superstatic');

gulp.task('serve', ['ts-lint', 'compile-ts'], function () {
    gulp.watch(config.allTsFiles, ['ts-lint', 'compile-ts']);

    browserSync({
        port: 4000,
        files: ['index.html', '**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: ['./', './app', './node_modules', './semantic', './typings'],
            middleware: superstatic({
                debug: false
            })
        }
    });
});