'use strict';

/**
 * @ngdoc overview
 * @name intuitUiiApp
 * @description
 * # intuitUiiApp
 *
 * Main module of the application.
 */
angular
  .module('intuitUiiApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
