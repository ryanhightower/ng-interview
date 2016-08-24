(function() {
	'use strict';

	angular
		.module('ngInterview.students')
		.controller('StudentsController', StudentsController);

	StudentsController.$inject = ['StudentsService'];
	function StudentsController(StudentsService) {

		/**
		 * Model
		 */

		var vm = this;

				vm.active = {};
				vm.students = [];
				vm.errors = [];
				vm.show = {
					isLoading:false,
					isLoaded:false,
					notLoaded:false,
					active:false,
				};
				vm.viewStudent = viewStudentDetails;
				vm.getStudents = getStudents;
				vm.isLoading = false;
		/**
		 * Initialization
		 */

		activate();

		/**
		 * Implementations
		 */

		function activate() {
			// Initialization code goes here
			vm.show.isLoading = true;
			vm.getStudents()
			.then(function(res){
				console.log('success');
				vm.show.isLoading = false;
				vm.show.isLoaded = true;
			}, function(err){
				vm.show.isLoading = false;
				vm.show.notLoaded = true;
			});
		}

		function getStudents(){
			return StudentsService.all()
				.then(function(students){
					// If no students
					console.log("students:", students);
					swal("Congrats!","You downloaded "+students.length+" Students!", "success" );
					if(!students) return vm.errors.push("Could not retrieve students from network.");
					if(students.error)
						swal(students.error,"errors");

						// return vm.errors.push("Could not retrieve students from network. "+students.error);
					vm.students = students;
				});
		}

		function viewStudentDetails(student){
			vm.show.active = true;
			vm.active = student;
			console.log(vm.active);
		}
	}
})();
