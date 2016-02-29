'use-strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: grunt.file.readJSON('./tasks/config.json'),
        concat: require('./tasks/concat')(grunt),
        sass: require('./tasks/sass')(grunt),
        postcss: require('./tasks/postcss')(grunt),
        modernizr: require('./tasks/modernizr')(grunt),

        // NOTE: Must not be hosted in a tasks file
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.paths.deploy %>css',
                    src: ['*.css', '!*.min.css'],
                    dest: '<%= config.paths.deploy %>css',
                    ext: '.min.css'
                }]
            }
        },

        // NOTE: Must not be hosted in a tasks file
        clean: {
            options: { force: true },
            css: ["<%= config.paths.deploy %>css/*.*", "!<%= config.paths.deploy %>css/*.min.css"]
        },

        copy: require('./tasks/copy')(grunt),
        imagemin: require('./tasks/imagemin')(grunt),
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-modernizr");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask(
        'copyImages',
        'Copy images to deploy.',
        ['copy:images_to_deploy']
    );

    grunt.registerTask(
        'copyFonts',
        'Copy fonts to deploy.',
        ['copy:fonts_to_deploy']
    );

    grunt.registerTask(
        'copyAll',
        'Copy all required files to deploy.',
        ['copyImages', 'copyFonts']
    );

    grunt.registerTask(
        'buildCSS',
        'Build SASS and minify CSS.',
        ['sass', 'postcss', 'cssmin', 'clean']
    );

    grunt.registerTask(
        'buildModernizr',
        'Build a custom version of Modernizr.',
        ['modernizr']
    );

    grunt.registerTask(
        'buildAll',
        'Build all and copy files to deploy folder.',
        ['concat', 'buildCSS', 'copyAll']
    );

    grunt.registerTask(
        'default',
        'Build all and copy files to deploy folder.',
        ['buildAll']
    );
};
