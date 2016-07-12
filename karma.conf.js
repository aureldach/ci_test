module.exports = function (config) {
    var configuration = {
        basePath: '.',

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        reporters: ['spec'],

        specReporter: {
            maxLogLines: 5,         // limit number of lines logged per test
            suppressErrorSummary: true,  // do not print error summary
            suppressFailed: false,  // do not print information about failed tests
            suppressPassed: false,  // do not print information about passed tests
            suppressSkipped: true,  // do not print information about skipped tests
            showSpecTiming: false // print the time elapsed for each spec
        },

        plugins: ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-spec-reporter'],

        files: [
            // paths loaded by Karma
            {pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: true},
            {pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: true},
            {pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: true},
            {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
            {pattern: 'node_modules/zone.js/dist/async-app.spec.js', included: true, watched: true},
            {pattern: 'systemjs.config.js', included: true, watched: true},
            {pattern: 'karma-test-shim.js', included: true, watched: true},

            // paths loaded via module imports
            {pattern: 'app/**/*.js', included: false},
            {pattern: 'test/**/*.js', included: false },

            // paths to support debugging with source maps in dev tools
            {pattern: 'app/**/*.ts', included: false, watched: false},
            {pattern: 'app/**/*.js.map', included: false, watched: false},

            // path to required node_packages
            {pattern: 'node_modules/@angular/**/*', included: false, watched: false},
            {pattern: 'node_modules/rxjs/**/*', included: false, watched: false},
            {pattern: 'node_modules/zone.js/dist/**/*', included: false, watched: false},
            {pattern: 'node_modules/ng2-toastr/**/*', included: false, watched: false}
        ],

        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            "/app/": "/base/app/",
            "/test/": "/base/test/",
            "/node_modules/": "/base/node_modules/"
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO
    };

    config.set(configuration);
};
