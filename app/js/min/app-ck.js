"use strict";angular.module("myApp",["ngRoute","myApp.filters","myApp.services","myApp.directives","myApp.controllers"]).config(["$routeProvider",function(t){t.when("/view1",{templateUrl:"partials/partial1.html",controller:"MyCtrl1"}),t.when("/view2",{templateUrl:"partials/partial2.html",controller:"MyCtrl2"}),t.when("/buttons",{templateUrl:"partials/buttons.html",controller:"buttons"}),t.when("/nav",{templateUrl:"partials/nav.html",controller:"nav"}),t.otherwise({redirectTo:"/view1"})}]);