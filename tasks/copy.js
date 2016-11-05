'use strict';

module.exports = function (grunt) {
    grunt.config('copy', {
        images_to_deploy: {
            files: [{
                expand: true,
                cwd: '<%= config.paths.src %>images',
                src: ['**'],
                dest: '<%= config.paths.deploy %>images'
            }]
        },
        fonts_to_deploy: {
            files: [{
                expand: true,
                cwd: '<%= config.paths.src %>fonts',
                src: ['**'],
                dest: '<%= config.paths.deploy %>fonts'
            }]
        },
        html_to_deploy: {
            files: [{
                expand: true,
                cwd: '<%= config.paths.src %>',
                src: ['**/*.html'],
                dest: '<%= config.paths.deploy %>'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
