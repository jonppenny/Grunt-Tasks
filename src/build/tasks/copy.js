'use-strict';

module.exports = function () {
    return {
        images_to_deploy: {
            files: [{
                expand: true,
                cwd: 'src/images',
                src: ['**'],
                dest: '<%= config.paths.deploy %>images'
            }]
        }
    }
};

