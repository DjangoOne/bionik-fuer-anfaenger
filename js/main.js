 angular.module('bionikApp', ["ngRoute"]).
 config(['$routeProvider', function($routeProvider) {
 	$routeProvider.
 	when('/home', {
 		templateUrl: '/nawi1516/partials/home.html',
 		controller: HomeCtrl
 	}).
 	when('/quickstart', {
 		templateUrl: '/nawi1516/partials/quickstart.html',
 		controller: HomeCtrl
 	}).
 	when('/anwendung', {
 		templateUrl: '/nawi1516/partials/anwendung.html',
 		controller: HomeCtrl
 	}).
 	when('/herangehensweise', {
 		templateUrl: '/nawi1516/partials/herangehensweise.html',
 		controller: HomeCtrl
 	}).
 	when('/impressum', {
 		templateUrl: '/nawi1516/partials/impressum.html',
 		controller: HomeCtrl
 	}).
 	otherwise({
 		redirectTo: '/home'
 	});
 }]);
 
