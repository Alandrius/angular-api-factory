(function () {
	'use strict';

	angular
		.module('angularApiFactory')
		.factory('apiFactory', apiFactory);

	/** @ngInject */
	function apiFactory($rootScope, $http, CONFIG) {

		var service = {
			makeAPICall: makeAPICall
		};

		return service;

		function makeAPICall(type, callParams, data) {
			
			callParams.access_token = CONFIG.TOKEN;

			var point = CONFIG.REST_POINTS[type],
				url = constructURL(type),
				serializedParams = serializeParams(callParams, point.serializationType);

			return $http({
					method: point.method,
					url: url + serializedParams,
					data: data
				})
				.success(function (data, status, headers, config) {
					return data;
				})
				.error(function (data, status, headers, config) {
					return data;
				});

		}

		function constructURL(type) {
			return CONFIG.HOST_URL + CONFIG.REST_POINTS[type].uri;
		}

		function serializeParams(callParams, serializationType) {

			var i,
				delimeterChar = serializationType === 1 ? '=' : '/',
				paramsArray = [];


			for (i in callParams) {
				if (callParams.hasOwnProperty(i)) {
					paramsArray.push(i + delimeterChar + callParams[i]);
				}
			}

			if (serializationType === 1) {
				return '?' + paramsArray.join('&');
			} else if (serializationType === 2) {
				return '/' + paramsArray.join('/');
			}
		}


	}
})();