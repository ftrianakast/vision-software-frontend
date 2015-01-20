require.config({
    baseUrl: '/scripts',
    paths: {
        'angular': '/bower_components/angular/angular',
        'angular-route': '/bower_components/angular-route/angular-route',
        'ui.bootstrap': '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        'bootstrap': '/bower_components/bootstrap/dist/js/bootstrap.min.js',
        'jquery': '/bower_components/jquery/dist/jquery',
        'moment': '/bower_components/moment/min/moment.min',
        'angular-flash': '/bower_components/angular-flash/dist/angular-flash.min'
    },
    shim: {
        'app': {
            deps: ['angular', 'angular-route', 'bootstrap', 'ui.bootstrap', 'moment', 'angular-flash']
        },
        'angular-route': {
            deps: ['angular']
        },
        'ui.bootstrap': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'angular-flash': {
            deps: ['angular']
        }
    }
});

require
    (
        [
            'app'
        ],
        function(app) {
            angular.bootstrap(document, ['app']);
        }
    );
