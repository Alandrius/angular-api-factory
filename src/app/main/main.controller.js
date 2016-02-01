(function () {
	'use strict';

	angular
		.module('angularApiFactory')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($scope, apiFactory) {
		
		$scope.output = [];
		
		var callParamsChannels = {
				part: "snippet",
				forUsername: "pewdiepie"
			},
			callParamsActivities = {
				part: "snippet",
				home: true
			};
		apiFactory.makeAPICall('ACTIVITIES', callParamsActivities).then(function (response) {
			console.log("aa", response);
		}, function (response) {
			console.log("bb", response);
		});
		//apiFactory.makeAPICall('CHANNELS', callParamsChannels);
	}
})();