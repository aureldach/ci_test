// This config is used during development and build phase only
// It will not be available on production
(function() {
    System.config({
        defaultJSExtensions: true,
        packages: {
            '@angular/core': { main: 'index.js', defaultExtension: 'js' },
            '@angular/common': { main: 'index.js', defaultExtension: 'js' },
            '@angular/compiler': { main: 'index.js', defaultExtension: 'js' },
            '@angular/http': { main: 'index.js', defaultExtension: 'js' },
            '@angular/platform-browser': { main: 'index.js', defaultExtension: 'js' },
            '@angular/platform-browser-dynamic': { main: 'index.js', defaultExtension: 'js' },
            '@angular/router': { main: 'index.js', defaultExtension: 'js' },
            '@angular/testing': { main: 'index.js', defaultExtension: 'js' },
            '@angular/forms': { main: 'index.js', defaultExtension: 'js' },
            'rxjs': { defaultExtension: 'js' }
        },
        map: {
            lodash: 'node_modules/lodash/lodash.js',
            rxjs: 'node_modules/rxjs',
            '@angular': 'node_modules/@angular',
            'ng2-toastr': 'node_modules/ng2-toastr'
        },
        meta: {
            lodash: { format: 'amd' }
        }
    });
})();
