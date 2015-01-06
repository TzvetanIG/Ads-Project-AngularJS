'use strict';

adsApp.directive('categories', function () {
    adsData.setPageSize(5);
    if ($routeParams.page) {
        var currentPage = $routeParams.page;
    } else {
        var currentPage = 1;
        pageOptions.setNumPages(5);
    }

    pageOptions.setCurrentPage(Number(currentPage));
    adsData.getAdsAtPage(currentPage, function (data) {
        $scope.ads = data.ads;
        pageOptions.setNumPages(data.numPages);
    });
});