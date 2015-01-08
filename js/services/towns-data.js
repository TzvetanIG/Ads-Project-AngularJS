'use strict';

adsApp.factory('townsData', ['$resource', 'basicUrl', function ($resource, basicUrl) {
    var townsData = $resource(basicUrl + 'towns'),
        towns;

    function getTowns(){
        if(towns){
            return towns;
        }

        towns = townsData.query();
        return  townsData.query();
    }

    return {
        getTowns: getTowns
    }
}]);