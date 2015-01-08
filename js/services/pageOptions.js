'use strict';

adsApp.factory('pageOptions', function () {
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
    }

    function getPageTitle() {
        return options.pageTitle;
    }

    function setNavigationTemplate(template) {
        options.navigationTemplate = template;
    }

    function getNavigationTemplate() {
        return options.navigationTemplate;
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

    function setCategoryId(id){
        options.categoryId = id;
    }

    function getCategoryId(){
        return options.categoryId;
    }

    function setTownId(id){
        options.townId = id;
    }

    function getTownId(){
        return options.townId;
    }
    return {
        setPageTitle: setPageTitle,
        getPageTitle: getPageTitle,
        setNavigationTemplate: setNavigationTemplate,
        getNavigationTemplate: getNavigationTemplate,
        getCurrentPage: getCurrentPage,
        setCurrentPage: setCurrentPage,
        setNumPages: setNumPages,
        getNumPages: getNumPages,
        setCategoryId: setCategoryId,
        getCategoryId: getCategoryId,
        setTownId: setTownId,
        getTownId: getTownId
    }
});