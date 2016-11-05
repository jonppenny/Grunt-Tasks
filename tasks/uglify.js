'use strict';

module.exports = function (grunt) {
    grunt.config('uglify', {
        dist: {
            options: {
                compress: false,
                mangle: false,
                sourceMap: false
            },
            files: [{
                src: [
                    // Core
                    '<%= config.paths.src %>js/gojetters/core/utility.js',
                    '<%= config.paths.src %>js/gojetters/core/debug.js',
                    '<%= config.paths.src %>js/gojetters/core/engine.js',
                    '<%= config.paths.src %>js/gojetters/core/asset-manager.js',
                    '<%= config.paths.src %>js/gojetters/core/screen-manager.js',

                    // Screens
                    '<%= config.paths.src %>js/gojetters/screens/screen.js',
                    '<%= config.paths.src %>js/gojetters/screens/loading.js',
                    '<%= config.paths.src %>js/gojetters/screens/character-select.js',

                    '<%= config.paths.src %>js/gojetters/settings.js',
                    '<%= config.paths.src %>js/gojetters/main.js'
                ],
                dest: '<%= config.paths.deploy %>js/gojetters.min.js'
            }, {
                src: [
                    '<%= config.paths.src %>js/libs/jquery-1.10.2.min.js',
                    '<%= config.paths.src %>js/libs/pixi.min.js',
                    '<%= config.paths.src %>js/libs/TweenLite.min.js',
                    '<%= config.paths.src %>js/libs/EasePack.min.js'
                ],
                dest: '<%= config.paths.deploy %>js/lib.min.js',
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};
