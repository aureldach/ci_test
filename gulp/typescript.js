'use strict';

var gulp = require('gulp');
var config = require('../gulp.config')();
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var inlineNg2Template = require('gulp-inline-ng2-template');
var path = require('path');

var tsProject = tsc.createProject('tsconfig.json');

gulp.task('ts-lint', function () {
    return gulp.src(config.allTsFiles)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }));
});

gulp.task('compile-ts', ['ts-lint'], function () {
    var tsResult = gulp
        .src(config.allTsFiles, {
            base: '.'
        })
        .pipe(inlineNg2Template({base: '/app'}))
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    
    return tsResult.js
        .pipe(sourcemaps.write('.', {
            // Return relative source map root directories per file.
            includeContent: false,
            sourceRoot: function (file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return path.relative(path.dirname(sourceFile), file.cwd);
            }
        }))
        .pipe(gulp.dest(''));
});
