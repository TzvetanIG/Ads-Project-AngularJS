'use strict';

var adsApp = adsApp || {};

adsApp.controller('PagingController', function ($scope, pageOptions) {
    var currentPage = pageOptions.getCurrentPage(),
        maxPage = pageOptions.getNumPages(),
        pages = [],
        startPage = currentPage - 2,
        endPage = currentPage + 2;

    if (endPage > maxPage) {
        endPage = maxPage;
        startPage = endPage - 4;
    }

    if (startPage < 1) {
        startPage = 1;
        if (maxPage < 5 ) {
            endPage = maxPage;
        } else {
            endPage = 5;
        }
    }

    var i;
    for (i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    $scope.pages = pages;
});