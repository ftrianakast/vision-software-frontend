define(['app'], function(app) {
    app.controller('LoginCtrl', [
        '$scope', 'ServerBridge', '$location', 'flash',
        function($scope, ServerBridge, $location, $flash) {

            $scope.username;
            $scope.password;

            $scope.login = function() {
                ServerBridge.login($scope.username, $scope.password).success(function(){
                    $location.path('/welcome');
                }).error(function(response){
                    $flash.to('alert-1').error = response.message;
                });
            }

            $scope.logout = function(){
                console.log("entre");
                $location.path('/');
            }


        }
    ]);
});
