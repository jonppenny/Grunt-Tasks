'use-strict';

module.exports = function () {
    return {
        images_to_deploy: {
            files: [{
                expand: true,
                cwd: '<%= config.paths.src %>images',
                src: ['**'],
                dest: '<%= config.paths.deploy %>images'
            }]
        },
        fonts_to_deploy: {
            files: [{
                expand: true,
                cwd: '<%= config.paths.src %>fonts',
                src: ['**'],
                dest: '<%= config.paths.deploy %>fonts'
            }]
        }
    }
};

