'use strict';

adsApp.controller('EditAdController', function ($scope, $routeParams, pageOptions, townsData,
                                                categoriesData, userData, adsData, messageData) {
    pageOptions.setPageTitle('Ads - Edit Ad');
    $scope.towns = townsData.getTowns();
    $scope.categories = categoriesData.getCategories();
});