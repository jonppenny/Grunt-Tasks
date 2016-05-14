'use strict';

module.exports = function (grunt) {
    grunt.config.merge({
        sass: {
            dist: {
                files: {
                    '<%= config.paths.deploy %>css/custom.css': '<%= config.paths.src %>scss/main.scss',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
};
