'use strict';

adsApp.controller('PublishNewAdController', ['$scope', 'townsData', 'categoriesData', 'pageOptions',
    function ($scope, townsData, categoriesData, pageOptions) {
        pageOptions.setPageTitle('Ad - Publish New Ad');
        $scope.towns = townsData.getTowns();
        $scope.categories = categoriesData.getCategories();
    }]);