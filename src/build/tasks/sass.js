'use strict';

module.exports = function () {
    return {
        dist: {
            options: {
                style: 'expanded',
                loadPath: ['node_modules/foundation-sites/scss'],
                noCache: true
            },
            files: {
                '<%= config.paths.deploy %>css/custom.css': '<%= config.paths.src %>scss/main.scss',
                '<%= config.paths.deploy %>css/childs-area.css': '<%= config.paths.src %>scss/childs-area.scss'
            }
        }
    }
};
