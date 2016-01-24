'use strict';

module.exports = function () {
    return {
        dist: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'release/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'release/css',
                    ext: '.min.css'
                }]
            }
        }
    }
};
