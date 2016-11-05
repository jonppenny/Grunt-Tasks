'use strict';

module.exports = function (grunt) {
    grunt.config('cssmin', {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= config.paths.deploy %>css',
                src: ['*.css', '!*.min.css'],
                dest: '<%= config.paths.deploy %>css',
                ext: '.min.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
};
