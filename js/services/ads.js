'use strict';

adsApp.factory('adsData', ['$resource', 'basicUrl', function ($resource, basicUrl) {
    var adsResource = $resource(
        basicUrl + '/ads',
        null,
        {
            'getAll': {method:'GET'}
        }
    );

    return {
        getAds: function(params, success, error) {
            return adsResource.getAll(params, success, error);
        }
    };
}]);