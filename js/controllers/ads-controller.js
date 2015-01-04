'use strict';

var adsApp = adsApp || {};

adsApp.controller('AdsController', function ($scope, adsData, pageOptions, $routeParams ) {
    adsData.setPageSize(5);
   if($routeParams.page){
       var currentPage = $routeParams.page;
   } else {
       var currentPage = 1;
   }

    pageOptions.setCurrentPage(Number(currentPage));
    adsData.getAdsAtPage(currentPage, function (data) {
        $scope.ads = data.ads;
        pageOptions.setNumPages(data.numPages);
    });
});