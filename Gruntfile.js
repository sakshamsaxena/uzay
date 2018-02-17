module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			target: [
				'config/**/*.js',
				'models/**/*.js',
				'routes/**/*.js',
				'test/**/*.js',
				'./*.js'
			]
		},
		jscs: {
			src: [
				'config/**/*.js',
				'models/**/*.js',
				'routes/**/*.js',
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
