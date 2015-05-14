var gulp = require('gulp');
var Builder = require('systemjs-builder');

gulp.task('build', function(done) {
    var builder = new Builder();

    builder.loadConfig('./app/jspm.conf.js')
    .then(function() {
        builder.config({
            baseURL: 'file:' + process.cwd() + '/app'
        });

        return builder.build('source/startapp', 'build/app.js');
    })
    .then(function() {
        console.log('Build complete');
        done();
    })
    .catch(function(err) {
        console.log(err);
    });
});
