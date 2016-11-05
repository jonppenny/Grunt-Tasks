'usestrict';

module.exports = function (grunt) {
    grunt.config('clean', {
        options: { force: true },
        css: ["<%= config.paths.deploy %>css/*.*", "!<%= config.paths.deploy %>css/*.min.css"]
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
