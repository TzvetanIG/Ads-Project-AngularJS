'use strict';

adsApp.controller('EditAdController', function ($scope, $routeParams, pageOptions, townsData,
                                                categoriesData, userData, adsData, messageData) {
    pageOptions.setPageTitle('Ads - Edit Ad');
    $scope.towns = townsData.getTowns();
    $scope.categories = categoriesData.getCategories();

    adsData.getAdById(
        $routeParams.adId,
        function (data) {
            $scope.ad = data;
        }
    );

    $scope.editAd = function (ad) {
        var editAd = {
            title: ad.title,
            text: ad.text
        };

        if(ad.townId){
            editAd.townId = ad.townId;
        }

        if(ad.categoryId){
            editAd.categoryId = ad.categoryId;
        }

        if($scope.imageFile){
            editAd.changeImage = true;
        }

        adsData.editAd($routeParams.adId, ad,
            function (data) {
                messageData.sentInfoMessage('Ad edited. Don\'t forget to submit it for publishing.');
            },
            function (error) {
                messageData.sentErrorMessage('Edited failed', error)
            }
        );
    };
});