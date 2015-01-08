'use strict';

adsApp.controller('MainController', function ($scope, pageOptions, filterData, messageData) {
    $scope.pageTitle =  pageOptions.getPageTitle();
    $scope.navigationTemplate = pageOptions.getNavigationTemplate();

    $scope.resetFilterData = function (){
        filterData.setCurrentPage(1);
        filterData.setCategoryId(0);
        filterData.setTownId(0);
    }

    $scope.$on("changePageOptions", function(event) {
        $scope.pageTitle =  pageOptions.getPageTitle();
    });

    $scope.$on("sentMessage", function(event) {
        $scope.message =  messageData.getMessage();
        $scope.classMessage = messageData.getClassMessage()
    });
});