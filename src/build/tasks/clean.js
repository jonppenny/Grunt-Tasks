'use-strict';

module.exports = function () {
    return {
        clean: {
            css: ["<%= config.paths.deploy %>css/*.*", "!<%= config.paths.deploy %>css/*.min.css"]
        }
    };
};
