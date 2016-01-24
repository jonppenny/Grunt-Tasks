'use strict';

module.exports = function () {
    return {
        teletubbies: {
            options: {
                separator: ';'
            },
            src: [],
            dest: '<%= config.paths.deploy %>js/site.js'
        }
    }
};
