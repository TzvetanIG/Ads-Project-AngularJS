'use strict';

adsApp.controller('TownsController', ['$scope', 'townsData', 'filterData', function ($scope, townsData, filterData) {
    $scope.towns = townsData.getTowns();
    $scope.selectedTownId = filterData.getTownId();
}]);