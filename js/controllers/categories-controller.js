'use strict';

adsApp.controller('CategoriesController', ['$scope', 'categoriesData', function ($scope, categoriesData) {
    $scope.categories = categoriesData.getCategories();
}]);