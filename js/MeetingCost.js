angular.module("MeetingCost", []).controller("MeetingCostController",
    function MeetingCostController($scope, $filter) {

        $scope.calculatorDisplay = 0;

        $scope.onClickClear = function () {
            $scope.calculatorDisplay = 0;
        };
        $scope.updateOutput = function (btn) {
            if ($scope.calculatorDisplay == 0) {
                $scope.calculatorDisplay = btn;
            } else {
                $scope.calculatorDisplay += String(btn);
            }
        };
    });