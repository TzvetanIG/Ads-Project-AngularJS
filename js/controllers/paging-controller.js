'use strict';

adsApp.controller('PagingController', function ($scope, filterData, pagingSize) {
    var currentPage = filterData.getCurrentPage(),
        maxPage = filterData.getNumPages(),
        pagingSize = pagingSize,
        pages = [],
        startPage = currentPage - Math.floor(pagingSize /2),
        endPage = currentPage + Math.floor(pagingSize /2);


    $scope.currentPage = filterData.getCurrentPage();

    if (endPage > maxPage) {
        endPage = maxPage;
        startPage = endPage - pagingSize - 1;
    }

    if (startPage < 1) {
        startPage = 1;
        if (maxPage < pagingSize ) {
            endPage = maxPage;
        } else {
            endPage = pagingSize;
        }
    }

    var i;
    for (i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    $scope.pages = pages;
});