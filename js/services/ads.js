'use strict';

var adsApp = adsApp || {};

adsApp.factory('adsData', function ($http) {
    var serviceUrl = 'http://localhost:1337//',
        pageSize = 10;

    function setPageSize(adsAtPage){
        pageSize = adsAtPage;
    }

    function getAllAds(success){
        $http.get(serviceUrl + 'api/ads')
            .success(function(data, status, headers, config){
                console.log(data);
                success(data);
            });
    }

    function getAdsAtPage(startPage, success){
        $http.get(serviceUrl + 'api/ads?startpage='+startPage +'&pagesize='+ pageSize)
            .success(function(data, status, headers, config){
                success(data);
            });
    }

    return {
        setPageSize: setPageSize,
        getAllAds: getAllAds,
        getAdsAtPage: getAdsAtPage
    }
});