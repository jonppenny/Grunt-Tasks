'use strict';

module.exports = function () {
    return {
        dist: {
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= config.paths.deploy %>css',
                    src: ['*.css', '!*.min.css'],
                    dest: '<%= config.paths.deploy %>css',
                    ext: '.min.css'
                }]
            }
        }
    }
};