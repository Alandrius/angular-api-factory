(function () {
	'use strict';

	angular
		.module('angularApiFactory')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($scope, apiFactory, errorsHandler) {

		$scope.output = [];

		$scope.getActivities = function () {
			
			var callParamsActivities = {
				part: "snippet",
				home: true
			};
			
			$scope.output = [];

			apiFactory.makeAPICall('ACTIVITIES', callParamsActivities).then(function (response) {
				$scope.output = response.data.items;
			}, function (response) {
				errorsHandler.showError(response);
			});
			
		};
		
		$scope.getChanels = function () {
			
			var callParamsChanels = {
				part: "snippet",
				forUsername: "pewdiepie"
			};
			
			$scope.output = [];

			apiFactory.makeAPICall('CHANNELS', callParamsChanels).then(function (response) {
				$scope.output = response.data.items;
			}, function (response) {
				errorsHandler.showError(response);
			});
			
		};
		
		$scope.postComment = function () {
			
			var params = {
				part: "snippet",
				home: true
			};
			
			$scope.output = [];

			apiFactory.makeAPICall('COMMENTS', params, $scope.comment ).then(function (response) {
				
			}, function (response) {
				errorsHandler.showError(response);
			});
			
		};
		
		$scope.updateCaption = function () {
			
			var params = {
				part: "snippet",
				home: true
			};
			
			$scope.output = [];

			apiFactory.makeAPICall('CAPTIONS', params, $scope.caption).then(function (response) {
				
			}, function (response) {
				errorsHandler.showError(response);
			});
			
		};
		
		$scope.deletePlaylist = function () {
			
			var params = {
				part: "snippet",
				home: true
			};
			
			$scope.output = [];

			apiFactory.makeAPICall('PLAYLISTS', params).then(function (response) {
				
			}, function (response) {
				errorsHandler.showError(response);
			});
			
		};


	}
})();