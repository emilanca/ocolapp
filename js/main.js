	// create the module and name it ocolApp
	var ocolApp = angular.module('ocolApp', ['ngRoute']);

	// configure our routes
	ocolApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/acasa.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/licitatii', {
				templateUrl : 'pages/licitatii.html',
				controller  : 'licitatiiController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	ocolApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	ocolApp.controller('licitatiiController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	ocolApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us';
	});
