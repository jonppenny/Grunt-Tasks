module.exports = function (grunt) {
    'use strict';

    // Prevent grunt from autoloading templates to avoid an error message
    // see https://github.com/maenu/grunt-template-jasmine-istanbul/issues/8
    require('load-grunt-tasks')(grunt, {
        pattern: [
            'grunt-*',
        ]
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: grunt.file.readJSON('./tasks/config.json'),
        concat: require('./tasks/concat')(grunt),
        sass: require('./tasks/sass')(grunt),
        postcss: require('./tasks/postcss')(grunt),
        cssmin: require('./tasks/cssmin')(grunt),
        imagemin: require('./tasks/postcss')(grunt),
        //copy: require('./tasks/copy')(grunt),
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', [
        'concat',
        'sass',
        'postcss',
        'cssmin',
        'imagemin'
    ]);
};
