'use strict';

adsApp.factory('filterData', function (pageSize) {
    var categoryId = 0,
        townId = 0,
        currentPage = 1,
        numPages = 1,
        statusId = -1;

    function setNumPages(maxPage) {
        numPages = Number(maxPage);
    }

    function getNumPages() {
        return numPages;
    }

    function setPageSize(adsPerPage) {
        pageSize = Number(adsPerPage);
    }

    function getPageSize() {
        return pageSize;
    }

    function setCurrentPage(page) {
        currentPage = Number(page);
    }

    function getCurrentPage() {
        return currentPage;
    }

    function setCategoryId(id) {
        categoryId = Number(id);
    }

    function getCategoryId() {
       return categoryId;
    }

    function setTownId(id) {
        townId = Number(id);
    }

    function getTownId() {
        return townId;
    }

    function setStatusId(id) {
        statusId = Number(id);
    }

    function getStatusId() {
        return statusId;
    }

    function getFilterAds(){
        var filter = {
            pageSize: pageSize,
            startPage: currentPage
        };

        if(categoryId){
            filter.categoryId = categoryId;
        } else {
            if(filter.categoryId){
                delete filter.categoryId;
            }
        }

        if(townId){
            filter.townId = townId;
        } else {
            if(filter.townId){
                delete filter.townId;
            }
        }

        return filter
    }

    function getFilterUserAds(){
        var filter = {
            pageSize: pageSize,
            startPage: currentPage
        };

        if(statusId != -1){
            filter.status = statusId;
        } else {
            if(filter.status){
                delete filter.status;
            }
        }

        return filter
    }

    return {
        getCurrentPage: getCurrentPage,
        setCurrentPage: setCurrentPage,
        setPageSize: setPageSize,
        getPageSize: getPageSize,
        setNumPages: setNumPages,
        getNumPages: getNumPages,
        setCategoryId: setCategoryId,
        getCategoryId: getCategoryId,
        setTownId: setTownId,
        getTownId: getTownId,
        getStatusId: getStatusId,
        setStatusId: setStatusId,
        getFilterAds: getFilterAds,
        getFilterUserAds: getFilterUserAds
    }
});