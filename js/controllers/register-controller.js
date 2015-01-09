'use strict';

adsApp.controller('RegisterController', function ($scope, $rootScope, pageOptions,
                                                  userData, messageData, townsData) {
    pageOptions.setPageTitle('Ads - Registration');

    $scope.towns = townsData.getTowns();

    $scope.register = function (user) {
        userData.register(user,
            function (data) {
                messageData.sentInfoMessage('User account created. Please login.');
                $scope.user = undefined;
            },
            function (data) {
                messageData.sentErrorMessage('User registration failed', data);
                console.log()
            });
    }
});