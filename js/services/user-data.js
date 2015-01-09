'use strict';

adsApp.factory('userData', ['$http', 'basicUrl', function ($http, basicUrl) {
    var url = basicUrl + 'user/login';

    function login(user, success, error) {
            var request = {
                method: 'POST',
                url: basicUrl + 'user/login',
                data: user
            };

            $http(request)
                .success(function(data) {
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
            .success(function(data) {
                success(data);
            })
            .error(error);
    }

    function getCurrentUser(){
        var userObject = sessionStorage['currentUser'];
        if (userObject) {
            return JSON.parse(sessionStorage['currentUser']);
        }
    }

    function logout(){
            delete sessionStorage['currentUser'];
    }

    return {
        login: login,
        getCurrentUser: getCurrentUser,
        logout: logout,
        register: register
    };
}]);