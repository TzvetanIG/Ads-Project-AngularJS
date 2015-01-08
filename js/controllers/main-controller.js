'use strict';

adsApp.controller('MainController', function ($scope, $routeParams, $location, filterData, pageOptions) {
    $scope.pageTitle =  pageOptions.getPageTitle();
    $scope.navigationTemplate = pageOptions.getNavigationTemplate();

    if($routeParams.categoryId){
        filterData.setCategoryId($routeParams.categoryId);
        filterData.setCurrentPage(1);
    }

    if($routeParams.townId){
        filterData.setTownId($routeParams.townId);
        filterData.setCurrentPage(1);
    }

    if($routeParams.page){
        filterData.setCurrentPage($routeParams.page);
    }

    $location.path('/ads');
});