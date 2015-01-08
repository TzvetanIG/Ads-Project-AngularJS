'use strict';

adsApp.controller('CategoriesController', ['$scope', 'categoriesData', 'filterData', function ($scope, categoriesData, filterData) {
    $scope.categories = categoriesData.getCategories();
    $scope.selectedCategoryId = filterData.getCategoryId();
}]);