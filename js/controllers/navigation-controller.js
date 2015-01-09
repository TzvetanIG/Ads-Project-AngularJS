'use strict';

adsApp.controller('NavigationController', function ($scope) {
    $scope.choiceItem = 0;

    $scope.setChoiceItem = function(itemId) {
        $scope.choiceItem = itemId;
    }
});