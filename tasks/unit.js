var gulp = require('gulp');
var karma = require('karma').server;

gulp.task('unit', function(done) {
  karma.start({
    configFile: __dirname + '/../test/karma.conf.js',
    singleRun: true
  }, done);
});
