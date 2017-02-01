/* jshint node: true */

module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'screen-saver-app',
        environment: environment,
        baseURL: '/',
        locationType: 'auto',
        contentSecurityPolicy: {
            'default-src': "'self' http://slide-show.wattydev.com http://localhost:49154 ws://localhost:49154 https://www.youtube.com",
            'connect-src': "'self' http://slide-show.wattydev.com http://localhost:49154 ws://localhost:49154",
            "script-src": "'self' 'unsafe-eval' 'unsafe-inline' localhost:49154 0.0.0.0:49154 https://www.youtube.com https://s.ytimg.com",
            "style-src": "'self' 'unsafe-inline'"
        },
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        }
    };

    // if (environment === 'development') {
    // }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    // if (environment === 'production') {
    // }

    return ENV;
};
