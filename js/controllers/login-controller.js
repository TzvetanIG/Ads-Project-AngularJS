'use strict';

adsApp.controller('LoginController', function ($scope, $rootScope, pageOptions, userData, messageData) {
    pageOptions.setPageTitle('Ads - Login');

    $scope.login = function (user) {
        if (user && user.username && user.password) {
            userData.login(user,
                function (data) {
                    pageOptions.setNavigationTemplate('templates/includes/user-menu.html');
                    messageData.sentInfoMessage('Login success.');
                    $rootScope.$broadcast('login');
                },
                function (data) {
                    messageData.sentErrorMessage(data.error_description);
                });
        }
    }
});