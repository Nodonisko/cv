module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    './css/main.css' : './style.sass'
                }
            }
        },

        watch: {
            css: {
                files: './*.sass',
                tasks: ['sass'],
                options: {
                    livereload: true,
                    nospawn: true
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['watch']);
}