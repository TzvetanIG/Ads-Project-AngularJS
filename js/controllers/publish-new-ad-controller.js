'use strict';

adsApp.controller('PublishNewAdController', ['$scope', 'townsData', 'categoriesData', 'pageOptions', 'adsData', 'messageData',
    function ($scope, townsData, categoriesData, pageOptions, adsData, messageData) {
        pageOptions.setPageTitle('Ad - Publish New Ad');
        $scope.towns = townsData.getTowns();
        $scope.categories = categoriesData.getCategories();

        $scope.publishAd = function (ad) {
            adsData.publishAd(ad,
                function (data) {
                    messageData.sentInfoMessage('Successfully  publish.');
                },
                function (error) {
                    messageData.sentErrorMessage('Publish failed', error)
                }
            );
        };

    }]);