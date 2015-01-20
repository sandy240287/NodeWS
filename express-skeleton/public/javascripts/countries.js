var itemApp = angular.module('itemApp', ['ngRoute','itemAppController']);

itemApp.config(['$routeProvider',
  function($routeProvider) {
     $routeProvider.
      when('/list', {
        templateUrl: '/custom/list',
        controller: 'itemListCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
