'use strict';

adsApp.controller('UserAdsController', ['$scope', 'pageOptions', 'adsData', 'filterData', 'messageData',
    function ($scope, pageOptions, adsData, filterData, messageData) {
        pageOptions.setPageTitle('Ads - My Ads');

        adsData.getUserAds(
            filterData.getFilterUserAds(),
            function (data) {
                $scope.ads = data.ads;
                filterData.setNumPages(data.numPages);
                $scope.showAds = true;
            }
        );

        $scope.deactivate = function (id, index) {
            adsData.putRequest(
                '/user/ads/deactivate/',
                id,
                function (data) {
                    messageData.sentInfoMessage('Successfully  deactivated.');
                    $scope.ads[index].status = 'Inactive';
                },
                function (error) {
                    messageData.sentErrorMessage('Deactivate failed', error)
                }
            );
        };

        $scope.publishAgain = function (id, index) {
            adsData.putRequest(
                'user/Ads/PublishAgain/',
                id,
                function (data) {
                    messageData.sentInfoMessage('Successfully  published.');
                    $scope.ads[index].status = 'WaitingApproval';
                },
                function (error) {
                    messageData.sentErrorMessage('Publish failed', error)
                }
            );
        };


    }]);