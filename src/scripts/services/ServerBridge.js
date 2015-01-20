define(['app'], function(app) {
    app.service('ServerBridge', ["$http", function($http) {

        this.getVacationRequests = function() {
            return $http.get("/vacation_requests");
        }

        this.login = function(username, password) {
            var object = {
                username: username,
                password: password
            };

            return $http.post('/sigin', object);
        }

    }]);
});
