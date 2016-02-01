(function () {
	'use strict';

	angular
		.module('angularApiFactory')
		.constant('CONFIG', CONFIG());

	function CONFIG() {
		return {
			HOST_URL: "https://www.googleapis.com/youtube/v3/",
			TOKEN: "ya29.egIBAP6z8JrpAOfVtmVzATACIBtTaNYw83P0XU9NBLph6-ctDIUmS7y64KJbF0duYnr1",
			REST_POINTS: {
				CHANNELS: {
					uri: "channels",
					method: "GET",
					serializationType: 1
				},
				ACTIVITIES: {
					uri: "activities",
					method: "GET",
					serializationType: 1
				},
				COMMENTS: {
					uri: "comments",
					method: "POST",
					serializationType: 1
				},
				CAPTIONS: {
					uri: "captions",
					method: "PUT",
					serializationType: 1
				},
				PLAYLISTS: {
					uri: "playlists",
					method: "DELETE",
					serializationType: 1
				},
			}
		};
	}

})();