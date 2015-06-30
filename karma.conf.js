'use strict';

module.exports = function(config) {

  config.set({
    basePath:   '',
    frameworks: ['mocha', 'browserify'],
    files:      [ 'test/**/*.js' ],
    exclude: [],

    browserify: {
      debug:     true,
      files:     [
        'test/**/*.js'
      ],
      transform: [
        ['babelify', { plugins: ['babel-plugin-espower'] }]
      ]
    },

    preprocessors: {
      'test/**/*.js': 'browserify'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [
      'Chrome'
    ],

    singleRun: true
  });
};