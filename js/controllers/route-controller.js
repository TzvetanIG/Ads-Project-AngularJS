'use strict';

adsApp.controller('RouteController', function ($scope, $routeParams, $location, filterData) {
    $scope.resetFilterData = function () {
        filterData.setCurrentPage(1);
        filterData.setCategoryId(0);
        filterData.setTownId(0);
    };

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