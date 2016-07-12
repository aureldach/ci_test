'use strict';

var gulp = require('gulp');
var config = require('../gulp.config')();
var del = require('del');
var tsc = require('gulp-typescript');

var tsProject = tsc.createProject('tsconfig.json');
var Server = require('karma').Server;

gulp.task('unit-test', ['compile-ts'], function (done) {
    new Server({
        configFile: __dirname + '/../karma.conf.js',
        singleRun: true,
        autoWatch: false
    }, karmaDone).start();

    function karmaDone (exitCode) {
        console.log('Test done with exit code: ' + exitCode);
        if(exitCode === 0) {
            done();
        } else {
            done('Unit test failed.');
        }
    }
});