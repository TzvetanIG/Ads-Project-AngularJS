'use strict';

adsApp.controller('AdsController', function ($scope, adsData, pageOptions, filterData) {
    pageOptions.setPageTitle('Ads - Home');

    adsData.getAds(
        filterData.getFilterAds(),
        function (data) {
            $scope.ads = data.ads;
            filterData.setNumPages(data.numPages);
            $scope.showAds = true;
        }
    );
});