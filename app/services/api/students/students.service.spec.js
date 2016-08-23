'use strict';

describe('ngInterview.api.students', function() {

	beforeEach(module('ngInterview.api.students'));

	describe('StudentsService', function() {

		it('should be instantiated', inject(function(StudentsService) {
			expect(StudentsService).toBeDefined();
		}));

		it('should fetch all students', inject(function(StudentsService, $httpBackend, $http){
			var json = [ { "FirstName": "James", "LastName": "Wilson", "FavoriteFood": "Chicken nuggets", "FavoriteColor": "White", "FavoriteMovie": "The Rescuers", "Id": 18289 }, { "FirstName": "Isabella", "LastName": "Martin", "FavoriteFood": "Pizza", "FavoriteColor": "Blue", "FavoriteMovie": "Oliver and Company", "Id": 2864 }, { "FirstName": "Liam", "LastName": "Davis", "FavoriteFood": "Spaghetti", "FavoriteColor": "Black", "FavoriteMovie": "The Incredibles", "Id": 16386 }, { "FirstName": "Jacob", "LastName": "Jones", "FavoriteFood": "Avocado", "FavoriteColor": "Pink", "FavoriteMovie": "Oliver and Company", "Id": 33980 }, { "FirstName": "Mia", "LastName": "Johnson", "FavoriteFood": "Pizza", "FavoriteColor": "Red", "FavoriteMovie": "Star Wars Episode 1", "Id": 36396 }, { "FirstName": "Noah", "LastName": "Jones", "FavoriteFood": "Spaghetti", "FavoriteColor": "White", "FavoriteMovie": "Aladdin", "Id": 2646 }, { "FirstName": "William", "LastName": "Anderson", "FavoriteFood": "Chicken nuggets", "FavoriteColor": "Black", "FavoriteMovie": "Star Wars Episode 1", "Id": 27868 }, { "FirstName": "Olivia", "LastName": "Thompson", "FavoriteFood": "Macaroni and cheese", "FavoriteColor": "Teal", "FavoriteMovie": "Aladdin", "Id": 20286 }, { "FirstName": "Ava", "LastName": "Garcia", "FavoriteFood": "Avocado", "FavoriteColor": "Green", "FavoriteMovie": "The Incredibles", "Id": 16440 }, { "FirstName": "Benjamin", "LastName": "Thomas", "FavoriteFood": "Apples", "FavoriteColor": "Brown", "FavoriteMovie": "The Rescuers", "Id": 20127 }, { "FirstName": "Mason", "LastName": "Taylor", "FavoriteFood": "Pie", "FavoriteColor": "White", "FavoriteMovie": "Star Wars Episode 1", "Id": 9551 }, { "FirstName": "Liam", "LastName": "Hernandez", "FavoriteFood": "Spaghetti", "FavoriteColor": "Brown", "FavoriteMovie": "Aladdin", "Id": 19687 }, { "FirstName": "Emma", "LastName": "White", "FavoriteFood": "Spaghetti", "FavoriteColor": "Teal", "FavoriteMovie": "The Incredibles", "Id": 18043 }, { "FirstName": "Emily", "LastName": "Smith", "FavoriteFood": "Cake", "FavoriteColor": "Aquamarine", "FavoriteMovie": "Oliver and Company", "Id": 31906 }, { "FirstName": "Jacob", "LastName": "Moore", "FavoriteFood": "Apples", "FavoriteColor": "Pink", "FavoriteMovie": "Big Hero 6", "Id": 23969 }, { "FirstName": "Harper", "LastName": "Jones", "FavoriteFood": "Spaghetti", "FavoriteColor": "White", "FavoriteMovie": "Oliver and Company", "Id": 20939 }, { "FirstName": "Noah", "LastName": "Jones", "FavoriteFood": "Cake", "FavoriteColor": "Teal", "FavoriteMovie": "Hercules", "Id": 22367 }, { "FirstName": "Benjamin", "LastName": "Hernandez", "FavoriteFood": "Apples", "FavoriteColor": "Brown", "FavoriteMovie": "Hercules", "Id": 5041 }, { "FirstName": "Alexander", "LastName": "Moore", "FavoriteFood": "Pie", "FavoriteColor": "Pink", "FavoriteMovie": "The Incredibles", "Id": 21204 }, { "FirstName": "Isabella", "LastName": "Miller", "FavoriteFood": "Sandwich", "FavoriteColor": "Aquamarine", "FavoriteMovie": "Zootopia", "Id": 16936 }, { "FirstName": "Liam", "LastName": "Wilson", "FavoriteFood": "Chicken nuggets", "FavoriteColor": "Black", "FavoriteMovie": "Zootopia", "Id": 481 }, { "FirstName": "Benjamin", "LastName": "Brown", "FavoriteFood": "S'mores", "FavoriteColor": "Black", "FavoriteMovie": "Hercules", "Id": 30794 }, { "FirstName": "Ava", "LastName": "Williams", "FavoriteFood": "Pizza", "FavoriteColor": "Blue", "FavoriteMovie": "Oliver and Company", "Id": 26196 }, { "FirstName": "Ava", "LastName": "Anderson", "FavoriteFood": "Spaghetti", "FavoriteColor": "Red", "FavoriteMovie": "Aladdin", "Id": 4222 }, { "FirstName": "Charlotte", "LastName": "Davis", "FavoriteFood": "Apples", "FavoriteColor": "Black", "FavoriteMovie": "Hercules", "Id": 4359 }, { "FirstName": "Ethan", "LastName": "Brown", "FavoriteFood": "Pizza", "FavoriteColor": "White", "FavoriteMovie": "Hercules", "Id": 9798 }, { "FirstName": "Ava", "LastName": "White", "FavoriteFood": "Cake", "FavoriteColor": "Blue", "FavoriteMovie": "Oliver and Company", "Id": 22474 }, { "FirstName": "Emma", "LastName": "Moore", "FavoriteFood": "Apples", "FavoriteColor": "Brown", "FavoriteMovie": "Zootopia", "Id": 39724 }, { "FirstName": "William", "LastName": "Martinez", "FavoriteFood": "Macaroni and cheese", "FavoriteColor": "Pink", "FavoriteMovie": "Star Wars Episode 1", "Id": 12388 }, { "FirstName": "Michael", "LastName": "Johnson", "FavoriteFood": "Sandwich", "FavoriteColor": "Teal", "FavoriteMovie": "The Rescuers", "Id": 25678 }, { "FirstName": "Emily", "LastName": "Thompson", "FavoriteFood": "Fried chicken", "FavoriteColor": "Black", "FavoriteMovie": "Aladdin", "Id": 18563 }, { "FirstName": "Michael", "LastName": "Davis", "FavoriteFood": "Fried chicken", "FavoriteColor": "Red", "FavoriteMovie": "The Rescuers", "Id": 15820 }, { "FirstName": "Emily", "LastName": "Anderson", "FavoriteFood": "Apples", "FavoriteColor": "Black", "FavoriteMovie": "Oliver and Company", "Id": 18239 }, { "FirstName": "Harper", "LastName": "Smith", "FavoriteFood": "Avocado", "FavoriteColor": "Blue", "FavoriteMovie": "Aladdin", "Id": 5637 }, { "FirstName": "William", "LastName": "Thomas", "FavoriteFood": "Macaroni and cheese", "FavoriteColor": "Red", "FavoriteMovie": "Zootopia", "Id": 23418 }, { "FirstName": "Noah", "LastName": "Thompson", "FavoriteFood": "Avocado", "FavoriteColor": "Blue", "FavoriteMovie": "Star Wars Episode 1", "Id": 20883 }, { "FirstName": "Noah", "LastName": "Williams", "FavoriteFood": "Fried chicken", "FavoriteColor": "Pink", "FavoriteMovie": "Oliver and Company", "Id": 24702 }, { "FirstName": "Emma", "LastName": "Brown", "FavoriteFood": "Macaroni and cheese", "FavoriteColor": "Black", "FavoriteMovie": "Hercules", "Id": 25574 }, { "FirstName": "William", "LastName": "Thompson", "FavoriteFood": "S'mores", "FavoriteColor": "Teal", "FavoriteMovie": "Big Hero 6", "Id": 20529 }, { "FirstName": "Ethan", "LastName": "Moore", "FavoriteFood": "Pie", "FavoriteColor": "White", "FavoriteMovie": "Aladdin", "Id": 23537 }, { "FirstName": "Benjamin", "LastName": "Garcia", "FavoriteFood": "Avocado", "FavoriteColor": "Aquamarine", "FavoriteMovie": "The Incredibles", "Id": 23074 }, { "FirstName": "Charlotte", "LastName": "Moore", "FavoriteFood": "Pizza", "FavoriteColor": "Pink", "FavoriteMovie": "Oliver and Company", "Id": 13574 }, { "FirstName": "Charlotte", "LastName": "Davis", "FavoriteFood": "S'mores", "FavoriteColor": "Teal", "FavoriteMovie": "The Rescuers", "Id": 4742 } ];
			$httpBackend.expectGET('http://il-resume-api.azurewebsites.net/api/students').respond(json);
			StudentsService.all()
				.then(function(students){
					expect(students).toBeDefined;
				})
				.catch(function(e){
					expect(e).not.toBeDefined;
				});
			$httpBackend.flush();
		}));

		it('should retry on 503 error', inject(function(StudentsService, $httpBackend, $http){
			var badResponse = {status:503};

			$httpBackend.expectGET('http://il-resume-api.azurewebsites.net/api/students').respond(badResponse);
			StudentsService.all()
				.then(function(students){
					console.log('503 response:',students);
					expect(students).toBeDefined;
				})
				.catch(function(e){
					expect(e).not.toBeDefined;
				});
			$httpBackend.flush();
		}));

		it('should return "undefined" on invalid JSON', inject(function(StudentsService, $httpBackend, $http){
			expect(true).toBe(true);
			$httpBackend.expectGET('http://il-resume-api.azurewebsites.net/api/students').respond('N7B3NQZ3UY32B26O36UAIUBQQ12MAM75A67BRSX');

				StudentsService.all()
				.then(function(students){
					expect(students).toBeUndefined();
				})

			$httpBackend.flush();
		}));

	});

});
