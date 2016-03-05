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
		populate_anunturi()

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
    for(var i = 0; i < 2; i++) {
    var adDPanel = document.createElement('div');
    adDPanel.className = 'panel panel-success';

    var add_panel_header = document.createElement('div');
    add_panel_header.className = 'panel-heading';
    add_panel_header.innerHTML='<h3>Anunt</h3>';

    var add_panel_body = document.createElement('div');
    add_panel_body.className = 'panel-body';
    add_panel_body.innerHTML='<p2>Lorem ipsum dolor sit amet, eu sed malis eligendi maluisset. At tale incorrupte mei. Essent suavitate te qui, ad dolores eligendi scribentur vel. Vidit erroribus voluptatum sea no, splendide vituperatoribus no usu. Mel ad modo tincidunt, omnes constituto vituperatoribus id his. Eu vide blandit mea, pri probo adolescens eu. Ne perfecto constituam mea, ei eum possit graecis laboramus. Tation phaedrum adipiscing et ius. Errem repudiare elaboraret nam ei. Ut vidit quaerendum nam, prompta oporteat mel ei. Per dolore eruditi dolorem ut, id his omnes laudem nostrum. Atomorum consulatu mnesarchum ei duo. An sed dicunt imperdiet, ea usu facilis appareat partiendo. Eam sapientem dissentias eu, at vim dicunt meliore nominati. Quodsi aliquip ornatus usu cu. Vix no lorem habemus. Diam sint dicant ut nec, ea amet illud nam, eu facete detracto prodesset est. Te error facete denique has, usu eros placerat eleifend ei. Ius graeco legimus corrumpit cu, tation tritani nam no, eirmod fabellas intellegat cum id. Dolor ponderum vis ex, sea timeam quaeque ut, nam ei facilisi explicari philosophia. Et nam minim phaedrum, suscipit percipitur concludaturque sed no, justo impedit dissentiet mel ne. Eam euripidis argumentum concludaturque cu, cu per decore mentitum invidunt. Dicant noluisse ea pro, ad vim ullum accusam praesent. Cu debitis disputando nec, facer ceteros percipit eam at. Vel te labitur sanctus maluisset, dicit postea tincidunt cu usu.</p2>';

    var add_panel_footer = document.createElement('div');
    add_panel_footer.className = 'panel-footer';
    var currentTime = new Date();
    var utc = new Date().toJSON().slice(0,10);
    add_panel_footer.innerHTML = utc;


    adDPanel.appendChild(add_panel_header);
    adDPanel.appendChild(add_panel_body);
    adDPanel.appendChild(add_panel_footer);
    var anunturi_col = document.getElementById('anunturi-col');
    if (anunturi_col != null) {
        anunturi_col.appendChild(adDPanel);
    }


    }
}
