(function() {
	'use strict';

	angular.module('intuitUiiApp').service('movieSearchService', movieSearchService);

	movieSearchService.$inject = ['$http', '$q'];

	function movieSearchService($http, $q) {
		var self = this;

		self.getMovie = function (expr) {
			// defer object is created when you want to tell the caller of the function that whenever the response comes from 
			// this call, I promise I will return back to you.
			var defer = $q.defer();

			$http
				.get('https://www.omdbapi.com/?t='+expr)
				.then(function (response) {
					defer.resolve(response.data);//proimse made is successfull
				}, function (error) {
					defer.reject(error.status);//proimse made is unsuccessfull
				});

				return defer.promise;
		};
	}
})();