module.exports = function(config) {
    config.set({
        basePath: '../',

        browsers: ['PhantomJS'],

        logLevel: config.LOG_INFO,

        systemjs: {
            configFile: 'app/jspm.conf.js',

            config: {
                baseURL: '/',
                transpiler: 'babel',
                babelOptions: {
                    optional: [
                        'runtime'
                    ]
                },
                paths: {
                    '*': '*.js',
                    'github:*': 'app/jspm_packages/github/*.js',
                    'npm:*': 'app/jspm_packages/npm/*.js'
                },
                //place all your cutsom mappings here
                map: {
                    source: 'app/scripts',
                    logic: 'app/scripts/logic'
                }
            },
            files: [
                'app/**/*.js',
                'test/unit/**/*.js'
            ],
            testFileSuffix: 'Spec.js'
        },

        plugins: [
            'karma-systemjs',
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ],

        frameworks: [
            'systemjs',
            'jasmine'
        ],

        colors: true
    });
};
