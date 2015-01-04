'use strict';
var adsApp = angular.module('adsApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/page/:page/', {
                templateUrl: 'templates/ads.html',
                controller: 'AdsController'
            })
            .when('/', {
                templateUrl: 'templates/ads.html',
                controller: 'AdsController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
