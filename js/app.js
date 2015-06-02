'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngSanitize', 'ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when('/newEvent',
			{
				templateUrl:'templates/NewEvent.html',
				controller: 'EditEventController'
			}
		);
		$routeProvider.when('/events',
			{
				templateUrl:'templates/EventList.html',
				controller: 'EventListController'
			}
		);
		$routeProvider.when('/eventDetails/1',
			{
				templateUrl:'templates/EventDetails.html',
				controller: 'EventController'
			}
		);
		$routeProvider.when('/eventDetails/2',
			{
				template:'No Content to Display',
				controller: 'EventController'
			}
		);
		$routeProvider.when('/eventDetails/3',
			{
				template:'No Content to Display',
				controller: 'EventController'
			}
		);
		$routeProvider.when('/eventDetails/4',
			{
				template:'No Content to Display',
				controller: 'EventController'
			}
		);
		$routeProvider.when('/sampleDirective',
			{
				templateUrl:'templates/directives/SampleDirective.html',
				controller: 'SampleDirectiveController'
			}
		);
		$routeProvider.otherwise({redirectTo: '/events'});
	});