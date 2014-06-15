module.exports = (grunt) ->

	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'
		uglify:
			js:
				files:
					'pavo.min.js': 'src/**/*.js'
				options:
					banner: '/* Pavo. */'
					preserveComments: false
		jshint:
			all:
				'src/**/*.js'
			options:
				jshintrc: '.jshintrc'

	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-contrib-jshint'

	grunt.registerTask 'default', ['uglify']