'use strict';

adsApp.factory('townsData', ['$resource', 'basicUrl', function ($resource, basicUrl) {
    var towns = $resource(basicUrl + 'towns');

    function getTowns(){
        return  towns.query();
    }

    return {
        getTowns: getTowns
    }
}]);