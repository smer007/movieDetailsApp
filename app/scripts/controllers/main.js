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
		      mainVm.response = mainVm.Movies.Response.toLowerCase();

		      if (mainVm.response == "true") {
				mainVm.actors = mainVm.Movies.Actors;
			      mainVm.title = mainVm.Movies.Title;
			      mainVm.year = mainVm.Movies.Year;
			      mainVm.genre = mainVm.Movies.Genre.replace(/,/g,"/");
			      mainVm.runtime = mainVm.Movies.Runtime;
			      mainVm.imdbRating = mainVm.Movies.imdbRating;
			      mainVm.plot = mainVm.Movies.Plot;
			      mainVm.poster = (mainVm.Movies.Poster == "N/A")? "https://ia.media-imdb.com/images/M/MV5BZGQ0ZTI0MzgtYWQ5MC00Zjc0LTgwM2YtNWNhZjc1ZGM0ZmJkXkEyXkFqcGdeQXVyNjUwMTQ4NjE@._V1_SX300.jpg" : mainVm.Movies.Poster;
			      mainVm.awards = mainVm.Movies.Awards;
			      mainVm.rated = mainVm.Movies.Rated;
			      mainVm.director = mainVm.Movies.Director;;
			      $('.detail-section').show();
			      $('.error-msg').hide();
		      }else{
		      	console.log(expr);
		      	if(expr !== ""){
		      		$('.error-msg').show();
		      		$('.error-msg').text('Please enter a valid movie name');	
		      	} else{
		      		$('.error-msg').text('This field is required');
		      	}
		      	
		      	$('.detail-section').hide();
		      }
		      
		    }, function (error) {
		      
		    });
	    	
	    }
	  }
