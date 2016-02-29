'use-strict';

module.exports = function () {
    return {
        concat : {
            options : {
                separator : ';'
            },
            src : [],
            dest : '<%= config.paths.deploy %>js/script.js'
        }
    };
};
