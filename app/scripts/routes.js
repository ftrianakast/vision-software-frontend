define([], function() {
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: '/views/pages/sigin.html',
                dependencies: [
                    'services/ServerBridge',
                    'controllers/LoginCtrl'
                ]
            },
            '/welcome': {
                templateUrl: '/views/pages/home.html',
                dependencies: [
                    'controllers/LoginCtrl',
                    'controllers/HomeCtrl',
                    'services/ServerBridge',
                    'services/BusinessDayCalcut',
                    'controllers/VacationInfoModalCtrl',
                    'controllers/ConfirmationModalCtrl'
                ]
            }
        }
    };
});
