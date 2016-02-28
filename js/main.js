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
		//populate_anunturi()

	});

	ocolApp.controller('licitatiiController', function($scope) {
		$scope.message = 'In curand.';
	});

	ocolApp.controller('webmailController', function($scope) {
    		$scope.message = 'Webmail. In curand.';
    	});

	ocolApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us';
	});

// DEMO FUNCTION DE TESTARE LA CONSTRUCTIE DINAMICA DE VIEW
function populate_anunturi() {
    for(var i = 0; i < 5; i++) {
    var adDPanel = document.createElement('div');
    adDPanel.className = 'panel panel-success';

    var add_panel_header = document.createElement('div');
    add_panel_header.className = 'panel-heading';

    var add_panel_body = document.createElement('div');
    add_panel_body.className = 'panel-body';


    adDPanel.appendChild(add_panel_header);
    adDPanel.appendChild(add_panel_body);
//    iDiv.id = 'block';

    var anunturi_col = document.getElementById('anunturi-col');
    if (anunturi_col != null) {
        anunturi_col.appendChild(adDPanel);
    }

    }
}
