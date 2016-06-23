'use strict';

inflightApp.controller('ContactCtrl', ['$scope', function($scope){
	console.log('ContactCtrl instantiated!');
	$scope.submitted = false;

	$scope.submitForm = function(e){
		$scope.submitted = true;
	};
}]);