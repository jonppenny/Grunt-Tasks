'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: grunt.file.readJSON('./tasks/config.json')
    });

    grunt.loadTasks('tasks');

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
        'copyHtml',
        'Copy html to deploy.',
        ['copy:html_to_deploy']
    );

    grunt.registerTask(
        'copyAll',
        'Copy all required files to deploy.',
        ['copyHtml', 'copyImages', 'copyFonts']
    );

    grunt.registerTask(
        'buildCSS',
        'Build SASS and minify CSS.',
        ['sass', 'postcss', 'cssmin', 'clean']
    );

    grunt.registerTask(
        'buildJS',
        'Build JS and minify JS.',
        ['uglify']
    );

    grunt.registerTask(
        'buildModernizr',
        'Build a custom version of Modernizr.',
        ['modernizr']
    );

    grunt.registerTask(
        'buildAll',
        'Build all and copy files to deploy folder.',
        ['buildCSS', 'buildJS', 'copyAll']
    );

    grunt.registerTask(
        'default',
        'Build all and copy files to deploy folder.',
        ['buildAll']
    );
};
