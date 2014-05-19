'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngScrollTo'])
.controller('navControl', ['$scope', '$location', function ($scope, $location) {
    $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
  }])
.controller('buttons', [function() {

  }])
.controller('nav', [function() {

  }])
  .controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);
