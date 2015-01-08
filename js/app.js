'use strict';

var adsApp = angular.module('adsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/category/:categoryId/', {
                templateUrl: 'templates/ads.html',
                controller: 'MainController'
            })
            .when('/town/:townId/', {
                templateUrl: 'templates/ads.html',
                controller: 'MainController'
            })
            .when('/page/:page/', {
                templateUrl: 'templates/ads.html',
                controller: 'MainController'
            })
            .when('/ads', {
                templateUrl: 'templates/ads.html',
                controller: 'AdsController'
            })
            .otherwise({
                redirectTo: '/ads'
            });
    });

adsApp.constant('basicUrl', 'http://localhost:1337/api/');
adsApp.constant('pageSize', 2);
adsApp.constant('pagingSize', 5);