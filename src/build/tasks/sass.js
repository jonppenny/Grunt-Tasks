'use strict';

module.exports = function (grunt) {
    grunt.config.merge({
        sass: {
            dist: {
                options: {
                    sourceMap: true,
                    style: 'expanded',
                    includePaths: require('node-bourbon').with('node_modules/foundation-sites/scss'),
                    noCache: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
};
