'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/buttons', {templateUrl: 'partials/buttons.html', controller: 'buttons'});
  $routeProvider.when('/nav', {templateUrl: 'partials/nav.html', controller: 'nav'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
