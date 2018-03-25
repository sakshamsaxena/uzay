module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			target: [
				'payload/**/*.js',
				'config/config.sample.js',
				'routes/**/*.js',
				'models/**/*.js',
				'schema/**/*.js',
				'test/**/*.js',
				'./*.js'
			]
		},
		jscs: {
			src: [
				'payload/**/*.js',
				'config/config.sample.js',
				'routes/**/*.js',
				'models/**/*.js',
				'schema/**/*.js',
				'test/**/*.js',
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
