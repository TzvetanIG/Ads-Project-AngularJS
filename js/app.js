'use strict';

var adsApp = angular.module('adsApp', ['ngResource', 'ngRoute', 'ngSanitize'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/category/:categoryId/', {
                templateUrl: 'templates/views/ads.html',
                controller: 'RouteController'
            })
            .when('/town/:townId/', {
                templateUrl: 'templates/views/ads.html',
                controller: 'RouteController'
            })
            .when('/page/:page/', {
                templateUrl: 'templates/views/ads.html',
                controller: 'RouteController'
            })
            .when('/ads', {
                templateUrl: 'templates/views/ads.html',
                controller: 'AdsController'
            })
            .when('/login', {
                templateUrl: 'templates/views/login-form.html',
                controller: 'LoginController'
            })
            .when('/register', {
                templateUrl: 'templates/views/registration-form.html',
                controller: 'RegisterController'
            })
            .otherwise({
                redirectTo: '/ads'
            });
    });

adsApp.constant('basicUrl', 'http://localhost:1337/api/');
adsApp.constant('pageSize', 2);
adsApp.constant('pagingSize', 5);