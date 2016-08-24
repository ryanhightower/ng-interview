(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('StudentsService', StudentsService);

	StudentsService.$inject = ['$http'];
	function StudentsService($http) {

		/**
		 * Exposed functions
		 */

		this.all = getAllStudents;
		this.get = getStudent;
		/**
		 * Implementations
		 */

		function getAllStudents() {
			return $http.get('http://il-resume-api.azurewebsites.net/api/students')
				.then(
					function(success){
						try {
							return guardAgainstInvalidJson(success.data);
						} catch (e) {
							return undefined;
							// return {error:"Received an invalid response."}
							// return new Promise(function(resolve, reject) {
							// 	reject("Received an invalid response.");
							// });
						}

					},
					function(error){

						switch (error.status) {
							case 503:
								return getAllStudents();
								break;
							case 400:
								return {error: "Bad Request."};
								break;
							case 401:
								return {error: "Unauthorized."};
								break;
							case 404:
								return {error: "Resource not found."};
								break;
							default:
								return {error: "Your programmer dun goofed."};
						}

					})
					.catch( // rejected
						function(e){
							console.log('Promise rejected:', e);
							return undefined;
						})

		}

		function getStudent(id){}

		function guardAgainstInvalidJson(data){
			if(typeof data === 'string')
				return JSON.parse(data); // throws error on invalid JSON.
			return data;
		}
	}
})();
