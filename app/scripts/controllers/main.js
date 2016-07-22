'use strict';

/**
 * @ngdoc function
 * @name intuitUiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the intuitUiiApp
 */
angular.module('intuitUiiApp')
  .controller('MainCtrl', function () {
    var mainVm = this;
    mainVm.searchMovie = function (expr) {
    	console.log(expr);
    }
  });
