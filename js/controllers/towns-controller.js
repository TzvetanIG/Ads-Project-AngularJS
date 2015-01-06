'use strict';

adsApp.controller('TownsController', ['$scope', 'townsData', function ($scope, townsData) {
    $scope.towns = townsData.getTowns();
}]);