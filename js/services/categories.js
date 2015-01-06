'use strict';

adsApp.factory('categoriesData', ['$resource', 'basicUrl', function ($resource, basicUrl) {
    var categories = $resource(basicUrl + 'categories');

    function getCategories(){
        return  categories.query();
    }

    return {
        getCategories: getCategories
    }
}]);