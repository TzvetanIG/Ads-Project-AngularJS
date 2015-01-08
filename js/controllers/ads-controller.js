'use strict';

var adsApp = adsApp || {};

adsApp.controller('AdsController', function ($scope, adsData, pageOptions, filterData) {
    adsData.getAds(
        filterData.getFilterObj(),
        function (data) {
            $scope.ads = data.ads;
            filterData.setNumPages(data.numPages);
            $scope.showAds = true;
        });
});