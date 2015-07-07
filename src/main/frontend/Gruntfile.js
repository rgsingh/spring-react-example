'use strict';
module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/main/frontend/javascript/*.js','src/test/frontend/javascript/*.js'],
            options: {
               node: true,
               /* so jshint does not balk about mocha */
               globals: { 
                    "describe": false,
                    "xdescribe": false,
                    "ddescribe": false,
                    "it": false,
                    "xit": false,
                    "iit": false,
                    "beforeEach": false,
                    "afterEach": false,
                    "expect": false,
                    "pending": false,
                    "spyOn": false
               }
            }
        },
        react: {
            files: {
                expand: true,
                cwd: 'src/main/resources/jsx',
                src: ['**/*.jsx'],
                dest: 'src/main/resources/static',
                ext: '.js'
            }
        },
        karma: {
            config: {
                configFile: '../../test/frontend/javascript/karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-react');

    grunt.registerTask('test', [ 'karma' ]);
    grunt.registerTask('build', ['react']);
    grunt.registerTask('default', ['jshint', 'test', 'build']);
    
};