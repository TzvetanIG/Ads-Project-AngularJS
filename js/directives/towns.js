'use strict';

adsApp.directive('towns', function () {
    return {
        templateUrl: 'templates/directives/towns.html',
        replace: true,
        restrict: 'E',
        controller: 'TownsController'
    }
});