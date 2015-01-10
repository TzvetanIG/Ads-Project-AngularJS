'use strict';

adsApp.controller('DeleteController', function ($scope, $routeParams, pageOptions, userData, adsData, messageData) {
    pageOptions.setPageTitle('Ads - Delete Ad');

    adsData.getAdById(
        $routeParams.adId,
        function (data) {
            $scope.ad = data;
        }
    );

    $scope.deleteAd = function (id) {
        adsData.deleteAd(
            id,
            function (data) {
                messageData.sentInfoMessage('Successfully  deleted.');
            },
            function (error) {
                messageData.sentErrorMessage('Delete failed', error)
            }
        );
    };
});