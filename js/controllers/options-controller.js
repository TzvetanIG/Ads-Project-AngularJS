'use strict';

var adsApp = adsApp || {};

adsApp.controller('optionsController', function ($scope, pageOptions) {
    $scope.header = pageOptions.getPageTitle();
    $scope.template = pageOptions.getMainMenu();
});