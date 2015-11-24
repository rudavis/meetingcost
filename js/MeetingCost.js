angular.module("MeetingCost", []).controller("MeetingCostController",
    function MeetingCostController($scope, $filter) {
        $scope.rates = [];
        $scope.totalRate = 0;
        $scope.calculatorDisplay = 0;
        $scope.hasTotal = false;

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
        $scope.updateTotal = function (num) {
            $scope.totalRate += num;
        };
        $scope.onClickPlus = function () {
            $scope.rates.push(Number($scope.calculatorDisplay));
            $scope.updateTotal(Number($scope.calculatorDisplay));
            $scope.hasTotal = true;
            $scope.onClickClear();
        };
        $scope.deleteRow = function (rowNum) {
            $scope.totalRate -= $scope.rates[rowNum];
            $scope.rates.splice(rowNum, 1);
            if ($scope.rates.length == 0) {
                $scope.hasTotal = false;
            }
        };
    });