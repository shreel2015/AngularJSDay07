'use strict';

eventsApp.directive('eventsList', function() { 
	return {
		restrict: 'E',
		replace: true,
		templateUrl: "/templates/directives/eventsList.html",
	};
});