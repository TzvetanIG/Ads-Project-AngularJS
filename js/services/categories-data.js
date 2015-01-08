'use strict';

adsApp.factory('categoriesData', ['$resource', 'basicUrl', function ($resource, basicUrl) {
    var categoriesData = $resource(basicUrl + 'categories'),
        categories;

    function getCategories(){
        if(categories){
            return categories;
        }

        categories = categoriesData.query();
        return categoriesData.query();
    }

    return {
        getCategories: getCategories
    }
}]);