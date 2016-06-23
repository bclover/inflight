var inflightApp = angular.module('inflightApp', ['ui.router']);

inflightApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/login');

	$stateProvider

		.state('about', {
			url: '/about',
			templateUrl: 'about/about.html',
			controller: 'AboutCtrl'
		})

		.state('contact', {
			url: '/contact',
			templateUrl: 'contact/contact.html',
			controller: 'ContactCtrl'
		})

		.state('home', {
			url: '/home',
			templateUrl: 'home/home.html',
			controller: 'HomeCtrl'
		})

		.state('login', {
			url: '/login',
			templateUrl: 'login/login.html',
			controller: 'LoginCtrl'
		})

});

inflightApp.run(function ($state, $rootScope) {
	$rootScope.$state = $state;
});