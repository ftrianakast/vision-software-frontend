define(['app'], function(app) {

    app.controller('VacationInfoModalCtrl', ['$scope', '$modalInstance', 'vacationRequest', 'BusinessDayCalcut', function($scope, $modalInstance, vacationRequest, BusinessDayCalcut) {

        $scope.vacationRequest = vacationRequest;
        $scope.numberOfDays = 0;

        init();


        $scope.ok = function(){
            $modalInstance.close();
        }

        $scope.close = function(){
            $modalInstance.dismiss('cancel');
        }

        function init(){
            var initDate = moment(vacationRequest.beginDate);
            var endDate = moment(vacationRequest.endDate);
            $scope.numberOfDays = BusinessDayCalcut.getBusinessDaysDiff(initDate,endDate);
        }

    }]);
});
