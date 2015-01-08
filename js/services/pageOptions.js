'use strict';

adsApp.factory('pageOptions', function ($rootScope) {
    var options = {
        pageTitle: 'Ads - Home',
        navigationTemplate: 'templates/includes/guest-menu.html',
        currentPage: 1,
        numPages: 1,
        categoryId: 0,
        townId: 0
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

    return {
        setPageTitle: setPageTitle,
        getPageTitle: getPageTitle,
        setNavigationTemplate: setNavigationTemplate,
        getNavigationTemplate: getNavigationTemplate
    }
});