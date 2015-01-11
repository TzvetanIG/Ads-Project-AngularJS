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

    function sentErrorMessage(msg, serverError) {
        var errors = [];
        if (serverError && serverError.error_description) {
            errors.push(serverError.error_description);
        }

        if (serverError && serverError.modelState) {
            var modelStateErrors = serverError.modelState;
            for (var propertyName in modelStateErrors) {
                var errorMessages = modelStateErrors[propertyName];
                var trimmedName = propertyName.substr(propertyName.indexOf('.') + 1);
                for (var i = 0; i < errorMessages.length; i++) {
                    var currentError = errorMessages[i];
                    errors.push(trimmedName + ' - ' + currentError);
                }
            }
        }

        if (serverError && serverError.data.modelState) {
            var modelStateErrors = serverError.data.modelState;
            for (var propertyName in modelStateErrors) {
                var errorMessages = modelStateErrors[propertyName];
                var trimmedName = propertyName.substr(propertyName.indexOf('.') + 1);
                for (var i = 0; i < errorMessages.length; i++) {
                    var currentError = errorMessages[i];
                    errors.push(trimmedName + ' - ' + currentError);
                }
            }
        }

        if (errors.length > 0) {
            msg = msg + ":<br>" + errors.join("<br>");
        }

        message = msg;
        classMessage['info-message'] = false;
        classMessage['error-message'] = true;
        $rootScope.$broadcast("sentMessage");
        $timeout(function () {
            message = undefined;
            $rootScope.$broadcast("sentMessage");
        }, 10000);
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