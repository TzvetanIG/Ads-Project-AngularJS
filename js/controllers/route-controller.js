'use strict';

adsApp.controller('RouteController', function ($scope, $routeParams, $location, filterData, pageOptions) {
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

    if($routeParams.statusId){
        filterData.setStatusId($routeParams.statusId);
    }

    $location.path(pageOptions.getAdsPath());

});