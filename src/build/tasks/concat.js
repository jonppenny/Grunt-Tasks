'use strict';

module.exports = function (grunt) {
    grunt.config('concat', {
        options : {
            separator : ';'
        },
        src : [],
        dest : '<%= config.paths.deploy %>js/script.js'
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};
