'use strict';

adsApp.controller('MainController', function ($scope, $location, $rootScope, pageOptions,
                                              filterData, messageData, userData) {

    if(userData.isLogin()){
        pageOptions.setNavigationTemplate('templates/includes/user-menu.html');
        pageOptions.setAdsPath('#/ads');
        $scope.user = userData.getCurrentUser();
    } else {
        pageOptions.setNavigationTemplate('templates/includes/guest-menu.html');
        pageOptions.setAdsPath('#/user/ads');
        $scope.user = null;
    }

    $rootScope.$on('$locationChangeSuccess', function () {
        var path =  $location.path();
        if(!userData.isLogin() && path.indexOf('user') > -1){
            $location.path('#/ads');
        }

        if(userData.isLogin() && (path.indexOf('login') > -1 || path.indexOf('register') > -1)){
            $location.path( pageOptions.getAdsPath());
        }

    });


    $scope.resetFilterData = function (){
        filterData.setCurrentPage(1);
        filterData.setCategoryId(0);
        filterData.setTownId(0);
    };

    $scope.logout = function() {
        userData.logout();
        $scope.user = null;
        pageOptions.setNavigationTemplate('templates/includes/guest-menu.html');
    };

    $scope.cancel = function () {
        $rootScope.$broadcast('cancel');
        $location.path(pageOptions.getAdsPath());
    };


    $scope.checkForNull = function (string) {
        if(string){
            return string;
        }

        return 'None';
    };


    $scope.$on("changePageOptions", function(event) {
        $scope.pageTitle =  pageOptions.getPageTitle();
        $scope.navigationTemplate = pageOptions.getNavigationTemplate();
    });

    $scope.$on("sentMessage", function(event) {
        $scope.message =  messageData.getMessage();
        $scope.classMessage = messageData.getClassMessage()
    });

    $scope.$on("login", function(event) {
        $scope.user =  userData.getCurrentUser();
        $location.path('#/ads');
    });
});