'use strict';

adsApp.controller('PublishNewAdController', ['$scope', '$rootScope', 'townsData', 'categoriesData', 'pageOptions', 'adsData', 'messageData',
    function ($scope, $rootScope, townsData, categoriesData, pageOptions, adsData, messageData) {
        pageOptions.setPageTitle('Ad - Publish New Ad');
        $scope.towns = townsData.getTowns();
        $scope.categories = categoriesData.getCategories();
        $scope.ad = {};

        $scope.publishAd = function (ad) {
            adsData.publishAd(ad,
                function (data) {
                    messageData.sentInfoMessage('Advertisement submitted for approval. Once approved, it will be published.');
                },
                function (error) {
                    messageData.sentErrorMessage('Publish failed', error)
                }
            );
        };

        $scope.selectFile = function (inputFileData) {
            var file = inputFileData.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $rootScope.$broadcast('selectImage', reader.result);
                    $scope.ad.imageDataUrl = reader.result;
                    $scope.$apply();
                };
                reader.readAsDataURL(file);
            } else {
                messageData.sentErrorMessage('File type not supported!')
            }
        };

    }]);