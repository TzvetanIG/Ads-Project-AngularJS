'use strict';

adsApp.directive('categories', function () {
    return {
        templateUrl: 'templates/directives/categories.html',
        replace: true,
        restrict: 'E',
        controller: 'CategoriesController'
    }
});