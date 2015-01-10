'use strict';

adsApp.controller('NavigationController', function ($scope, $location, filterData, pageOptions) {
    $scope.choiceItem = 0;
    $scope.statusId = -1;

    $scope.$on('cancel', function(){
        $scope.statusId = -1;
    });

    $scope.setChoiceItem = function(itemId) {
        $scope.choiceItem = itemId;
        if(itemId == 1){
            filterData.setCurrentPage(1);
            pageOptions.setAdsPath('/user/ads');
            $scope.statusId = -1;
        }

        if(itemId == 0){
            filterData.setCurrentPage(1);
            pageOptions.setAdsPath('/ads')
        }
    };

    $scope.setStatus = function(itemId) {
        filterData.setCurrentPage(1);
        $scope.statusId = itemId;
    };
});