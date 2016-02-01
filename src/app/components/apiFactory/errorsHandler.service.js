(function () {
	'use strict';

	angular
		.module('angularApiFactory')
		.service('errorsHandler', errorsHandler);

	/** @ngInject */
	function errorsHandler($rootScope) {

		var service = {
			showError: showError
		};

		return service;

		function showError( message ){
			if(typeof message === "object"){
				alert("ERROR: " + JSON.stringify(message));
			}
			else{
				alert("ERROR: " + (message));
			}
			
		}


	}
})();