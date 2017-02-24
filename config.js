// jshint node: true
// jshint esnext: true
'use strict';

const PROJECT_NAME = 'sale';

module.exports = {

	src: {
		root: 'src/',
		pug: [
			'src/**/*.pug',
			'!src/**/mixin-*.pug'
		],
		styl: [
			'src/**/*.styl'
		],
		js: [
			'src/**/*.js'
		],
		assets: [
			'src/**/*.jpg'
		],
		json: [
			'src/**/*.json'
		]
	},

	dist: {
		root: 'docs/',
		filenames: {
			html: PROJECT_NAME + '.html',
			css: PROJECT_NAME + '.css',
			js: PROJECT_NAME + '.js'
		}
	},

	vendor: {
		filenames: {
			css: 'vendor.css',
			js: 'vendor.js'
		},
		css: [
			'./node_modules/reset-css/reset.css'
		],
		js: [
		]
	}

};
