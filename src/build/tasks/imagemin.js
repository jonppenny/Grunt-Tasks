'use strict';

module.exports = function() {
    return {
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
    }
};