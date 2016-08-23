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

							return {error:"Received an invalid response."}
							// return new Promise(function(resolve, reject) {
							// 	reject("Received an invalid response.");
							// });
						}

					},
					function(error){
						if(error.status === 503)
							return getAllStudents();

						// some other error.
						return {error:error};
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
