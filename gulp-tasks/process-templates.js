// jshint node: true
// jshint esnext: true
'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');

module.exports = function (config) {

	gulp.task('process-templates', function () {
		const stuff = require('../src/stuff/stuff.json');
		return gulp
			.src(config.src.pug)
			.pipe(pug({
				data: { stuff: stuff }
			}))
			.pipe(gulp.dest(config.dist.root));
	});

	gulp.task('watch-templates', function () {
		gulp.watch(config.src.pug[0], ['process-templates']);
	});

};
