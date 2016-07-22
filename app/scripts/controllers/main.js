'use strict';

/**
 * @ngdoc function
 * @name intuitUiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the intuitUiiApp
 */
angular.module('intuitUiiApp')
  .controller('MainCtrl', MainController);

MainController.$inject= ['movieSearchService'];
  function MainController(movieSearchService) {
    var mainVm = this;
    mainVm.searchMovie = function (expr) {

    	movieSearchService.getMovie(expr).then(function (result) {
	      mainVm.Movies = result;
	      console.log('mainVm.Movies', mainVm.Movies);
	    }, function (error) {
	      console.log(error);
	    });
    	console.log(expr);
    }
  }
