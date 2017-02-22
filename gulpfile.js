// jshint node: true
// jshint esnext: true
'use strict';

const config = require('./config.js');
const gulp = require('gulp');

require('./gulp-tasks/clean')(config);
require('./gulp-tasks/process-assets')(config);
require('./gulp-tasks/process-templates')(config);
require('./gulp-tasks/process-stylesheets')(config);
require('./gulp-tasks/process-stylesheets-vendor')(config);
require('./gulp-tasks/process-javascript')(config);

gulp.task('default', [
	'build',
	'watch'
]);

gulp.task('build', [ 'clean' ], function () {
	return gulp.start([
		'process-javascript',
		'process-stylesheets',
		'process-stylesheets-vendor',
		'process-templates',
		'process-assets'
	]);
});

gulp.task('watch', [
	'watch-assets',
	'watch-templates',
	'watch-stylesheets',
	'watch-javascript'
]);
