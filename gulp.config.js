module.exports = function() {
   var app = 'app/';
   var dist ='dist/';
   var test = 'test/';

   // app files
   var appTsFiles = app + '**/!(*.spec)+(.ts)';
   var appGeneratedJs = 'app/**/!(*.spec)+(.{js,js.map})';

   // app test files + test util dir
   var testSpecTsFiles = app + '**/*.spec.ts';
   var testUtilTsFiles = test + '**/*.ts';
   var testSpecGeneratedJs = app + '**/*.spec.{js,js.map}';
   var testUtilGeneratedJs = test + '**/*.{js,js.map}';

   return {
      app: app,
      dist: dist,
      test: test,
      allTsFiles:  [appTsFiles, testSpecTsFiles, testUtilTsFiles],
      allGeneratedJs: [appGeneratedJs, testSpecGeneratedJs, testUtilGeneratedJs]
   }
};