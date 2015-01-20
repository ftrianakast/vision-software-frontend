define(['app'], function(app) {

    app.controller('ConfirmationModalCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance, vacationRequest, BusinessDayCalcut) {

        $scope.ok = function(){
            $modalInstance.close();
        }

        $scope.cancel = function(){
            $modalInstance.dismiss('cancel');
        }


    }]);
});
