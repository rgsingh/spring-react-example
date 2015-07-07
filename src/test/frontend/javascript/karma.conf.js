module.exports = function(config) {
    config.set({
        basePath: '../../../..',
        frameworks: ['jasmine'],
        files: [
            'src/main/frontend/javascript/*.js',
            'src/test/frontend/javascript/*.js'
        ],
        exclude: ['src/test/frontend/javascript/karma.conf*.js'],
        reporters: ['progress'],
        port: 9876,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        singleRun: false,
        autoWatch: true,
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ]
    });
};