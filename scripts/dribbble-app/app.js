angular.module('dribbbleApp', ['ngRoute', 'ngSanitize'])
    .config(function($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'scripts/dribbble-app/views/list.html',
            controller: 'DribbbleListCtrl',
            controllerAs: 'dribbbleListCtrl'
        }).when('/detail/:dribbbleId', {
            templateUrl: 'scripts/dribbble-app/views/detail.html',
            controller: 'DribbbleDetailCtrl',
            controllerAs: 'dribbbleDetailCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/list'
        });
    });
