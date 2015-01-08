'use strict';

adsApp.directive('message', function () {
    return {
        templateUrl: 'templates/directives/message.html',
        replace: true,
        restrict: 'E'
     }
});