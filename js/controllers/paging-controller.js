'use strict';

adsApp.controller('PagingController', function ($scope, filterData, pagingSize) {
    var currentPage = filterData.getCurrentPage(),
        maxPage = filterData.getNumPages(),
        pagingSize = pagingSize,
        pages = [],
        startPage = currentPage - Math.floor(pagingSize /2),
        endPage = currentPage + Math.floor(pagingSize /2);

    $scope.currentPage = currentPage;
    $scope.previousPage

    if(endPage > maxPage){
        endPage = maxPage;
        startPage = maxPage - pagingSize + 1;
    }

    if (startPage < 1) {
        startPage = 1;
        endPage = maxPage < pagingSize ? maxPage : pagingSize;
    }

    var i;
    for (i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    if(currentPage > 1){
        $scope.previousPage = currentPage - 1;
    } else {
        $scope.previousPage = 1;
    }

    if(currentPage < maxPage){
        $scope.nextPage = currentPage + 1;
    } else {
        $scope.nextPage = maxPage;
    }

    $scope.lastPage = maxPage;
    $scope.pages = pages;
});