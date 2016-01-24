'use strict';

module.exports = function () {
    return {
        teletubbies: {
            options: {
                style: 'expanded',
                loadPath: ['node_modules/foundation-sites/scss'],
                noCache: true
            },
            files: {
                '<%= config.paths.deploy %>css/custom.css': '<%= config.paths.src %>scss/main.scss'
            }
        }
    }
};
