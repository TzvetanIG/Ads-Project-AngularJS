'use strict';

var adsApp = adsApp || {};

adsApp.factory('pageOptions', function () {
    var options = {
        pageTitle: 'Ads - Home',
        mainMenuTemplate: 'templates/login-menu.html',
        currentPage: 1,
        numPages: 1
    };

    function setPageTitle(title) {
        options.pageTitle = title;
    }

    function getPageTitle() {
        return options.pageTitle;
    }

    function setMainMenu(template) {
        options.mainMenuTemplate = template;
    }

    function getMainMenu() {
        return options.mainMenuTemplate;
    }

    function setCurrentPage(currentPage) {
        options.currentPage = currentPage;
    }

    function getCurrentPage() {
        return options.currentPage;
    }

    function setNumPages(numPages) {
        options.numPages = numPages;
    }

    function getNumPages() {
        return options.numPages;
    }

    return {
        setPageTitle: setPageTitle,
        getPageTitle: getPageTitle,
        setMainMenu: setMainMenu,
        getMainMenu: getMainMenu,
        getCurrentPage: getCurrentPage,
        setCurrentPage: setCurrentPage,
        setNumPages: setNumPages,
        getNumPages: getNumPages
    }
});