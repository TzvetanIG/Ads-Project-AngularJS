'use strict';

var adsApp = angular.module('adsApp', ['ngResource', 'ngRoute'])
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

adsApp.constant('basicUrl', 'http://localhost:1337/api/');
