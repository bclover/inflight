'use strict';

inflightApp.controller('LoginCtrl', ['$scope', '$state', 'LoginService',
	function($scope, $state, LoginService){
		console.log('LoginCtrl instantiated!');

		$scope.uiRouterState = $state;

		$scope.loginFailed = false;
		
		$scope.login = function(e, form){
			$scope.loginFailed = LoginService.login(form);
			if(!$scope.loginFailed){
				$state.go('home');
			}
		};

	}]);