'use strict';

adsApp.controller('RegisterController', function ($scope, $rootScope, pageOptions, userData, messageData) {
    pageOptions.setPageTitle('Ads - Registration');

    $scope.login = function (user) {
        if (user && user.username && user.password) {
            userData.login(user,
                function (data) {
                    messageData.sentInfoMessage('Login success.');
                    $rootScope.$broadcast('login');
                },
                function (data) {
                    messageData.sentErrorMessage(data.error_description);
                });
        }
    }
});