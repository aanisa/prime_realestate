//this is a config file
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'client/scripts/client.js',
                dest: 'server/public/scripts/client.mn.js'
            }
        },
        copy: {
            jquery: {
                expand: true,
                cwd: 'node_modules/jquery/dist/',
                src: ['jquery.js'],
                dest: 'server/public/vendors/'
            },
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/css/',
                src: ['bootstrap.css'],
                dest: 'server/public/vendors/'
            },
            html: {
                expand: true,
                cwd: 'client/views',
                src: ['index.html'],
                dest: 'server/public/views'
            },
            css: {
                expand: true,
                cwd: 'client/styles/',
                src: ['style.css'],
                dest: 'server/public/styles/'
            },

        },
        watch: {
            files: ['client/script/*.js', 'client/views/*.html', 'client/styles/*.css'],
            tasks: ['uglify', 'copy']
        }

    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy'); //loads in grunt-contrib-copy module - next function will actually use this copy
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['uglify', 'copy', 'watch']); //describe different tasks to do - set up task as default. [copy] can be named anything here.
};
