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
            .when('/user/ads', {
                templateUrl: 'templates/views/user-ads.html',
                controller: 'UserAdsController'
            })
            .when('/user/ad/delete/:adId', {
                templateUrl: 'templates/views/deleting-form.html',
                controller: 'DeleteController'
            })
            .when('/user/ads/:statusId', {
                templateUrl: 'templates/views/user-ads.html',
                controller: 'RouteController'
            })
            .when('/publish-new-ad', {
                templateUrl: 'templates/views/publish-new-ad.html',
                controller: 'PublishNewAdController'
            })
            .when('/edit-profile', {
                templateUrl: 'templates/views/edit-profile.html',
                controller: 'EditProfileController'
            })
            .otherwise({
                redirectTo: '/ads'
            });
    });

adsApp.constant('basicUrl', 'http://localhost:1337/api/');
adsApp.constant('pageSize', 2);
adsApp.constant('pagingSize', 5);