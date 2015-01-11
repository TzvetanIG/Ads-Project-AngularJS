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

        if(ad.imageDataUrl){
            editAd.changeImage = true;
            editAd.imageDataUrl = ad.imageDataUrl;
        } else {
            editAd.changeImage = true;
        }


        adsData.editAd($routeParams.adId, editAd,
            function (data) {
                messageData.sentInfoMessage('Ad edited. Don\'t forget to submit it for publishing.');
            },
            function (error) {
                messageData.sentErrorMessage('Edited failed', error)
            }
        );
    };

    $scope.selectFile = function (inputFileData) {
        adsData.readImage(inputFileData,
            function (imageData) {
                $scope.ad.imageDataUrl = imageData;
                $scope.$apply();
            },
            function () {
                messageData.sentErrorMessage('File type not supported!');
                $scope.$apply();
            });
    };

    $scope.deleteImage = function () {
        $scope.ad.imageDataUrl = 'img/defaultImg.png';
        $scope.$apply();
        delete $scope.ad.imageDataUrl;
    }
});