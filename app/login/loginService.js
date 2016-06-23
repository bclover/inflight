'use strict';

inflightApp.service('LoginService', function($http){

	console.log('LoginService instantiated!');

	this.login = function(data){
		console.log('data.username.$modelValue', data.username.$modelValue);
		console.log('data.password.$modelValue', data.password.$modelValue);
		return !(data.username.$modelValue === 'test1234' || data.password.$modelValue === 'test1234');
	};
	
});