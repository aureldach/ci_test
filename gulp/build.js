'use strict';

var gulp = require('gulp');
var config = require('../gulp.config')();
var del = require('del');
var path = require('path');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var inject = require('gulp-inject');
var util = require('gulp-util');
var filter = require('gulp-filter');
var gulpif = require('gulp-if');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var runSequence = require('run-sequence');

var Builder = require('systemjs-builder');

gulp.task('build', function () {
    runSequence('clean', ['html', 'resources', 'build-sjs']);
});

gulp.task('html', ['build-sjs'], function () {
    var injectAppJs = gulp.src(path.join(config.dist, "scripts/*.js"), { read: false });

    gulp
        .src('index.html')
        .pipe(inject(injectAppJs))
        .pipe(useref())
        .pipe(gulpif('scripts/*.js', uglify()))
        .pipe(gulpif('!index.html', rev()))
        .pipe(revReplace())
        .pipe(gulp.dest(config.dist))
        .on('end', function() {
            del(path.join(config.dist, "scripts/app.js"));
        });
});

gulp.task('resources', function () {
    gulp
        .src(['app/**/*','!app/**/*.{html,css,ts,js,js.map}'])
        .pipe(filter(function (file) {
            return file.stat.isFile();
        }))
        .pipe(gulp.dest(path.join(config.dist, "app")));

    // TODO: resolve using npm, import/run semantic gulpfile
    gulp
        .src(['semantic/dist/**/*'])
        .pipe(gulp.dest(path.join(config.dist, "semantic/dist")));
});

gulp.task('build-sjs', ['compile-ts'], function (done) {
    var builder = new Builder();
    builder.loadConfig('systemjs.config.js')
        .then(function () {
            return builder
                .bundle('app/boot', path.join(config.dist, "scripts/app.js"), {
                    format: 'cjs',
                    minify: false,
                    mangle: false,
                    normalize: true
                });
        })
        .then(function () {
            done();
        })
        .catch(function (ex) {
            console.log('error', ex);
            done('Build failed.');
        });
});
