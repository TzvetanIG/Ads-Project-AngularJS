'use strict';

adsApp.controller('NavigationController', function ($scope) {
    $scope.choiceItem = 0;
    $scope.choiceMyAdsItem = 0;

    $scope.$on('cancel', function(){
        $scope.choiceItem = 0;
    });

    $scope.setChoiceItem = function(itemId) {
        $scope.choiceItem = itemId;
    }

    $scope.setChoiceMyAdsItem = function(itemId) {
        $scope.choiceMyAdsItem = itemId;
    }
});