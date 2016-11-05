'use strict';

module.exports = function (grunt) {
    grunt.config('imagemin', {
        dist: {
            options: {
                optimizationLevel: 7
            },
            files: [{
                expand: true,
                cwd: '<%= config.paths.src %>images',
                src: ['**/*.{png,jpg,gif}'],
                dest: '<%= config.paths.deploy %>images'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
};
