'use strict';

adsApp.factory('pageOptions', function ($rootScope) {
    var options = {
        pageTitle: 'Ads - Home',
        navigationTemplate: 'templates/includes/guest-menu.html',
        adsPath: '#/ads'
    };

    function setPageTitle(title) {
        options.pageTitle = title;
        $rootScope.$broadcast("changePageOptions");
    }

    function getPageTitle() {
        return options.pageTitle;
    }

    function setNavigationTemplate(template) {
        options.navigationTemplate = template;
        $rootScope.$broadcast("changePageOptions");
    }

    function getNavigationTemplate() {
        return options.navigationTemplate;
    }

    function setAdsPath(path) {
        options.adsPath = path;
    }

    function getAdsPath() {
        return options.adsPath;
    }

    return {
        setPageTitle: setPageTitle,
        getPageTitle: getPageTitle,
        setNavigationTemplate: setNavigationTemplate,
        getNavigationTemplate: getNavigationTemplate,
        setAdsPath: setAdsPath,
        getAdsPath: getAdsPath
    }
});