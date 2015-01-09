'use strict';

adsApp.controller('EditProfileController', ['$scope', 'townsData', 'pageOptions', 'userData', 'messageData',
    function ($scope, townsData, pageOptions, userData, messageData) {
        pageOptions.setPageTitle('Ad - Edit Ad');
        $scope.towns = townsData.getTowns();

        $scope.user =  userData.getUserProfile();

        $scope.updateUser = function (user) {
            userData.editUserProfile(user,
                function (data) {
                    messageData.sentInfoMessage('Success update');
                },
                function (error) {
                    messageData.sentErrorMessage('Update failed', error)
                }
            );
        }

        $scope.changePassword = function (password) {
            userData.changePassword(password,
                function () {
                    messageData.sentInfoMessage('The password is changed successfully.');
                },
                function (error) {
                    messageData.sentErrorMessage('The password is not changed', error)
                }
            );
        }
    }]
);