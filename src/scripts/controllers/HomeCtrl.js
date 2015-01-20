define(['app'], function(app) {

    app.controller('HomeCtrl', ['$scope', 'ServerBridge', '$modal', 'BusinessDayCalcut', 'flash', function($scope, ServerBridge, $modal, BusinessDayCalcut, $flash) {

        $scope.vacationRequests = [];
        $scope.numberOfDays = 0;
        init();

        function init() {
            ServerBridge.getVacationRequests().success(function(vacationRequests) {
                $scope.vacationRequests = [];
                var realVacationRequests = [];
                for (var i = 0; i < vacationRequests.length; i++) {
                    var vacationRequest = vacationRequests[i];
                    var initDate = moment(vacationRequest.beginDate);
                    var endDate = moment(vacationRequest.endDate);

                    vacationRequest.numberOfDays = BusinessDayCalcut.getBusinessDaysDiff(initDate, endDate);
                    realVacationRequests.push(vacationRequest);
                }
                $scope.vacationRequests = realVacationRequests;
            });
        }

        $scope.openVacationDetailModal = function(vacationRequest) {
            var modalInstance = $modal.open({
                templateUrl: "views/tools/vacationInfoModal.html",
                controller: "VacationInfoModalCtrl",
                resolve: {
                    vacationRequest: function() {
                        return vacationRequest;
                    }
                }
            });
        }

        $scope.acceptVacations = function(vacationRequest, index) {
            var modalConfirmation = $modal.open({
                templateUrl: "views/tools/confirmationModal.html",
                controller: "ConfirmationModalCtrl",
                size: 'sm'
            });

            modalConfirmation.result.then(function() {
                $scope.vacationRequests.splice(index, 1);
                $flash.to('alert-1').success = "Se aceptaron las vacaciones para el usuario: " + vacationRequest.employee;
            });
        }

        $scope.rejectVacations = function(vacationRequest, index) {
            var modalConfirmation = $modal.open({
                templateUrl: "views/tools/confirmationModal.html",
                controller: "ConfirmationModalCtrl",
                size: 'sm'
            });

            modalConfirmation.result.then(function() {
                $scope.vacationRequests.splice(index, 1);
                $flash.to('alert-1').success = "Se rechazaron las vacaciones para el usuario: " + vacationRequest.employee;
            });
        }
    }]);
});
