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
	      mainVm.response = mainVm.Movies.Response.toLowerCase();

	      if (mainVm.response == "true") {
			mainVm.actors = mainVm.Movies.Actors;
		      mainVm.title = mainVm.Movies.Title;
		      mainVm.year = mainVm.Movies.Year;
		      mainVm.genre = mainVm.Movies.Genre.replace(/,/g,"/");
		      mainVm.runtime = mainVm.Movies.Runtime;
		      mainVm.imdbRating = mainVm.Movies.imdbRating;
		      mainVm.plot = mainVm.Movies.Plot;
		      mainVm.poster = (mainVm.Movies.Poster == "N/A")? "http://ia.media-imdb.com/images/M/MV5BZGQ0ZTI0MzgtYWQ5MC00Zjc0LTgwM2YtNWNhZjc1ZGM0ZmJkXkEyXkFqcGdeQXVyNjUwMTQ4NjE@._V1_SX300.jpg" : mainVm.Movies.Poster;
		      mainVm.awards = mainVm.Movies.Awards;
		      mainVm.rated = mainVm.Movies.Rated;
		      $('.detail-section').show();
		      $('.error-msg').hide();
	      }else{
	      	$('.error-msg').show();
	      	$('.error-msg').text('Please enter a valid movie name');
	      	$('.detail-section').hide();
	      }
	      

	      // mainVm.actors = "Tobey Maguire, Willem Dafoe, Kirsten Dunst, James Franco";
	      // mainVm.title = "Spider-Man";
	      // mainVm.year = "2002";
	      // mainVm.genre = "Action, Adventure, Fantasy".replace(/,/g,"/");
	      // mainVm.runtime = "121 min";
	      // mainVm.imdbRating = "7.3";
	      // mainVm.plot = "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.";
	      // mainVm.poster = "http://ia.media-imdb.com/images/M/MV5BMzk3MTE5MDU5NV5BMl5BanBnXkFtZTYwMjY3NTY3._V1_SX300.jpg";
	      // mainVm.awards = "Nominated for 2 Oscars. Another 14 wins & 56 nominations.";
	      // mainVm.rated = "PG-13";
			
	    }, function (error) {
	      console.log(error);
	    });
    	console.log(expr);
    }
  }
