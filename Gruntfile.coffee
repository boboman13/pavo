module.exports = (grunt) ->

	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'
		uglify:
			js:
				files:
					'pavo.min.js': 'src/**/*.js'
				options:
					banner: '/** Pavo. Built by Grunt. **/'
					preserveComments: false

	grunt.loadNpmTasks 'grunt-contrib-uglify'

	grunt.registerTask 'default', ['uglify']