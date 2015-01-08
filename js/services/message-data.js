'use strict';

adsApp.factory('messageData', function ($rootScope, $timeout) {
    var message,
        classMessage = {
            'info-message': true,
            'error-message': false
        };

    function sentInfoMessage(msg) {
        message = msg;
        classMessage['info-message'] = true;
        classMessage['error-message'] = false;
        $rootScope.$broadcast("sentMessage");
        $timeout(function () {
            message = undefined;
            $rootScope.$broadcast("sentMessage");
        }, 3000);
    }

    function sentErrorMessage(msg) {
        message = msg;
        classMessage['info-message'] = false;
        classMessage['error-message'] = true;
        $rootScope.$broadcast("sentMessage");
        $timeout(function () {
            message = undefined;
            $rootScope.$broadcast("sentMessage");
        }, 3000);
    }

    function getMessage(){
        return message;
    }

    function getClassMessage(){
        return classMessage;
    }

    return {
        sentInfoMessage: sentInfoMessage,
        sentErrorMessage: sentErrorMessage,
        getMessage: getMessage,
        getClassMessage: getClassMessage
    };
});