'use strict';

var adsApp = adsApp || {};

adsApp.controller('PagingController', function ($scope, pageOptions) {
    var currentPage = pageOptions.getCurrentPage(),
        maxPage = pageOptions.getNumPages(),
        pages = [],
        startPage = currentPage - 2,
        endPage = currentPage + 2;

    var i;
    for (i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    $scope.pages = pages;
});