'use strict';

adsApp.factory('adsData', ['$resource', 'basicUrl', 'userData',
    function ($resource, basicUrl, userData) {

        function getAds(params, success, error) {
            var adsResource = $resource(
                basicUrl + '/ads',
                null,
                {
                    'getAll': {method: 'GET'}
                }
            );

            return adsResource.getAll(params, success, error);
        }

        function publishAd(ad, success, error) {
            var user = userData.getCurrentUser();
            var adsResource = $resource(
                basicUrl + 'user/ads',
                null,
                {
                    'publishAd': {
                        method: 'POST',
                        headers: {Authorization: 'Bearer ' + user.access_token},
                        data: ad
                    }
                }
            );

            return adsResource.publishAd(ad, success, error);
        }

        function getUserAds(params, success, error) {
            var user = userData.getCurrentUser();
            var adsResource = $resource(
                basicUrl + '/user/ads',
                null,
                {
                    'getAll': {
                        method: 'GET',
                        headers: {Authorization: 'Bearer ' + user.access_token}
                    }
                }
            );

            return adsResource.getAll(params, success, error);
        }

        function putRequest(url, id, success, error) {
            var user = userData.getCurrentUser();
            var adsResource = $resource(
                basicUrl + url + id,
                null,
                {
                    'deactivate': {
                        method: 'PUT',
                        headers: {Authorization: 'Bearer ' + user.access_token}
                    }
                }
            );

            return adsResource.deactivate(id, success, error);
        }

        return {
            getAds: getAds,
            publishAd: publishAd,
            getUserAds: getUserAds,
            putRequest: putRequest
        };

    }]);