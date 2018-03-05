module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			target: [
				'payload/**/*.js',
				'config/config.sample.js',
				'routes/**/*.js',
				'test/**/*.js',
				'db/**/*.js',
				'./*.js'
			]
		},
		jscs: {
			src: [
				'payload/**/*.js',
				'config/config.sample.js',
				'routes/**/*.js',
				'test/**/*.js',
				'db/**/*.js',
				'./*.js'
			],
			options: {
				config: '.jscsrc',
				requireCurlyBraces: ['if']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');

	grunt.registerTask('default', ['jshint', 'jscs']);
};
