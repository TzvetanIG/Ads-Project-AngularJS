'use strict';

adsApp.factory('userData', ['$http', '$resource', 'basicUrl', function ($http, $resource, basicUrl) {

    function getUserProfile(success, error) {
        var user = getCurrentUser();
        var userProfileResource = $resource(
            basicUrl + 'user/profile',
            null,
            {
                'getUserProfile': {method: 'GET', headers: {Authorization: 'Bearer ' + user.access_token}}
            }
        );

        return userProfileResource.getUserProfile(success, error);
    }

    function editUserProfile(userData, success, error) {
        var user = getCurrentUser();
        var userProfileResource = $resource(
            basicUrl + 'user/profile',
            null,
            {
                'getUserProfile': {
                    method: 'PUT',
                    headers: {Authorization: 'Bearer ' + user.access_token},
                    data: userData
                }
            }
        );

        return userProfileResource.getUserProfile(userData, success, error);
    }

    function changePassword(success, error) {
        var user = getCurrentUser();
        var userProfileResource = $resource(
            basicUrl + 'user/changepassword',
            null,
            {
                'changePassword': {method: 'PUT', headers: {Authorization: 'Bearer ' + user.access_token}}
            }
        );

        return userProfileResource.getUserProfile(success, error);
    }

    function login(user, success, error) {
        var request = {
            method: 'POST',
            url: basicUrl + 'user/login',
            data: user
        };

        $http(request)
            .success(function (data) {
                sessionStorage['currentUser'] = JSON.stringify(data);
                success(data);
            })
            .error(error);
    }

    function register(user, success, error) {
        var request = {
            method: 'POST',
            url: basicUrl + 'user/register',
            data: user
        };

        $http(request)
            .success(function (data) {
                success(data);
            })
            .error(error);
    }

    function getCurrentUser() {
        var userObject = sessionStorage['currentUser'];
        if (userObject) {
            return JSON.parse(sessionStorage['currentUser']);
        }
    }

    function logout() {
        delete sessionStorage['currentUser'];
    }

    return {
        login: login,
        getCurrentUser: getCurrentUser,
        logout: logout,
        register: register,
        getUserProfile: getUserProfile,
        changePassword: changePassword,
        editUserProfile: editUserProfile
    };
}]);