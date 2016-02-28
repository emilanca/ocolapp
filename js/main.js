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

			// route for the webmail page
            			.when('/webmail', {
            				templateUrl : 'pages/webmail.html',
            				controller  : 'webmailController'
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
		$scope.message = 'Despre noi';
		$scope.anunturi_content = 'shalala';
	});

	ocolApp.controller('licitatiiController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	ocolApp.controller('webmailController', function($scope) {
    		$scope.message = 'Webmail. Comming soon.';
    	});

	ocolApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us';
	});
