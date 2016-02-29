'use-strict';

module.exports = function () {

    return {
        options: {
            map: true,
            processors: [
                require('autoprefixer')({
                    browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
                })
            ]
        },
        dist: {
            src: '<%= config.paths.deploy %>css/custom.css'
        }
    };
};
