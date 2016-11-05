'use strict';

module.exports = function (grunt) {
    grunt.config('modernizr', {
        dist: {
            "cache": false,
            "dest": "<%= config.paths.deploy %>libs/modernizr/modernizr.js",
            "parseFiles": true,
            "customTests": [],
            "excludeTests": [],
            "crawl": false, // We don't have any custom modernizr tests.
            "devFile": false, // Use if crawl true and dev file used.
            "tests": [
                "canvas",
                "canvastext"
            ],
            "options": [
                "setClasses"
            ],
            "uglify": true
        }
    });

    grunt.loadNpmTasks("grunt-modernizr");
};
